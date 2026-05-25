# Beamcue — Session Notes

**Last session:** 24 May 2026
**Status:** Foundation complete. Landing page live on GitHub Pages. Vercel deploy pending.

---

## What's built and working

- **Multi-tenant Next.js 14 app** running locally on `~/Documents/Beamcue/code/beamcue`
  - Auth: Supabase magic-link (deferred — auth URLs not yet configured, see TODO.md)
  - Realtime: working end-to-end. Operator pushes a slide, overlay updates instantly.
  - Database: 5 tables in Supabase project `ckqbzizywrjmoiguevid` with RLS, multi-tenancy via `church_id`
  - 5 slide types: title, scripture, lower_third, plain_text, black
- **Repo:** github.com/beamcue/beamcueapp (`main` branch = app, `gh-pages` branch = static landing)
- **Static landing page:** live at **https://beamcue.github.io/beamcueapp/**
  - Light theme, editorial design, full marketing structure
  - Waitlist form points to Formspree placeholder — NOT YET WIRED to a real service
- **Documents in repo:**
  - `CLAUDE.md` — workflow doc for future Claude sessions (always pull-rebase before push)
  - `LAUNCH_PLAN.md` — landing page strategy, demo video shot list, launch motion
  - `TODO.md` — deferred items with triggers
  - `SESSION_NOTES.md` — this file

---

## Critical context for tomorrow

### The PAT
Bolaji's GitHub PAT for the beamcue org is stored in chat history (decided not to revoke).
**Do NOT commit the token value to any file in the repo** — GitHub secret-scanning will reject the push.
Read the token from chat context at session start, substitute at runtime only.

Push pattern (from `CLAUDE.md`):
```bash
cd /home/claude/beamcueapp && \
  git add <paths> && \
  git commit -m "<message>" && \
  git pull --rebase https://beamcue:<TOKEN>@github.com/beamcue/beamcueapp.git main && \
  git push https://beamcue:<TOKEN>@github.com/beamcue/beamcueapp.git main
```

For gh-pages branch (the static landing page):
```bash
cd /home/claude/beamcue-static && \
  git add <paths> && git commit -m "<message>" && \
  git push https://beamcue:<TOKEN>@github.com/beamcue/beamcueapp.git gh-pages
```

### Supabase
- Project ref: `ckqbzizywrjmoiguevid`
- URL: `https://ckqbzizywrjmoiguevid.supabase.co`
- Anon key (public, in `.env.local`): `eyJhbGci...` (full value in chat history + `.env.local` on Bolaji's laptop)
- Auth URLs: NOT YET CONFIGURED. Triggered when domain is bought.
- Schema migrations all run (`001_init.sql`, `002_test_data.sql`, `003_dev_policies.sql`)

### Dev shortcuts (no auth required, only local)
- `localhost:3000/dev/operator` — operator app, hardcoded to "test" church
- `localhost:3000/overlay/test` — overlay for the test church

### Bolaji's working environment
- macOS, code at `~/Documents/Beamcue/code/beamcue`
- Node v25.8.1, npm 11.11.0, git 2.50.1
- Already ran `npm install` and `npm run dev` works
- **Not a typical developer** — prefers Claude to do git operations via bash_tool sandbox, NOT manual Terminal commands. Critical: do NOT ask him to open Terminal.

---

## What's pending (priority order for next session)

1. **Wire the waitlist form** (5 min)
   - Sign up at Formspree, get form ID
   - Update the form action in `/home/claude/beamcue-static/index.html`
   - Push to gh-pages
   - Page becomes fully shareable

2. **Buy domains** (Bolaji's task, requires payment)
   - beamcue.com (~£11/yr)
   - beamcue.app (~£11/yr)
   - beamcue.io (~£28/yr)
   - beamcue.live (~£25/yr)
   - Porkbun.com is the registrar checked

3. **Vercel deploy** (10 min once SMS issue resolves)
   - SMS verification was failing earlier — Bolaji to try again, or DM @vercel on X
   - Once on dashboard: import beamcue/beamcueapp repo, add 2 env vars (URL + anon key), deploy
   - Update Supabase auth URLs to production domain

4. **Migrate Calvary onto Beamcue** (the proof-of-life moment)
   - Once production is live, set up Calvary as the first church
   - Run for 2 Sundays before any public launch
   - Capture testimonial + 60-second demo video

---

## Decisions made tonight (for future sessions to respect)

- **Brand name:** Beamcue (cleared via deep research — strict-clear name with .com/.app/.io/.live available)
- **Vertical:** Church AV / livestream overlays, broadenable to corporate webinars + esports later
- **Business model:** Self-serve SaaS, no sales calls, no LinkedIn theatre
- **Pricing:** Free (with watermark) + Pro £19/mo or £190/yr
- **Visual direction:** Light theme for marketing surfaces (landing, login), dark theme for app surfaces (operator, overlay, dashboard)
- **Typography:** Fraunces serif (display) + Inter Tight (body)
- **Single most important rule:** Stable > Recoverable > Onboarding-safe > Data-safe (priority order from BEAMCUE_SPEC.md)
- **No public launch** until Calvary has run 2+ clean Sundays on Beamcue

---

## What NOT to do in the next session

- Don't redo strategy / vertical / naming research (it's done)
- Don't tell Bolaji to open Terminal — push directly via bash_tool sandbox
- Don't add features outside the 5 slide types until v1 is shipped to real users
- Don't suggest deploying to Netlify "instead" of Vercel — Bolaji wants Vercel
- Don't ask "are you sure?" three times before doing things — Bolaji is decisive

---

*Resume by reading: `CLAUDE.md`, then this file, then `LAUNCH_PLAN.md` and `TODO.md` as needed.*
