import React from 'react';
import { motion } from 'framer-motion';
import { Eye, MessageCircle, Package, ArrowUpRight, ShoppingBag } from 'lucide-react';
import Button from './Button';
import { useOrder } from '../context/OrderContext';
import { createWhatsAppUrl, getProductEnquiryMessage } from '../utils/whatsapp';

export default function ProductCard({ product, onViewDetails }) {
  const { openOrder } = useOrder();

  const handleWhatsApp = (e) => {
    e.stopPropagation();
    openOrder(product);
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      onClick={() => onViewDetails?.(product)}
      className="group relative bg-white rounded-2xl border border-wheat-300/60 p-6 md:p-7 flex flex-col justify-between hover:shadow-luxury-hover hover:border-gold-400/60 cursor-pointer overflow-hidden card-shine-container"
    >
      {/* Top subtle golden shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div>
        {/* Product Image Frame */}
        <div className="relative aspect-square w-full rounded-xl bg-ivory-200/80 overflow-hidden mb-6 flex items-center justify-center p-3 border border-wheat-200/50">
          <motion.img
            src={product.image}
            alt={product.name}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full h-full object-contain"
            loading="lazy"
          />

          {/* Quick Floating Action on image hover */}
          <div className="absolute inset-0 bg-forest-950/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails?.(product);
              }}
              className="p-3 bg-white text-forest-900 rounded-full shadow-lg hover:bg-gold-400 hover:text-white transition-all transform hover:scale-110 active:scale-95"
              title="Quick View"
            >
              <Eye className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleWhatsApp}
              className="p-3 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20ba5a] transition-all transform hover:scale-110 active:scale-95"
              title="WhatsApp Enquiry"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>

          {/* Cooking time badge with subtle pulse */}
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-medium text-forest-900 border border-gold-300/40 shadow-sm flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
            {product.cookingTime}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-2.5">
          <div className="text-[11px] font-semibold tracking-wider uppercase text-gold-600">
            {product.tagline}
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950 group-hover:text-gold-600 transition-colors duration-300">
            {product.name}
          </h3>

          <p className="text-sm text-stone-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Pack Sizes */}
          <div className="pt-2">
            <div className="text-[11px] uppercase tracking-wider text-stone-400 font-medium mb-1.5 flex items-center gap-1.5">
              <Package className="w-3.5 h-3.5 text-gold-500" />
              Available Pack Sizes
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.packSizes.map((size, index) => (
                <span
                  key={index}
                  className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-ivory-200 text-forest-900 border border-wheat-300/80 transition-colors group-hover:border-gold-300"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Area */}
      <div className="pt-5 mt-5 border-t border-wheat-200/80 flex items-center gap-2">
        <Button
          variant="gold"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            openOrder(product);
          }}
          className="flex-1 text-xs"
          icon={ShoppingBag}
          iconPosition="left"
        >
          Order Now
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails?.(product);
          }}
          className="text-xs px-3.5 hover:bg-royal-950 hover:text-white hover:border-royal-950 transition-colors"
          icon={ArrowUpRight}
          iconPosition="right"
        >
          Details
        </Button>
      </div>
    </motion.div>
  );
}
