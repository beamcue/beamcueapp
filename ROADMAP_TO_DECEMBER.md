# Beamcue — Roadmap to December 2026

**Author:** Bolaji Olatoye
**Date written:** 25 May 2026
**Status:** Current operating plan (supersedes `ROADMAP_TO_SEPTEMBER.md`)
**Target:** £3-5K MRR by 31 December 2026
**Model:** Hands-off, product-led SaaS with optional setup add-on
**Founder commitment:** Build product, produce content, manage ads. No sales calls.

---

## What changed from the previous plan

The earlier `ROADMAP_TO_SEPTEMBER.md` committed to a hybrid model with 5-15 sales calls per week. On reflection, that path replicated the pattern that drained Bolaji across PestFlow, Altitude AI, and Alpha Piling — calls and consultative selling that fight against his actual energy and preferences.

This plan trades 8-10 weeks of speed for a fundamentally hands-off operating model. £3-5K MRR by end of December instead of end of September, but achieved through distribution channels that don't require Bolaji to be on calls.

The two key structural changes:

1. **Pricing moves from 2 tiers (Free + Pro) to 4 tiers (Free + Starter + Pro + Studio).** Setup fee becomes an optional add-on at checkout, not the lead offer.

2. **Sales motion is replaced entirely by content + ads + community + integrations.** No outbound calls.

---

## The target, stated honestly

£3-5K MRR by 31 December means roughly 175-300 paying customers across the new tiered structure. The realistic mix at £4K MRR:

- ~40% Starter (£9/mo) — 70 customers = £630/mo
- ~50% Pro (£19/mo) — 88 customers = £1,672/mo
- ~10% Studio (£49/mo) — 18 customers = £882/mo
- **Total: ~176 paying customers, £3,184 MRR**

Plus revenue from the optional Setup add-on at checkout: if 15% of paying customers add it (£199 one-time), that's ~£5,250 in additional cash through the year.

If we hit the upper end (~293 paying, £4,800 MRR), we're firmly in the £5K target.

---

## The new pricing structure

| Tier | Monthly | Annual | What it includes |
|---|---|---|---|
| **Free** | £0 | £0 | All 5 slide types · 1 operator · "Powered by Beamcue" watermark |
| **Starter** | £9/mo | £89/yr | Free + no watermark + custom colour |
| **Pro** | £19/mo | £179/yr | Starter + multi-operator + custom branding + priority email support |
| **Studio** | £49/mo | £459/yr | Pro + multi-site/campus + API access + custom scripture pack + white-glove migration |
| **Setup add-on** | £199 one-time | — | Optional checkout add-on for any paid tier. We set Beamcue up for you, train your team, 30-day support window. |

### Why this structure works

- **Starter at £9/mo** captures the long tail of tiny churches that would never pay £19. There are 10x more of them than mid-sized ones. Even £108/year per customer is materially better than free.
- **Pro at £19/mo** stays the sweet spot. Most paying customers land here.
- **Studio at £49/mo** is where multi-campus churches and broadcast operations self-select. They pay it because they need multi-site or API access — you don't have to sell anything.
- **Setup as an add-on** captures the "I want help" segment without it being the lead offer. They've already bought; setup is an upsell at checkout. No qualification calls.

### Annual discount logic

Annual ≈ 21% off vs monthly (consistent across tiers):
- Starter: £108/yr if monthly → £89/yr annual (~18% off)
- Pro: £228/yr if monthly → £179/yr annual (~21% off)
- Studio: £588/yr if monthly → £459/yr annual (~22% off)

Default toggle stance: **annual**. Visitor sees the better price first.

---

## The rocket fuel mix

Eight distribution channels ranked by expected ROI. Bolaji actively runs the top 4-5. The rest are deferred until top channels are working.

### Tier 1 channels (the engine)

**1. YouTube tutorials (highest long-term leverage)**
- Target: 6-8 videos by end of September, then weekly cadence to December
- Topics target search intent: "ProPresenter alternative", "OBS scripture overlay", "church livestream setup 2026", "phone-controlled church AV"
- Each video: 4-6 hours to produce. Pays off for years.
- Expected contribution: 30-80 paying customers by December = £400-£1,500 MRR

**2. Paid Facebook + Google ads (fastest ramp)**
- Start at £20/day for 14-day test, scale to £40-60/day if CAC is healthy
- Target: UK church AV / streaming interest groups, also "church technology" and similar B2B audiences
- Expected CAC: £30-£80 initially, dropping to £25-£50 with optimisation
- Expected contribution: 60-120 paying customers by December = £900-£2,000 MRR
- Total ad spend through December: £3,000-£5,000

