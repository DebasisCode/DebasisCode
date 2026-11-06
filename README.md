<!--

  Debasis Chattaraj's profile README. Notes for the next person who edits this:

  - The four visuals (hero.svg, footer.svg, activity.svg, cp.svg) are generated
    inside this repo, not by third-party stat services. They are built by
    scripts/live/ with zero dependencies and rebuilt daily by
    .github/workflows/live-cards.yml. Self-hosted cards never rate limit and
    never randomly go dark. To preview locally: node scripts/live/build.mjs
    (it falls back to a public contributions API when GITHUB_TOKEN is absent).
  - GitHub strips JavaScript from READMEs, so nothing can react to actual
    scrolling; every animation here is CSS or SMIL inside SVG <img>, which
    GitHub does allow.
  - The only external widgets kept are the ones known to render reliably
    (github-profile-summary-cards, streak-stats, leetcard, badges).
  - Page color theme: violet #8b5cf6 into sky #0ea5e9; the live cards carry
    their own dark panel + orange accent family.

-->

<div align="center">

<img src="assets/live/hero.svg" width="100%" alt="Debasis Chattaraj, ex intern at SnowSEO, AI engineer and software developer" />

</div>

<div align="center">

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=22&duration=2800&pause=1000&color=8B5CF6&center=true&vCenter=true&width=840&lines=I+help+businesses+automate%2C+integrate+and+create+workflows;Winner%2C+Smart+Delhi+Ideathon;Codeforces+Pupil;Knight+on+LeetCode)](https://git.io/typing-svg)

<p>
  <a href="https://github.com/DebasisCode?tab=followers"><img src="https://img.shields.io/github/followers/DebasisCode?label=Followers&style=for-the-badge&color=6366f1" alt="followers" /></a>
  <a href="https://github.com/DebasisCode?tab=repositories"><img src="https://img.shields.io/badge/Projects-Explore-8b5cf6?style=for-the-badge" alt="repositories" /></a>
  <img src="https://komarev.com/ghpvc/?username=DebasisCode&style=for-the-badge&color=0ea5e9&label=Profile+Views" alt="profile views" />
</p>

</div>

---

## About

Most of what I build is the unglamorous middle layer of software: queues, integrations and AI plumbing that does real work while nobody babysits it.

Concretely: I help businesses **automate, integrate and create workflows, and adopt AI to increase the speed of their work**. That was literally the job at **SnowSEO**, where I recently wrapped my SDE internship: AI automation, platform integrations and analytics pipelines, shipped to production. Before that, competitive programming bent how my brain works, and it still shows up in how I design systems.

- **Ex SDE intern @ SnowSEO.** AI automation, integrations and analytics, running in production
- **Information Technology** student at [GGSIPU](http://www.ipu.ac.in/)
- **Knight on LeetCode, Pupil on Codeforces**, still contesting on CodeChef
- **Winner, Smart Delhi Ideathon**
- Open to **internships and full-time roles** in AI engineering and software development. [My resume](https://drive.google.com/file/d/1cudQzuAQi7d6S3ldLEuKeWP6hN_Iwmar/view?usp=sharing) has the formal version.

<div align="center">

<br />

**[View my resume](https://drive.google.com/file/d/1cudQzuAQi7d6S3ldLEuKeWP6hN_Iwmar/view?usp=sharing)** · **[Email me](mailto:flancer250@gmail.com)** · **[LinkedIn](https://www.linkedin.com/in/debasis-chattaraj-4370ba220/)**

</div>

## Live from my GitHub

<!--
  Generated inside this repo and committed by GitHub Actions, so the README
  never depends on a rate-limited third-party service: assets/live/hero.svg,
  assets/live/activity.svg, assets/live/cp.svg and assets/live/footer.svg all
  come from scripts/live/ + live-cards.yml.
  Preview locally with: node scripts/live/build.mjs
-->

<div align="center">

<img src="assets/live/activity.svg" width="100%" alt="3D isometric render of my contribution calendar with streak stats, rebuilt daily by a GitHub Action in this repo" />

</div>

## What I work with

<div align="center">

**Languages**

<img src="https://skillicons.dev/icons?i=ts,js,python,cpp,java,c&perline=6" alt="languages" />

**Frontend**

<img src="https://skillicons.dev/icons?i=react,nextjs,html,css,tailwind&perline=5" alt="frontend" />

**Backend & databases**

<img src="https://skillicons.dev/icons?i=nodejs,express,fastapi,redis,mongodb,mysql,postgres&perline=7" alt="backend and databases" />

**Tools**

<img src="https://skillicons.dev/icons?i=git,github,vscode,postman,docker,linux,vercel&perline=7" alt="tools" />

**AI & automation plumbing**

<img src="https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white" alt="OpenAI" />
<img src="https://img.shields.io/badge/Anthropic-D97757?style=flat-square&logo=anthropic&logoColor=white" alt="Anthropic" />
<img src="https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white" alt="Playwright" />
<img src="https://img.shields.io/badge/MCP_Servers-6f42c1?style=flat-square&logoColor=white" alt="MCP servers" />
<img src="https://img.shields.io/badge/BullMQ-DA2F2F?style=flat-square&logo=redis&logoColor=white" alt="BullMQ" />
<img src="https://img.shields.io/badge/Deepgram-13EF93?style=flat-square&logo=deepgram&logoColor=black" alt="Deepgram" />

</div>

## Featured Projects

### Outreach: a keyboard-first AI job-search agent

<a href="https://github.com/DebasisCode/outreach"><img src="https://opengraph.githubassets.com/1/DebasisCode/outreach" alt="Outreach project preview" width="100%" /></a>

Outreach is a job-search agent you talk to in chat, built in the spirit of Claude Code. Ask it for roles and it finds them, then finds the recruiter or hiring manager behind them, digs up their work email, and drafts a short personal message from your own Gmail. Nothing sends until you click Send. The same agent fills job applications for you: it drives a real Chrome window on your machine, reads the application form field by field, fills in what it knows from your profile and resume, and shows you a screenshot of the finished form before you decide whether to submit.

**What makes it interesting:** it reads forms by labels and ARIA roles instead of CSS classes, so it keeps working when job sites redesign, and every send or submit is approval-gated. The machine does the typing, you stay in charge.

<p>
<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Vercel_AI_SDK-000000?style=flat-square&logo=vercel&logoColor=white" />
<img src="https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white" />
<img src="https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white" />
<img src="https://img.shields.io/badge/Composio-2C0E4C?style=flat-square" />
</p>

<a href="https://github.com/DebasisCode/outreach"><img src="https://img.shields.io/badge/View_Repository-a78bfa?style=for-the-badge&logo=github&logoColor=white" alt="Outreach repository" /></a>

### ShipOne: ship a full-stack app with one command

<a href="https://github.com/DebasisCode/shipone"><img src="https://opengraph.githubassets.com/1/DebasisCode/shipone" alt="ShipOne project preview" width="100%" /></a>

ShipOne is a free, open source npm CLI built on one complaint: the last hour of every project was the same 30 to 60 minutes of deploy dashboard clicking. Run `shipone` and it figures out which folder is your website and which is your server, deploys the frontend to Vercel or Netlify and the backend to Render or Railway, all inside your own accounts so there is no vendor lock-in and no markup. Before anything goes live it wires the two halves to each other, API addresses exchanged both ways and browser security sorted out, and if a build fails it points at the exact lines that broke. Run it again and it finds the same project instead of creating a duplicate.

**What makes it interesting:** the frontend/backend wiring is the part every deploy tool leaves as homework. ShipOne handles it, warns about hardcoded localhost URLs and forgotten secrets before launch, and keeps a tiny `shipone.yml` in your repo so your whole team gets the same one-command deploy.

<p>
<img src="https://img.shields.io/badge/Node.js_22+-339933?style=flat-square&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/npm_CLI-CB3837?style=flat-square&logo=npm&logoColor=white" />
<img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white" />
<img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=black" />
<img src="https://img.shields.io/badge/MIT_License-8b5cf6?style=flat-square" />
</p>

<a href="https://github.com/DebasisCode/shipone"><img src="https://img.shields.io/badge/View_Repository-8b5cf6?style=for-the-badge&logo=github&logoColor=white" alt="ShipOne repository" /></a>

<br />

<table>
<tr>
<td width="50%" valign="top">

### AI Lecture Notes Generator

<a href="https://github.com/DebasisCode/Ai-notes-maker"><img src="https://opengraph.githubassets.com/1/DebasisCode/Ai-notes-maker" alt="AI Notes Maker preview" width="100%" /></a>

A real-time web app that records lectures, converts speech to text and lets an LLM write concise, context-aware notes, filtering out the irrelevant chatter. A Node.js pipeline streams audio to a transcription API and feeds the text to a model for summarisation.

<p>
<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Socket.io-010101?style=flat-square&logo=socketdotio&logoColor=white" />
<img src="https://img.shields.io/badge/Deepgram-13EF93?style=flat-square&logo=deepgram&logoColor=black" />
</p>

<a href="https://github.com/DebasisCode/Ai-notes-maker"><img src="https://img.shields.io/badge/View_Repository-8b5cf6?style=for-the-badge&logo=github&logoColor=white" alt="AI Notes Maker repository" /></a>

</td>
<td width="50%" valign="top">

### Interactive C++ Code Visualizer

<a href="https://github.com/DebasisCode/C-Degugger"><img src="https://opengraph.githubassets.com/1/DebasisCode/C-Degugger" alt="C++ Visualizer preview" width="100%" /></a>

An educational tool that teaches C++ by visualising execution: step-by-step dry runs, live variable state and a dynamic function call stack. A React + D3.js front end renders recursion and function lifecycles interactively, so hard concepts finally click.

<p>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/WebSocket-019784?style=flat-square&logo=socketdotio&logoColor=white" />
<img src="https://img.shields.io/badge/GDB-C80000?style=flat-square&logo=gnu&logoColor=white" />
</p>

<a href="https://github.com/DebasisCode/C-Degugger"><img src="https://img.shields.io/badge/View_Repository-0ea5e9?style=for-the-badge&logo=github&logoColor=white" alt="C++ Visualizer repository" /></a>

</td>
</tr>
</table>

### Personalized Jarvis Assistant

A Python voice assistant built with SpeechRecognition, pyttsx3, FastAPI and spaCy/NLTK that executes natural-language commands. Modular command architecture: system control, web automation, task scheduling and plug-in commands.

<p>
<img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" />
<img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white" />
<img src="https://img.shields.io/badge/spaCy-09A3D5?style=flat-square&logo=spacy&logoColor=white" />
<img src="https://img.shields.io/badge/NLTK-154f5b?style=flat-square" />
&nbsp;<a href="https://github.com/DebasisCode/Personal-Jarvis"><img src="https://img.shields.io/badge/View_Repository-ec4899?style=for-the-badge&logo=github&logoColor=white" alt="Personal Jarvis repository" /></a>
</p>

<details>
<summary><b>More things I've built</b></summary>

<br />

<p>
<a href="https://github.com/DebasisCode/survify"><img src="https://img.shields.io/badge/survify-JavaScript-F7DF1E?style=for-the-badge&logo=github&logoColor=white" /></a>
<a href="https://github.com/DebasisCode/Floating-Timer"><img src="https://img.shields.io/badge/Floating_Timer-JavaScript-F7DF1E?style=for-the-badge&logo=github&logoColor=white" /></a>
<a href="https://github.com/DebasisCode/avalanche"><img src="https://img.shields.io/badge/avalanche-JavaScript-F7DF1E?style=for-the-badge&logo=github&logoColor=white" /></a>
<a href="https://github.com/DebasisCode/WomensSafetyApp"><img src="https://img.shields.io/badge/Womens_Safety_App-JavaScript-F7DF1E?style=for-the-badge&logo=github&logoColor=white" /></a>
<a href="https://github.com/DebasisCode/BookList"><img src="https://img.shields.io/badge/BookList-JavaScript-F7DF1E?style=for-the-badge&logo=github&logoColor=white" /></a>
<a href="https://github.com/DebasisCode/invsto"><img src="https://img.shields.io/badge/invsto-Python-3776AB?style=for-the-badge&logo=github&logoColor=white" /></a>
<a href="https://github.com/DebasisCode/react-multiplayer-tic-tac-toe-game"><img src="https://img.shields.io/badge/Multiplayer_Tic_Tac_Toe-JavaScript-F7DF1E?style=for-the-badge&logo=github&logoColor=white" /></a>
</p>

</details>

## GitHub Stats

<!--
  Kept: github-profile-summary-cards and streak-stats, both render reliably.
  Deliberately not used: github-readme-stats.vercel.app, github-readme-activity-graph
  and github-profile-trophy, their shared public instances get rate limited hard
  enough that the images regularly fail to load. If you want them back, self-host
  first: https://github.com/anuraghazra/github-readme-stats#deploy-on-your-own-vercel-instance
-->

<div align="center">

<picture>
  <source srcset="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=DebasisCode&theme=github_dark" media="(prefers-color-scheme: dark)" />
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=DebasisCode&theme=default" width="100%" alt="Profile summary" />
</picture>

<picture>
  <source srcset="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=DebasisCode&theme=github_dark" media="(prefers-color-scheme: dark)" />
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=DebasisCode&theme=default" height="190" alt="Top languages by repository" />
</picture>
<picture>
  <source srcset="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=DebasisCode&theme=github_dark" media="(prefers-color-scheme: dark)" />
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=DebasisCode&theme=default" height="190" alt="Top languages by commit" />
</picture>

<picture>
  <source srcset="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=DebasisCode&theme=github_dark" media="(prefers-color-scheme: dark)" />
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=DebasisCode&theme=default" height="190" alt="GitHub stats" />
</picture>
<picture>
  <source srcset="https://streak-stats.demolab.com?user=DebasisCode&hide_border=true&theme=tokyonight" media="(prefers-color-scheme: dark)" />
  <img src="https://streak-stats.demolab.com?user=DebasisCode&hide_border=true&theme=default" height="190" alt="GitHub streak" />
</picture>

</div>

## Competitive Programming

<div align="center">

<img src="assets/live/cp.svg" width="100%" alt="Live competitive programming card with my LeetCode and Codeforces ratings, rebuilt daily by a GitHub Action" />

<br /><br />

<a href="https://codeforces.com/profile/DebasisCodeforces"><img src="https://img.shields.io/badge/Codeforces-DebasisCodeforces-1F8ACB?style=for-the-badge&logo=codeforces&logoColor=white" alt="Codeforces" /></a>
<a href="https://leetcode.com/u/Debasis6969/"><img src="https://img.shields.io/badge/LeetCode-Debasis6969-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" alt="LeetCode" /></a>
<a href="https://www.codechef.com/users/codemaster_6"><img src="https://img.shields.io/badge/CodeChef-codemaster__6-5B4638?style=for-the-badge&logo=codechef&logoColor=white" alt="CodeChef" /></a>

<br /><br />

**Codeforces, live from the Codeforces API**

<a href="https://codeforces.com/profile/DebasisCodeforces"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fcodeforces.com%2Fapi%2Fuser.info%3Fhandles%3DDebasisCodeforces&query=%24.result%5B0%5D.rating&label=Current%20Rating&style=for-the-badge&color=1F8ACB&logo=codeforces&logoColor=white&cacheSeconds=3600" alt="Codeforces current rating" /></a>
<a href="https://codeforces.com/profile/DebasisCodeforces"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fcodeforces.com%2Fapi%2Fuser.info%3Fhandles%3DDebasisCodeforces&query=%24.result%5B0%5D.maxRating&label=Max%20Rating&style=for-the-badge&color=8b5cf6&cacheSeconds=3600" alt="Codeforces max rating" /></a>
<a href="https://codeforces.com/profile/DebasisCodeforces"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fcodeforces.com%2Fapi%2Fuser.info%3Fhandles%3DDebasisCodeforces&query=%24.result%5B0%5D.rank&label=Rank&style=for-the-badge&color=ec4899&cacheSeconds=3600" alt="Codeforces rank" /></a>

<br /><br />

**LeetCode**

<picture>
  <source srcset="https://leetcard.jacoblin.cool/Debasis6969?theme=dark&font=Inter&ext=heatmap" media="(prefers-color-scheme: dark)" />
  <img src="https://leetcard.jacoblin.cool/Debasis6969?theme=light&font=Inter&ext=heatmap" width="500" alt="LeetCode stats" />
</picture>

</div>

## Connect With Me

<div align="center">

<a href="https://www.linkedin.com/in/debasis-chattaraj-4370ba220/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
<a href="mailto:flancer250@gmail.com"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
<a href="https://drive.google.com/file/d/1cudQzuAQi7d6S3ldLEuKeWP6hN_Iwmar/view?usp=sharing"><img src="https://img.shields.io/badge/Resume-8b5cf6?style=for-the-badge&logo=readdotcv&logoColor=white" alt="Resume" /></a>
<a href="https://github.com/DebasisCode?tab=repositories"><img src="https://img.shields.io/badge/Repositories-181717?style=for-the-badge&logo=github&logoColor=white" alt="Repositories" /></a>

</div>

---

<div align="center">
  <sub>Thanks for reading this far. If some part of it reads like a problem your team has right now, you know where to find me.</sub>
  <br /><br />
  <img src="assets/live/footer.svg" width="100%" alt="Footer wave. Thanks for scrolling, lets make it automatic" />
</div>
