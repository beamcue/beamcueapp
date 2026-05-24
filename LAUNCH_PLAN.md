# Beamcue — Launch Plan

**Status:** Draft v1 · 24 May 2026
**Owner:** Bolaji Olatoye
**Scope:** Landing page strategy + OBS demo video + go-to-market launch checklist

This is the plan for going from "Beamcue works on my laptop" to "Beamcue has its first 30 paying churches." Three sections that map to three phases of work:

1. **Landing page** (Phase 1 — pre-launch, the surface that converts visitors)
2. **Demo video** (Phase 2 — the proof, recorded after first real install)
3. **Launch motion** (Phase 3 — the channels, posts, and sequence)

---

## Part 1: Landing Page Strategy

### Who lands here and why they leave

Cold visitor profile: a church AV volunteer or tech lead, age 25-50, Googling "ProPresenter alternative free" or "OBS scripture overlay" at 11pm on a Tuesday because their current setup broke last Sunday. Or they're in r/churchtech, someone mentioned Beamcue, they clicked.

What they want to know in this order, all within 30 seconds:

1. **"What does it actually do?"** — they need to see it, not read about it
2. **"Will it work with my setup?"** — OBS is the magic word; if they don't see that immediately, they bounce
3. **"Is it real?"** — proof: who's using it, screenshots, GitHub, real demos
4. **"What does it cost?"** — they need the number before they invest 60 seconds of evaluation
5. **"How do I try it?"** — one button, magic-link signup, no credit card

If they don't get those five answers in 30 seconds, they're gone.

### The page structure

```
┌─────────────────────────────────────────────────────────────┐
│ NAV: logo · features · pricing · sign in · [Try free]       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│             [HERO: 60-second auto-playing demo]             │
│                                                             │
│      Push lyrics, scripture, and lower thirds to OBS        │
│              from your phone. No install.                   │
│                                                             │
│            [Try free] [Watch 60s demo ▶]                    │
│                                                             │
│   "From signup to live overlay in 2 minutes. We tested."    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                  HOW IT WORKS — 3 steps                     │
│  [1] Sign up    [2] Paste URL in OBS    [3] Push slides     │
├─────────────────────────────────────────────────────────────┤
│              WHO IT'S FOR — 3 personas, 1 line each         │
├─────────────────────────────────────────────────────────────┤
│                  WHY BEAMCUE — comparison                   │
│              vs ProPresenter, OBS plugins, etc.             │
├─────────────────────────────────────────────────────────────┤
│                       PRICING                               │
│         Free (with watermark) · Pro £19/mo                  │
├─────────────────────────────────────────────────────────────┤
│              SOCIAL PROOF — quotes + logos                  │
├─────────────────────────────────────────────────────────────┤
│                          FAQ                                │
├─────────────────────────────────────────────────────────────┤
│                  FOOTER — links + GitHub                    │
└─────────────────────────────────────────────────────────────┘
```

### Section-by-section copy

**Hero**

Headline (one line, large):
> Push lyrics, scripture, and lower thirds to OBS — from your phone.

Subhead (one line, smaller):
> Built for churches that stream their Sunday services. No install, no PowerPoint, no Mac required.

CTAs:
- Primary: `Try free` (links to /login — no credit card, magic-link signup)
- Secondary: `Watch 60s demo ▶` (anchor scrolls to demo or opens video modal)

Trust line below CTAs:
> Free forever for one church. Add Beamcue to your existing OBS setup in 2 minutes.

**Hero visual**

The autoplay demo video — 60 seconds, no sound required (captioned). Shows:
- Phone in hand, tapping next slide
- Cut to OBS preview window, overlay updates instantly
- Repeat 3 times with different slide types
- End frame: Beamcue logo + "Try free"

If video isn't ready yet, **substitute with an animated screenshot**: a static OBS window with the overlay layer animating between scripture, lower-third, and title slides on a 4-second loop. Captures the magic in static form.

**How it works — 3 steps**

Three cards, each with an icon, headline, and one supporting line:

> **1. Sign up**
> Free in 30 seconds. Magic link, no password.

> **2. Paste your overlay URL in OBS**
> Add it as a Browser Source. Done.

> **3. Push slides from any device**
> Phone, iPad, laptop. Updates appear instantly.

