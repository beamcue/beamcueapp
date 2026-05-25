# Beamcue — Roadmap to September 2026

> **⚠️ SUPERSEDED — DO NOT FOLLOW THIS PLAN**
>
> This document is kept for historical reference only. Bolaji reviewed
> it on 25 May 2026 and identified that the hybrid model with sales
> calls replicated patterns from PestFlow/Altitude/Alpha Piling that
> drained him. We pivoted to a hands-off product-led model.
>
> **The current operating plan is: `ROADMAP_TO_DECEMBER.md`**
>
> Key differences:
> - Hands-off, no sales calls (vs 5-15 calls/week in this old plan)
> - 4-tier pricing instead of 2-tier
> - Target slips from end of September to end of December
> - Content + ads + community replace done-for-you as the engine
>
> The done-for-you model is preserved as an optional £199 checkout
> add-on, not as the lead offer.

---

**Author:** Bolaji Olatoye
**Date written:** 25 May 2026
**Target:** £3-5K MRR by 30 September 2026
**Slip buffer:** 15 October 2026
**Model:** Hybrid (self-serve SaaS + done-for-you services + denominational deals)
**Founder commitment:** ~50% of working time + sales calls + a part-time VA

---

## The target, stated honestly

£3-5K MRR by 30 September means a realistic monthly revenue mix of roughly:

- **20-25 done-for-you managed customers** at £150-£200/month = £3,000-£5,000
- **40-80 self-serve Pro subscribers** at £14.92-£19/month = £600-£1,500
- **1 denominational or agency deal** at £500-£1,000/month = £500-£1,000
- **Plus** £8,000-£12,000 in one-time done-for-you setup fees collected through the year

Total MRR target is conservative-realistic, not optimistic-best-case. The plan has to work in median-luck scenarios, not just lucky ones.

---

## Why this shape

A pure-SaaS path to £3-5K MRR in this vertical takes 8-12 months from zero. We don't have that long. The compression comes from:

1. **Higher ARPU per customer.** Service customers pay 10x what self-serve customers do, so we need 1/10 the customer count.
2. **Faster cash collection.** £499 setup fees pay this week, not after a 14-day trial.
3. **Lower churn.** Customers who paid £499 to get set up don't churn lightly.
4. **One denominational deal can singlehandedly hit half the target.** That deal can land in 2-3 months of relationship-building.

We're trading "pure SaaS valuation" for "real revenue this year." That's the deliberate choice.

---

## Phase 1 — Foundation (weeks 1-3 · 25 May - 14 June 2026)

**Goal:** Beamcue publicly accessible, Calvary running on it.

### Weekly milestones

**Week of 25 May (this week)**

- [ ] Decide architecture: keep Vercel/Next.js OR rebuild as static GitHub Pages
- [ ] If keeping Vercel: sort SMS verification, deploy
- [ ] If switching to static: rewrite Beamcue as static + JS over 2-3 days, push to gh-pages
- [ ] Buy domains: beamcue.com, beamcue.app, beamcue.io, beamcue.live (~£75 total)
- [ ] Wire waitlist form to a real Formspree account
- [ ] Calvary migration test: run Beamcue alongside Control Room for Wednesday prayer or rehearsal

**Week of 1 June**

- [ ] Configure Supabase auth URLs for the production domain
- [ ] Run Calvary on Beamcue for Sunday 7 June (with Control Room as backup)
- [ ] Capture every issue, push fixes through the week
- [ ] Send the first 20 cold emails for the done-for-you offer (template at end of this doc)

**Week of 8 June**

- [ ] Calvary runs on Beamcue for Sunday 14 June (without backup if 7th went well)
- [ ] Record 2-3 short clips during the service for the demo video raw footage
- [ ] Send the next 20 cold emails (different network, different angle)
- [ ] First sales call attempts — anyone who responded to the 20 emails

**Exit criteria for Phase 1:**
- Beamcue is live at beamcue.com (or .app)
- Calvary has done at least 1 clean Sunday on Beamcue
- 1-2 conversations started with potential customers

### Budget for Phase 1

| Item | Cost |
|---|---|
| Domains | £75 one-time |
| Hosting/Supabase | £0 (still on free tier) |
| Formspree | £0 (free tier) |
| **Total** | **£75** |

---

## Phase 2 — First paying customers (weeks 4-8 · 15 June - 19 July)

**Goal:** 5-10 paying done-for-you customers. £2,500-£5,000 cash collected. £750-£1,500 MRR locked.

