import React, { useState } from 'react';
import { LayoutShell } from './components/LayoutShell.jsx';
import { LandingPage } from './pages/LandingPage.jsx';
import { DashboardPage } from './pages/DashboardPage.jsx';
import { InventoryPage } from './pages/InventoryPage.jsx';

const PAGES = {
  landing: <LandingPage />,
  dashboard: <DashboardPage />,
  inventory: <InventoryPage />
};

export default function App() {
  const [activePage, setActivePage] = useState('landing');

  return (
    <LayoutShell activePage={activePage} onNavigate={setActivePage}>
      {PAGES[activePage]}
    </LayoutShell>
  );
}