**Who it's for — 3 personas**

> **Solo media volunteers**
> You set up the AV at your small-to-mid church. You don't have time to learn ProPresenter. Beamcue is the simplest tool that just works.

> **Worship leaders**
> Push scripture during your sermon, lyrics during songs, all from the iPad on stage. No more "wait, can we get the verse up?"

> **Streaming churches**
> You broadcast Sunday services to YouTube or Facebook. Beamcue gives you broadcast-quality lower thirds and scripture overlays without the broadcast budget.

**Why Beamcue — the comparison**

A simple table. This is the killer section because it answers the "but doesn't [X] already do this?" question:

| | Beamcue | ProPresenter | OBS plugins | EasyWorship |
|---|---|---|---|---|
| Price | £19/mo or free | £499 + Pro $499 | Free | $395/yr |
| Install required | No (browser) | Yes (Mac/Win) | Per-plugin | Yes (Win only) |
| Control from phone | ✅ | Limited | ❌ | ❌ |
| Works with any OBS scene | ✅ | N/A | ✅ | N/A |
| Multi-operator | ✅ | $$$ tier | ❌ | ❌ |
| Setup time | 60 seconds | Several hours | Varies | 30+ minutes |
| Built for streaming churches | ✅ | Generic | Generic | Generic |

**Pricing**

Two columns, side by side. Free is the entry; Pro is the upgrade.

> **Free**
> £0/month
> - Everything you need for one church
> - All slide types
> - All operator features
> - "Powered by Beamcue" watermark on overlay
>
> [Start free]

> **Pro**
> £19/month or £190/year
> - Remove the watermark
> - Custom colours and branding
> - Priority email support
> - Cancel anytime
>
> [Start free, upgrade anytime]

Below the table, a small note:
> No credit card required. Upgrade to Pro from your dashboard once you're up and running.

**Social proof — phase 1 (before any churches)**

Until you have testimonials, this section is blank or has a soft placeholder:
> *We're in the first weeks of rolling out Beamcue to UK churches. Want to be one of our early churches? [Try free →]*

**Social proof — phase 2 (after first 3-5 churches)**

Replace with quote cards. The first quote you want is from Calvary (Pastor Shade or your media lead):
> "Beamcue replaced our entire overlay workflow. Setup took 5 minutes."
> — *Scott M., Media Lead, Calvary Hephzibah, Manchester*

Add a "Trusted by" row below: a small grid of church names/logos (start with Calvary, add as they come in).

**FAQ**

Cover the 8 questions every prospect will have:

1. **Does it work with OBS Studio?** Yes. Beamcue is designed as an OBS Browser Source. If you already use OBS, you're 60 seconds from being set up.
2. **What about vMix / Streamlabs / Wirecast?** Yes — anything that supports a browser source URL works. We test against OBS first because it's free and the most common.
3. **Do I need a Mac?** No. Beamcue runs entirely in the browser. Operator app on any phone, tablet, or computer. OBS itself runs on Mac, Windows, or Linux.
4. **Can my whole team push slides?** Yes. Invite your team from your dashboard. Multiple people can push at once.
5. **What translations of the Bible are included?** KJV (King James) is bundled. For other translations, paste verse text from your preferred source. ESV and NIV support coming later.
6. **Will it work for a small church (under 50 people)?** Yes. The free tier is designed for exactly that.
7. **What if my internet drops mid-service?** The current slide stays on the overlay. Your operator app reconnects automatically. The overlay never goes blank without you telling it to.
8. **Can I cancel anytime?** Yes. Cancel from your dashboard. No phone calls.

**Footer**

Standard. Logo, two columns:
- Product: Features · Pricing · Sign in · Status
- Company: About · Contact · GitHub · Privacy · Terms

Bottom line:
> Beamcue Ltd. Made for churches.

### Tone notes

- **Don't overclaim.** "60 seconds to set up" is a real promise — back it up. Don't say "the world's best church overlay tool" when you have one church.
- **Don't oversell scripture/religion.** This is a software tool. The market is church AV volunteers, not pastors. Keep the tone professional, not preachy.
- **Use specific numbers.** "60-second setup," "£19/month," "5 slide types." Specific numbers beat vague claims.
- **Show, don't tell.** Every claim ("works with OBS," "real-time sync") should be visible in the demo video. The video is the proof, the copy is the framing.

