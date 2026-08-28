<div align="center">

<img src="assets/hero.svg" width="100%" alt="Debasis Chattaraj — SDE Intern @ SnowSEO, Full-Stack Developer, Competitive Programmer, LeetCode Knight" />

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=22&duration=2800&pause=900&color=8B5CF6&center=true&vCenter=true&width=850&lines=I+design+systems%2C+not+just+screens;If+I+do+it+twice%2C+I+automate+it;Constraints+first%2C+cleverness+last;Ship+it%2C+measure+it%2C+then+improve+it)](https://git.io/typing-svg)

<p>
  <a href="https://github.com/DebasisCode?tab=followers"><img src="https://img.shields.io/github/followers/DebasisCode?label=Followers&style=for-the-badge&color=6366f1" alt="followers" /></a>
  <a href="https://github.com/DebasisCode?tab=repositories"><img src="https://img.shields.io/badge/Projects-Explore-8b5cf6?style=for-the-badge" alt="projects" /></a>
  <img src="https://komarev.com/ghpvc/?username=DebasisCode&style=for-the-badge&color=0ea5e9&label=Profile+Views" alt="profile views" />
</p>

</div>

---

## 🚀 About Me

- 💼 **SDE Intern @ SnowSEO** — shipping AI-automation, platform integrations and analytics pipelines that run in production
- 🎓 **Information Technology** student at [Guru Gobind Singh Indraprastha University (GGSIPU)](http://www.ipu.ac.in/)
- ⚔️ **Knight on LeetCode**, and an active competitive programmer on Codeforces &amp; CodeChef
- 🏆 **1x Hackathon Winner** — Smart Delhi Ideathon
- 🧠 Working depth in **distributed job processing, AI automation, MCP servers, REST API design, platform integrations and analytics pipelines**
- 🤖 I **automate anything repetitive** — if a task shows up twice by hand, the third time it's a script, a queue worker or an MCP tool
- 🚀 Open to **internship / full-time opportunities** — [**View My Resume**](https://drive.google.com/file/d/1cudQzuAQi7d6S3ldLEuKeWP6hN_Iwmar/view?usp=sharing)

## 🧭 What I Bring Beyond the Code

> **I take ownership, not tickets.** Hand me a vague problem and I come back with the scope defined, the trade-offs picked and something shipped — not a list of questions.

- 🏗️ **I design the system before I write the endpoint.** Queue topology, idempotency keys, retry and backoff, rate-limit budgets, failure modes — decided and written down first, then built.
- 🔍 **I debug production, not just localhost.** Reading logs and traces, reproducing race conditions, and fixing the cause instead of patching the symptom.
- 🧩 **I move fast inside code I didn't write.** Landing in a large unfamiliar repo and shipping a correct, in-style change is a skill I practise on purpose.
- ♟️ **Competitive programming rewired how I think.** Constraints first, correctness second, cleverness last — plus an instinct for the input that breaks your code.
- 📈 **I close the loop with data.** Shipping isn't done. I instrument it, watch what it actually does in production, and let the numbers pick the next change.
- 📝 **I write the reasoning down.** Design notes and "why not the other way", so the next person — or the next me — doesn't re-litigate a solved decision.

<div align="center">

<img src="assets/pipeline.svg" width="100%" alt="Architecture I work with: REST API → queue → workers → AI/MCP layer → integrations → analytics, with retry/backoff and dead-letter replay" />

</div>

## 🧰 Tech Stack

<div align="center">

**Languages**

<img src="https://skillicons.dev/icons?i=cpp,c,java,python,js,ts&perline=6" alt="languages" />

**Frontend**

<img src="https://skillicons.dev/icons?i=react,nextjs,html,css,tailwind,bootstrap&perline=6" alt="frontend" />

**Backend, Queues &amp; Databases**

<img src="https://skillicons.dev/icons?i=nodejs,express,fastapi,redis,mongodb,mysql,postgres&perline=7" alt="backend and databases" />

**Tools &amp; Platforms**

<img src="https://skillicons.dev/icons?i=git,github,vscode,postman,docker,figma,linux,vercel&perline=8" alt="tools" />

</div>

## 💡 Featured Projects

### 🛫 JobPilot — AI Job-Search Agent

<!--
  📸 SCREENSHOT GOES HERE.
  Replace the file  assets/jobpilot.png  with your own screenshot — keep the same
  filename and nothing else needs to change. A ~2:1 image (e.g. 1600x800) fits best.
  The current file is a placeholder I generated.
-->

<a href="https://github.com/DebasisCode/jobPilot"><img src="assets/jobpilot.png" alt="JobPilot screenshot" width="100%" /></a>

Set your preferences once and JobPilot keeps doing the repetitive discovery work for you. A **Fastify** API enqueues each search run into **Redis + BullMQ**; background **workers** discover roles across ATS sources (Greenhouse, Lever, Ashby), strip dead links and listicles, check role and experience fit, then AI-vet every opportunity before it reaches your dashboard. Bring-your-own model key, so you choose the provider.

**Why it's interesting:** it's an agent-style background pipeline, not a static job board — queued runs, live progress tracking, and quality filtering that happens *before* you ever see a listing.

<p>
<img src="https://img.shields.io/badge/Next.js_15-000000?style=flat-square&logo=nextdotjs&logoColor=white" />
<img src="https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Fastify-000000?style=flat-square&logo=fastify&logoColor=white" />
<img src="https://img.shields.io/badge/BullMQ-DA2F2F?style=flat-square&logo=redis&logoColor=white" />
<img src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white" />
<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white" />
</p>

<a href="https://github.com/DebasisCode/jobPilot"><img src="https://img.shields.io/badge/View_Repository-a78bfa?style=for-the-badge&logo=github&logoColor=white" alt="repo" /></a>

<br />

<table>
<tr>
<td width="50%" valign="top">

### 🎧 AI Lecture Notes Generator

<a href="https://github.com/DebasisCode/Ai-notes-maker"><img src="assets/ai_notes_maker.png" alt="AI Notes Maker screenshot" width="100%" /></a>

Real-time web app that records lectures, converts speech to text and uses an LLM to generate concise, context-aware notes — filtering out irrelevant chatter. A Node.js pipeline streams audio to a transcription API, then feeds the text to a model for intelligent summarisation.

<p>
<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Socket.io-010101?style=flat-square&logo=socketdotio&logoColor=white" />
<img src="https://img.shields.io/badge/Deepgram-13EF93?style=flat-square&logo=deepgram&logoColor=black" />
</p>

<a href="https://github.com/DebasisCode/Ai-notes-maker"><img src="https://img.shields.io/badge/View_Repository-8b5cf6?style=for-the-badge&logo=github&logoColor=white" alt="repo" /></a>

</td>
<td width="50%" valign="top">

### 🧩 Interactive C++ Code Visualizer

<a href="https://github.com/DebasisCode/C-Degugger"><img src="assets/cpp_visualizer.png" alt="C++ Visualizer screenshot" width="100%" /></a>

Educational tool that teaches C++ by visualising execution — step-by-step dry runs, live variable state and a dynamic function call stack. A React + D3.js front end renders recursion and function lifecycles interactively, making hard concepts click.

<p>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/WebSocket-019784?style=flat-square&logo=socketdotio&logoColor=white" />
<img src="https://img.shields.io/badge/GDB-C80000?style=flat-square&logo=gnu&logoColor=white" />
</p>

<a href="https://github.com/DebasisCode/C-Degugger"><img src="https://img.shields.io/badge/View_Repository-0ea5e9?style=for-the-badge&logo=github&logoColor=white" alt="repo" /></a>

</td>
</tr>
</table>

### 🤖 Personalized Jarvis Assistant

Python voice assistant built with SpeechRecognition, pyttsx3, FastAPI and spaCy/NLTK that executes natural-language commands. Modular, extensible architecture with system control, web automation, task scheduling and plug-in commands.

<p>
<img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" />
<img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white" />
<img src="https://img.shields.io/badge/spaCy-09A3D5?style=flat-square&logo=spacy&logoColor=white" />
<img src="https://img.shields.io/badge/NLTK-154f5b?style=flat-square" />
&nbsp;<a href="https://github.com/DebasisCode/Personal-Jarvis"><img src="https://img.shields.io/badge/View_Repository-ec4899?style=for-the-badge&logo=github&logoColor=white" alt="repo" /></a>
</p>

<details>
<summary><b>🗂️ More things I've built</b></summary>

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

## 📊 GitHub Analytics

<!--
  Cards are served by github-profile-summary-cards and streak-stats, both of which
  render reliably. Deliberately NOT used here: github-readme-stats.vercel.app,
  github-readme-activity-graph.vercel.app and github-profile-trophy.vercel.app —
  each of those shared public instances is rate-limited hard enough that the images
  regularly fail to load. If you want those cards back, self-host them first:
  https://github.com/anuraghazra/github-readme-stats#deploy-on-your-own-vercel-instance
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

## ⚔️ Competitive Programming

<div align="center">

<a href="https://codeforces.com/profile/DebasisCodeforces"><img src="https://img.shields.io/badge/Codeforces-DebasisCodeforces-1F8ACB?style=for-the-badge&logo=codeforces&logoColor=white" alt="Codeforces" /></a>
<a href="https://leetcode.com/u/Debasis6969/"><img src="https://img.shields.io/badge/LeetCode-Debasis6969-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" alt="LeetCode" /></a>
<a href="https://www.codechef.com/users/codemaster_6"><img src="https://img.shields.io/badge/CodeChef-codemaster__6-5B4638?style=for-the-badge&logo=codechef&logoColor=white" alt="CodeChef" /></a>

<br /><br />

**Codeforces — live from the Codeforces API**

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

## 🌐 Connect With Me

<div align="center">

<a href="https://www.linkedin.com/in/debasis-chattaraj-4370ba220/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
<a href="mailto:flancer250@gmail.com"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
<a href="https://drive.google.com/file/d/1cudQzuAQi7d6S3ldLEuKeWP6hN_Iwmar/view?usp=sharing"><img src="https://img.shields.io/badge/Resume-8b5cf6?style=for-the-badge&logo=readdotcv&logoColor=white" alt="Resume" /></a>
<a href="https://github.com/DebasisCode?tab=repositories"><img src="https://img.shields.io/badge/Repositories-181717?style=for-the-badge&logo=github&logoColor=white" alt="Repositories" /></a>

</div>

---

<div align="center">
  <sub>✨ Thanks for visiting my profile — let's build something amazing together.</sub>
</div>
