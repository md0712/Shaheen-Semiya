import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search, X, Package, Utensils, ArrowRight, ShieldCheck } from 'lucide-react';
import { productsData } from '../data/products';
import { recipesData } from '../data/recipes';

export default function SearchModal({ isOpen, onClose, onSelectProduct, onSelectRecipe }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (!query.trim()) return { products: [], recipes: [], pages: [] };
    const q = query.toLowerCase();

    const filteredProducts = productsData.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.bestFor.toLowerCase().includes(q)
    );

    const filteredRecipes = recipesData.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.subtitle.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q)
    );

    const staticPages = [
      { name: 'Home', path: '/', desc: 'Main brand introduction and hero' },
      { name: 'About Us', path: '/about', desc: 'Brand story, craftsmanship and ethos' },
      { name: 'Products Showcase', path: '/products', desc: 'Full range of Shaheen vermicelli packs' },
      { name: 'Quality & Process', path: '/quality-process', desc: '5-stage production & testing standards' },
      { name: 'Recipes Collection', path: '/recipes', desc: 'Festive payasam, savory upma and more' },
      { name: 'Wholesale & Retail', path: '/wholesale-retail', desc: 'Bulk supply, distributor enquiry' },
      { name: 'Contact & Support', path: '/contact', desc: 'Corporate office and customer care' },
    ].filter((page) => page.name.toLowerCase().includes(q) || page.desc.toLowerCase().includes(q));

    return {
      products: filteredProducts,
      recipes: filteredRecipes,
      pages: staticPages,
    };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-forest-950/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: -20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-gold-400/40 z-10 overflow-hidden flex flex-col max-h-[80vh]"
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-wheat-200 flex items-center gap-3 bg-ivory-100">
          <Search className="w-5 h-5 text-gold-600 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products (e.g., Roasted Semiya), recipes, or pages..."
            className="w-full bg-transparent text-forest-950 placeholder-stone-400 text-base focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-stone-400 hover:text-stone-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-wheat-300 text-stone-700 hover:bg-wheat-400 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="p-5 overflow-y-auto space-y-6">
          {!query.trim() && (
            <div className="text-center py-8 text-stone-400">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-40 text-gold-600" />
              <p className="text-sm">Type any keyword to discover vermicelli varieties, festive recipes, and wholesale info.</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['Roasted Semiya', 'Payasam', 'Upma', 'Wholesale', 'Durum Wheat'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1 bg-ivory-200 text-xs text-forest-900 rounded-full hover:bg-wheat-300 border border-wheat-300/80 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query.trim() && (
            <>
              {results.products.length === 0 &&
                results.recipes.length === 0 &&
                results.pages.length === 0 && (
                  <div className="text-center py-10 text-stone-500">
                    <p className="text-sm">No results found matching "{query}".</p>
                    <p className="text-xs text-stone-400 mt-1">Try searching for "Semiya", "Payasam", or "Biryani".</p>
                  </div>
                )}

              {/* Products Found */}
              {results.products.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gold-600 font-bold mb-2.5 flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5" />
                    Products ({results.products.length})
                  </h4>
                  <div className="space-y-2">
                    {results.products.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => {
                          onClose();
                          if (onSelectProduct) {
                            onSelectProduct(p);
                          } else {
                            navigate('/products');
                          }
                        }}
                        className="flex items-center justify-between p-3 rounded-xl bg-ivory-100 hover:bg-wheat-200/70 border border-wheat-200 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-10 h-10 object-contain rounded-lg bg-white p-1"
                          />
                          <div>
                            <div className="text-sm font-semibold text-forest-950">{p.name}</div>
                            <div className="text-xs text-stone-500 line-clamp-1">{p.shortDescription}</div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-stone-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recipes Found */}
              {results.recipes.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gold-600 font-bold mb-2.5 flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5" />
                    Recipes ({results.recipes.length})
                  </h4>
                  <div className="space-y-2">
                    {results.recipes.map((r) => (
                      <div
                        key={r.id}
                        onClick={() => {
                          onClose();
                          if (onSelectRecipe) {
                            onSelectRecipe(r);
                          } else {
                            navigate('/recipes');
                          }
                        }}
                        className="flex items-center justify-between p-3 rounded-xl bg-ivory-100 hover:bg-wheat-200/70 border border-wheat-200 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={r.image}
                            alt={r.title}
                            className="w-10 h-10 object-cover rounded-lg"
                          />
                          <div>
                            <div className="text-sm font-semibold text-forest-950">{r.title}</div>
                            <div className="text-xs text-stone-500 line-clamp-1">{r.subtitle}</div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-stone-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation Pages Found */}
              {results.pages.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-stone-400 font-bold mb-2.5 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Site Sections ({results.pages.length})
                  </h4>
                  <div className="space-y-1.5">
                    {results.pages.map((pg, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          onClose();
                          navigate(pg.path);
                        }}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-ivory-50 hover:bg-wheat-200/60 border border-wheat-200/60 cursor-pointer text-xs"
                      >
                        <div>
                          <span className="font-semibold text-forest-950">{pg.name}</span>
                          <span className="text-stone-500 ml-2">— {pg.desc}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