### Conversion mechanics

The page has exactly one primary CTA: **Try free**. Every section should ladder back to it.

- Hero CTA: Try free
- After "How it works" — secondary CTA: Try free
- After pricing — primary CTA on Free column: Start free
- After FAQ — final CTA: Try free, no credit card

No "Book a demo" — Beamcue is a self-serve product, not enterprise sales. If someone wants a demo call, they email you. That's a feature request, not a sales motion.

### What we ship for v1 of the page

Phase 1a (this week, simplest version):
- Hero with screenshot (no video yet)
- 3-step "how it works"
- Pricing
- 2 FAQs (does it work with OBS, what does it cost)
- "Try free" CTA

Phase 1b (when demo video is recorded):
- Replace static screenshot with autoplay demo video
- Add comparison table
- Add full FAQ

Phase 1c (when first 5 churches are using it):
- Add social proof section with real quotes
- Add "Trusted by" logo row

---

## Part 2: The 60-Second Demo Video

### Why this video matters disproportionately

It's the single highest-leverage asset for Beamcue's launch. It will:
- Sit on the landing page hero (converts cold visitors)
- Be embedded in every Reddit / Facebook post (gets clicks instead of TL;DRs)
- Appear in cold emails (proves the product is real)
- Become the OBS setup tutorial (used by every new signup)

One 60-second video, recorded once, does the work of 50 marketing posts.

### The shot list (60 seconds, 8 shots)

**Shot 1 — 0:00-0:03 — Hook**
- Visual: close-up of a phone, finger tapping "Next slide"
- Caption overlay: "From this phone…"
- No voice-over yet, ambient music starts

**Shot 2 — 0:03-0:06 — The payoff**
- Visual: cuts immediately to OBS preview window on a laptop screen, the overlay appears in <500ms
- Caption: "…to OBS, instantly."
- This is the magic moment, hold the frame for 1 extra second

**Shot 3 — 0:06-0:12 — Context**
- Visual: wider shot showing both phone and laptop side by side, scene setting (small AV desk, maybe at a real church)
- Caption: "Beamcue is a slide and scripture overlay for OBS, built for streaming churches."
- Voiceover (optional): "Beamcue lets your volunteer operator push slides from anywhere."

**Shot 4 — 0:12-0:25 — The 5 slide types in action**
- Visual: quick cuts between phone screen showing each type and OBS showing the result:
  - Title slide ("Sunday Service — May 24")
  - Scripture ("John 3:16 — For God so loved the world…")
  - Lower third (speaker name)
  - Plain text (a hymn line)
  - Cut to black
- Captions: type name appears on each slide
- This is the feature reveal — fast-paced, the proof that it really does what we claim

**Shot 5 — 0:25-0:35 — Setup speed**
- Visual: screen recording of the signup flow → onboarding → "paste this URL into OBS" → done
- Caption: "Signup to live overlay in 2 minutes."
- This is the objection-killer for "won't it take forever to set up"

**Shot 6 — 0:35-0:45 — Multi-device**
- Visual: split screen showing iPad pushing one slide, phone pushing the next, both updating the same overlay
- Caption: "Your worship leader and your media op can both push slides. No conflicts."

**Shot 7 — 0:45-0:55 — Pricing/CTA**
- Visual: text card with the pricing
- Caption: "Free forever for one church. £19/month to remove the watermark."

**Shot 8 — 0:55-0:60 — Logo close**
- Visual: Beamcue logo, URL (beamcue.com), QR code linking to /login
- Caption: "Try free. No credit card."

### Production notes

- **No fancy editing software needed.** Loom or Apple's built-in Screen Recording for the screen shots, iPhone camera for the phone-and-laptop shots, iMovie or Descript to stitch them. Total production time: 2-3 hours.
- **No voiceover required for v1.** Captions + ambient music is enough. Music: something instrumental, modern-cinematic. Recommended search: "background music for tech demo" on Artlist.io or Epidemic Sound. Avoid worship music — it would narrow the market.
- **Shoot at Calvary if possible.** Real church AV booth, real laptop running OBS, real iPad. The authenticity reads on camera. Get Scott in one of the shots if he's willing.
- **Sound matters more than video.** A grainy iPhone shot with crisp audio is fine; a beautiful shot with audio dropouts is not. Use external mic if you're recording any spoken parts.

