import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Sparkles, ShieldCheck, HeartHandshake, ArrowRight, Award, Wheat } from 'lucide-react';
import ShaheenLogo from '../components/ShaheenLogo';

export default function AboutSection({ showFullDetails = false }) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative background ambient glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Brand Heritage Imagery & Visual Editorial (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-blue-200/80 shadow-2xl bg-white p-2">
              <img
                src="/images/about/about_heritage.jpg"
                alt="Shaheen Semiya Heritage & Modern Processing"
                className="w-full h-80 sm:h-96 object-cover rounded-2xl"
              />
              
              {/* Emblem Logo Stamp */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-blue-200 shadow-lg flex items-center gap-2">
                <ShaheenLogo size="sm" />
                <span className="text-[10px] font-bold text-royal-950 uppercase tracking-wider">Heritage & Purity</span>
              </div>

              {/* Bottom Quote Pill */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-blue-200/80 shadow-lg">
                <p className="font-serif italic text-xs text-royal-950 leading-relaxed">
                  “Our philosophy is simple: respect the grain, control every stage of milling and drying, and honor the home cook's trust.”
                </p>
                <div className="mt-2 text-[10px] text-royal-600 font-bold uppercase tracking-wider flex items-center justify-between">
                  <span>— The Shaheen Culinary Ethos</span>
                  <span className="text-brushstroke-600">★ 100% Selected Wheat</span>
                </div>
              </div>
            </div>

            {/* Floating Secondary Image Card: Packaging & Culinary Dish */}
            <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -right-6 bg-white p-2.5 rounded-2xl border-2 border-blue-200 shadow-2xl max-w-xs z-20">
              <img
                src="/images/hero/hero_packaging.jpg"
                alt="Shaheen Semiya Authentic Dish & Pack"
                className="w-20 h-20 rounded-xl object-cover shrink-0 border border-blue-100"
              />
              <div className="text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brushstroke-600 block">
                  Heritage Recipe
                </span>
                <h5 className="font-serif text-xs font-bold text-royal-950 leading-snug">
                  Festive Sheer Khurma & Daily Upma
                </h5>
                <p className="text-[10px] text-stone-500 mt-0.5">Non-sticky • Silky texture</p>
              </div>
            </div>

            {/* Back decorative geometry */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl -z-10" />
          </div>

          {/* Right Column: Editorial Narrative, Images & Values (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-blue-200 bg-blue-50/80 text-royal-950 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-brushstroke-600 animate-ping" />
              <span>THE SHAHEEN STORY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-royal-950 leading-tight">
              Rooted in Tradition, Refined for Modern Living
            </h2>

            <div className="space-y-4 text-stone-600 font-light text-base leading-relaxed">
              <p>
                Founded on the timeless principle of delivering pure, unadulterated nourishment, <strong className="font-semibold text-royal-950">SHAHEEN SEMIYA</strong> has grown from an artisan vermicelli maker into a respected household name. We believe that vermicelli is not merely an everyday pantry item — it is the golden thread that ties family celebrations, festive Eid morning Sheer Khurma, and warm Sunday breakfast upma together.
              </p>
              <p>
                Our manufacturing philosophy marries old-world recipe balance with high-efficiency Italian extrusion dies. By rigorously selecting golden durum wheat semolina and adhering to slow low-temperature dehydration, we prevent starch breakdown — ensuring that each strand remains light, non-sticky, and distinct on your plate.
              </p>
            </div>

            {/* In-Story Visual Images: Culinary Celebrations & Signature Strands */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
              <div className="group relative rounded-2xl overflow-hidden border border-blue-200 bg-white p-2 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-36 rounded-xl overflow-hidden relative">
                  <img
                    src="/images/recipes/semiya_payasam.jpg"
                    alt="Festive Eid Morning Sheer Khurma and Celebration Payasam"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-[11px] font-bold text-white tracking-wide">
                    Festive Traditions & Eid Banquets
                  </span>
                </div>
              </div>

              <div className="group relative rounded-2xl overflow-hidden border border-blue-200 bg-white p-2 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-36 rounded-xl overflow-hidden relative">
                  <img
                    src="/images/recipes/semiya_upma.jpg"
                    alt="Wholesome Savory Breakfast Semiya Upma"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-[11px] font-bold text-white tracking-wide">
                    Everyday Breakfast Comfort
                  </span>
                </div>
              </div>
            </div>

            {/* Brand Commitments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl bg-white border border-blue-200/80 shadow-sm">
                <div className="flex items-center gap-2.5 text-royal-950 font-bold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 text-royal-600" />
                  Wholesome Purity
                </div>
                <p className="text-xs text-stone-500 leading-relaxed font-light">
                  Free from artificial coloring agents and synthetic chemicals. 100% pure selected wheat semolina.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-blue-200/80 shadow-sm">
                <div className="flex items-center gap-2.5 text-royal-950 font-bold text-sm mb-1">
                  <HeartHandshake className="w-4 h-4 text-royal-600" />
                  Customer Dedication
                </div>
                <p className="text-xs text-stone-500 leading-relaxed font-light">
                  Formulated to never turn soggy or dissolve. Retains authentic bite and sauce absorption.
                </p>
              </div>
            </div>

            {/* Editorial Company Information Callout */}
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs text-stone-600 space-y-1">
              <div className="font-semibold text-royal-950">Company Information (Editable Placeholder):</div>
              <p>
                Shaheen Food Products • Registered FMCG Manufacturer • Facility: Kerala Industrial Zone, India.
                For corporate governance, institutional sourcing and brand alliances, visit our wholesale portal.
              </p>
            </div>

            {!showFullDetails && (
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button
                  variant="gold"
                  to="/products"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Explore Products
                </Button>
                <Button
                  variant="outline"
                  to="/about"
                >
                  Read Full Brand Story
                </Button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
