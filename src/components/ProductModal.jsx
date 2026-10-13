import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, CheckCircle2, Clock, Package, UtensilsCrossed, ShieldAlert, ShoppingBag } from 'lucide-react';
import Button from './Button';
import { useOrder } from '../context/OrderContext';
import { createWhatsAppUrl, getProductEnquiryMessage } from '../utils/whatsapp';

export default function ProductModal({ product, onClose, onEnquiry }) {
  const { openOrder } = useOrder();
  if (!product) return null;

  const handleWhatsApp = () => {
    const msg = getProductEnquiryMessage(product.name, product.packSizes?.[0]);
    window.open(createWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 20 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-blue-200 z-10 p-6 sm:p-8 md:p-10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-blue-50 text-stone-500 hover:text-royal-900 hover:bg-blue-100 transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
          {/* Left: Product Image */}
          <div className="relative bg-blue-50/50 rounded-2xl p-6 border border-blue-100 flex items-center justify-center aspect-square">
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain filter drop-shadow-lg"
            />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-royal-700 border border-blue-200 shadow-sm">
              {product.tagline}
            </div>
          </div>

          {/* Right: Detailed Information */}
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-royal-600 font-bold">
                Authentic FMCG Collection
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-royal-950 mt-1">
                {product.name}
              </h2>
              <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                {product.longDescription}
              </p>
            </div>

            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-2 gap-3 py-3 border-y border-blue-100">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-blue-50 text-royal-700">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-stone-400 uppercase font-medium">Cooking Time</div>
                  <div className="text-xs font-semibold text-royal-900">{product.cookingTime}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-blue-50 text-royal-700">
                  <UtensilsCrossed className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-stone-400 uppercase font-medium">Ingredients</div>
                  <div className="text-xs font-semibold text-royal-900">{product.ingredients}</div>
                </div>
              </div>
            </div>

            {/* Pack sizes */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-2 flex items-center gap-1.5">
                <Package className="w-4 h-4 text-royal-600" />
                Available Pack Sizes
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.packSizes.map((size, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-50 text-royal-900 border border-blue-200 rounded-lg text-xs font-medium"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-2">
                Key Highlights
              </h4>
              <div className="space-y-1.5">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-royal-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Uses */}
            <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-200 text-xs text-stone-700">
              <span className="font-semibold text-royal-950">Recommended Recipes: </span>
              {product.bestFor}
            </div>

            {/* Note on data */}
            <div className="flex items-start gap-2 text-[11px] text-stone-400 italic">
              <ShieldAlert className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
              <span>
                Note: Product information and specifications shown are editable placeholders. Please refer to actual packaging for latest details.
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                variant="gold"
                onClick={() => {
                  onClose();
                  openOrder(product);
                }}
                className="flex-1 shadow-md shadow-red-500/20"
                icon={ShoppingBag}
              >
                Order Now
              </Button>
              <Button
                variant="whatsapp"
                onClick={handleWhatsApp}
                className="flex-1"
                icon={MessageCircle}
              >
                Inquire on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
