// 3D isometric contribution calendar.
import { C, dateLabel, esc, fmt, fontCss, frame, month } from './svg.mjs';

const W = 840;
const H = 400;
// Oblique projection: one step along a week, one step along a weekday.
const WEEK = [9.1, 3.2];
const DAY = [-4.6, 6.6];
const FOOT = 0.8; // bar footprint relative to the grid step
const ORIGIN = [312, 138];
const MAX_H = 74;

// top / front / side shades for GitHub's five contribution levels
const SHADES = [
  ['#1d1d21', '#141417', '#101012'],
  ['#5a2a15', '#3d1c0e', '#2e150b'],
  ['#9a3b12', '#6a280c', '#511f09'],
  ['#d94c14', '#96340d', '#73280a'],
  ['#ff6a2b', '#c4461a', '#963514'],
];

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const pt = (w, d) => [ORIGIN[0] + w * WEEK[0] + d * DAY[0], ORIGIN[1] + w * WEEK[1] + d * DAY[1]];
const p = ([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`;

function stats(days) {
  let longest = 0;
  let run = 0;
  for (const d of days) {
    run = d.count > 0 ? run + 1 : 0;
    longest = Math.max(longest, run);
  }
  // Current streak: count back from today; an empty "today" does not break it yet.
  let current = 0;
  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].count > 0) current++;
    else if (i === days.length - 1) continue;
    else break;
  }
  const best = days.reduce((a, d) => (d.count > a.count ? d : a), days[0]);
  const perWeekday = Array(7).fill(0);
  days.forEach((d) => (perWeekday[new Date(`${d.date}T00:00:00Z`).getUTCDay()] += d.count));
  const busiest = perWeekday.indexOf(Math.max(...perWeekday));
  return { longest, current, best, busiest: perWeekday[busiest] > 0 ? WEEKDAYS[busiest] : null };
}

function bar(w, d, h, level) {
  const [x, y] = pt(w, d);
  const a = [x, y];
  const b = [x + WEEK[0] * FOOT, y + WEEK[1] * FOOT];
  const c = [b[0] + DAY[0] * FOOT, b[1] + DAY[1] * FOOT];
  const e = [x + DAY[0] * FOOT, y + DAY[1] * FOOT];
  const up = ([px, py]) => [px, py - h];
  const [top, front, side] = SHADES[level];
  return (
    `<path d="M${p(e)}L${p(c)}L${p(up(c))}L${p(up(e))}Z" fill="${front}"/>` +
    `<path d="M${p(b)}L${p(c)}L${p(up(c))}L${p(up(b))}Z" fill="${side}"/>` +
    `<path d="M${p(up(a))}L${p(up(b))}L${p(up(c))}L${p(up(e))}Z" fill="${top}"/>`
  );
}

export async function renderActivity(github, { now }) {
  const weeks = github.weeks;
  const days = weeks.flat();
  const max = Math.max(1, ...days.map((d) => d.count));
  const s = stats(days);

  let bars = '';
  weeks.forEach((week, w) => {
    let col = '';
    week.forEach((day) => {
      const d = new Date(`${day.date}T00:00:00Z`).getUTCDay();
      const h = day.count === 0 ? 1.6 : 4 + (MAX_H - 4) * Math.sqrt(day.count / max);
      col += bar(w, d, h, day.count === 0 ? 0 : Math.max(1, day.level));
    });
    bars += `<g class="wk" style="animation-delay:${(0.25 + w * 0.018).toFixed(3)}s">${col}</g>`;
  });

  // month ticks along the front edge
  let ticks = '';
  let lastMonth = -1;
  weeks.forEach((week, w) => {
    const first = new Date(`${week[0].date}T00:00:00Z`);
    if (first.getUTCMonth() !== lastMonth && first.getUTCDate() <= 7 && w < weeks.length - 1) {
      lastMonth = first.getUTCMonth();
      const [x, y] = pt(w + 0.4, 7.5);
      ticks += `<text x="${x.toFixed(1)}" y="${(y + 9).toFixed(1)}" class="mono faint" style="font-size:9px">${month(lastMonth)}</text>`;
    }
  });

  // pulse on the most recent day
  const lastWeek = weeks.length - 1;
  const lastDay = weeks[lastWeek][weeks[lastWeek].length - 1];
  const ld = new Date(`${lastDay.date}T00:00:00Z`).getUTCDay();
  const lh = lastDay.count === 0 ? 1.6 : 4 + (MAX_H - 4) * Math.sqrt(lastDay.count / max);
  const [tx, ty] = pt(lastWeek + FOOT / 2, ld + FOOT / 2);
  const today = `<g transform="translate(${tx.toFixed(1)} ${(ty - lh).toFixed(1)})"><ellipse class="pulse" rx="9" ry="5" fill="none" stroke="${C.accent}" stroke-width="1.2"/><ellipse rx="2.6" ry="1.6" fill="${C.accent}"/></g>`;

  const best = s.best && s.best.count > 0 ? `${s.best.count} on ${dateLabel(new Date(`${s.best.date}T00:00:00Z`)).replace(/ \d{4}$/, '')}` : '—';
  const rows = [
    ['Current streak', s.current ? `${s.current} day${s.current === 1 ? '' : 's'}` : '—'],
    ['Longest streak', s.longest ? `${s.longest} days` : '—'],
    ['Best day', best],
    ['Busiest day', s.busiest ? `${s.busiest}s` : '—'],
  ];
  const list = rows
    .map(
      ([k, v], i) =>
        `<g transform="translate(40 ${222 + i * 40})"><rect x="0" y="-12" width="1" height="30" fill="${C.line}"/><text x="12" y="0" class="mono" style="font-size:9.5px">${esc(k)}</text><text x="12" y="19" class="text" style="font-size:14.5px">${esc(v)}</text></g>`,
    )
    .join('');

  const body = `
<text x="40" y="132" class="display" style="font-size:56px;letter-spacing:-2.5px">${fmt(github.total)}</text>
<text x="40" y="164" class="text" style="font-size:17px;letter-spacing:-.3px">contributions in the <tspan class="serif" style="font-size:19.5px">last year.</tspan></text>
${list}
<g>${bars}</g>
${ticks}
${today}`;

  const css = `
/* The resting state is fully drawn; the reveal only runs where CSS animation
   is supported, so static renderers never show an empty graph. */
.wk{animation:rise .7s cubic-bezier(.2,.7,.2,1) backwards}
@keyframes rise{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
.pulse{transform-box:fill-box;transform-origin:center;animation:pulse 2.4s ease-out infinite}
@keyframes pulse{0%{opacity:.9;transform:scale(.5)}100%{opacity:0;transform:scale(2.2)}}
`;

  return frame({
    width: W,
    height: H,
    index: '07',
    title: 'Activity',
    updated: `Updated ${dateLabel(now)}`,
    label: `GitHub activity: ${fmt(github.total)} contributions in the last year, rendered as a 3D calendar`,
    fonts: await fontCss(),
    css,
    body,
  });
}
