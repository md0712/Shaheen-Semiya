import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, MessageCircle, Menu, X, ArrowUpRight, ShoppingBag } from 'lucide-react';
import { navLinks, contactDetails } from '../data/navigation';
import { createWhatsAppUrl, getGeneralEnquiryMessage } from '../utils/whatsapp';
import { useOrder } from '../context/OrderContext';
import Button from './Button';

import ShaheenLogo from './ShaheenLogo';

export default function Navbar({ onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openOrder } = useOrder();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleWhatsAppClick = () => {
    const url = createWhatsAppUrl(getGeneralEnquiryMessage(), contactDetails.whatsapp);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-ivory-100/95 backdrop-blur-md shadow-sm border-b border-wheat-300/60 py-2.5'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Authentic Logo on the left */}
            <Link
              to="/"
              className="flex items-center gap-2 group focus:outline-none"
              aria-label="SHAHEEN TASTE SEMIYA Home"
            >
              <ShaheenLogo className="h-10 sm:h-12 w-auto" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-7">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-xs uppercase tracking-wider font-medium transition-all duration-200 relative py-1 ${
                      isActive
                        ? 'text-gold-600 font-bold'
                        : 'text-stone-700 hover:text-gold-600'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500 rounded-full animate-fadeIn" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right Action Icons: Search + Order Now CTA */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Search Icon button */}
              <button
                type="button"
                onClick={onOpenSearch}
                className="p-2.5 rounded-full text-stone-700 hover:text-brushstroke-600 hover:bg-wheat-200/50 transition-colors border border-transparent hover:border-wheat-300/60 focus:outline-none"
                aria-label="Search products and recipes"
                title="Search (Ctrl + K)"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Order Now Button */}
              <Button
                variant="gold"
                size="sm"
                onClick={() => openOrder()}
                icon={ShoppingBag}
                className="shadow-sm shadow-red-500/20"
              >
                Order Now
              </Button>
            </div>

            {/* Mobile Actions: Search & Hamburger */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                type="button"
                onClick={onOpenSearch}
                className="p-2 rounded-full text-stone-700 hover:bg-wheat-200/50"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-forest-950 hover:bg-wheat-200/50 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-forest-950/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-out Menu Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-ivory-100 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-gold-400/30">
            <div>
              {/* Top Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-wheat-300">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <ShaheenLogo className="h-10 w-auto" />
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-stone-500 hover:bg-wheat-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="py-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-wheat-300/80 text-gold-600 font-bold'
                          : 'text-stone-700 hover:bg-wheat-200/50'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-wheat-300 space-y-2.5">
              <Button
                variant="gold"
                size="md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openOrder();
                }}
                icon={ShoppingBag}
                className="w-full"
              >
                Order Now
              </Button>
              <Button
                variant="whatsapp"
                size="md"
                onClick={handleWhatsAppClick}
                icon={MessageCircle}
                className="w-full"
              >
                WhatsApp Enquiry
              </Button>
              <div className="text-center text-[11px] text-stone-500 pt-1">
                Direct helpline: <span className="font-semibold text-royal-950">{contactDetails.phone}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