### The offer to lead with

**"Beamcue Setup + 12 Months Pro"**
- £499 one-time
- Includes: account setup, custom branding to your church, training your operator team (1 hour Zoom), 3 Sundays of live support, KJV scripture preloaded
- Includes: 12 months of Pro free (saves them £180 in year one)
- Optional add-on: ongoing managed service at £150/month from month 13

This offer converts faster than self-serve because:
- It's a clear deliverable, not a subscription
- Churches budget for "projects" more easily than "subscriptions"
- It removes the "can I figure this out myself" objection entirely
- Pricing anchors to "what a consultant would charge" not "what other software costs"

### Weekly milestones

**Weeks 4-5 (15-28 June)**

- [ ] Send 20 cold emails per week to UK streaming churches (you, by hand)
- [ ] Target list: any UK church streaming weekly that you have a 1-2 degree connection to
- [ ] Goal: 2-3 sales calls, 1-2 closed deals
- [ ] Per closed deal: complete the setup within 7 days, document the process

**Weeks 6-8 (29 June - 19 July)**

- [ ] Hire VA (job spec below — start screening on week 4)
- [ ] VA week 1: shadow your outreach process, build initial lead list of 200-300 churches
- [ ] Continue sending 20 emails/week yourself
- [ ] Goal: 3-5 more closed deals
- [ ] First "happy customer" video testimonial recorded

**Exit criteria for Phase 2:**
- 5-10 done-for-you customers paying
- £2,500-£5,000 in cash collected (£499 × number of customers)
- VA is productive on list-building
- 1-2 testimonial quotes captured

### Budget for Phase 2

| Item | Cost |
|---|---|
| VA part-time (Filipino, ~£500/mo starting week 6) | £500 |
| Hosting still free | £0 |
| **Total Phase 2 additional** | **~£500** |

**Revenue collected in Phase 2: £2,500-£5,000**

---

## Phase 3 — Compounding + denominational prospecting (weeks 9-16 · 20 July - 13 September)

**Goal:** Scale done-for-you to 15-20 customers. Start denominational conversations.

### Three workstreams in parallel

**Workstream A: Done-for-you sales (continued)**

- VA sends 50-100 cold emails/week from the now-1,000+ church list
- You take 8-12 sales calls/week (block Tuesday + Thursday afternoons for these)
- Target: 3-5 new done-for-you customers per week from week 10 onwards
- Total by mid-September: 15-20 done-for-you customers

**Workstream B: Denominational prospecting**

- Identify 5-10 UK Christian networks/denominations with multi-church reach:
  - Newfrontiers (~200 UK churches)
  - Vineyard UK (~80 churches)
  - Assemblies of God UK (~600 churches)
  - Elim Pentecostal (~550 churches)
  - Pioneer Network (~200 churches)
  - Multiple Baptist Union regional associations
  - Anglican dioceses with active media teams
- For each: identify the tech/media lead via LinkedIn or denominational website
- Aim for warm intro where possible (your Calvary network helps here)
- Goal: 2-3 conversations active by mid-August, 1 deal in negotiation by mid-September

**Workstream C: Content + demo video**

- Record 60-second demo video using Calvary footage from Phase 1 (shot list in LAUNCH_PLAN.md)
- Replace landing page hero static visual with the video
- Record YouTube tutorial: "How to add scripture overlays to your church livestream"
- Add 2-3 testimonial quotes from Phase 2 customers to the landing page

### Weekly milestones during Phase 3

**Weeks 9-12 (mid-July to mid-August)**

- [ ] VA outreach scaling to 50+ emails/week
- [ ] You: 8 sales calls/week, close 1-2/week
- [ ] Demo video published
- [ ] First denominational outreach (5 networks contacted)
- [ ] Add the comparison page on the landing site (`beamcue.com/vs-propresenter`)

**Weeks 13-16 (mid-August to mid-September)**

- [ ] Outreach steady at 50-100 emails/week
- [ ] 10-12 sales calls/week, closing 3-5
- [ ] One denominational conversation in active negotiation
- [ ] First Reddit r/churchtech post (with real testimonials in it)

**Exit criteria for Phase 3:**
- 15-20 done-for-you customers (cumulative)
- 20-40 self-serve Pro subscribers (from inbound landing page traffic)
- 1 denominational deal in active conversation
- Demo video live on landing page
- £2,500-£3,500 MRR

### Budget for Phase 3

