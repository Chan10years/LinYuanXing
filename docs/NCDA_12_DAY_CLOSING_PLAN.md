# NCDA 12 Day Closing Plan

## Summary

Adopt a "website first, then materials" rhythm, but keep the website phase strictly limited to 2-3 days. The website work should serve judging clarity, submission stability, and competition storytelling, not visual polish for its own sake.

The project remains a pure static HTML / CSS / JavaScript NCDA 1-C1 competition MVP. Do not add backend services, databases, APIs, real login, real reservation, uploads, analytics, or production user flows.

## Key Changes

- Website tweaks should focus on judge comprehension: make the path from the homepage to `demo.html`, character archives, story archives, and world archives clearer.
- Prioritize competition-path issues: `demo.html` hero CTA hierarchy, homepage mobile quick links, tablet navigation density, and mobile button/card readability.
- UI polish must answer one question: does this help judges understand the work faster, navigate more clearly, or trust the submission boundary more?
- Keep high-risk boundaries closed: do not modify `script.js`, do not modify `submission/`, do not add pages, and do not introduce new media assets.
- Video work stays separate. After the user completes additional videos, review only the needed references, wording, or demo-script alignment.

## 12 Day Rhythm

- Day 1: Implement website micro-fixes for `demo.html` CTA hierarchy, homepage mobile quick links, and navigation breakpoints.
- Day 2: Align target-page headings, buttons, cards, and spacing across `index.html`, `demo.html`, `archives.html`, `characters.html`, and `archive.html`.
- Day 3: Run responsive and link-flow checks; fix only issues that affect competition presentation, then freeze the website structure.
- Day 4-5: Refine the 3-minute judge walkthrough script so it covers positioning, design purpose, information architecture, core experience, technical route, innovation, practicality, and static boundaries.
- Day 6-7: Prepare board, poster, work-introduction image text, and related written materials with one consistent project positioning.
- Day 8: Review completed video additions only after the user provides them; align references and wording if needed.
- Day 9: Recheck links, resource paths, mobile behavior, and static deployment assumptions.
- Day 10: Run anonymous-compliance checks for school, author, adviser, student ID, official competition marks, and other identity signals.
- Day 11: Manually review the submission package and make sure the site, assets, notes, and materials can explain the work independently.
- Day 12: Freeze the version. Only final preview and missing-item checks are allowed.

## Test Plan

- Website path: `index.html` -> `demo.html` -> character/story/world archives -> detail pages should be clear.
- Responsive widths: 390px, 430px, 768px, and 1024px should not show obvious horizontal overflow or broken buttons/cards.
- Competition story: the 3-minute route should cover project positioning, design purpose, architecture, core experience, technical route, innovation/practicality, and future boundary.
- Static boundary: no real login, reservation submission, API, database, backend, upload, analytics, or real download behavior.
- Material consistency: website, script, board, poster, and work-introduction image should use the same positioning and completion boundary.

## Assumptions

- Website work is capped at 2-3 days before shifting to materials.
- The user owns video production; Codex only reviews integration or consistency after videos are provided.
- Competition goals outrank pure visual polish.
- Any real bug in `script.js` should be reported first and fixed only after explicit confirmation.
