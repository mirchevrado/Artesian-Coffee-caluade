import React from 'react';

const NAV_ITEMS = [
  { id: 'landing', label: 'Discover', icon: '☕' },
  { id: 'dashboard', label: 'My Ritual', icon: '📦' },
  { id: 'inventory', label: 'Roastery', icon: '📦' }
];

export function LayoutShell({ activePage, onNavigate, children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-coffee-deep via-coffee-dark to-coffee-medium text-cream-light flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-coffee-soft/40 bg-gradient-to-b from-black/60 to-coffee-dark/90">
        <div className="px-6 py-6 border-b border-coffee-soft/40 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-coffee-gold to-coffee-soft flex items-center justify-center text-coffee-deep font-bold shadow-glow-gold">
            AC
          </div>
          <div>
            <div className="font-semibold tracking-wide uppercase text-sm text-cream-light">
              Ember &amp; Bloom
            </div>
            <div className="text-xs text-cream-soft/70">Artisanal Coffee Club</div>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = item.id === activePage;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-coffee-gold text-coffee-deep shadow-glow-gold'
                    : 'text-cream-soft hover:bg-coffee-soft/60'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="px-6 pb-6 pt-2 text-xs text-cream-soft/70">
          <div className="glass-panel px-4 py-3 text-xs">
            <div className="text-cream-light font-medium mb-1">Today&apos;s Roast</div>
            <div className="text-cream-soft text-[11px]">
              Nyaruguru Single Origin · honey process · notes of cacao nib &amp; black cherry.
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-20 border-b border-coffee-soft/40 bg-coffee-deep/80 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <button
                className="lg:hidden p-2 rounded-full bg-coffee-dark border border-coffee-soft/60 text-cream-light"
                onClick={() => {
                  const first = NAV_ITEMS[0];
                  onNavigate(first.id);
                }}
              >
                ☰
              </button>
              <div className="lg:hidden flex items-center gap-2">
                <span className="h-8 w-8 rounded-full bg-gradient-to-br from-coffee-gold to-coffee-soft flex items-center justify-center text-coffee-deep font-semibold">
                  AC
                </span>
                <span className="text-sm font-semibold tracking-wide">Ember &amp; Bloom</span>
              </div>
              <div className="hidden lg:flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-cream-soft/70">
                <span className="w-1.5 h-1.5 bg-coffee-gold rounded-full" />
                <span>Roasted for Ritual</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex bg-coffee-dark/70 border border-coffee-soft/50 rounded-full px-3 py-1 text-xs items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
                <span className="text-cream-soft/80">Next roast in 3h 12m</span>
              </div>
              <button className="relative h-9 w-9 rounded-full bg-coffee-soft flex items-center justify-center text-cream-soft border border-coffee-soft/60">
                <span className="material-icons text-lg">person</span>
                <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-accent-emerald border border-coffee-deep" />
              </button>
            </div>
          </div>

          {/* Mobile nav pills */}
          <div className="lg:hidden border-t border-coffee-soft/40 bg-coffee-dark/90">
            <div className="max-w-6xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto no-scrollbar">
              {NAV_ITEMS.map((item) => {
                const isActive = item.id === activePage;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`nav-pill flex items-center gap-2 whitespace-nowrap ${
                      isActive ? 'nav-pill-active' : 'nav-pill-muted'
                    }`}
                  >
                    <span className="text-sm">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        <main className="flex-1">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