| Item | Cost |
|---|---|
| VA (continued) | £500/mo × 2 months = £1,000 |
| Hosting upgrade if needed (Supabase Pro ~£20/mo) | £40 |
| Demo video stock music/mic | £100 |
| Tooling (CRM, email management) | £100 |
| **Total Phase 3** | **~£1,240** |

**Revenue collected in Phase 3: £6,000-£12,000 in setup fees + ramping MRR**

---

## Phase 4 — Hit target (weeks 17-22 · 14 September - 26 October)

**Goal:** £3-5K MRR by end September (or mid-October as slip buffer).

### What pulls us across the line

**Track 1: Close the denominational deal.** This is the single highest-leverage move. One yes from a network rolling Beamcue out across 20-40 of its churches at £40-£60/each is £800-£2,400 MRR immediately.

**Track 2: Convert done-for-you customers to ongoing managed service.** Of the 15-20 customers from Phase 3, aim for 5-10 to opt into the £150-£200/mo managed retainer after their initial 3-month free Pro period ends. That's £750-£2,000 additional MRR.

**Track 3: Launch Rehearsal Studio (the second product).** Your project notes show you've already prototyped this. By mid-September it can be cleaned up and released as Tool #2. Even 30-40 customers at £19/mo = £570-£760 MRR. The compound effect of having two products is significant.

### Weekly milestones

**Weeks 17-20 (14 September - 11 October)**

- [ ] Close the denominational deal (if not already)
- [ ] Onboard managed service customers
- [ ] Soft-launch Rehearsal Studio to existing Beamcue customers (no public launch yet)
- [ ] Continue done-for-you sales at established cadence

**Weeks 21-22 (12-26 October — slip buffer)**

- [ ] If at target by week 20: celebrate, plan Q4 properly
- [ ] If not at target: identify which track underperformed, double down on what's working

**Exit criteria for Phase 4:**
- £3-5K MRR locked in
- 30+ paying customers across all tiers
- Rehearsal Studio live and adopted by at least 20 churches
- One denominational deal active

### Budget for Phase 4

| Item | Cost |
|---|---|
| VA continued | £500/mo × 2 = £1,000 |
| Stripe fees (~3% of MRR) | £100-£150 |
| First paid ad test (Facebook Lead ads) | £500-£1,000 |
| Misc tools, growth | £200 |
| **Total Phase 4** | **~£1,800-£2,350** |

---

## Total year-end picture

### Costs through end of September

| Phase | Spend |
|---|---|
| Phase 1 | £75 |
| Phase 2 | £500 |
| Phase 3 | £1,240 |
| Phase 4 | £1,800-£2,350 |
| **Total outlay** | **£3,600-£4,200** |

### Revenue through end of September

| Source | Estimate |
|---|---|
| Done-for-you setup fees (20-25 × £499) | £10,000-£12,500 |
| Done-for-you managed service MRR ramping | £2,000-£4,000 in collected revenue |
| Self-serve Pro subscriptions ramping | £500-£1,000 in collected revenue |
| Denominational deal (if landed mid-Sept) | £500-£1,500 |
| **Total revenue collected** | **£13,000-£19,000** |

### Net position by 30 September

- Cash: ~£9,000-£15,000 in pocket
- MRR run-rate: £3,000-£5,000
- Customer base: 30-50 churches
- Brand: real, established, with case studies

---

## The VA hiring brief

### Role: Beamcue Growth Assistant

**Hours:** 15-20 hours/week, flexible
**Pay:** £4-£6/hour (£400-£500/month)
**Location:** Philippines (preferred, due to time zone overlap for UK morning work) or any English-speaking country
**Start date:** Week of 22 June (3-4 weeks from now)

### Responsibilities

1. **Lead list building (60% of time initially):**
   - Search for UK churches with regular Sunday livestreams
   - Sources: YouTube search, Facebook page search, denominational directories, church-tech directories
   - For each church: capture name, denomination, city, livestream platform, last-stream date, pastor name (if visible)
   - Target output: 100-200 new contacts per week

2. **Email enrichment (20% of time):**
   - For each church in the list, find pastor/admin email
   - Use Hunter.io (paid £40/mo when needed) for domain-based search
   - Manual verification on church websites where Hunter fails

3. **Outreach send (20% of time after week 3):**
   - Send personalised cold emails from templates (Bolaji approves before each batch)
   - Follow up on no-replies after 5 days
   - Forward warm responses to Bolaji for call booking

