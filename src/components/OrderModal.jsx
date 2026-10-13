import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ShoppingBag, 
  MessageCircle, 
  Phone, 
  Check, 
  Plus, 
  Minus, 
  Package, 
  MapPin, 
  User, 
  FileText, 
  Printer, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Receipt
} from 'lucide-react';
import { productsData } from '../data/products';
import { contactDetails } from '../data/navigation';
import { createWhatsAppUrl, getOrderNowMessage, getPackPrice } from '../utils/whatsapp';
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
  const [customerAddress, setCustomerAddress] = useState('');
  const [notes, setNotes] = useState('');

  // Form validation errors
  const [errors, setErrors] = useState({});

  // Generated Bill state
  const [generatedBill, setGeneratedBill] = useState(null);

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
      if (e.key === 'Escape') handleClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setGeneratedBill(null);
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  // Validation
  const validateForm = () => {
    const newErrors = {};
    if (!customerName.trim()) {
      newErrors.name = 'Full Name is required';
    }
    const cleanPhone = customerPhone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Valid 10-digit mobile number is required';
    }
    if (!customerAddress.trim()) {
      newErrors.address = 'Full delivery address is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const unitPrice = getPackPrice(selectedProduct, selectedPackSize);
  const subtotal = unitPrice * quantity;
  const deliveryFee = 0; // Free delivery
  const totalAmount = subtotal + deliveryFee;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    // Generate Invoice Data
    const now = new Date();
    const invoiceNo = `SHN-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`;
    const invoiceDate = now.toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    const billData = {
      invoiceNo,
      date: invoiceDate,
      product: selectedProduct,
      packSize: selectedPackSize,
      quantity,
      unitPrice,
      subtotal,
      deliveryFee,
      total: totalAmount,
      name: customerName.trim(),
      phone: customerPhone.trim(),
      address: customerAddress.trim(),
      notes: notes.trim(),
    };

    // Format WhatsApp message with official digital bill
    const message = getOrderNowMessage(billData);
    const url = createWhatsAppUrl(message, contactDetails.whatsapp);

    // Open WhatsApp in new tab
    window.open(url, '_blank', 'noopener,noreferrer');

    // Automatically transition to Generated Bill view
    setGeneratedBill(billData);
  };

  const handlePrintBill = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-blue-200 overflow-hidden z-10 my-6"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-50/90 via-white to-blue-50/90 border-b border-blue-100 p-5 sm:p-6 relative">
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-royal-900 hover:bg-blue-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-1.5">
              <div className="w-10 h-10 rounded-xl bg-brushstroke-50 border border-brushstroke-200 flex items-center justify-center text-brushstroke-600 shadow-sm shrink-0">
                {generatedBill ? (
                  <Receipt className="w-5 h-5 text-brushstroke-600" />
                ) : (
                  <ShoppingBag className="w-5 h-5 text-brushstroke-600" />
                )}
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-brushstroke-600 block">
                  {generatedBill ? 'OFFICIAL DIGITAL INVOICE' : 'FAST & DIRECT ORDER'}
                </span>
                <h3 className="font-serif text-2xl font-bold text-royal-950 leading-tight">
                  {generatedBill ? 'Order Bill Generated' : 'Order Shaheen Semiya'}
                </h3>
              </div>
            </div>
            <p className="text-xs text-stone-600 max-w-md">
              {generatedBill 
                ? 'Your order and digital invoice have been automatically generated and sent to our WhatsApp desk.'
                : 'Enter your delivery details to place an instant order with an automatically generated tax bill.'}
            </p>
          </div>

          {/* =======================================================
              VIEW 1: AUTOMATIC GENERATED DIGITAL BILL (INVOICE)
              ======================================================= */}
          {generatedBill ? (
            <div className="p-5 sm:p-7 space-y-5 max-h-[75vh] overflow-y-auto modal-scrollbar">
              
              {/* WhatsApp Success Notification Banner */}
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold block">Sent to WhatsApp (+91 95979 12663)</span>
                    <span className="text-[11px] text-emerald-700">Digital bill message generated successfully</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-white text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-300 shrink-0">
                  CONFIRMED
                </span>
              </div>

              {/* Printable Official Digital Bill Card */}
              <div className="border border-blue-200 rounded-2xl p-5 bg-gradient-to-b from-white via-blue-50/20 to-white shadow-sm space-y-4 printable-bill">
                
                {/* Bill Header */}
                <div className="flex items-start justify-between pb-3 border-b border-blue-100">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-royal-950 tracking-tight">
                      SHAHEEN FOOD PRODUCTS
                    </h4>
                    <p className="text-[10px] text-stone-500">
                      FSSAI Lic. No: 10012022000456 • Industrial Development Area, Kerala
                    </p>
                    <p className="text-[10px] text-stone-500">
                      Customer Care: +91 95979 12663 • contact@shaheensemiya.com
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[10px] font-mono font-bold text-royal-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 block">
                      {generatedBill.invoiceNo}
                    </span>
                    <span className="text-[10px] text-stone-500 mt-1 block">
                      {generatedBill.date}
                    </span>
                  </div>
                </div>

                {/* Billed To Customer Details */}
                <div className="bg-blue-50/60 p-3 rounded-xl border border-blue-100 text-xs space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-royal-700">
                    DELIVERY ADDRESS & CUSTOMER INFO
                  </div>
                  <div className="flex items-center gap-1.5 font-bold text-royal-950">
                    <User className="w-3.5 h-3.5 text-royal-600 shrink-0" />
                    <span>{generatedBill.name}</span>
                    <span className="text-stone-300 mx-1">•</span>
                    <Phone className="w-3.5 h-3.5 text-royal-600 shrink-0" />
                    <span>{generatedBill.phone}</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-stone-700 pt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-royal-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{generatedBill.address}</span>
                  </div>
                  {generatedBill.notes && (
                    <div className="text-[11px] text-stone-500 italic pt-1 border-t border-blue-200/50">
                      Note: "{generatedBill.notes}"
                    </div>
                  )}
                </div>

                {/* Itemized Table */}
                <div className="border border-blue-100 rounded-xl overflow-hidden">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-blue-50/80 text-[11px] text-royal-950 uppercase font-bold border-b border-blue-100">
                      <tr>
                        <th className="p-2.5">Item Description</th>
                        <th className="p-2.5 text-center">Pack</th>
                        <th className="p-2.5 text-center">Qty</th>
                        <th className="p-2.5 text-right">Rate</th>
                        <th className="p-2.5 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-blue-50 text-stone-700 font-medium">
                      <tr>
                        <td className="p-2.5 font-bold text-royal-950">
                          {generatedBill.product}
                        </td>
                        <td className="p-2.5 text-center text-stone-600">
                          {generatedBill.packSize}
                        </td>
                        <td className="p-2.5 text-center font-bold text-royal-900">
                          {generatedBill.quantity}
                        </td>
                        <td className="p-2.5 text-right text-stone-600">
                          ₹{generatedBill.unitPrice}
                        </td>
                        <td className="p-2.5 text-right font-bold text-royal-950">
                          ₹{generatedBill.subtotal}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pricing Calculation Summary */}
                <div className="space-y-1.5 pt-1 text-xs">
                  <div className="flex justify-between text-stone-600">
                    <span>Subtotal:</span>
                    <span>₹{generatedBill.subtotal}</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>GST (5% Packaged Food):</span>
                    <span className="text-emerald-700 font-medium">Included</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>Delivery Charges:</span>
                    <span className="text-emerald-700 font-bold">FREE</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-blue-200 text-sm font-bold text-royal-950">
                    <span>Grand Total:</span>
                    <span className="text-base text-brushstroke-600 font-serif">
                      ₹{generatedBill.total}
                    </span>
                  </div>
                </div>

                {/* Verification Stamp */}
                <div className="pt-2 flex items-center justify-between text-[11px] text-stone-400 border-t border-blue-100">
                  <div className="flex items-center gap-1.5 text-royal-700 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-royal-600" />
                    <span>Verified Authentic Shaheen Dispatch</span>
                  </div>
                  <span>Computer Generated Bill</span>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    onClick={handlePrintBill}
                    className="py-3 px-4 rounded-xl border border-blue-200 bg-white hover:bg-blue-50 text-royal-900 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-2xs"
                  >
                    <Printer className="w-4 h-4 text-royal-600" />
                    <span>Print / Save Bill</span>
                  </button>

                  <button
                    onClick={() => {
                      const msg = getOrderNowMessage(generatedBill);
                      const url = createWhatsAppUrl(msg, contactDetails.whatsapp);
                      window.open(url, '_blank', 'noopener,noreferrer');
                    }}
                    className="py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/20 hover:brightness-105"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Re-open WhatsApp</span>
                  </button>
                </div>

                <button
                  onClick={handleClose}
                  className="w-full py-2.5 text-xs font-semibold text-stone-500 hover:text-royal-950 transition-colors"
                >
                  Close & Continue Browsing
                </button>
              </div>

            </div>
          ) : (
            /* =======================================================
               VIEW 2: ORDER INPUT FORM WITH MANDATORY DETAILS
               ======================================================= */
            <form onSubmit={handlePlaceOrder} className="p-5 sm:p-7 space-y-5 max-h-[75vh] overflow-y-auto modal-scrollbar">
              
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
                            ? 'border-brushstroke-600 bg-red-50/70 font-bold text-royal-950 shadow-xs ring-1 ring-brushstroke-600'
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
                    {(currentProdObj?.packSizes || ['200g', '500g', '1kg']).map((size) => {
                      const isSelected = selectedPackSize === size;
                      return (
                        <button
                          type="button"
                          key={size}
                          onClick={() => setSelectedPackSize(size)}
                          className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                            isSelected
                              ? 'bg-royal-600 text-white border-royal-600 shadow-md ring-2 ring-royal-600/30'
                              : 'bg-white text-royal-950 border-blue-200 hover:border-royal-400 hover:bg-blue-50/70 shadow-2xs'
                          }`}
                        >
                          {size}
                        </button>
                      );
                    })}
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

              {/* 3. Mandatory Customer & Delivery Details */}
              <div className="pt-2 border-t border-blue-100">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-royal-950">
                    3. Customer & Delivery Info <span className="text-brushstroke-600">* (Required)</span>
                  </label>
                  <span className="text-[10px] text-brushstroke-600 font-semibold">* All fields required for bill</span>
                </div>

                <div className="space-y-3">
                  {/* Customer Full Name */}
                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-1">
                      Full Name <span className="text-brushstroke-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => {
                          setCustomerName(e.target.value);
                          if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                        }}
                        placeholder="Enter your full name"
                        className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-xs text-royal-950 placeholder-stone-400 focus:outline-none transition-colors shadow-2xs ${
                          errors.name
                            ? 'border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500 bg-red-50/20'
                            : 'border-blue-200 focus:border-royal-600 focus:ring-1 focus:ring-royal-600'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Customer Phone Number */}
                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-1">
                      Mobile / WhatsApp Number <span className="text-brushstroke-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={customerPhone}
                        onChange={(e) => {
                          setCustomerPhone(e.target.value);
                          if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
                        }}
                        placeholder="10-digit mobile number (e.g. 9597912663)"
                        className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-xs text-royal-950 placeholder-stone-400 focus:outline-none transition-colors shadow-2xs ${
                          errors.phone
                            ? 'border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500 bg-red-50/20'
                            : 'border-blue-200 focus:border-royal-600 focus:ring-1 focus:ring-royal-600'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Customer Delivery Address */}
                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-1">
                      Full Delivery Address <span className="text-brushstroke-600">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        rows={2}
                        value={customerAddress}
                        onChange={(e) => {
                          setCustomerAddress(e.target.value);
                          if (errors.address) setErrors((prev) => ({ ...prev, address: '' }));
                        }}
                        placeholder="House / Flat No., Street, Landmark, City & Pincode"
                        className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-xs text-royal-950 placeholder-stone-400 focus:outline-none transition-colors shadow-2xs resize-none ${
                          errors.address
                            ? 'border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500 bg-red-50/20'
                            : 'border-blue-200 focus:border-royal-600 focus:ring-1 focus:ring-royal-600'
                        }`}
                      />
                    </div>
                    {errors.address && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.address}
                      </p>
                    )}
                  </div>

                  {/* Optional Delivery Notes */}
                  <div>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Special cooking or delivery notes (Optional)"
                      className="w-full px-3.5 py-2 rounded-xl border border-blue-200 bg-white text-xs text-royal-950 placeholder-stone-400 focus:outline-none focus:border-royal-600 transition-colors shadow-2xs"
                    />
                  </div>
                </div>
              </div>

              {/* Live Order Bill Calculation Preview */}
              <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-royal-700 block">
                    ESTIMATED BILL AMOUNT
                  </span>
                  <p className="text-sm font-bold text-royal-950">
                    {selectedProduct}
                  </p>
                  <p className="text-xs text-stone-600">
                    Pack: <span className="font-semibold text-royal-900">{selectedPackSize}</span> (₹{unitPrice}) • Qty: <span className="font-semibold text-royal-900">{quantity}</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-emerald-700 font-bold block uppercase tracking-wider">Free Home Delivery</span>
                  <span className="text-base font-serif font-bold text-brushstroke-600">
                    Total: ₹{totalAmount}
                  </span>
                </div>
              </div>

              {/* Action Submit Button */}
              <div className="space-y-2 pt-1">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-red-600 via-brushstroke-600 to-red-700 text-white font-bold text-sm shadow-lg shadow-red-500/25 hover:shadow-xl hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Send WhatsApp Message & Generate Bill</span>
                </button>

                <div className="flex items-center justify-between pt-2 text-[11px] text-stone-500">
                  <a
                    href={`tel:${contactDetails.phone}`}
                    className="hover:text-royal-900 flex items-center gap-1 font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 text-royal-600" />
                    <span>Call Us: {contactDetails.phone}</span>
                  </a>
                  <span>Instant bill • Direct dispatch</span>
                </div>
              </div>

            </form>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
