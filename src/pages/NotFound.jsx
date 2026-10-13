import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Home, ArrowLeft, Search } from 'lucide-react';

import ShaheenLogo from '../components/ShaheenLogo';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory-100 flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-gold-400/30 shadow-xl space-y-6">
        <div className="flex justify-center">
          <ShaheenLogo className="h-20 w-auto" />
        </div>

        <div>
          <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">
            Page Not Found • 404
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950 mt-1">
            Looking for Goodness?
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
            The page you requested may have moved or doesn't exist. Explore our vermicelli collection or return to the main showcase.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button variant="primary" to="/" icon={Home}>
            Return Home
          </Button>
          <Button variant="outline" to="/products">
            View Products
          </Button>
        </div>
      </div>
    </div>
  );
}
