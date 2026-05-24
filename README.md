# Beamcue

Browser-based slide and scripture overlay for OBS Studio.

## What this is

A multi-tenant Next.js + Supabase app. The Operator pushes slides from a phone or tablet; OBS loads a per-church overlay URL as a browser source; Supabase realtime keeps them in sync.

## First-time setup

### 1. Install dependencies

```bash
npm install
```

### 2. Set up the database

Open the Supabase SQL Editor for your project, paste the contents of `supabase/migrations/001_init.sql`, and run it.

This creates:
- `churches`, `church_members`, `live_state`, `decks`, `slides` tables
- Row Level Security policies
- Realtime enabled on `live_state`

### 3. Configure Supabase Auth

In the Supabase Dashboard → **Authentication** → **URL Configuration**:
- Set **Site URL** to `http://localhost:3000`
- Add `http://localhost:3000/auth/callback` to **Redirect URLs**

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How to test the realtime loop

1. Visit `/` → click **Get started** → enter your email → click the magic link
2. Create a church (any name)
3. You'll land on the OBS Setup page — copy the overlay URL
4. Open the overlay URL in a new browser tab
5. Click **Open Operator** to open the operator app in another tab
6. In the Operator, pick a slide type (e.g. Scripture), fill it in, tap **Push to live**
7. Watch the overlay tab update instantly

If it works, you've validated the entire core loop.

## Project structure

```
app/
├── page.tsx                          # Landing
├── login/page.tsx                    # Magic-link auth
├── auth/callback/route.ts            # OAuth callback handler
├── dashboard/                        # Logged-in home + create-church flow
├── setup/[slug]/                     # OBS setup instructions
├── operator/[slug]/                  # The Sunday operator app
└── overlay/[slug]/                   # The OBS browser source

lib/
├── supabase-client.ts                # Browser client
└── supabase-server.ts                # Server client (with cookies)

components/
└── sign-out-button.tsx

supabase/migrations/
└── 001_init.sql                      # Database schema
```

## Tech

- Next.js 14 App Router
- Supabase (Auth, Database, Realtime)
- Tailwind CSS
- TypeScript
