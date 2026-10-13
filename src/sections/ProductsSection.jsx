import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { productsData } from '../data/products';
import { Sparkles, Filter } from 'lucide-react';

export default function ProductsSection({ onEnquiry }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filterCategories = [
    { id: 'all', label: 'All Semiya' },
    { id: 'roasted', label: 'Pre-Roasted' },
    { id: 'classic', label: 'Classic Vermicelli' },
    { id: 'specialty', label: 'Specialty & Festive' },
  ];

  const filteredProducts = productsData.filter((product) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'roasted') return product.id === 'roasted-semiya';
    if (activeFilter === 'classic') return product.id === 'regular-vermicelli' || product.id === 'thin-semiya';
    if (activeFilter === 'specialty') return product.id === 'long-cut-semiya' || product.id === 'special-semiya';
    return true;
  });

  return (
    <section id="products" className="py-20 lg:py-28 bg-ivory-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          badge="OUR SIGNATURE SELECTIONS"
          title="Masterfully Crafted Semiya Range"
          subtitle="Engineered for distinct culinary preparations — from instant festive sweets to delicate savory comfort meals."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${
                activeFilter === cat.id
                  ? 'bg-forest-900 text-ivory-100 border-forest-900 shadow-sm'
                  : 'bg-white text-stone-600 border-wheat-300 hover:border-gold-400 hover:text-forest-950'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={(prod) => setSelectedProduct(prod)}
            />
          ))}
        </div>

        {/* Product Modal */}
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onEnquiry={onEnquiry}
        />
      </div>
    </section>
  );
}
