import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, MessageCircle, Phone, Check, Plus, Minus, Package, MapPin, User } from 'lucide-react';
import { productsData } from '../data/products';
import { contactDetails } from '../data/navigation';
import { createWhatsAppUrl, getOrderNowMessage } from '../utils/whatsapp';
import Button from './Button';
import ShaheenLogo from './ShaheenLogo';

export default function OrderModal({ isOpen, onClose, initialProduct = null }) {
  const [selectedProduct, setSelectedProduct] = useState(
    initialProduct?.name || productsData[0]?.name || 'Shaheen Roasted Semiya'
  );
  
  const currentProdObj = productsData.find((p) => p.name === selectedProduct) || productsData[0];
  
  const [selectedPackSize, setSelectedPackSize] = useState(
    currentProdObj?.packSizes?.[0] || '500g'
  );
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [notes, setNotes] = useState('');

  // Update selection if initialProduct changes
  useEffect(() => {
    if (initialProduct) {
      setSelectedProduct(initialProduct.name);
      if (initialProduct.packSizes && initialProduct.packSizes.length > 0) {
        setSelectedPackSize(initialProduct.packSizes[0]);
      }
    }
  }, [initialProduct]);

  // Sync available pack sizes when product changes
  useEffect(() => {
    const prod = productsData.find((p) => p.name === selectedProduct);
    if (prod && prod.packSizes && !prod.packSizes.includes(selectedPackSize)) {
      setSelectedPackSize(prod.packSizes[0]);
    }
  }, [selectedProduct]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const message = getOrderNowMessage({
      product: selectedProduct,
      packSize: selectedPackSize,
      quantity,
      name: customerName,
      phone: customerPhone,
      city: customerCity,
      notes,
    });
    const url = createWhatsAppUrl(message, contactDetails.whatsapp);
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-blue-200 overflow-hidden z-10 my-8"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-50/90 via-white to-blue-50/90 border-b border-blue-100 p-6 sm:p-7 relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-royal-900 hover:bg-blue-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-brushstroke-50 border border-brushstroke-200 flex items-center justify-center text-brushstroke-600 shadow-sm">
                <ShoppingBag className="w-5 h-5 text-brushstroke-600" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-brushstroke-600 block">
                  FAST & DIRECT ORDER
                </span>
                <h3 className="font-serif text-2xl font-bold text-royal-950 leading-tight">
                  Order Shaheen Semiya
                </h3>
              </div>
            </div>
            <p className="text-xs text-stone-600 max-w-md">
              Order fresh stock directly from Shaheen Semiya via WhatsApp. Fast home & retail distribution dispatch.
            </p>
          </div>

          {/* Body Form */}
          <form onSubmit={handlePlaceOrder} className="p-6 sm:p-7 space-y-5 max-h-[75vh] overflow-y-auto">
            
            {/* 1. Select Product Variety */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-royal-950 mb-2">
                1. Select Semiya Variety
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {productsData.map((prod) => {
                  const isSelected = selectedProduct === prod.name;
                  return (
                    <button
                      type="button"
                      key={prod.id}
                      onClick={() => setSelectedProduct(prod.name)}
                      className={`flex items-center justify-between p-3 rounded-xl border text-left text-xs transition-all ${
                        isSelected
                          ? 'border-brushstroke-600 bg-red-50/50 font-bold text-royal-950 shadow-xs ring-1 ring-brushstroke-600'
                          : 'border-blue-200 hover:border-royal-400 bg-white text-royal-950 shadow-2xs hover:bg-blue-50/60'
                      }`}
                    >
                      <span className="truncate pr-2">{prod.name}</span>
                      {isSelected && <Check className="w-4 h-4 text-brushstroke-600 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Select Pack Size & Quantity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-royal-950 mb-2">
                  2. Pack Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {(currentProdObj?.packSizes || ['500g']).map((size) => (
                    <button
                      type="button"
                      key={size}
                      onClick={() => setSelectedPackSize(size)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                        selectedPackSize === size
                          ? 'bg-royal-600 text-white border-royal-600 shadow-md ring-2 ring-royal-600/30'
                          : 'bg-white text-royal-950 border-blue-200 hover:border-royal-400 hover:bg-blue-50/70 shadow-2xs'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-royal-950 mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 rounded-xl bg-white border border-blue-200 flex items-center justify-center text-royal-950 hover:bg-blue-50 hover:border-royal-400 transition-colors shadow-2xs"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-bold text-base text-royal-950">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-10 h-10 rounded-xl bg-white border border-blue-200 flex items-center justify-center text-royal-950 hover:bg-blue-50 hover:border-royal-400 transition-colors shadow-2xs"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-stone-500 font-medium">pack(s)</span>
                </div>
              </div>
            </div>

            {/* 3. Delivery Details */}
            <div className="pt-2 border-t border-blue-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-royal-950 mb-2">
                3. Customer / Delivery Info (Optional)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Your Full Name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-blue-200 bg-white text-xs text-royal-950 placeholder-stone-400 focus:outline-none focus:border-royal-600 focus:ring-1 focus:ring-royal-600 transition-colors shadow-2xs"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Mobile / Contact No."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-blue-200 bg-white text-xs text-royal-950 placeholder-stone-400 focus:outline-none focus:border-royal-600 focus:ring-1 focus:ring-royal-600 transition-colors shadow-2xs"
                  />
                </div>
              </div>
              <div className="mt-3">
                <input
                  type="text"
                  value={customerCity}
                  onChange={(e) => setCustomerCity(e.target.value)}
                  placeholder="Delivery City / Address / Area"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-blue-200 bg-white text-xs text-royal-950 placeholder-stone-400 focus:outline-none focus:border-royal-600 focus:ring-1 focus:ring-royal-600 transition-colors shadow-2xs"
                />
              </div>
            </div>

            {/* Order Summary Box */}
            <div className="p-4 rounded-2xl bg-royal-50/70 border border-royal-200/80 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-royal-700 block">
                  ORDER SUMMARY
                </span>
                <p className="text-sm font-bold text-royal-950">
                  {selectedProduct}
                </p>
                <p className="text-xs text-stone-600">
                  Pack: <span className="font-semibold text-royal-900">{selectedPackSize}</span> • Qty: <span className="font-semibold text-royal-900">{quantity}</span>
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs text-stone-500 block">Dispatch Desk</span>
                <span className="text-xs font-bold text-brushstroke-600">Ready to Ship</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-1">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-red-600 via-brushstroke-600 to-red-700 text-white font-bold text-sm shadow-lg shadow-red-500/25 hover:shadow-xl hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Place Order via WhatsApp</span>
              </button>

              <div className="flex items-center justify-between pt-2 text-[11px] text-stone-500">
                <a
                  href={`tel:${contactDetails.phone}`}
                  className="hover:text-royal-900 flex items-center gap-1 font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-royal-600" />
                  <span>Call Us: {contactDetails.phone}</span>
                </a>
                <span>Fast response • Official Store</span>
              </div>
            </div>

          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