### When to record

Trigger: **Calvary's first live Sunday using Beamcue** (currently your beta of one). Record b-roll during that service. Then schedule a 90-minute weekday session at the AV booth to capture the specific shots above.

Realistic timeline: 2-3 weeks from today, assuming Calvary migrates next Sunday.

### What the video is not

- **Not a tutorial.** It's a sales asset. Tutorials are separate and longer (3-5 minutes, on YouTube, optimised for "how to add lower thirds to OBS for church livestream").
- **Not a sermon.** Don't lead with the church-y framing. Lead with the product. Church framing is in shot 3, not shot 1.
- **Not a feature list.** Show the feeling, not the feature matrix. The matrix is on the landing page comparison table.

---

## Part 3: Launch Motion

### Phase 0: pre-launch (this week and next)

Before any public launch:

- [ ] Buy domains (beamcue.com, .app, .io, .live)
- [ ] Vercel deployed and accessible at a production URL
- [ ] Supabase auth URLs configured for production
- [ ] Landing page v1a live (no video yet, just screenshot)
- [ ] Migrate Calvary off the current Control Room and onto Beamcue (proof to ourselves it works for a real church)
- [ ] Record the 60-second demo video
- [ ] Replace landing page screenshot with the video (v1b)
- [ ] Take 3-5 high-quality screenshots for posts (overlay full-screen, operator UI, OBS scene with Beamcue running)
- [ ] Create email account for support@beamcue.com
- [ ] Write the actual posts (drafts below)
- [ ] Test the full signup flow on 2-3 friends' devices to catch bugs

Hard rule: don't post anywhere until Calvary has used Beamcue live for at least 2 Sundays. We need to know it survives real production use.

### Phase 1: soft launch (week 1 of public)

Goal: 10-20 signups, 3-5 active churches, zero outages.

**Channel 1: Reddit r/churchtech**

The single most valuable channel. ~30K members, exactly your buyer.

Post timing: **Saturday morning UK time** (Friday afternoon US time — high engagement Saturday for church tech folks prepping for Sunday).

Post title (one of these, A/B test by gut):
- "I built a free OBS overlay tool for our church streams — sharing in case it helps yours"
- "We replaced ProPresenter with a browser-based tool I built. Open-sourcing the approach."
- "Built a $0 OBS browser source overlay for our small church (free for yours too)"

Post body (use this draft, edit voice to match yours):

> Hi r/churchtech,
>
> Our church (small, ~80 people, streams to YouTube) was using a mess of OBS hacks and a free EasyWorship install for lower thirds and scripture overlays. It worked but was painful — Sunday morning panics whenever the laptop running EasyWorship hiccupped.
>
> Over the last few weeks I built **Beamcue** to fix this for ourselves. It's a browser-based slide overlay that runs as an OBS Browser Source. You control it from any device (phone, tablet, laptop) and the overlay updates in OBS in realtime.
>
> Five slide types in v1: title, scripture, lower third, plain text, cut to black. That's it. Deliberately small.
>
> **It's free for one church** (with a small Beamcue watermark in the corner). £19/mo if you want to remove the watermark.
>
> Demo + signup: beamcue.com
> 
> Happy to answer any questions. Built this for us first, sharing it in case other small streaming churches find it useful.
>
> Edit: I'll be hanging around in the comments today, ask away.

**Critical:** stay in the comments for 24 hours after posting. Reply to every question, every "have you considered…", every "this is similar to X." Engagement is the algorithm.

**Channel 2: Facebook group "Church Tech Geeks"**

~50K members. More moderated than Reddit, less appetite for self-promotion. Read the rules first.

Strategy: don't lead with a "I built this" post. Instead, lead with **a useful tutorial that happens to use Beamcue**.

Post title: "How we cut our church AV setup from 4 tools to 1 (and made it free)"

Body: A short walkthrough of the before/after — what tools the church used to use, what replaced them, how the overlay-in-browser approach works. Mention Beamcue once, at the end, with a link.

This works because the post is genuinely useful to read even if you never click. The link converts the curious.

