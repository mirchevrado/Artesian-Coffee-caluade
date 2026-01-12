import React from 'react';

const heroImage =
  'https://images.unsplash.com/photo-1502462041640-b3d7e50d0660?auto=format&fit=crop&w=1400&q=80';

export function LandingPage() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="grid lg:grid-cols-[1.2fr,1fr] gap-8 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-coffee-soft/70 bg-coffee-dark/60 px-3 py-1 text-xs text-cream-soft shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
            Freshly roasted on demand · delivering within 48 hours.
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-cream-light">
              Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-gold to-coffee-gold-soft">
                ritual
              </span>{' '}
              in every cup.
            </h1>
            <p className="mt-4 text-cream-soft/90 text-sm sm:text-base max-w-xl">
              Ember &amp; Bloom curates small-batch, ethically sourced beans roasted precisely to
              your taste—delivered on a schedule that flows with your life.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center justify-center rounded-full bg-coffee-gold text-coffee-deep px-6 py-2.5 text-sm font-semibold shadow-glow-gold hover:bg-coffee-gold-soft transition-colors">
              Build my subscription
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-coffee-soft/70 bg-transparent px-5 py-2.5 text-sm text-cream-soft hover:bg-coffee-soft/50">
              Explore roastery
            </button>
            <div className="flex items-center gap-2 text-[11px] text-cream-soft/70">
              <span className="flex -space-x-2">
                <span className="h-6 w-6 rounded-full border-2 border-coffee-deep bg-[url('https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=80&q=80')] bg-cover bg-center" />
                <span className="h-6 w-6 rounded-full border-2 border-coffee-deep bg-[url('https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=80&q=80')] bg-cover bg-center" />
                <span className="h-6 w-6 rounded-full border-2 border-coffee-deep bg-[url('https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=80&q=80')] bg-cover bg-center" />
              </span>
              <span>4.9 average ritual rating from 8,200+ members</span>
            </div>
          </div>
        </div>
        <div className="glass-panel gold-border relative overflow-hidden">
          <img
            src={heroImage}
            alt="Artisanal coffee brewing setup"
            className="h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coffee-deep/90 via-coffee-deep/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-cream-soft/90">
            <div>
              <div className="text-cream-light font-medium">Seasonal Drop · Nyaruguru</div>
              <div>Black cherry · cacao nib · orange blossom</div>
            </div>
            <div className="text-right">
              <div className="text-cream-light font-medium">Roasted yesterday</div>
              <div>Ships before sunrise</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-lg sm:text-xl font-semibold text-cream-light">Choose your ritual</h2>
          <div className="text-xs text-cream-soft/80">
            Pause or edit anytime · No roast wasted · Free carbon-neutral delivery.
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {/* Tier 1 */}
          <div className="glass-panel gold-border flex flex-col p-5">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div>
                <div className="text-sm font-semibold text-cream-light">House Ritual</div>
                <div className="text-xs text-cream-soft/80">For your daily morning pour-over.</div>
              </div>
              <span className="px-2 py-1 rounded-full bg-coffee-medium/70 text-[11px] text-cream-soft">
                2 bags / month
              </span>
            </div>
            <div className="mt-3 mb-4">
              <span className="text-2xl font-semibold text-cream-light">$22</span>
              <span className="text-xs text-cream-soft/80"> / month</span>
            </div>
            <ul className="space-y-1.5 text-xs text-cream-soft/90 flex-1">
              <li>· Rotating blends tailored to your flavor profile</li>
              <li>· Freshly roasted within 24 hours of shipping</li>
              <li>· Perfect for 1–2 coffee lovers</li>
            </ul>
            <button className="mt-4 inline-flex justify-center rounded-full border border-coffee-soft/70 px-4 py-2 text-xs text-cream-soft hover:bg-coffee-soft/60">
              Start with House
            </button>
          </div>

          {/* Tier 2 - featured */}
          <div className="glass-panel border-2 border-coffee-gold shadow-glow-gold flex flex-col p-5 relative overflow-hidden">
            <div className="absolute inset-x-0 -top-10 h-24 bg-gradient-to-br from-coffee-gold/20 via-transparent to-transparent pointer-events-none" />
            <div className="flex items-center justify-between gap-2 mb-2 relative">
              <div>
                <div className="text-sm font-semibold text-cream-light">Single Origin Studio</div>
                <div className="text-xs text-cream-soft/80">
                  For the curious palates and weekend experiments.
                </div>
              </div>
              <span className="px-2 py-1 rounded-full bg-coffee-gold text-[11px] text-coffee-deep font-semibold">
                Most loved
              </span>
            </div>
            <div className="mt-3 mb-4 relative">
              <span className="text-2xl font-semibold text-cream-light">$38</span>
              <span className="text-xs text-cream-soft/80"> / month</span>
            </div>
            <ul className="space-y-1.5 text-xs text-cream-soft/90 flex-1">
              <li>· 3 rotating single origins curated monthly</li>
              <li>· Blind tasting cards &amp; brewing guides</li>
              <li>· Priority access to limited micro-lots</li>
            </ul>
            <button className="mt-4 inline-flex justify-center rounded-full bg-coffee-gold text-coffee-deep px-4 py-2 text-xs font-semibold hover:bg-coffee-gold-soft">
              Craft my box
            </button>
          </div>

          {/* Tier 3 */}
          <div className="glass-panel gold-border flex flex-col p-5">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div>
                <div className="text-sm font-semibold text-cream-light">Roaster&apos;s Table</div>
                <div className="text-xs text-cream-soft/80">For espresso bars &amp; serious hosts.</div>
              </div>
              <span className="px-2 py-1 rounded-full bg-coffee-medium/70 text-[11px] text-cream-soft">
                5+ bags / month
              </span>
            </div>
            <div className="mt-3 mb-4">
              <span className="text-2xl font-semibold text-cream-light">$72</span>
              <span className="text-xs text-cream-soft/80"> / month</span>
            </div>
            <ul className="space-y-1.5 text-xs text-cream-soft/90 flex-1">
              <li>· Custom roast curves for your setup</li>
              <li>· Dedicated roaster consultation</li>
              <li>· Seasonal espresso &amp; filter split</li>
            </ul>
            <button className="mt-4 inline-flex justify-center rounded-full border border-coffee-gold px-4 py-2 text-xs text-coffee-gold hover:bg-coffee-soft/60">
              Talk to a roaster
            </button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-lg sm:text-xl font-semibold text-cream-light">How it works</h2>
          <div className="hidden sm:block text-xs text-cream-soft/80">
            Transparent sourcing · small-batch roasting · brewed to your rhythm.
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              step: '01',
              title: 'Tell us your ritual',
              body: 'Share how you brew, when you sip, and what you gravitate toward—bold cocoa, bright citrus, or something in between.',
              img: 'https://images.unsplash.com/photo-1481911715442-0bba21c5c510?auto=format&fit=crop&w=900&q=80'
            },
            {
              step: '02',
              title: 'We roast to order',
              body: 'Our roasters dial in your beans in small batches, then rest them just long enough for peak flavor before shipping.',
              img: 'https://images.unsplash.com/photo-1477764227684-8c4e5bca6f0d?auto=format&fit=crop&w=900&q=80'
            },
            {
              step: '03',
              title: 'You sip & refine',
              body: 'Rate each roast, tweak your flavor profile, and we’ll adapt your next shipment automatically.',
              img: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=80'
            }
          ].map((item) => (
            <article key={item.step} className="glass-panel overflow-hidden flex flex-col">
              <div className="relative h-32 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-coffee-deep/90 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-3 text-xs font-mono text-cream-soft/90">
                  {item.step}
                </div>
              </div>
              <div className="p-4 space-y-1.5">
                <h3 className="text-sm font-semibold text-cream-light">{item.title}</h3>
                <p className="text-xs text-cream-soft/90">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

