import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { productsData } from '../data/products';
import { Search, Package, Sparkles, Check, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.bestFor.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (activeCategory === 'all') return true;
    if (activeCategory === 'roasted') return product.id === 'roasted-semiya';
    if (activeCategory === 'raw') return product.id === 'regular-vermicelli' || product.id === 'thin-semiya';
    if (activeCategory === 'specialty') return product.id === 'long-cut-semiya' || product.id === 'special-semiya';

    return true;
  });

  return (
    <div className="pt-28 pb-20 bg-ivory-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-gold-500/20 bg-ivory-200 text-forest-900 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span>PRODUCT COLLECTION</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-950 tracking-tight leading-tight">
            Our Vermicelli Range
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Spacious cards, verified pack sizes, and authentic culinary notes for every vermicelli variety.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-wheat-300/80 shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, recipe or size..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-ivory-100 border border-wheat-300 text-xs text-forest-950 placeholder-stone-400 focus:outline-none focus:border-gold-500"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {[
              { id: 'all', label: 'All Products' },
              { id: 'roasted', label: 'Roasted' },
              { id: 'raw', label: 'Classic & Thin' },
              { id: 'specialty', label: 'Specialty Cuts' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-forest-900 text-ivory-100 shadow-sm font-semibold'
                    : 'bg-ivory-100 text-stone-600 hover:bg-wheat-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9 mb-20">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={(prod) => setSelectedProduct(prod)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-wheat-300 mb-20">
            <Package className="w-10 h-10 text-stone-300 mx-auto mb-3" />
            <p className="text-stone-600 text-sm">No products found matching your search.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
              className="text-xs text-gold-600 font-semibold underline mt-2"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Product Comparison Matrix */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-wheat-300/80 shadow-md mb-16 overflow-x-auto">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
              Culinary Selector
            </span>
            <h3 className="font-serif text-2xl font-bold text-forest-950">
              Product Specifications & Cooking Matrix
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Select the right variety for your home or catering menu. (Specifications shown are editable placeholders).
            </p>
          </div>

          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-wheat-300 bg-ivory-100/70 text-forest-950 font-serif text-sm">
                <th className="py-3 px-4 font-bold">Product</th>
                <th className="py-3 px-4 font-bold">Roast Status</th>
                <th className="py-3 px-4 font-bold">Cooking Time</th>
                <th className="py-3 px-4 font-bold">Pack Sizes Available</th>
                <th className="py-3 px-4 font-bold">Ideal Recipes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-wheat-200">
              {productsData.map((p) => (
                <tr key={p.id} className="hover:bg-ivory-50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-forest-950 flex items-center gap-2">
                    <img src={p.image} alt={p.name} className="w-8 h-8 object-contain rounded bg-white p-0.5" />
                    <span>{p.name}</span>
                  </td>
                  <td className="py-3.5 px-4 text-stone-600">
                    {p.id === 'roasted-semiya' ? 'Pre-Toasted' : 'Natural Unroasted'}
                  </td>
                  <td className="py-3.5 px-4 font-medium text-forest-900">{p.cookingTime}</td>
                  <td className="py-3.5 px-4 text-stone-600">{p.packSizes.join(', ')}</td>
                  <td className="py-3.5 px-4 text-stone-600">{p.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </div>
  );
}
