import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

// Optimized scroll-to-top on route change
const ScrollToTop = React.memo(() => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
});

const App = () => {
  const [menu, setMenu] = useState('technology');
  const [search, setSearch] = useState('');

  return (
    <div className="w-screen min-h-screen bg-white">
      <Navbar setMenu={setMenu} setSearch={setSearch} />
      <ScrollToTop />
      <main className="mt-28">
        {/* Pass context to children routes */}
        <Outlet context={{ menu, search }} />
      </main>
    </div>
  );
};

export default App;