**3. Sponsored video with church-tech YouTuber (one-shot rocket fuel)**
- 2-3 sponsored mentions/integrations with channels like Church Media Guys, Streaming Church, AV Lab
- Cost: £200-£500 each
- Per video: 30-80 trials, 8-15 paying customers
- Expected contribution: 25-50 customers across 2-3 videos = £400-£800 MRR

**4. Reddit r/churchtech sustained presence**
- Daily helpful presence (5-15 min/day), monthly substantive post
- Don't lead with Beamcue — be the helpful "AV person who runs streams for a UK church"
- Expected contribution: 20-40 customers by December = £300-£600 MRR

### Tier 2 channels (worth doing, secondary)

**5. Facebook group presence ("Church Tech Geeks" + denominational groups)**
- Similar play to Reddit, different audiences (more pastor/admin, less volunteer)
- 2-3 hours/week
- Expected contribution: 15-30 customers by December = £200-£500 MRR

**6. Free lead magnet ("Church Livestream Setup Checklist")**
- One-time build (~10 hours)
- Pair with Facebook ad campaign
- Drip 2-3 educational emails, last one mentions Beamcue
- Expected contribution: 20-40 customers by December = £300-£600 MRR

### Tier 3 channels (deferred to Q4 or 2027)

**7. SEO blog content** — slower compound than YouTube, lower priority until video is working
**8. Product Hunt launch** — October/November once testimonials and demo are solid
**9. Denominational partnerships** — VA-driven outreach only, Bolaji not on calls

### Honest combined contribution

If 4-5 of the Tier 1+2 channels work well by December: **£2,500-£5,000 MRR**. Right in our target.

If only 2-3 channels work: £1,500-£3,000 MRR. Below target but still real revenue.

---

## The 30-week timeline

### Phase 1 — Foundation (weeks 1-3 · 25 May - 14 June)

**Goal:** Beamcue publicly live, Calvary running, pricing structure shipped.

Weekly milestones:

**Week of 25 May (this week)**
- [ ] Decide architecture: keep Vercel/Next.js OR rebuild as static GitHub Pages (decide by Wed)
- [ ] Buy domains (beamcue.com, .app, .io, .live, ~£75)
- [ ] If staying with Vercel: resolve SMS verification or DM @vercel support
- [ ] If switching to static: 2-3 day rewrite as static + JS over the weekend
- [ ] Wire waitlist form to real Formspree account

**Week of 1 June**
- [ ] Implement 4-tier pricing in product code + landing page + Stripe
- [ ] Add Setup add-on as optional checkout step
- [ ] Wire Stripe webhooks for all four tiers
- [ ] Run Calvary on Beamcue for Wednesday/midweek service (test)
- [ ] Configure Supabase auth URLs for production domain

**Week of 8 June**
- [ ] Calvary first Sunday on Beamcue (with Control Room as backup)
- [ ] Record b-roll from the service for demo video
- [ ] Plan and outline YouTube video #1
- [ ] Buy any needed mic/lighting (£50-£100 budget)

**Exit criteria for Phase 1:**
- Beamcue live at beamcue.com with 4-tier pricing
- Calvary completed at least one Sunday on Beamcue
- Mic + lighting setup ready for YouTube
- Video #1 fully scripted, not yet recorded

**Phase 1 budget: £75 domains + £100 production gear = £175**

---

### Phase 2 — Content engine starts (weeks 4-8 · 15 June - 19 July)

**Goal:** First YouTube video live. First Facebook ad campaign live. First content-driven signups.

Weekly milestones:

**Weeks 4-5 (15-28 June)**
- [ ] Record YouTube video #1 ("ProPresenter alternative for small churches in 2026")
- [ ] Edit, thumbnail, publish — full process documented for video #2
- [ ] Launch first £20/day Facebook ad campaign (14-day test)
- [ ] Calvary second Sunday on Beamcue (less safety net)
- [ ] Publish first Reddit r/churchtech post (helpful tone, mentions Beamcue once)

**Weeks 6-7 (29 June - 12 July)**
- [ ] **HONEST CHECKPOINT: Was making video #1 sustainable?**
  - If yes: commit to weekly cadence, plan videos #2-5
  - If no: shift weight to ads + community, deprioritise YouTube
- [ ] Video #2 published (if test passed)
- [ ] Facebook ad creative refined based on Week 4-5 data
- [ ] First sponsored YouTuber outreach (3-5 channels contacted)

**Week 8 (13-19 July)**
- [ ] Video #3 published
- [ ] First sponsored YouTuber deal negotiated (~£300)
- [ ] Reddit second substantive post

**Exit criteria for Phase 2:**
- 3 YouTube videos live (or pivot if test failed)
- Facebook ads optimised, scaling profitably
- First sponsored YouTuber deal closed
- 15-40 paying customers, £150-£500 MRR

