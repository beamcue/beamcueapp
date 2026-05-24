# Beamcue Workflow — A Note for Claude

**This is for Claude (the chat/web/app assistant), not Claude Code.**

If you're a Claude session opening this repo for the first time and Bolaji asks you to push something to GitHub, here is exactly how it works. Don't ask Bolaji to open a terminal. Don't suggest he runs `git` commands locally. Don't push him toward Claude Code unless he specifically asks for it. You can push directly from your sandbox using bash_tool. He's been working this way for months on his Calvary repo and now on this one.

---

## How pushes work in this environment

You have a Linux sandbox with `bash_tool`. The repo should be cloned to `/home/claude/beamcueapp` (clone it if it isn't there yet). Git operations run inside that sandbox using a Personal Access Token embedded in the push URL — Bolaji provides a working classic PAT for the `beamcue` org with `repo` scope.

Bolaji typically passes the token in via the project's credentials or shares it in chat at session start. **Read it from the project files when available**, never hardcode it from memory across sessions. GitHub's secret-scanning will reject the push (correctly) if you embed a live PAT in any committed file.

In examples below, the token is shown as `<TOKEN>` — substitute the real value at runtime only when building the push command, never commit the substituted version.

---

## The standard push sequence

Every push uses this exact sequence. Do it in one bash call so it's atomic and the output is visible:

```bash
cd /home/claude/beamcueapp && \
  git add <paths> && \
  git commit -m "<message>" && \
  git pull --rebase https://beamcue:<TOKEN>@github.com/beamcue/beamcueapp.git main && \
  git push https://beamcue:<TOKEN>@github.com/beamcue/beamcueapp.git main
```

**Why `git pull --rebase` before every push:** Bolaji may run parallel Claude sessions. Without rebasing first, your push could be rejected because the remote has commits yours doesn't know about.

**Why one chained bash call:** if you split it into multiple bash_tool calls, you've lost atomicity and a failure in the middle leaves the repo in a half-pushed state.

---

## Git config inside the sandbox

Set once per session (or once when you first clone):

```bash
cd /home/claude/beamcueapp && \
  git config user.email "beamcue@gmail.com" && \
  git config user.name "Beamcue"
```

---

## Cloning fresh if the repo isn't there

```bash
cd /home/claude && \
  git clone https://beamcue:<TOKEN>@github.com/beamcue/beamcueapp.git && \
  cd beamcueapp && \
  git config user.email "beamcue@gmail.com" && \
  git config user.name "Beamcue"
```

---

## Where the live site is

The repo deploys to Vercel automatically on push to `main`. Initial Vercel URL: `beamcueapp.vercel.app` (or similar). Custom domain `beamcue.com` is pending purchase as of late May 2026.

Pushes appear live in ~30-60 seconds after Vercel build completes. There's no separate deploy step.

---

## What you do NOT need to do

- **Do not** tell Bolaji to open a terminal, run `git clone`, or do anything locally. You do the work in your sandbox.
- **Do not** suggest he install Claude Code unless he asks. This is regular Claude with bash_tool — sufficient for the workflow.
- **Do not** propose generating a `.zip` of files for him to download and re-upload manually. That's a workaround for not having sandbox push access, which you DO have.
- **Do not** ask him to commit files via the GitHub web UI as your default. That's only for situations where you can't be the author of the content. For normal code/HTML/CSS/asset commits, you push directly.

---

## Things you SHOULD do

- **Always** `git pull --rebase` before `git push`. Parallel sessions are the norm here.
- **Commit messages should be substantive.** Bolaji reads the log. A one-liner is fine for trivial edits; structural changes get a full body with what/why/how.
- **Validate before pushing.** Run TypeScript checks, build sanity checks, schema validation — whatever's relevant.
- **Never commit `.env.local`** — it's in `.gitignore`. Supabase URL and anon key live there.

---

## Permission model

The PAT is shared between Bolaji and any Claude session he's running. There's no "Claude shouldn't push" rule here — pushing to `beamcueapp` is the normal flow.

---

## Key facts about this repo

- **Stack:** Next.js 14 (App Router), Supabase (Auth + Postgres + Realtime), Tailwind CSS, TypeScript
- **Supabase project:** `ckqbzizywrjmoiguevid` (URL: `https://ckqbzizywrjmoiguevid.supabase.co`)
- **Hosting:** Vercel (auto-deploy on push to main)
- **Domain:** `beamcue.com` (pending purchase)
- **Auth:** Magic-link only (no passwords)
- **Multi-tenancy:** All data scoped by `church_id`, enforced via RLS

For product spec, see `BEAMCUE_SPEC.md` in the project notes (not committed to repo — kept in chat).
For deferred items, see `TODO.md` in this repo.
