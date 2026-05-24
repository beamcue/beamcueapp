# Beamcue — TODO / Deferred Items

Things we've consciously deferred. Each one has a "when" trigger so it doesn't get lost.

## Deferred to "after domains purchased"

### Configure Supabase Auth URLs
**Status:** Deferred 24 May 2026
**When to do:** Once beamcue.com is purchased and pointed at the Vercel deployment.
**What to do:**
1. Go to https://supabase.com/dashboard/project/ckqbzizywrjmoiguevid/auth/url-configuration
2. Set **Site URL** to the production domain (e.g. `https://app.beamcue.com`)
3. Add to **Redirect URLs**:
   - `http://localhost:3000/auth/callback` (for local dev)
   - `https://app.beamcue.com/auth/callback` (production)
   - Any staging URL if applicable
4. Click Save
**Why deferred:** Avoids configuring twice (once for localhost, once for production).
**Risk if not done:** Magic-link login does not work locally or in production.

### Purchase domains
**Status:** Deferred 24 May 2026
**When to do:** This week ideally.
**What to do:** Buy beamcue.com, beamcue.app, beamcue.io, beamcue.live via Porkbun.
**Why deferred:** Bolaji preference to handle commercial admin separately.
**Risk if not done:** Someone else could claim beamcue.com. Project assumes the name.

---

## Deferred to "after MVP loop works"

### Real demo video on landing + setup page
**When to do:** Once Calvary has migrated and we have one real church running.
**What to do:** Record 60-second screen capture: tap slide on phone → see overlay update in OBS.

### Scripture data
**When to do:** Before first paying customer.
**What to do:** Bundle KJV (public domain) as JSON. Decision needed on ESV (Crossway API, commercial licensing required).

### Stripe billing
**When to do:** Before pricing the Pro tier publicly.
**What to do:** Stripe checkout + customer portal + webhook for plan upgrade.

### Multi-operator support
**When to do:** When a real church requests it.
**What to do:** Already supported by the schema (multiple `church_members` per church); needs UI to invite team members.

### "Refresh overlay" recovery button
**When to do:** Before first Sunday production use.
**What to do:** Add button in Operator that pings a no-op state change to force the OBS browser source to re-render after a network blip.

---

## Deferred to "after v1 ships"

### Custom themes (fonts, layouts)
### Image slide type (sermon series graphics, logos)
### Service plan / deck builder UI
### Team member invites
### Analytics (which slides got pushed, when)
### Mobile native app (PWA-grade web is sufficient for v1)
### Multiple overlays per church
