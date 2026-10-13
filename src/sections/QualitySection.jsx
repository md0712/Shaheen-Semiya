import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import { Wheat, SearchCheck, Cpu, ClipboardCheck, Box, CheckCircle } from 'lucide-react';

export default function QualitySection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Ingredient Selection',
      icon: Wheat,
      subtitle: 'Pure Durum Semolina',
      desc: 'Sourcing premium, golden amber durum wheat semolina with high gluten strength and natural golden hue, avoiding inferior filler flours.',
      highlight: '100% Selected Hard Wheat Grain',
    },
    {
      step: '02',
      title: 'Raw Material Inspection',
      icon: SearchCheck,
      subtitle: 'Laboratory Purity Testing',
      desc: 'Rigorous laboratory analysis for moisture control, gluten balance, granulometry, and microbial hygiene prior to processing.',
      highlight: 'Multi-point safety & purity screening',
    },
    {
      step: '03',
      title: 'Production Process',
      icon: Cpu,
      subtitle: 'Precision Italian Extrusion',
      desc: 'Controlled temperature vacuum kneading and bronze micro-die extrusion shaping uniform, smooth, elastic vermicelli strands.',
      highlight: 'Uniform strand thickness & density',
    },
    {
      step: '04',
      title: 'Quality Checking',
      icon: ClipboardCheck,
      subtitle: 'Cookability & Texture Audits',
      desc: 'Continuous inline testing evaluating boiling resilience, non-stickiness, strand integrity, and authentic wheat aroma.',
      highlight: 'Guaranteed non-sticky cooking profile',
    },
    {
      step: '05',
      title: 'Packaging & Distribution',
      icon: Box,
      subtitle: 'Hermetic Freshness Seal',
      desc: 'Automated nitrogen-flushed pouch packaging protecting delicate strands against ambient humidity and transit vibration.',
      highlight: 'Multi-layer aroma & moisture barrier',
    },
  ];

  return (
    <section id="quality" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title with ScrollReveal */}
        <ScrollReveal>
          <SectionTitle
            badge="PRECISION & INTEGRITY"
            title="From Pure Wheat to Golden Perfection"
            subtitle="Our five-stage manufacturing standard ensures exceptional hygiene, non-sticky cooking performance, and uncompromised culinary delight."
          />
        </ScrollReveal>

        {/* Real Manufacturing Imagery Banner */}
        <ScrollReveal delay={0.15}>
          <div className="relative rounded-3xl overflow-hidden mb-16 shadow-xl border border-wheat-300/80 group">
            <div className="h-72 sm:h-96 w-full relative">
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.8 }}
                src="/images/manufacturing/factory_quality.jpg"
                alt="Shaheen Semiya State of the Art Manufacturing Quality Line"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/40 to-transparent" />
              
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                <div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-royal-600 text-white inline-block mb-2 shadow-sm">
                    Hygienic Modern Processing
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    State-of-the-Art Processing Standards
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100/90 max-w-xl mt-1 font-light">
                    Continuous precision inspection lines and strict food handling standards ensure every pack of Shaheen Semiya meets premium culinary standards.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 text-xs text-white shrink-0">
                  <span className="text-blue-300 font-bold block text-base">5-Stage</span>
                  Quality Assurance Framework
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Horizontal Visual Timeline (5 Stages) */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 -translate-y-12 z-0 opacity-40" />

          {/* 5 Stages Grid with staggered motion */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-5 relative z-10">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              const isSelected = activeStep === idx;
              return (
                <motion.div
                  key={st.step}
                  onClick={() => setActiveStep(idx)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`relative p-6 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                    isSelected
                      ? 'bg-ivory-100 border-gold-400 shadow-luxury ring-2 ring-gold-400/20'
                      : 'bg-white hover:bg-ivory-50 border-wheat-200 hover:border-gold-300/80'
                  }`}
                >
                  <div>
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded-md ${
                        isSelected ? 'bg-gold-500 text-forest-950' : 'bg-ivory-200 text-stone-500'
                      }`}>
                        STAGE {st.step}
                      </span>
                      <div className={`p-2 rounded-xl transition-colors ${
                        isSelected ? 'bg-forest-900 text-gold-400' : 'bg-ivory-200 text-forest-900'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h4 className="font-serif text-lg font-bold text-forest-950 mb-1 leading-snug">
                      {st.title}
                    </h4>

                    <div className="text-xs text-gold-600 font-medium mb-3">
                      {st.subtitle}
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed font-light">
                      {st.desc}
                    </p>
                  </div>

                  {/* Bottom Highlight */}
                  <div className="pt-4 mt-4 border-t border-wheat-200/60 flex items-center gap-1.5 text-[11px] font-medium text-forest-900">
                    <CheckCircle className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                    <span className="truncate">{st.highlight}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
