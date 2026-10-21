#!/usr/bin/env node
// Builds the live profile cards in assets/live/ from public APIs:
//   activity.svg  3D isometric contribution calendar (GitHub GraphQL)
//   cp.svg        competitive programming card (LeetCode + Codeforces)
//
// No dependencies: Node 22+ only. Run by .github/workflows/live-cards.yml every
// day. Each source is fetched independently; if one is down, the last good
// value from assets/live/data.json is reused, so a card never breaks.
//
//   GITHUB_TOKEN=... node scripts/live/build.mjs      real data
//   node scripts/live/build.mjs --sample --out /tmp/x offline preview data

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { renderActivity } from './activity.mjs';
import { renderCp } from './cp.mjs';

const ACCOUNTS = {
  github: 'DebasisCode',
  leetcode: 'Debasis6969',
  codeforces: 'DebasisCodeforces',
  codechef: 'codemaster_6',
};

const root = new URL('../../', import.meta.url);
const outArg = process.argv.indexOf('--out');
const outDir = outArg > 0 ? new URL(`file://${process.argv[outArg + 1].replace(/\/?$/, '/')}`) : new URL('assets/live/', root);
const cachePath = new URL('assets/live/data.json', root);
const sample = process.argv.includes('--sample');

async function fetchJson(url, init = {}, tries = 3) {
  let lastError;
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { ...init, signal: AbortSignal.timeout(20_000) });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      return await res.json();
    } catch (err) {
      lastError = err;
      await new Promise((r) => setTimeout(r, 1500 * (i + 1)));
    }
  }
  throw lastError;
}

async function github() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error('GITHUB_TOKEN is not set');
  const query = `query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks { contributionDays { date contributionCount contributionLevel } }
        }
      }
    }
  }`;
  const body = await fetchJson('https://api.github.com/graphql', {
    method: 'POST',
    headers: { authorization: `bearer ${token}`, 'content-type': 'application/json', 'user-agent': 'profile-live-cards' },
    body: JSON.stringify({ query, variables: { login: ACCOUNTS.github } }),
  });
  if (body.errors?.length) throw new Error(body.errors.map((e) => e.message).join('; '));
  const cal = body.data.user.contributionsCollection.contributionCalendar;
  const levels = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 };
  return {
    total: cal.totalContributions,
    weeks: cal.weeks.map((w) =>
      w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount, level: levels[d.contributionLevel] ?? 0 })),
    ),
  };
}

async function codeforces() {
  const handle = encodeURIComponent(ACCOUNTS.codeforces);
  const info = await fetchJson(`https://codeforces.com/api/user.info?handles=${handle}`);
  if (info.status !== 'OK') throw new Error(info.comment || 'codeforces user.info failed');
  const history = await fetchJson(`https://codeforces.com/api/user.rating?handle=${handle}`);
  if (history.status !== 'OK') throw new Error(history.comment || 'codeforces user.rating failed');
  const u = info.result[0];
  return {
    rating: u.rating ?? null,
    maxRating: u.maxRating ?? null,
    rank: u.rank ?? null,
    maxRank: u.maxRank ?? null,
    contests: history.result.length,
    history: history.result.map((r) => ({ t: r.ratingUpdateTimeSeconds, r: r.newRating })),
  };
}