**Channel 3: Personal LinkedIn (yours + Funmi's)**

Soft, story-driven post. Not a launch announcement, more "here's what I've been working on."

Draft:

> Spent the last few weeks building **Beamcue** — a browser-based slide and scripture overlay for church livestreams. Solo founder mode.
>
> Why? Our church streams Sunday services and the existing tools (ProPresenter, EasyWorship, OBS hacks) are either expensive, Windows-only, or painful to set up.
>
> Beamcue runs entirely in the browser. Operator controls from a phone or tablet. OBS picks it up as a Browser Source. Realtime sync via Supabase.
>
> Live at beamcue.com — free for one church.
>
> The interesting build decision: I used the same product engine to power three different surfaces (operator, overlay, admin), all driven by one realtime channel per church. Next.js + Supabase. Total infrastructure cost so far: £0/month.
>
> If you know a church AV lead who'd benefit, send them the link.

LinkedIn rewards founder narratives. Don't be salesy.

**Channel 4: Indie Hackers / Product Hunt (later)**

Defer to Phase 2. Indie Hackers and Product Hunt are for *after* you have ~10 paying customers and some real story to tell. Launching too early there burns the asset.

### Phase 2: ramp (weeks 2-6)

Goals:
- 50-150 signups
- 15-30 active churches
- 5-10 paying Pro subs (£95-£190/mo MRR)

**Repeat tactics that worked**, drop tactics that didn't:

- If Reddit r/churchtech post got 50+ upvotes → schedule another post in 4 weeks (different angle: "What we learned running 3 churches on Beamcue")
- If Facebook tutorial got engagement → write 3 more useful tutorials over the next 4 weeks
- If LinkedIn got 5+ DMs → continue posting weekly

**Add new channels:**

- **YouTube tutorials** — start a "Church AV with Beamcue" channel. Three videos in the first month:
  1. "How to add scripture overlays to your church livestream (using OBS + Beamcue)"
  2. "ProPresenter alternative for small churches"
  3. "Multi-camera church streaming setup for under £500"
  Long-form SEO. Each video can earn signups for years.

- **Twitter/X presence** — daily small posts. Behind-the-scenes of building, screenshots of new features, signups counter ("Beamcue is now in 12 churches"). Build in public.

- **Cold outreach to 50 small UK churches** — Funmi sends, soft personal note: "Saw your YouTube livestream — built a tool that might help your AV team. Free to try if useful." Not at scale, hand-written feeling.

### Phase 3: scale (months 2-6)

Goals:
- 800 signups
- 150 active churches
- 30+ paying Pro subs (£570/mo MRR)
- First case studies recorded

**Add:**

- **Product Hunt launch** — schedule for a Tuesday in month 3 or 4. Need 100+ active churches and a clear win story. Plan the launch a month ahead.
- **Indie Hackers** — write a long-form post about the journey: "$0 to £500 MRR in 4 months building a SaaS for niche audiences." High-signal content that draws attention.
- **Podcast outreach** — get on the Church Media Guys podcast, Streaming Church podcast, AV Industry Podcast. Founder-led, story-driven.

### Failure modes — what kills launches like this

- **Premature scaling of messaging.** If the product is buggy, no amount of marketing fixes it. Calvary needs 4-6 weeks of clean Sunday usage before public launch.
- **Spreading too thin.** Pick 2 channels (Reddit + LinkedIn), do them well, ignore the rest until they're working.
- **Selling instead of helping.** Church tech communities sniff out salesy posts immediately. Lead with usefulness, mention Beamcue in passing.
- **No follow-up.** Someone signs up but doesn't return → email them in 48 hours: "Did you get a chance to try it? Anything blocking you?" Manual until you have a hundred users.

---

## What I'd actually do this week

Rank-ordered:

1. **Get Vercel sorted** (deploy unblocks everything)
2. **Buy domains** (beamcue.com locks in the brand foundation)
3. **Configure Supabase auth URLs** (login works in production)
4. **Migrate Calvary to Beamcue** (first real church, proof of life)
5. **Write the landing page v1a copy** (using the structure above — I can draft this in-chat)
6. **Polish the operator UI** (the bits Calvary's volunteers will use)

Don't do any launch motion until #4 is rock-solid for at least 2 Sundays.

---

*End of plan. Updated as we learn.*
