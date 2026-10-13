import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  Package, 
  UtensilsCrossed, 
  ShieldAlert, 
  ShoppingBag, 
  ChevronLeft, 
  ChevronRight,
  Barcode,
  Layers,
  Sparkles
} from 'lucide-react';
import Button from './Button';
import { useOrder } from '../context/OrderContext';
import { contactDetails } from '../data/navigation';
import { createWhatsAppUrl, getProductEnquiryMessage } from '../utils/whatsapp';

export default function ProductModal({ product, onClose, onEnquiry }) {
  const { openOrder } = useOrder();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) return null;

  // Prepare gallery images (1 to 3 images: front, back, barcode)
  const gallery = product.gallery && product.gallery.length > 0
    ? product.gallery
    : [
        { id: 'front', label: 'Front Pack', type: 'Front View', src: product.image },
        { id: 'back', label: 'Back & Nutrition', type: 'Back Panel', src: '/images/products/product_pack_back.jpg' },
        { id: 'barcode', label: 'Barcode & Details', type: 'Barcode & FSSAI', src: '/images/products/product_barcode_details.jpg' },
      ];

  const currentImage = gallery[selectedImageIndex] || gallery[0];

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const handleWhatsApp = () => {
    const msg = getProductEnquiryMessage(product.name, product.packSizes?.[0]);
    window.open(createWhatsAppUrl(msg, contactDetails.whatsapp), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 20 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-white rounded-3xl max-w-5xl w-full max-h-[92vh] md:max-h-[88vh] shadow-2xl border border-blue-200 z-10 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-white/90 hover:bg-red-50 text-stone-500 hover:text-brushstroke-600 border border-stone-200 shadow-md transition-all group"
          aria-label="Close details"
        >
          <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
        </button>

        {/* Modal Content: Left column Fixed Image Gallery, Right column Scrollable Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 h-full overflow-hidden">
          
          {/* =========================================
              LEFT COLUMN: FIXED / PINNED IMAGE GALLERY
              ========================================= */}
          <div className="md:col-span-5 lg:col-span-5 p-5 sm:p-7 bg-gradient-to-b from-blue-50/70 via-white to-blue-50/40 border-b md:border-b-0 md:border-r border-blue-100/90 flex flex-col justify-between shrink-0 select-none">
            
            {/* Top view badge */}
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white border border-blue-200 text-royal-700 shadow-xs">
                <Layers className="w-3.5 h-3.5 text-royal-600" />
                <span>{currentImage.type || currentImage.label}</span>
              </span>
              <span className="text-[11px] font-semibold text-stone-400 bg-white/80 px-2 py-0.5 rounded-md border border-stone-200/80">
                {selectedImageIndex + 1} of {gallery.length}
              </span>
            </div>

            {/* Main Interactive Image Viewport */}
            <div className="relative rounded-2xl bg-white p-4 border border-blue-100 shadow-inner flex items-center justify-center aspect-square overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage.src}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  src={currentImage.src}
                  alt={`${product.name} - ${currentImage.label}`}
                  className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                />
              </AnimatePresence>

              {/* Tagline pill on front image */}
              {selectedImageIndex === 0 && (
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-[11px] font-bold text-royal-700 border border-blue-200 shadow-xs">
                  {product.tagline}
                </div>
              )}

              {/* Prev / Next Navigation Arrows */}
              {gallery.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-royal-700 hover:text-white text-royal-950 border border-blue-200 shadow-md transition-all opacity-80 group-hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-royal-700 hover:text-white text-royal-950 border border-blue-200 shadow-md transition-all opacity-80 group-hover:opacity-100"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>

            {/* Bottom 1 to 3 Thumbnails Selector (Front, Back, Barcode) */}
            <div className="pt-4">
              <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Packaging Photos</span>
                <span className="text-[10px] text-royal-600 font-normal">Click to switch</span>
              </div>
              
              <div className="grid grid-cols-3 gap-2.5">
                {gallery.map((item, idx) => {
                  const isSelected = selectedImageIndex === idx;
                  return (
                    <button
                      key={item.id || idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative p-1.5 rounded-xl border transition-all text-left flex flex-col items-center gap-1.5 ${
                        isSelected
                          ? 'border-royal-600 bg-white ring-2 ring-royal-600/30 shadow-md'
                          : 'border-blue-200/80 bg-white/70 hover:bg-white hover:border-royal-400 opacity-80 hover:opacity-100 shadow-2xs'
                      }`}
                    >
                      <div className="w-full h-14 rounded-lg bg-blue-50/50 flex items-center justify-center overflow-hidden p-1">
                        <img
                          src={item.src}
                          alt={item.label}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <span className={`text-[10px] font-bold text-center leading-tight truncate w-full ${
                        isSelected ? 'text-royal-800' : 'text-stone-600'
                      }`}>
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* ============================================
              RIGHT COLUMN: INDEPENDENT SCROLLABLE DETAILS
              ============================================ */}
          <div className="md:col-span-7 lg:col-span-7 p-6 sm:p-8 md:p-10 overflow-y-auto modal-scrollbar max-h-[55vh] md:max-h-[88vh] space-y-6">
            
            {/* Header info */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-royal-700 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-royal-600" />
                <span>Authentic FMCG Collection</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-royal-950 tracking-tight leading-tight">
                {product.name}
              </h2>
              <p className="text-sm text-stone-600 mt-2.5 leading-relaxed font-light">
                {product.longDescription}
              </p>
            </div>

            {/* Quick Cooking & Ingredients Grid */}
            <div className="grid grid-cols-2 gap-3.5 py-4 border-y border-blue-100 bg-blue-50/30 rounded-2xl px-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white border border-blue-200 text-royal-700 shadow-2xs">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-stone-400 uppercase font-semibold">Cooking Time</div>
                  <div className="text-xs font-bold text-royal-950 mt-0.5">{product.cookingTime}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white border border-blue-200 text-royal-700 shadow-2xs">
                  <UtensilsCrossed className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-stone-400 uppercase font-semibold">Ingredients</div>
                  <div className="text-xs font-bold text-royal-950 mt-0.5 truncate max-w-[140px] sm:max-w-none" title={product.ingredients}>
                    {product.ingredients}
                  </div>
                </div>
              </div>
            </div>

            {/* Available Pack Sizes */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-stone-500 font-bold mb-2.5 flex items-center gap-1.5">
                <Package className="w-4 h-4 text-royal-600" />
                Available Pack Sizes
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {product.packSizes.map((size, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 bg-blue-50/90 hover:bg-blue-100/80 text-royal-900 border border-blue-200 rounded-xl text-xs font-semibold shadow-2xs transition-colors"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Quality Highlights */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-stone-500 font-bold mb-2.5">
                Key Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-stone-50 border border-stone-100 text-xs text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-royal-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Recipes */}
            <div className="p-4 bg-gradient-to-r from-blue-50/80 via-white to-blue-50/50 rounded-2xl border border-blue-200 text-xs text-stone-700 shadow-xs">
              <span className="font-bold text-royal-950 block mb-1">Recommended Preparations:</span>
              <p className="text-stone-600 leading-relaxed">{product.bestFor}</p>
            </div>

            {/* Packaging & Barcode Specifications Notice */}
            <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/70 text-xs text-amber-900 flex items-start gap-2.5">
              <Barcode className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block text-stone-800">Barcode & Batch Coding:</span>
                <span className="text-[11px] text-stone-600 leading-snug">
                  Every retail pouch features verified EAN-13 barcodes, FSSAI regulatory certification, manufacturing date, and batch trace codes for seamless point-of-sale checkout and wholesale scanning.
                </span>
              </div>
            </div>

            {/* Note / Disclaimer */}
            <div className="flex items-start gap-2 text-[11px] text-stone-400 italic">
              <ShieldAlert className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
              <span>
                Note: Product information, nutritional values, and packaging visuals represent authentic commercial FMCG trade standards. Please refer to printed packaging for batch-specific updates.
              </span>
            </div>

            {/* Sticky Action CTA Buttons at the bottom of details */}
            <div className="pt-3 border-t border-blue-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                variant="gold"
                onClick={() => {
                  onClose();
                  openOrder(product);
                }}
                icon={ShoppingBag}
                iconPosition="left"
                className="flex-1 shadow-md shadow-red-500/20"
              >
                Order Now
              </Button>

              <Button
                variant="outline"
                onClick={handleWhatsApp}
                icon={MessageCircle}
                iconPosition="left"
                className="flex-1"
              >
                WhatsApp Enquiry
              </Button>

              {onEnquiry && (
                <Button
                  variant="ghost"
                  onClick={() => {
                    onClose();
                    onEnquiry(product);
                  }}
                  className="text-xs uppercase tracking-wider font-semibold text-royal-800 hover:text-brushstroke-600 px-3"
                >
                  Trade Enquiry →
                </Button>
              )}
            </div>

          </div>

        </div>
      </motion.div>
    </div>
  );
}
