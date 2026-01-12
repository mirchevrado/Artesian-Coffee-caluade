# Artisanal Coffee Subscription Dashboard

A modern, high‑fidelity React + Tailwind dashboard for an **“Artisanal Coffee Subscription”** product, featuring:

- **Landing page** with hero, pricing tiers, and “How it works” timeline
- **User dashboard** with next shipment details, delivery calendar, and a coffee flavor profile radar chart
- **Inventory page** with coffee lineup, stock level badges, and inline edit actions
- **Dark Roast theme** with deep browns, creams, and gold accents, plus realistic coffee imagery sourced from Unsplash

## Tech stack

- React 18 (Vite + JSX)
- Tailwind CSS 3
- PostCSS + Autoprefixer

## Getting started

```bash
npm install
npm run dev
```

Then open the printed `http://localhost:5173` (or similar) URL in your browser.

## Project structure

- `src/App.jsx` – page switching & app state
- `src/components/LayoutShell.jsx` – shared dark-roast shell with header + sidebar + nav pills
- `src/pages/LandingPage.jsx` – hero, pricing tiers, and “How it works”
- `src/pages/DashboardPage.jsx` – next shipment card, delivery calendar, flavor profile radar chart
- `src/pages/InventoryPage.jsx` – product table with stock badges and edit actions
- `src/index.css` & `tailwind.config.cjs` – theme tokens and utility configuration

## Notes

- All images use public Unsplash URLs and can be replaced with your own assets.
- Navigation between pages is handled client-side via local React state in `App.jsx` (no router dependency).
- The “Edit” button on inventory rows currently triggers a simple `alert` as a placeholder for a future modal/editor.