### Screening criteria

- Native or near-native English (their cold emails will go directly to UK churches)
- Past experience with cold email or lead gen (verifiable)
- Familiar with church culture (helpful but not required)
- Comfortable with Google Sheets, Hunter.io, Apollo, or similar tools
- Available 4-5 days/week, UK morning hours

### First 2 weeks training plan

- Day 1: Bolaji walks through Beamcue, the target customer, the offer
- Day 2-3: VA shadows existing outreach, asks questions
- Day 4-5: VA does first list-building under supervision
- Week 2: VA runs the list-building process solo, Bolaji reviews end of week

### KPIs

- Week 4: 100+ verified contacts/week
- Week 8: 200+ verified contacts/week, sending 50+ emails/week
- Week 12: 100+ emails/week, 5-10 warm leads/week handed to Bolaji

---

## The first 20 cold emails

**Subject lines to test (rotate):**

- `[Church name]'s Sunday stream`
- `Quick note about your livestream setup`
- `Replacing ProPresenter at small UK churches`
- `Phone-controlled overlays for your services`

**Email template:**

> Hi [Pastor Name],
>
> I'm Bolaji, the founder of Beamcue. I built it for my own church — Calvary Hephzibah in Manchester — to replace our messy mix of OBS + EasyWorship for Sunday livestreams.
>
> Beamcue lets your operator push scripture, lower thirds, and slide overlays from a phone or tablet directly to your OBS stream. No install, no PowerPoint, no Mac required.
>
> A few [denomination/region] churches have started using it. I'm offering a £499 setup package: I'll get Beamcue running for your church, train your operator team, and support your first three Sundays. Includes 12 months of Pro tier free (normally £190).
>
> Worth a quick 20-minute call to see if it fits your setup?
>
> Bolaji
> Founder, Beamcue
> beamcue.com

### The first 20 prospects

This list is yours to build using churches you have any connection to:

- 3-5 churches Pastor Shade knows through Calvary's network
- 3-5 churches in Manchester/Greater Manchester area (geographic proximity = warmer)
- 5-7 churches you've visited or attended events at over the years
- 5-7 churches you can find via Calvary's Instagram/Facebook follows

If 20% reply and 50% of those close: 2 customers. That's £998 in this first week.

---

## Kill criteria — when to abandon this plan

A plan without kill criteria is wishful thinking. Here's when we admit something isn't working:

**By end of Phase 1 (14 June):**
- Calvary doesn't run a single clean Sunday on Beamcue → pause, fix product, defer launch by 2-4 weeks
- Zero responses from first 20 cold emails → the offer is wrong, rework before sending more

**By end of Phase 2 (19 July):**
- Fewer than 3 done-for-you customers closed → the offer or audience isn't right; either reposition or pivot to self-serve only
- VA isn't productive after 4 weeks → switch VA, or absorb the role yourself temporarily

**By end of Phase 3 (13 September):**
- Below £1,500 MRR by mid-September → £3-5K by end of September isn't realistic, extend timeline to December and rescope
- No denominational conversations active → drop that workstream, focus all effort on done-for-you + self-serve

**Hard exit (any phase):**
- You haven't done sales calls for 3 consecutive weeks → the model is broken; either find a closer or abandon hybrid plan

The point of kill criteria isn't pessimism. It's permission to change course when reality contradicts the plan, instead of grinding harder on something that isn't working.

---

## What this plan does NOT cover

Deliberately out of scope for this roadmap:

- US market expansion (Phase 5+ work, post-September)
- Rehearsal Studio public launch (it's a soft launch only in this plan)
- Pricing changes beyond what's documented
- Building features beyond the v1 spec (5 slide types)
- Hiring a developer (you're still the sole builder until £8K+ MRR justifies it)
- Investor conversations (not relevant at this stage)

---

## The single most important thing

If you ignore everything else in this document, internalise this:

**The plan works if and only if you do the sales calls.**

Everything else — the VA, the email list, the demo video, the landing page, the comparison table — is preparation. The actual revenue comes from 5-15 conversations a week from July onwards. If those conversations don't happen, none of the rest matters.

So: calendar them now. Block Tuesday and Thursday afternoons starting 15 July onwards as "Beamcue sales — non-negotiable." Treat them like Sunday at Calvary. Don't let other work creep in.

That's the plan. Let's see what happens.

---

*Update this document at the end of each phase with what actually happened. The first review point is 14 June.*
