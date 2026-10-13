import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Phone, MapPin, ArrowUp, Instagram, Facebook, Youtube, Linkedin, ShieldCheck, Heart } from 'lucide-react';
import { navLinks, contactDetails, socialLinks } from '../data/navigation';
import { productsData } from '../data/products';
import { createWhatsAppUrl, getGeneralEnquiryMessage } from '../utils/whatsapp';
import Button from './Button';

import ShaheenLogo from './ShaheenLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const url = createWhatsAppUrl(getGeneralEnquiryMessage(), contactDetails.whatsapp);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-white text-stone-700 pt-16 sm:pt-20 pb-10 border-t border-wheat-200/80 shadow-sm relative overflow-hidden">
      {/* Background subtle ambient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-wheat-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-wheat-200/90">
          {/* Brand Profile (Col 1 & 2) */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3">
              <ShaheenLogo className="h-16 sm:h-20 w-auto" />
            </Link>

            <p className="text-sm text-stone-600 leading-relaxed max-w-sm">
              Goodness in Every Strand. Dedicated to delivering premium-grade vermicelli and traditional culinary joy to households, restaurants, and retail partners across India and beyond.
            </p>

            {/* Quality & Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-stone-700">
              <div className="flex items-center gap-1.5 bg-ivory-100/90 px-3 py-1.5 rounded-full border border-wheat-300/80 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-gold-600" />
                <span className="font-medium text-forest-950">100% Quality Inspected Wheat</span>
              </div>
              <div className="flex items-center gap-1.5 bg-ivory-100/90 px-3 py-1.5 rounded-full border border-wheat-300/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-gold-500" />
                <span className="font-medium text-forest-950">Modern Italian Extrusion</span>
              </div>
            </div>

            {/* WhatsApp CTA Banner in footer */}
            <div className="pt-2">
              <Button
                variant="whatsapp"
                size="sm"
                onClick={handleWhatsApp}
                icon={MessageCircle}
                className="shadow-sm hover:shadow-md"
              >
                Instant WhatsApp Desk: {contactDetails.whatsappDisplay}
              </Button>
            </div>
          </div>

          {/* Quick Links (Col 3) */}
          <div>
            <h4 className="font-serif text-base font-bold text-forest-950 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-600">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-forest-950 hover:translate-x-0.5 transition-all inline-flex items-center gap-1.5 group font-medium"
                  >
                    <span className="text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories (Col 4) */}
          <div>
            <h4 className="font-serif text-base font-bold text-forest-950 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              Our Products
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-600">
              {productsData.map((prod) => (
                <li key={prod.id}>
                  <Link
                    to="/products"
                    className="hover:text-forest-950 hover:translate-x-0.5 transition-all inline-flex items-center gap-1.5 group font-medium"
                  >
                    <span className="text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{prod.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Col 5) */}
          <div>
            <h4 className="font-serif text-base font-bold text-forest-950 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              Head Office
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{contactDetails.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-600 shrink-0" />
                <span className="font-medium text-stone-800">{contactDetails.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-600 shrink-0" />
                <span>{contactDetails.email}</span>
              </li>
              <li className="pt-2 text-[11px] text-stone-500">
                Business Hours: {contactDetails.workingHours}
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-ivory-100 border border-wheat-200 flex items-center justify-center text-forest-900 hover:bg-forest-900 hover:text-white hover:border-forest-900 transition-all shadow-xs"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-ivory-100 border border-wheat-200 flex items-center justify-center text-forest-900 hover:bg-forest-900 hover:text-white hover:border-forest-900 transition-all shadow-xs"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-ivory-100 border border-wheat-200 flex items-center justify-center text-forest-900 hover:bg-forest-900 hover:text-white hover:border-forest-900 transition-all shadow-xs"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-ivory-100 border border-wheat-200 flex items-center justify-center text-forest-900 hover:bg-forest-900 hover:text-white hover:border-forest-900 transition-all shadow-xs"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar: Legal & Scroll-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} SHAHEEN SEMIYA. All rights reserved. Food products and branding are registered trade properties. (Placeholder business details)</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-forest-950 transition-colors">Privacy Policy</Link>
            <Link to="/wholesale-retail" className="hover:text-forest-950 transition-colors">Trade Terms</Link>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-ivory-100 border border-wheat-300 text-forest-950 hover:bg-forest-950 hover:text-white transition-all flex items-center gap-1 shadow-xs"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
