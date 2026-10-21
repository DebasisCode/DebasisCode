// Competitive programming card: LeetCode + Codeforces, with a rating sparkline.
import { C, dateLabel, esc, fmt, fontCss, frame } from './svg.mjs';

const W = 840;
const H = 320;
const cap = (s) => (s ? s.replace(/\b\w/g, (c) => c.toUpperCase()) : s);

function column(x, label, handle) {
  return `<text x="${x}" y="98" class="mono ink">${esc(label)}</text><text x="${x}" y="116" class="mono faint" style="font-size:9.5px;text-transform:none;letter-spacing:.3px">${esc(handle)}</text>`;
}

function leetcode(lc, x, handle) {
  if (!lc) return column(x, 'LeetCode', handle) + `<text x="${x}" y="176" class="display" style="font-size:44px">—</text>`;
  const big = lc.rating ?? lc.solved.all;
  const caption = lc.rating ? 'contest rating' : 'problems solved';
  const badge = lc.badge
    ? `<g transform="translate(${x + 112} 196)"><rect x="0" y="-13" width="${lc.badge.length * 7.4 + 22}" height="20" rx="10" fill="none" stroke="${C.accent}" stroke-opacity=".7"/><text x="11" y="1" class="mono acc" style="font-size:9.5px">${esc(lc.badge)}</text></g>`
    : '';
  const meta = [lc.top != null ? `Top ${lc.top}%` : null, lc.contests ? `${lc.contests} contests` : null].filter(Boolean).join('  /  ');

  const total = Math.max(1, lc.solved.easy + lc.solved.medium + lc.solved.hard);
  const width = 220;
  const segs = [
    ['E', lc.solved.easy, '#5d5d63'],
    ['M', lc.solved.medium, '#b8b8bd'],
    ['H', lc.solved.hard, C.accent],
  ];
  let cx = x;
  const bar = segs
    .map(([, n, color]) => {
      const w = Math.max(n ? 3 : 0, (n / total) * width - 2);
      const r = `<rect x="${cx.toFixed(1)}" y="262" width="${w.toFixed(1)}" height="6" rx="3" fill="${color}"/>`;
      cx += w + 2;
      return r;
    })
    .join('');
  const legend = segs
    .map(([k, n], i) => `<tspan dx="${i ? 14 : 0}" class="faint">${k}</tspan><tspan dx="6" class="ink">${fmt(n)}</tspan>`)
    .join('');

  return `${column(x, 'LeetCode', handle)}
<text x="${x}" y="176" class="display" style="font-size:46px;letter-spacing:-1.8px">${fmt(big)}</text>
<text x="${x}" y="201" class="text dim" style="font-size:13.5px">${caption}</text>
${badge}
<text x="${x}" y="230" class="mono" style="font-size:9.5px">${esc(meta)}</text>
${lc.rating ? `<text x="${x}" y="252" class="mono" style="font-size:9.5px"><tspan class="ink">${fmt(lc.solved.all)}</tspan><tspan dx="8">solved</tspan></text>` : ''}
${bar}
<text x="${x}" y="290" class="mono" style="font-size:9.5px">${legend}</text>`;
}

function codeforces(cf, x, handle) {
  if (!cf) return column(x, 'Codeforces', handle) + `<text x="${x}" y="176" class="display" style="font-size:44px">—</text>`;
  const sw = 230;
  const sh = 58;
  const sy = 236;
  let spark = '';
  if (cf.history?.length > 1) {
    const rs = cf.history.map((h) => h.r);
    const lo = Math.min(...rs);
    const hi = Math.max(...rs);
    const span = Math.max(1, hi - lo);
    const pts = cf.history.map((h, i) => [x + (i / (cf.history.length - 1)) * sw, sy + sh - ((h.r - lo) / span) * sh]);
    const line = pts.map(([px, py], i) => `${i ? 'L' : 'M'}${px.toFixed(1)} ${py.toFixed(1)}`).join('');
    const area = `${line}L${(x + sw).toFixed(1)} ${sy + sh}L${x} ${sy + sh}Z`;
    const [lx, ly] = pts[pts.length - 1];
    spark = `<defs><linearGradient id="cfArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${C.accent}" stop-opacity=".28"/><stop offset="1" stop-color="${C.accent}" stop-opacity="0"/></linearGradient></defs>
<path d="${area}" fill="url(#cfArea)"/>
<path d="${line}" fill="none" stroke="${C.accent}" stroke-width="1.6" stroke-linejoin="round" class="draw" pathLength="1"/>
<circle cx="${lx.toFixed(1)}" cy="${ly.toFixed(1)}" r="3" fill="${C.accent}"/>
<line x1="${x}" y1="${sy + sh + 0.5}" x2="${x + sw}" y2="${sy + sh + 0.5}" stroke="${C.line}"/>`;
  }
  const rank = cf.rank ? cap(cf.rank) : 'Unrated';
  const max = cf.maxRating ? `max ${fmt(cf.maxRating)}${cf.maxRank ? `, ${cap(cf.maxRank)}` : ''}` : '';
  return `${column(x, 'Codeforces', handle)}
<text x="${x}" y="176" class="display" style="font-size:46px;letter-spacing:-1.8px">${fmt(cf.rating)}</text>
<text x="${x}" y="201" class="text dim" style="font-size:13.5px">${esc(rank)}</text>
<text x="${x}" y="230" class="mono" style="font-size:9.5px">${esc([max, cf.contests ? `${cf.contests} contests` : ''].filter(Boolean).join('  /  '))}</text>
${spark}`;
}

function profiles(x, accounts) {
  const rows = [
    ['LeetCode', accounts.leetcode],
    ['Codeforces', accounts.codeforces],
    ['CodeChef', accounts.codechef],
  ];
  return `<text x="${x}" y="98" class="mono ink">Handles</text>
${rows
  .map(
    ([k, v], i) =>
      `<g transform="translate(${x} ${150 + i * 42})"><rect x="0" y="-12" width="1" height="30" fill="${C.line}"/><text x="12" y="0" class="mono" style="font-size:9.5px">${k}</text><text x="12" y="19" class="text" style="font-size:14px">${esc(v)}</text></g>`,
  )
  .join('')}`;
}

export async function renderCp(data, { accounts, now }) {
  const body = `
<line x1="300" y1="86" x2="300" y2="294" stroke="${C.line}"/>
<line x1="590" y1="86" x2="590" y2="294" stroke="${C.line}"/>
${leetcode(data.leetcode, 40, accounts.leetcode)}
${codeforces(data.codeforces, 330, accounts.codeforces)}
${profiles(620, accounts)}`;

  const css = `
.draw{animation:draw 1.6s .3s cubic-bezier(.4,0,.2,1) backwards}
@keyframes draw{from{stroke-dasharray:1;stroke-dashoffset:1}to{stroke-dasharray:1;stroke-dashoffset:0}}
`;

  const lc = data.leetcode;
  const cf = data.codeforces;
  const label = [
    'Competitive programming.',
    lc ? `LeetCode: ${lc.rating ? `rating ${lc.rating}` : ''}${lc.badge ? ` (${lc.badge})` : ''}, ${lc.solved.all} solved.` : '',
    cf ? `Codeforces: rating ${cf.rating ?? 'unrated'}${cf.maxRating ? `, max ${cf.maxRating}` : ''}.` : '',
  ].join(' ');

  return frame({
    width: W,
    height: H,
    index: '08',
    title: 'Competitive programming',
    updated: `Updated ${dateLabel(now)}`,
    label,
    fonts: await fontCss(),
    css,
    body,
  });
}
