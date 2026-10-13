import React from 'react';
import { Award, Sparkles, Utensils, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

export default function BrandHighlights() {
  const pillars = [
    {
      icon: Award,
      title: 'Purity of Selected Wheat',
      desc: 'Selected amber durum wheat grains with superior protein density ensure golden color, natural aroma, and complete nutritional wholesomeness.',
    },
    {
      icon: Sparkles,
      title: 'Flawless Strand Consistency',
      desc: 'Crafted using micro-die extrusion systems, each vermicelli strand holds its form without clumping, turning soggy, or disintegrating during cooking.',
    },
    {
      icon: Utensils,
      title: 'Everyday to Celebration',
      desc: 'From busy weekday breakfasts like fragrant upma to grand celebratory Eid payasams and festival feasts, Shaheen is designed for every occasion.',
    },
    {
      icon: ShieldCheck,
      title: 'Uncompromised Hygiene',
      desc: 'Produced in cleanroom manufacturing environments with automated packaging to preserve crisp freshness and culinary safety in every pouch.',
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="THE SHAHEEN STANDARD"
          title="Elevating Indian Vermicelli with Unrivaled Craftsmanship"
          subtitle="We combine time-honored Indian food culture with advanced manufacturing precision to deliver vermicelli that tastes exceptional every single time."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-ivory-100/70 border border-wheat-300/60 hover:border-gold-400/60 hover:bg-white hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-ivory-200 border border-gold-300/40 flex items-center justify-center text-gold-600 mb-6 group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-forest-950 mb-3 group-hover:text-gold-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-wheat-200/60 flex items-center text-xs font-semibold text-gold-600">
                  <span>Pillar 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Banner Bar */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-50/90 via-white to-blue-50/90 text-royal-950 border-2 border-blue-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-200/30 rounded-full blur-2xl pointer-events-none" />
          
          <div className="space-y-2 text-center md:text-left z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-royal-600">
              Trusted by Homes & Commercial Kitchens
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-royal-950">
              Discover the full range of Shaheen Vermicelli
            </h3>
            <p className="text-sm text-stone-600 max-w-xl">
              From our famous Roasted Semiya to fine delicate strands, explore the perfect cut for your culinary kitchen.
            </p>
          </div>

          <div className="z-10 shrink-0">
            <Button
              variant="gold"
              to="/products"
              icon={ArrowRight}
              iconPosition="right"
              size="md"
            >
              Browse Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
