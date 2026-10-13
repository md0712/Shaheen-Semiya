import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import PageLoader from './components/PageLoader';
import OrderModal from './components/OrderModal';
import { OrderProvider, useOrder } from './context/OrderContext';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import QualityProcess from './pages/QualityProcess';
import Recipes from './pages/Recipes';
import WholesaleRetail from './pages/WholesaleRetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Auto scroll to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function OrderModalConsumer() {
  const { orderState, closeOrder } = useOrder();
  return (
    <OrderModal
      isOpen={orderState.isOpen}
      onClose={closeOrder}
      initialProduct={orderState.product}
    />
  );
}

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  // Global Ctrl + K / Cmd + K shortcut to open search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <OrderProvider>
        <ScrollToTop />
        {/* Initial Brand Loading Transition using Bird Logo */}
        <PageLoader />

        <div className="flex flex-col min-h-screen bg-ivory-100 text-stone-800">
          {/* Slim, Premium Sticky Navbar */}
          <Navbar onOpenSearch={() => setSearchOpen(true)} />

          {/* Search Modal */}
          <SearchModal
            isOpen={searchOpen}
            onClose={() => setSearchOpen(false)}
          />

          {/* Global Order Now Modal */}
          <OrderModalConsumer />

          {/* Main Routed Page Content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/quality-process" element={<QualityProcess />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/wholesale-retail" element={<WholesaleRetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Comprehensive Premium Footer */}
          <Footer />
        </div>
      </OrderProvider>
    </BrowserRouter>
  );
}
