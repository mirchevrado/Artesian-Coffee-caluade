import React from 'react';

const beansImage =
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80';

const calendarDays = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun'
];

const flavorProfile = [
  { label: 'Roast', value: 82 },
  { label: 'Sweetness', value: 76 },
  { label: 'Acidity', value: 48 },
  { label: 'Body', value: 91 },
  { label: 'Aroma', value: 88 }
];

export function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-cream-light">
            Good morning, <span className="text-coffee-gold">Mira</span>
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-cream-soft/80">
            Your next roast is already in motion. Adjust, pause, or savor the anticipation.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs">
          <div className="glass-panel px-3 py-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-emerald" />
            <span className="text-cream-soft/80">
              Brew streak: <span className="text-cream-light font-semibold">7 days</span>
            </span>
          </div>
          <button className="px-3 py-2 rounded-full border border-coffee-soft/70 text-cream-soft/90 hover:bg-coffee-soft/60">
            Pause subscription
          </button>
        </div>
      </section>

      <section className="grid xl:grid-cols-[1.4fr,1.1fr] gap-6">
        {/* Next shipment */}
        <div className="glass-panel gold-border p-5 flex flex-col lg:flex-row gap-4">
          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">📦</span>
                <h2 className="text-sm font-semibold text-cream-light">Next shipment</h2>
              </div>
              <span className="px-2 py-1 rounded-full bg-coffee-medium/70 text-[11px] text-cream-soft">
                Arrives in 3 days
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <div className="text-cream-soft/70">Roast profile</div>
                <div className="text-cream-light font-medium">Midnight Citrus Espresso</div>
                <div className="text-cream-soft/80">
                  60% natural Ethiopia · 40% washed Colombia · medium-dark roast.
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-cream-soft/70">Delivery window</div>
                <div className="text-cream-light font-medium">Thu · 7:00–10:00 AM</div>
                <div className="flex items-center gap-2 text-cream-soft/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald" />
                  <span>Barista will text 15 mins before arrival.</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-[11px]">
              <span className="px-2 py-1 rounded-full bg-coffee-medium/70 text-cream-soft">
                Whole bean · 2 × 250g
              </span>
              <span className="px-2 py-1 rounded-full bg-coffee-medium/70 text-cream-soft">
                Grind size: V60 / Pour-over
              </span>
              <span className="px-2 py-1 rounded-full bg-coffee-medium/70 text-cream-soft">
                Carbon neutral delivery
              </span>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <button className="px-3 py-2 rounded-full bg-coffee-gold text-coffee-deep text-xs font-semibold hover:bg-coffee-gold-soft">
                Adjust this shipment
              </button>
              <button className="px-3 py-2 rounded-full border border-coffee-soft/70 text-xs text-cream-soft/90 hover:bg-coffee-soft/60">
                Skip this one
              </button>
            </div>
          </div>

          <div className="relative w-full lg:w-64 h-44 sm:h-52 rounded-2xl overflow-hidden">
            <img src={beansImage} alt="Fresh roasted coffee beans" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-deep/90 via-coffee-deep/10 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex justify-between text-[11px] text-cream-soft/90">
              <div>
                <div className="text-cream-light font-medium">Batch #274 · Drum 02</div>
                <div>Development: 16% · Drop at 207°C</div>
              </div>
              <div className="text-right">
                <div className="text-cream-light font-medium">Roasted</div>
                <div>Today · 05:42 AM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Flavor profile radar */}
        <div className="glass-panel p-5 space-y-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-lg">🌗</span>
              <h2 className="text-sm font-semibold text-cream-light">Coffee flavor profile</h2>
            </div>
            <select className="bg-coffee-dark/80 border border-coffee-soft/70 rounded-full px-3 py-1 text-xs text-cream-soft focus:outline-none">
              <option>This month</option>
              <option>Last 3 months</option>
              <option>Last year</option>
            </select>
          </div>

          <div className="grid grid-cols-[1.3fr,1fr] gap-4 items-center">
            <div className="relative">
              <svg
                viewBox="0 0 200 200"
                className="w-full drop-shadow-[0_0_30px_rgba(0,0,0,0.4)]"
              >
                <defs>
                  <radialGradient id="radarGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#d4a056" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#d4a056" stopOpacity="0.05" />
                  </radialGradient>
                </defs>
                <g transform="translate(100,100)">
                  {[20, 40, 60, 80].map((r) => (
                    <circle
                      key={r}
                      r={r}
                      fill="none"
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="1"
                    />
                  ))}
                  {Array.from({ length: 5 }).map((_, i) => {
                    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
                    const x = Math.cos(angle) * 80;
                    const y = Math.sin(angle) * 80;
                    return (
                      <line
                        key={i}
                        x1="0"
                        y1="0"
                        x2={x}
                        y2={y}
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="1"
                      />
                    );
                  })}
                  <polygon
                    points={flavorProfile
                      .map((p, i) => {
                        const angle = (Math.PI * 2 * i) / flavorProfile.length - Math.PI / 2;
                        const r = (p.value / 100) * 80;
                        const x = Math.cos(angle) * r;
                        const y = Math.sin(angle) * r;
                        return `${x},${y}`;
                      })
                      .join(' ')}
                    fill="url(#radarGradient)"
                    stroke="#d4a056"
                    strokeWidth="1.5"
                  />
                </g>
              </svg>
            </div>
            <div className="space-y-3 text-xs">
              {flavorProfile.map((p) => (
                <div key={p.label} className="space-y-1">
                  <div className="flex justify-between text-cream-soft/80">
                    <span>{p.label}</span>
                    <span className="text-cream-light">{p.value}/100</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-coffee-dark overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-coffee-gold to-accent-emerald"
                      style={{ width: `${p.value}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="pt-1 text-[11px] text-cream-soft/80">
                Tuned for balanced sweetness and heavy body—perfect for milk drinks and straight
                espresso.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery calendar */}
      <section className="glass-panel p-5 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-lg">🗓️</span>
            <h2 className="text-sm font-semibold text-cream-light">Delivery calendar</h2>
          </div>
          <div className="flex gap-2 text-xs">
            <button className="px-3 py-1 rounded-full border border-coffee-soft/70 text-cream-soft/90 hover:bg-coffee-soft/60">
              This month
            </button>
            <button className="px-3 py-1 rounded-full border border-coffee-soft/40 text-cream-soft/60 hover:bg-coffee-soft/40">
              Next 3 months
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center text-xs">
          {calendarDays.map((d) => (
            <div key={d} className="text-cream-soft/70 uppercase tracking-wide text-[10px]">
              {d}
            </div>
          ))}
          {Array.from({ length: 28 }).map((_, i) => {
            const day = i + 1;
            const isDelivery = [3, 10, 17, 24].includes(day);
            const isToday = day === 9;
            return (
              <button
                key={day}
                className={`relative h-10 rounded-xl text-xs flex flex-col items-center justify-center border transition-colors ${
                  isDelivery
                    ? 'border-coffee-gold/80 bg-coffee-medium/60 shadow-glow-gold/40'
                    : 'border-coffee-soft/40 bg-coffee-dark/60 hover:bg-coffee-soft/60'
                }`}
              >
                <span className="text-cream-light/90">{day}</span>
                {isDelivery && (
                  <span className="mt-0.5 text-[9px] text-coffee-gold font-semibold">
                    Delivery
                  </span>
                )}
                {isToday && (
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-accent-emerald border border-coffee-deep" />
                )}
              </button>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3 text-[11px] text-cream-soft/80 pt-1">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-coffee-gold/80" />
            <span>Confirmed delivery</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-md bg-coffee-soft" />
            <span>Roast in progress</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-accent-emerald" />
            <span>Today</span>
          </div>
        </div>
      </section>
    </div>
  );
}

