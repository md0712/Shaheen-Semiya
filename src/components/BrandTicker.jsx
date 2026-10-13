import React from 'react';
import { Wheat, Sparkles, Award, ShieldCheck, Heart } from 'lucide-react';

export default function BrandTicker({ className = '' }) {
  const items = [
    { text: '100% Selected Durum Wheat Semolina', icon: Wheat },
    { text: 'Pre-Roasted Nutty Golden Aroma', icon: Sparkles },
    { text: 'Uniform Strand Non-Sticky Texture', icon: Award },
    { text: 'Touchless Cleanroom Packaging', icon: ShieldCheck },
    { text: 'Goodness in Every Strand', icon: Heart },
    { text: 'Everyday Comfort & Festive Banquets', icon: Wheat },
  ];

  return (
    <div className={`w-full overflow-hidden bg-gradient-to-r from-blue-50/90 via-white to-blue-50/90 py-3.5 border-y border-blue-200/80 text-royal-950 backdrop-blur-sm ${className}`}>
      <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
        {/* Render twice for seamless infinite loop */}
        {[...items, ...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3 text-xs tracking-wider uppercase font-semibold text-royal-900">
              <Icon className="w-4 h-4 text-royal-600 shrink-0" />
              <span>{item.text}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brushstroke-500/60 ml-6" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
