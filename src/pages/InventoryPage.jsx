import React from 'react';

const products = [
  {
    id: 'EB-01',
    name: 'Sable Reserve',
    origin: 'Ethiopia · Yirgacheffe',
    notes: 'Candied citrus, jasmine, bergamot',
    stock: 'Low',
    stockLevel: 18,
    image:
      'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'EB-02',
    name: 'Night Bloom Espresso',
    origin: 'Brazil / El Salvador',
    notes: 'Cacao nib, toasted almond, brûléed sugar',
    stock: 'In stock',
    stockLevel: 62,
    image:
      'https://images.unsplash.com/photo-1521017432531-63c5c60a1b83?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'EB-03',
    name: 'Fog Lifter Decaf',
    origin: 'Colombia · Sugarcane EA',
    notes: 'Milk chocolate, dried fig, almond butter',
    stock: 'In stock',
    stockLevel: 44,
    image:
      'https://images.unsplash.com/photo-1477764227684-8c4e5bca6f0d?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'EB-04',
    name: 'Cinder Bloom',
    origin: 'Rwanda · Nyaruguru',
    notes: 'Blackberry, baking spice, pine honey',
    stock: 'Very low',
    stockLevel: 7,
    image:
      'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'EB-05',
    name: 'Harvest Horizon',
    origin: 'Kenya / Guatemala',
    notes: 'Blood orange, caramel, red currant',
    stock: 'Sold out',
    stockLevel: 0,
    image:
      'https://images.unsplash.com/photo-1503481766315-7a586b20f66d?auto=format&fit=crop&w=900&q=80'
  }
];

function StockBadge({ status }) {
  let color = 'bg-coffee-medium/70 text-cream-soft';
  if (status === 'In stock') color = 'bg-accent-emerald/15 text-accent-emerald border border-accent-emerald/40';
  if (status === 'Low') color = 'bg-coffee-gold/10 text-coffee-gold border border-coffee-gold/60';
  if (status === 'Very low') color = 'bg-red-900/40 text-cream-light border border-red-500/40';
  if (status === 'Sold out') color = 'bg-coffee-dark/80 text-cream-soft/60 border border-coffee-soft/60';

  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] ${color}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      <span>{status}</span>
    </span>
  );
}

export function InventoryPage() {
  return (
    <div className="space-y-6">
      <section className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-cream-light">Roastery inventory</h1>
          <p className="mt-1 text-xs sm:text-sm text-cream-soft/80">
            Track lots, spot low stock, and keep every subscription box perfectly calibrated.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <button className="px-3 py-2 rounded-full bg-coffee-gold text-coffee-deep font-semibold hover:bg-coffee-gold-soft">
            + Add new coffee
          </button>
          <button className="px-3 py-2 rounded-full border border-coffee-soft/70 text-cream-soft/90 hover:bg-coffee-soft/60">
            Download inventory CSV
          </button>
        </div>
      </section>

      <section className="glass-panel p-4 sm:p-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-cream-soft/80">
            <span className="px-2 py-1 rounded-full bg-coffee-medium/70 text-cream-soft">
              5 active coffees
            </span>
            <span>|</span>
            <span>
              {products.filter((p) => p.stock === 'Low' || p.stock === 'Very low').length} nearing
              threshold
            </span>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <button className="px-3 py-1 rounded-full border border-coffee-soft/70 text-cream-soft/90 hover:bg-coffee-soft/60">
              Filter origin
            </button>
            <button className="px-3 py-1 rounded-full border border-coffee-soft/70 text-cream-soft/90 hover:bg-coffee-soft/60">
              Roast level
            </button>
            <button className="px-3 py-1 rounded-full border border-coffee-soft/70 text-cream-soft/90 hover:bg-coffee-soft/60">
              Stock status
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-coffee-soft/50">
          <table className="min-w-full text-left text-xs">
            <thead className="bg-coffee-dark/80 text-cream-soft/70 uppercase tracking-[0.12em] text-[10px]">
              <tr>
                <th className="px-4 py-3 font-medium">Coffee</th>
                <th className="px-4 py-3 font-medium">Origin</th>
                <th className="px-4 py-3 font-medium">Flavor notes</th>
                <th className="px-4 py-3 font-medium">Stock</th>
                <th className="px-4 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-coffee-soft/40 bg-coffee-dark/40">
              {products.map((p) => (
                <tr key={p.id} className="hover:bg-coffee-soft/40 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg overflow-hidden border border-coffee-soft/60">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-cream-light text-sm font-medium">{p.name}</div>
                        <div className="text-[11px] text-cream-soft/70 font-mono">{p.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-cream-soft/90">{p.origin}</td>
                  <td className="px-4 py-3 text-cream-soft/80">{p.notes}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <StockBadge status={p.stock} />
                      <div className="w-20 h-1.5 bg-coffee-dark rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            p.stockLevel === 0
                              ? 'bg-coffee-soft'
                              : p.stockLevel < 10
                              ? 'bg-red-500'
                              : p.stockLevel < 30
                              ? 'bg-coffee-gold'
                              : 'bg-accent-emerald'
                          }`}
                          style={{ width: `${Math.min(p.stockLevel, 100)}%` }}
                        />
                      </div>
                      <span className="text-[11px] text-cream-soft/70">{p.stockLevel} bags</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      className="inline-flex items-center gap-1.5 rounded-full border border-coffee-soft/70 px-3 py-1 text-[11px] text-cream-soft/90 hover:bg-coffee-soft/60"
                      onClick={() => {
                        // Placeholder for edit interaction
                        alert(`Open editor for ${p.name}`);
                      }}
                    >
                      <span className="material-icons text-[14px]">tune</span>
                      <span>Edit</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