**Phase 2 budget:**
- Facebook ads: £280 (test) + £600 (scaled) = £880
- Sponsored video: £300
- Hosting/Supabase: £40 (likely staying free tier)
- Tools (email, analytics): £80
- **Phase 2 total: ~£1,300**

---

### Phase 3 — Scale what's working (weeks 9-16 · 20 July - 13 September)

**Goal:** Identify highest-ROI channels from Phase 2, double down. Hit £1-2K MRR.

Weekly milestones:

**Weeks 9-12 (mid-July to mid-August)**
- [ ] YouTube videos #4, #5, #6 published (one per week)
- [ ] First sponsored YouTuber video goes live
- [ ] Facebook ads scaled to £40-60/day
- [ ] Hire VA for community + content management (£500/mo) — they handle Reddit replies, Facebook group monitoring, ad reporting
- [ ] Build free lead magnet ("Church Livestream Setup Checklist")

**Weeks 13-16 (mid-August to mid-September)**
- [ ] Videos #7-8 published
- [ ] Second and third sponsored YouTuber videos
- [ ] Lead magnet live with Facebook ad campaign behind it
- [ ] VA establishes daily Reddit/FB group presence
- [ ] Add testimonials to landing page (2-3 minimum)

**Exit criteria for Phase 3:**
- 60-120 paying customers
- £1,000-£2,000 MRR
- 6-8 YouTube videos live, averaging 500-2,000 views each
- Ads running at sustainable CAC
- VA productive on community management

**Phase 3 budget:**
- Facebook ads: £1,800-£2,500
- Sponsored videos: £600-£900 (2 more)
- VA: £500/mo × 2 = £1,000
- Lead magnet design/tools: £100
- **Phase 3 total: ~£3,500-£4,500**

---

### Phase 4 — Compound + add second product (weeks 17-30 · 14 September - 31 December)

**Goal:** £3-5K MRR by end of December. Soft-launch Rehearsal Studio. Stabilise the engine.

Weekly milestones:

**Weeks 17-22 (mid-September to end October)**
- [ ] Soft-launch Rehearsal Studio (second product from Calvary repo) to existing Beamcue customers
- [ ] Continue weekly YouTube + ads at scale
- [ ] Product Hunt launch prep (target: launch in Week 22)
- [ ] Aim for 1 denominational conversation via VA-driven outreach (no calls from Bolaji)

**Weeks 23-30 (early November to end December)**
- [ ] Product Hunt launch (if Week 22 prep solid)
- [ ] Q4 content push: holiday/year-end themed videos
- [ ] Stabilise: don't add new channels, harvest existing ones
- [ ] First denominational deal closed (lucky outcome)

**Exit criteria for Phase 4:**
- £3-5K MRR locked in
- 175-300 paying customers
- Rehearsal Studio adopted by 30-50 existing customers
- 8-12 YouTube videos live, compounding views
- Sustainable monthly ad spend at healthy CAC

**Phase 4 budget:**
- Facebook ads: £2,000-£3,000
- VA continued: £500/mo × 3 = £1,500
- Product Hunt prep (graphics, etc): £200
- Stripe fees (~3% of MRR): £200
- **Phase 4 total: ~£4,000-£5,000**

---

## Total budget through December 2026

| Phase | Spend |
|---|---|
| Phase 1 (foundation) | £175 |
| Phase 2 (engine starts) | £1,300 |
| Phase 3 (scale) | £3,500-£4,500 |
| Phase 4 (compound) | £4,000-£5,000 |
| **Total outlay** | **£9,000-£11,000** |

### Revenue collected through December (rough estimate)

| Source | Estimated revenue collected |
|---|---|
| Subscription MRR (ramping) | £8,000-£15,000 |
| Setup add-on fees (15% × paying customers × £199) | £4,000-£8,000 |
| **Total revenue collected** | **£12,000-£23,000** |

### Net position by 31 December 2026

- Cash in pocket: £3,000-£12,000 (revenue minus spend)
- MRR run-rate: £3,000-£5,000
- Customer base: 175-300 churches
- Brand: established, content moat, organic traffic compounding
- Foundation for 2027: real, ready to scale

---

## The honest content production test (do this in Phase 2)

Critical: Bolaji has not produced content at scale before. We don't know yet whether YouTube is sustainable for him long-term.

**The test:** record YouTube video #1 in weeks 4-5. Just one. Honest review at the end of week 5:

- Did making the video drain you the way sales calls did?
- How long did it actually take, end to end (script + record + edit + thumbnail + publish)?
- Could you imagine doing one of these per week for 20 weeks?
- What part of the process was the worst — the recording, the editing, the thumbnails?

**Decision branches at end of week 5:**

