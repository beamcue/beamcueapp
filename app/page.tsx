import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-[#fafaf7] text-[#0f0f10]">
      {/* NAV */}
      <nav className="border-b border-[#e8e6df] sticky top-0 bg-[#fafaf7]/85 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-serif text-xl tracking-tight">
            Beamcue
          </Link>
          <div className="flex items-center gap-7 text-sm">
            <a href="#how" className="text-[#4a4a4c] hover:text-[#0f0f10] transition hidden sm:inline">How it works</a>
            <a href="#compare" className="text-[#4a4a4c] hover:text-[#0f0f10] transition hidden sm:inline">Compare</a>
            <a href="#pricing" className="text-[#4a4a4c] hover:text-[#0f0f10] transition hidden sm:inline">Pricing</a>
            <Link href="/login" className="text-[#4a4a4c] hover:text-[#0f0f10] transition">Sign in</Link>
            <Link
              href="/login"
              className="px-4 py-2 bg-[#0f0f10] text-[#fafaf7] rounded-md text-sm font-medium hover:bg-[#ff5c1f] transition"
            >
              Try free
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="border-b border-[#e8e6df]">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-[1.05fr_1fr] gap-16 items-center">
          {/* Hero text */}
          <div>
            <div className="inline-flex items-center gap-2 mb-8 text-xs uppercase tracking-[0.18em] text-[#4a4a4c]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5c1f]" />
              For churches that stream
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight mb-7">
              Push lyrics, scripture, and lower thirds to OBS — <span className="text-[#ff5c1f] italic">from your phone.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#4a4a4c] leading-relaxed mb-10 max-w-xl">
              Beamcue is a browser-based overlay system for OBS Studio.
              No install, no PowerPoint, no Mac required. Built for the
              volunteer media team that just wants Sunday to work.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Link
                href="/login"
                className="px-7 py-3.5 bg-[#0f0f10] text-[#fafaf7] rounded-md font-medium hover:bg-[#ff5c1f] transition"
              >
                Try free
              </Link>
              <a
                href="#how"
                className="px-7 py-3.5 border border-[#0f0f10]/15 rounded-md font-medium hover:border-[#0f0f10]/40 transition"
              >
                See how it works
              </a>
            </div>

            <p className="text-sm text-[#4a4a4c]">
              Free forever for one church. No credit card required.
            </p>
          </div>

          {/* Hero visual — mock overlay */}
          <div className="relative">
            <div className="aspect-video bg-[#0f0f10] rounded-lg overflow-hidden shadow-2xl shadow-[#0f0f10]/15 border border-[#0f0f10]/10">
              {/* Mock scripture overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
                <p className="text-white/95 text-lg sm:text-xl font-light leading-snug mb-5 max-w-sm">
                  For God so loved the world, that he gave his only begotten Son
                </p>
                <p className="text-[#ff5c1f] text-sm font-semibold tracking-wider">
                  JOHN 3:16
                </p>
              </div>
              {/* Watermark */}
              <div className="absolute bottom-3 right-3 text-white/30 text-xs font-light">
                beamcue.com
              </div>
            </div>
            {/* OBS label */}
            <div className="absolute -bottom-4 -left-4 bg-[#fafaf7] border border-[#e8e6df] rounded-md px-3 py-1.5 text-xs font-medium shadow-sm">
              <span className="text-[#4a4a4c]">Live in</span> <span className="text-[#0f0f10]">OBS</span>
            </div>
            {/* Phone tap indicator */}
            <div className="absolute -top-4 -right-4 bg-[#ff5c1f] text-white rounded-md px-3 py-1.5 text-xs font-medium shadow-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Pushed from phone
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="border-b border-[#e8e6df] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.18em] text-[#ff5c1f] mb-4">How it works</p>
            <h2 className="font-serif text-4xl sm:text-5xl tracking-tight max-w-2xl leading-tight">
              From signup to live overlay in two minutes.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            <Step
              n="01"
              title="Sign up"
              body="Magic link to your email. No passwords, no credit card. Set up your church in under a minute."
            />
            <Step
              n="02"
              title="Paste a URL into OBS"
              body="Add it as a Browser Source in your OBS scene. One copy-paste. That's the entire install."
            />
            <Step
              n="03"
              title="Push slides from any device"
              body="Phone, iPad, laptop. Operators tap a slide, the overlay in OBS updates instantly. No refresh needed."
            />
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="border-b border-[#e8e6df] py-24 bg-[#f4f3ee]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.18em] text-[#ff5c1f] mb-4">Who it's for</p>
            <h2 className="font-serif text-4xl sm:text-5xl tracking-tight max-w-2xl leading-tight">
              Built for the people who actually run Sunday.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Persona
              title="Solo media volunteers"
              body="You set up the AV at your small-to-mid church. You don't have time to learn ProPresenter. Beamcue is the simplest tool that just works."
            />
            <Persona
              title="Worship leaders"
              body="Push scripture during the sermon, lyrics during songs — all from the iPad on stage. No more 'wait, can we get the verse up?'"
            />
            <Persona
              title="Streaming churches"
              body="You broadcast Sunday services to YouTube or Facebook. Beamcue gives you broadcast-quality lower thirds and overlays — without the broadcast budget."
            />
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section id="compare" className="border-b border-[#e8e6df] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.18em] text-[#ff5c1f] mb-4">Why Beamcue</p>
            <h2 className="font-serif text-4xl sm:text-5xl tracking-tight max-w-2xl leading-tight">
              You're already using something. Here's how Beamcue differs.
            </h2>
          </div>

          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-[#0f0f10]/15">
                  <th className="text-left py-4 pr-4 font-medium text-sm text-[#4a4a4c]"></th>
                  <th className="text-left py-4 px-4 font-serif text-lg">
                    Beamcue
                    <span className="block text-xs font-sans font-normal text-[#ff5c1f] mt-1">£19/mo</span>
                  </th>
                  <th className="text-left py-4 px-4 font-medium text-sm text-[#4a4a4c]">
                    ProPresenter
                    <span className="block text-xs font-normal text-[#4a4a4c]/70 mt-1">$499 + $499 Pro</span>
                  </th>
                  <th className="text-left py-4 px-4 font-medium text-sm text-[#4a4a4c]">
                    EasyWorship
                    <span className="block text-xs font-normal text-[#4a4a4c]/70 mt-1">$395/yr</span>
                  </th>
                  <th className="text-left py-4 px-4 font-medium text-sm text-[#4a4a4c]">
                    OBS plugins
                    <span className="block text-xs font-normal text-[#4a4a4c]/70 mt-1">Free</span>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <Row label="Install required" beamcue="No (browser only)" pp="Yes (Mac/Win)" ew="Yes (Windows)" obs="Per-plugin" />
                <Row label="Setup time" beamcue="60 seconds" pp="Several hours" ew="30+ minutes" obs="Varies" />
                <Row label="Control from phone" beamcue="Yes" pp="Limited" ew="No" obs="No" />
                <Row label="Multi-operator support" beamcue="Yes" pp="$$$ tier" ew="No" obs="No" />
                <Row label="Real-time sync" beamcue="Yes" pp="Same-machine" ew="Same-machine" obs="Plugin-dependent" />
                <Row label="Built for streaming" beamcue="Yes" pp="Generic" ew="Generic" obs="Generic" />
              </tbody>
            </table>
          </div>

          <p className="text-xs text-[#4a4a4c] mt-6">
            Comparisons reflect public pricing and feature pages as of May 2026. Beamcue uses the existing OBS your church already has — it doesn't replace it.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-b border-[#e8e6df] py-24 bg-[#f4f3ee]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-[#ff5c1f] mb-4">Pricing</p>
            <h2 className="font-serif text-4xl sm:text-5xl tracking-tight max-w-2xl mx-auto leading-tight">
              Free for one church. £19 a month to remove the watermark.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Free */}
            <div className="bg-[#fafaf7] border border-[#e8e6df] rounded-lg p-8">
              <p className="text-sm font-medium text-[#4a4a4c] mb-2">Free</p>
              <p className="font-serif text-4xl mb-1">£0</p>
              <p className="text-sm text-[#4a4a4c] mb-8">forever, for one church</p>
              <ul className="space-y-3 mb-10 text-sm">
                <Bullet>Everything you need for Sunday</Bullet>
                <Bullet>All five slide types</Bullet>
                <Bullet>Unlimited team members</Bullet>
                <Bullet>"Powered by Beamcue" watermark on overlay</Bullet>
              </ul>
              <Link
                href="/login"
                className="block w-full text-center px-5 py-3 border border-[#0f0f10] rounded-md font-medium hover:bg-[#0f0f10] hover:text-[#fafaf7] transition"
              >
                Start free
              </Link>
            </div>

            {/* Pro */}
            <div className="bg-[#0f0f10] text-[#fafaf7] rounded-lg p-8 relative">
              <div className="absolute -top-3 right-6 bg-[#ff5c1f] text-white text-xs px-2.5 py-1 rounded font-medium">
                Recommended
              </div>
              <p className="text-sm font-medium text-[#fafaf7]/60 mb-2">Pro</p>
              <p className="font-serif text-4xl mb-1">£19<span className="text-lg text-[#fafaf7]/60"> / month</span></p>
              <p className="text-sm text-[#fafaf7]/60 mb-8">or £190/year — two months free</p>
              <ul className="space-y-3 mb-10 text-sm">
                <Bullet light>Everything in Free</Bullet>
                <Bullet light>No watermark on overlay</Bullet>
                <Bullet light>Custom brand colours</Bullet>
                <Bullet light>Priority email support</Bullet>
                <Bullet light>Cancel anytime</Bullet>
              </ul>
              <Link
                href="/login"
                className="block w-full text-center px-5 py-3 bg-[#ff5c1f] text-white rounded-md font-medium hover:opacity-90 transition"
              >
                Start free, upgrade anytime
              </Link>
            </div>
          </div>

          <p className="text-center text-sm text-[#4a4a4c] mt-8">
            No credit card to start. Upgrade from your dashboard whenever you're ready.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-[#e8e6df] py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.18em] text-[#ff5c1f] mb-4">FAQ</p>
            <h2 className="font-serif text-4xl sm:text-5xl tracking-tight leading-tight">
              The questions we get asked.
            </h2>
          </div>

          <div className="space-y-8">
            <Faq
              q="Does it work with OBS Studio?"
              a="Yes. Beamcue is designed as an OBS Browser Source. If you already use OBS, you're 60 seconds from being set up."
            />
            <Faq
              q="What about vMix, Streamlabs, or Wirecast?"
              a="Anything that supports a Browser Source URL works. We test against OBS first because it's free and the most common in church AV."
            />
            <Faq
              q="Do I need a Mac?"
              a="No. Beamcue runs entirely in the browser. The operator app works on any phone, tablet, or computer. OBS itself runs on Mac, Windows, or Linux."
            />
            <Faq
              q="Can my whole team push slides?"
              a="Yes. Invite team members from your dashboard. Worship leader on stage, media operator at the back — both can push at the same time without conflicts."
            />
            <Faq
              q="What Bible translations are included?"
              a="KJV (King James) is bundled. For other translations, paste verse text directly. ESV and NIV support is on the roadmap."
            />
            <Faq
              q="What if my internet drops mid-service?"
              a="The current slide stays on the overlay. Your operator app reconnects automatically. The overlay never goes blank unless you tell it to."
            />
            <Faq
              q="Can I cancel anytime?"
              a="Yes. Cancel from your dashboard. No phone calls, no retention email cycle."
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-[#0f0f10] text-[#fafaf7]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-5xl sm:text-6xl tracking-tight leading-tight mb-8">
            Sunday is in a few days.
          </h2>
          <p className="text-lg text-[#fafaf7]/70 mb-10 max-w-xl mx-auto">
            Try Beamcue free this weekend. Setup is two minutes. If it doesn't fit your workflow, you've lost nothing.
          </p>
          <Link
            href="/login"
            className="inline-block px-8 py-4 bg-[#ff5c1f] text-white rounded-md font-medium hover:opacity-90 transition"
          >
            Try free
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#e8e6df] py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <Link href="/" className="font-serif text-lg tracking-tight">Beamcue</Link>
            <p className="text-sm text-[#4a4a4c] mt-2">Made for churches that stream.</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-[#4a4a4c]">
            <Link href="/login" className="hover:text-[#0f0f10] transition">Sign in</Link>
            <a href="#pricing" className="hover:text-[#0f0f10] transition">Pricing</a>
            <a href="https://github.com/beamcue/beamcueapp" target="_blank" rel="noopener" className="hover:text-[#0f0f10] transition">GitHub</a>
          </div>
        </div>

        {/* Dev shortcuts — only in dev */}
        {process.env.NODE_ENV === 'development' && (
          <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-[#e8e6df]">
            <p className="text-xs text-[#4a4a4c] mb-3">Dev shortcuts</p>
            <div className="flex items-center gap-3 text-sm flex-wrap">
              <Link href="/dev/operator" className="px-3 py-1.5 border border-yellow-700/30 text-yellow-700 rounded">
                /dev/operator
              </Link>
              <Link href="/overlay/test" className="px-3 py-1.5 border border-yellow-700/30 text-yellow-700 rounded">
                /overlay/test
              </Link>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div>
      <p className="font-serif text-2xl text-[#ff5c1f] mb-4">{n}</p>
      <h3 className="font-serif text-xl mb-3 tracking-tight">{title}</h3>
      <p className="text-[#4a4a4c] leading-relaxed">{body}</p>
    </div>
  );
}

function Persona({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-[#fafaf7] border border-[#e8e6df] rounded-lg p-7">
      <h3 className="font-serif text-xl mb-3 tracking-tight">{title}</h3>
      <p className="text-[#4a4a4c] leading-relaxed text-sm">{body}</p>
    </div>
  );
}

function Row({
  label,
  beamcue,
  pp,
  ew,
  obs,
}: {
  label: string;
  beamcue: string;
  pp: string;
  ew: string;
  obs: string;
}) {
  return (
    <tr className="border-b border-[#e8e6df]">
      <td className="py-4 pr-4 font-medium text-[#0f0f10]">{label}</td>
      <td className="py-4 px-4 text-[#0f0f10] font-medium bg-[#ff5c1f]/[0.04]">{beamcue}</td>
      <td className="py-4 px-4 text-[#4a4a4c]">{pp}</td>
      <td className="py-4 px-4 text-[#4a4a4c]">{ew}</td>
      <td className="py-4 px-4 text-[#4a4a4c]">{obs}</td>
    </tr>
  );
}

function Bullet({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <li className="flex items-start gap-3">
      <svg
        className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#ff5c1f]"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path d="M3 8L7 12L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className={light ? 'text-[#fafaf7]' : 'text-[#0f0f10]'}>{children}</span>
    </li>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="border-b border-[#e8e6df] pb-8 last:border-b-0">
      <h3 className="font-serif text-xl mb-2 tracking-tight">{q}</h3>
      <p className="text-[#4a4a4c] leading-relaxed">{a}</p>
    </div>
  );
}
