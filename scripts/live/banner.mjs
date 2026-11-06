// Static profile banner pieces that match the live card family:
//   hero.svg    dark banner card: name, tagline, violet-to-sky wave
//   footer.svg  mirrored wave + closing line
//
// Rendered on every build.mjs run (they are cheap), so editing the tagline
// here only needs the next run of .github/workflows/live-cards.yml.
import { baseCss, esc, fontCss, C } from './svg.mjs';

const W = 840;

// Card shell without the index/updated header, for the banner and footer.
function shell({ width, height, label, body, fonts, css = '' }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(label)}">
<title>${esc(label)}</title>
<style>${fonts}${baseCss}${css}</style>
<defs>
  <radialGradient id="vig" cx="50%" cy="45%" r="75%">
    <stop offset="60%" stop-color="#000" stop-opacity="0"/>
    <stop offset="100%" stop-color="#000" stop-opacity=".45"/>
  </radialGradient>
  <linearGradient id="wave" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#8b5cf6"/><stop offset="1" stop-color="#0ea5e9"/>
  </linearGradient>
  <clipPath id="panel"><rect width="${width}" height="${height}" rx="18"/></clipPath>
</defs>
<g clip-path="url(#panel)">
<rect width="${width}" height="${height}" fill="${C.bg}"/>
${body}
<rect width="${width}" height="${height}" fill="url(#vig)" pointer-events="none"/>
</g>
</svg>`;
}

export async function renderHero() {
  const H = 230;
  const body = `
<text x="40" y="46" class="mono">DebasisCode</text>
<text x="${W - 40}" y="46" class="mono" text-anchor="end">profile</text>
<text x="${W / 2}" y="110" class="display" text-anchor="middle" style="font-size:58px;letter-spacing:-2px">Debasis Chattaraj</text>
<text x="${W / 2}" y="142" class="mono" text-anchor="middle" style="font-size:11.5px"><tspan class="acc">ex intern @ SnowSEO</tspan><tspan class="faint" dx="26">//</tspan><tspan class="ink" dx="26">AI engineer</tspan><tspan class="ink" dx="16">+ software developer</tspan></text>
<path d="M-8 210 C 170 152 330 234 470 196 S 724 170 848 214 L848 238 L-8 238 Z" fill="url(#wave)" opacity=".9"/>
<path d="M-8 224 C 150 188 380 246 520 216 S 740 202 848 230 L848 238 L-8 238 Z" fill="url(#wave)" opacity=".45"/>`;

  return shell({
    width: W,
    height: H,
    label: 'Profile banner: Debasis Chattaraj, ex intern at SnowSEO, AI engineer and software developer',
    body,
    fonts: await fontCss(),
  });
}

export async function renderFooter() {
  const H = 120;
  const body = `
<path d="M-8 30 C 170 58 330 -4 470 24 S 730 46 848 12 L848 -14 L-8 -14 Z" fill="url(#wave)" opacity=".9"/>
<path d="M-8 16 C 150 52 380 34 520 8 S 740 -10 848 26 L848 -14 L-8 -14 Z" fill="url(#wave)" opacity=".45"/>
<text x="${W / 2}" y="74" class="serif" text-anchor="middle" style="font-size:24px">Thanks for scrolling.</text>
<text x="${W / 2}" y="98" class="mono" text-anchor="middle" style="font-size:9.5px">let's make it automatic</text>`;

  return shell({
    width: W,
    height: H,
    label: 'Footer wave. Thanks for scrolling, lets make it automatic',
    body,
    fonts: await fontCss(),
  });
}