- **If video #1 was fine/enjoyable:** Lock in weekly cadence. YouTube is the backbone.
- **If video #1 was a slog but doable:** Drop to bi-weekly cadence. Compensate with more ads + community.
- **If video #1 was as draining as sales calls:** YouTube is not your channel. Pivot Phase 3 to be ads-heavy + community-heavy + sponsored YouTuber videos (where someone else produces). Realistic target slips to £2-3K MRR by December.

This is a real branch point. Don't pre-commit Beamcue's marketing strategy to content if content isn't actually sustainable for you. The test costs one week of effort to learn the truth.

---

## Kill criteria

When to abandon this plan or change course:

**By end of Phase 1 (14 June):**
- Calvary hasn't run a single clean Sunday on Beamcue → product foundation isn't ready, defer launch by 2-4 weeks

**By end of Phase 2 (19 July):**
- Fewer than 10 paying customers from ads + first YouTube video → either CAC is wrong, offer is wrong, or product is wrong; investigate and adjust before scaling
- YouTube video #1 failed the content production test → pivot Phase 3 strategy (see above)

**By end of Phase 3 (13 September):**
- Below £800 MRR → £3-5K by December isn't realistic; rescope to £2-3K target
- Ad spend isn't returning healthy CAC → kill ad campaigns, double down on content + community

**Hard exit (any phase):**
- Bolaji has stopped producing content for 3 consecutive weeks → the model is broken; either find a content producer (videographer/editor) or pivot away from content-led strategy
- Calvary stops using Beamcue → flagship case study disappears; either earn it back or accept the marketing handicap

The point of kill criteria isn't pessimism. It's permission to course-correct when reality contradicts the plan, before committing more time and money to something that isn't working.

---

## What this plan does NOT include

Deliberately out of scope for 2026:

- **Outbound sales calls.** Period. Anyone wanting to talk before buying gets a written FAQ link or a calendly with a £49 "discovery consult" fee.
- **US market expansion.** UK only through December. US comes in 2027.
- **Live customer support.** Email-only, 24-48 hour response.
- **Building a developer team.** Bolaji is sole builder until £8K+ MRR justifies it.
- **Investor conversations.** Not relevant at this stage.
- **A formal company structure beyond what already exists.**

---

## The single most important commitment

If you ignore everything else in this document, internalise this:

**The plan works if and only if you keep shipping content.**

Where the previous hybrid plan was gated on sales calls, this plan is gated on consistent content production: roughly one YouTube video per week, plus daily community presence (or VA-driven equivalent), plus consistent ad management.

If content shipping stops, the engine stops. Unlike sales calls, content doesn't have to feel like persuasion — it can feel like helping. But it has to happen on a steady cadence.

**Block Wednesday mornings for content production. Treat it like Sunday at Calvary. Don't let other work creep in.**

---

## VA hiring brief (start in Phase 3, around 13 July)

### Role: Beamcue Content & Community Assistant
**Hours:** 15-20 hours/week
**Pay:** £4-£6/hour (£400-£500/month)
**Start date:** Around 13 July

### Responsibilities

1. **Reddit r/churchtech daily presence (30% of time):**
   - Monitor sub for AV-related questions
   - Reply helpfully (not pitching Beamcue) using Bolaji's voice/persona
   - Bolaji reviews drafts in week 1, then delegates from week 2

2. **Facebook group monitoring (30% of time):**
   - Same play in "Church Tech Geeks" and denominational groups
   - Flag interesting threads for Bolaji's attention

3. **Content support (20% of time):**
   - Edit YouTube video transcripts into blog post drafts
   - Create thumbnail variants for A/B testing
   - Schedule social posts of video clips

4. **Ad campaign reporting (10% of time):**
   - Weekly Facebook ads performance summary
   - Flag underperforming campaigns

5. **Customer support email triage (10% of time):**
   - First-line response to common questions (using FAQ playbook)
   - Escalate complex issues to Bolaji

### Critical: VA does NOT do sales calls or sales outreach

This VA is purely content/community/admin support. Sales motion stays absent from this plan. If denominational deals appear later, that's a separate VA hire or a separate plan.

---

## The 5 most important things this week

1. **Decide architecture** (Vercel vs static rebuild) — this single decision unblocks everything else
2. **Buy domains** (£75 — non-negotiable, do it Wednesday or Thursday)
3. **Plan the new 4-tier pricing in code** — what changes in product + landing page + Stripe
4. **Schedule Calvary's first midweek/Sunday on Beamcue** — pick a date with Pastor Shade
5. **Outline YouTube video #1** — script, thumbnail concept, target keyword

These are the high-leverage moves. Everything else can wait.

---

*Update this document at the end of each phase with what actually happened. First review point: 14 June.*
