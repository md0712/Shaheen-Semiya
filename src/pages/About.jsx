import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Wheat, ShieldCheck, HeartHandshake, Award, Factory, Users, Sparkles } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: 'Purity of Ingredient',
      desc: 'We use exclusively selected hard amber durum wheat semolina, avoiding filler flours or artificial whitening chemicals.',
      icon: Wheat,
    },
    {
      title: 'Hygienic Modern Manufacturing',
      desc: 'Produced in modern cleanroom processing lines utilizing stainless steel micro-extrusion machinery and touchless packing.',
      icon: Factory,
    },
    {
      title: 'Culinary Dependability',
      desc: 'Our vermicelli never turns pasty or clumps. Each strand absorbs flavors while retaining appetizing bite and texture.',
      icon: Award,
    },
    {
      title: 'Respect for Tradition',
      desc: 'Whether honoring festive Eid Sheer Khurma or preparing daily savory upma, we preserve the authentic taste of Indian home cooking.',
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-blue-200 bg-blue-50 text-royal-900 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brushstroke-600" />
            <span>OUR HERITAGE & VISION</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-royal-950 tracking-tight leading-tight">
            Crafting Culinary Trust in Every Strand
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            The story of SHAHEEN SEMIYA — where agricultural dedication meets modern food science to elevate Indian dining tables.
          </p>
        </div>

        {/* Hero Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border-2 border-blue-200 shadow-2xl bg-white p-2">
              <img
                src="/images/about/about_heritage.jpg"
                alt="Shaheen Semiya Manufacturing & Quality"
                className="w-full h-80 sm:h-96 object-cover rounded-2xl"
              />
            </div>
            
            {/* Floating Secondary Image Card */}
            <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -right-6 p-3 rounded-2xl bg-white border-2 border-blue-200 shadow-2xl max-w-xs z-10">
              <img
                src="/images/hero/hero_packaging.jpg"
                alt="Shaheen Semiya Culinary Heritage Pack"
                className="w-16 h-16 rounded-xl object-cover shrink-0 border border-blue-100"
              />
              <div>
                <span className="text-royal-600 text-[10px] font-bold uppercase tracking-wider block">Commitment</span>
                <p className="text-xs text-royal-950 font-serif font-bold leading-snug">
                  “Every strand carries our reputation for quality, freshness, and delicious home cooking.”
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 text-stone-700 leading-relaxed font-light text-base">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-royal-900 border border-blue-200">
              <span className="w-1.5 h-1.5 rounded-full bg-brushstroke-600" />
              THE SHAHEEN STORY
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-royal-950">
              The Genesis of Shaheen Semiya
            </h2>
            <p>
              Founded with a clear purpose to bring restaurant-grade vermicelli consistency into everyday households, SHAHEEN SEMIYA was established through years of perfecting flour milling and pasta extrusion techniques.
            </p>
            <p>
              In traditional Indian kitchens, vermicelli plays a sacred dual role: it is the quick morning savory breakfast that energizes the day, and it is the opulent dessert served to celebrate major life milestones, festivals, and weddings. A single poor batch that turns gummy or dissolves into mush can ruin hours of culinary effort.
            </p>
            
            {/* In-Story Visual Images */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="rounded-xl overflow-hidden border border-blue-200 relative h-28 group">
                <img
                  src="/images/recipes/semiya_payasam.jpg"
                  alt="Festive Sheer Khurma Tradition"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <span className="absolute bottom-1.5 left-2 text-[10px] font-bold text-white bg-royal-950/70 px-1.5 py-0.5 rounded">
                  Festive Payasam
                </span>
              </div>
              <div className="rounded-xl overflow-hidden border border-blue-200 relative h-28 group">
                <img
                  src="/images/recipes/semiya_upma.jpg"
                  alt="Everyday Upma Breakfast"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <span className="absolute bottom-1.5 left-2 text-[10px] font-bold text-white bg-royal-950/70 px-1.5 py-0.5 rounded">
                  Savory Upma
                </span>
              </div>
            </div>

            <p>
              Recognizing this fundamental challenge, Shaheen invested in precision low-temperature extrusion systems. By preserving the natural wheat protein structure, Shaheen Semiya delivers uniform tensile strength, smooth surface finish, and exceptional sauce absorption.
            </p>

            <div className="pt-2">
              <Button variant="gold" to="/products">
                Explore Our Range
              </Button>
            </div>
          </div>
        </div>

        {/* Brand Values / Ethos Grid */}
        <div className="mb-24">
          <SectionTitle
            badge="OUR CORE PRINCIPLES"
            title="The Four Cornerstones of Shaheen"
            subtitle="How we maintain uncompromising standards across sourcing, production, and customer satisfaction."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white border border-wheat-300/80 shadow-sm hover:shadow-luxury hover:border-gold-400/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-ivory-200 border border-gold-400/30 flex items-center justify-center text-gold-600 mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-forest-950 mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                      {val.desc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-wheat-200 text-[11px] font-bold text-gold-600">
                    Standard 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Company Information Callout & Ethics Note */}
        <div className="p-8 sm:p-10 rounded-3xl bg-forest-950 text-ivory-100 border border-gold-400/30 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">
              Corporate Governance & Transparency
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Commitment Without Exaggeration
            </h3>
            <p className="text-sm text-ivory-300/90 leading-relaxed font-light">
              Shaheen Semiya is committed to responsible food production. We refrain from making unsupported nutritional or medicinal claims. Our focus remains solely on providing wholesome, delicious, and consistent vermicelli crafted strictly according to statutory food safety requirements.
            </p>
            <div className="pt-2 text-xs text-stone-400 border-t border-forest-800">
              Company Entity: Shaheen Food Products (FMCG Div.) • Registered Industrial Park, Kerala, India • CIN/Trade Ref: (Editable Placeholder)
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