async function leetcode() {
  const query = `query($username: String!) {
    matchedUser(username: $username) {
      profile { ranking }
      submitStatsGlobal { acSubmissionNum { difficulty count } }
    }
    userContestRanking(username: $username) {
      attendedContestsCount rating globalRanking topPercentage badge { name }
    }
    allQuestionsCount { difficulty count }
  }`;
  const body = await fetchJson('https://leetcode.com/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      referer: `https://leetcode.com/u/${ACCOUNTS.leetcode}/`,
      'user-agent': 'Mozilla/5.0 (profile-live-cards)',
    },
    body: JSON.stringify({ query, variables: { username: ACCOUNTS.leetcode } }),
  });
  if (body.errors?.length) throw new Error(body.errors.map((e) => e.message).join('; '));
  const user = body.data.matchedUser;
  if (!user) throw new Error('LeetCode user not found');
  const solved = Object.fromEntries(user.submitStatsGlobal.acSubmissionNum.map((s) => [s.difficulty, s.count]));
  const totals = Object.fromEntries((body.data.allQuestionsCount || []).map((s) => [s.difficulty, s.count]));
  const contest = body.data.userContestRanking;
  return {
    solved: { all: solved.All ?? 0, easy: solved.Easy ?? 0, medium: solved.Medium ?? 0, hard: solved.Hard ?? 0 },
    totals: { all: totals.All ?? null, easy: totals.Easy ?? null, medium: totals.Medium ?? null, hard: totals.Hard ?? null },
    rating: contest?.rating ? Math.round(contest.rating) : null,
    contests: contest?.attendedContestsCount ?? null,
    top: contest?.topPercentage ?? null,
    badge: contest?.badge?.name ?? null,
  };
}

// Deterministic stand-in data, only for previewing the design offline.
function sampleData() {
  const weeks = [];
  const start = new Date(Date.UTC(2025, 9, 19));
  let seed = 7;
  const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let w = 0; w < 53; w++) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(start.getTime() + (w * 7 + d) * 86400000);
      const busy = 0.35 + 0.65 * Math.sin((w / 53) * Math.PI * 2.2) ** 2;
      const count = rand() < 0.25 ? 0 : Math.round(rand() * 14 * busy);
      days.push({ date: date.toISOString().slice(0, 10), count, level: count === 0 ? 0 : Math.min(4, 1 + Math.floor(count / 4)) });
    }
    weeks.push(days);
  }
  return {
    github: { total: weeks.flat().reduce((a, d) => a + d.count, 0), weeks },
    leetcode: { solved: { all: 512, easy: 190, medium: 268, hard: 54 }, totals: { all: 3700, easy: 900, medium: 1900, hard: 860 }, rating: 1874, contests: 41, top: 5.6, badge: 'Knight' },
    codeforces: { rating: 1312, maxRating: 1405, rank: 'pupil', maxRank: 'specialist', contests: 28, history: Array.from({ length: 28 }, (_, i) => ({ t: 1700000000 + i * 1209600, r: Math.round(900 + 420 * (1 - Math.exp(-i / 9)) + 60 * Math.sin(i * 1.7)) })) },
  };
}

async function main() {
  await mkdir(outDir, { recursive: true });
  let cache = {};
  try {
    cache = JSON.parse(await readFile(cachePath, 'utf8'));
  } catch {
    // first run
  }

  const data = { ...cache };
  if (sample) {
    Object.assign(data, sampleData());
  } else {
    const sources = { github, leetcode, codeforces };
    for (const [name, load] of Object.entries(sources)) {
      try {
        data[name] = await load();
        data[`${name}UpdatedAt`] = new Date().toISOString();
        console.log(`${name}: ok`);
      } catch (err) {
        console.warn(`${name}: ${err.message}${cache[name] ? ' (keeping last good data)' : ''}`);
      }
    }
  }

  const now = new Date();
  const ctx = { accounts: ACCOUNTS, now };

  if (data.github) {
    await writeFile(new URL('activity.svg', outDir), await renderActivity(data.github, ctx));
    console.log(`wrote ${new URL('activity.svg', outDir).pathname}`);
  }
  await writeFile(new URL('cp.svg', outDir), await renderCp(data, ctx));
  console.log(`wrote ${new URL('cp.svg', outDir).pathname}`);

  if (!sample) {
    await writeFile(cachePath, JSON.stringify(data, null, 2) + '\n');
  }

  if (!sample && !data.github) {
    // No calendar ever fetched: fail loudly so the workflow run shows it.
    process.exitCode = 1;
  }
}

await main();
