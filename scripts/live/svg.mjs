// Shared bits for the live SVG cards: palette, embedded fonts, text helpers.
import { readFile } from 'node:fs/promises';

export const C = {
  bg: '#09090a',
  ink: '#f2f1ec',
  dim: '#9a9aa0',
  faint: '#5d5d63',
  line: 'rgba(242,241,236,0.10)',
  accent: '#ff5b1f',
};

const FONTS = [
  ['Inter Tight', 500, 'normal', 'inter-tight-500.woff2'],
  ['Inter Tight', 600, 'normal', 'inter-tight-600.woff2'],
  ['JetBrains Mono', 500, 'normal', 'jetbrains-mono-500.woff2'],
  ['Instrument Serif', 400, 'italic', 'instrument-serif-italic.woff2'],
];

// SVGs shown through <img> cannot fetch fonts, so they ship inside the file.
export async function fontCss() {
  const faces = await Promise.all(
    FONTS.map(async ([family, weight, style, file]) => {
      const b64 = (await readFile(new URL(`./fonts/${file}`, import.meta.url))).toString('base64');
      return `@font-face{font-family:'${family}';font-weight:${weight};font-style:${style};src:url(data:font/woff2;base64,${b64}) format('woff2')}`;
    }),
  );
  return faces.join('');
}

export const baseCss = `
.mono{font-family:'JetBrains Mono',ui-monospace,monospace;font-weight:500;font-size:10.5px;letter-spacing:.84px;text-transform:uppercase;fill:${C.dim}}
.ink{fill:${C.ink}}
.acc{fill:${C.accent}}
.dim{fill:${C.dim}}
.faint{fill:${C.faint}}
.display{font-family:'Inter Tight',system-ui,sans-serif;font-weight:600;fill:${C.ink}}
.text{font-family:'Inter Tight',system-ui,sans-serif;font-weight:500;fill:${C.ink}}
.serif{font-family:'Instrument Serif',Georgia,serif;font-style:italic;font-weight:400;fill:${C.accent}}
`;

export const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export const fmt = (n) => (n == null ? '—' : Number(n).toLocaleString('en-US'));

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const month = (i) => MONTHS[i];
export const dateLabel = (d) => `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;

// Card shell: dark rounded panel, index label on the left, update stamp on the right.
export function frame({ width, height, index, title, updated, body, css = '', fonts, label }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(label)}">
<title>${esc(label)}</title>
<style>${fonts}${baseCss}${css}</style>
<defs>
  <radialGradient id="vig" cx="50%" cy="45%" r="75%">
    <stop offset="60%" stop-color="#000" stop-opacity="0"/>
    <stop offset="100%" stop-color="#000" stop-opacity=".45"/>
  </radialGradient>
  <clipPath id="card"><rect width="${width}" height="${height}" rx="18"/></clipPath>
</defs>
<g clip-path="url(#card)">
<rect width="${width}" height="${height}" fill="${C.bg}"/>
${body}
<rect width="${width}" height="${height}" fill="url(#vig)" pointer-events="none"/>
<text x="40" y="46" class="mono ink"><tspan class="acc">${esc(index)}</tspan><tspan dx="10">/</tspan><tspan dx="10">${esc(title)}</tspan></text>
<text x="${width - 40}" y="46" class="mono" text-anchor="end">${esc(updated)}</text>
</g>
</svg>
`;
}
