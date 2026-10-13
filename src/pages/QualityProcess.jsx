import React from 'react';
import SectionTitle from '../components/SectionTitle';
import QualitySection from '../sections/QualitySection';
import { ShieldCheck, CheckCircle2, Factory, Microscope, Sparkles, Scale, RefreshCw } from 'lucide-react';
import Button from '../components/Button';

export default function QualityProcess() {
  const qualityChecks = [
    {
      title: 'Flour Granulometry Analysis',
      desc: 'Uniform grain particle calibration ensures balanced water hydration during kneading without lumps.',
      metric: 'Uniform Mesh 60 Calibration',
    },
    {
      metric: '< 11.5% Moisture Limit',
      title: 'Dehydration & Moisture Audit',
      desc: 'Slow dry air cycles safeguard shelf stability and prevent premature breakage or mold development.',
    },
    {
      metric: 'Zero Additives / Bleach',
      title: 'Purity & Clean Label Verification',
      desc: 'Free of chemical bleaches, artificial colors, or artificial plasticizing additives.',
    },
    {
      metric: 'Inline Metal & Foreign Body Detection',
      title: 'X-Ray & Magnetic Separation',
      desc: 'Triple-stage magnetic grates and inline sensitivity detectors ensure absolute food consumer safety.',
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-gold-500/20 bg-ivory-200 text-forest-900 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span>MANUFACTURING EXCELLENCE</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-950 tracking-tight leading-tight">
            Our 5-Stage Quality & Process
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            How Shaheen Semiya guarantees consistent strand strength, hygienic packaging, and exceptional culinary performance.
          </p>
        </div>

        {/* Core Timeline Component */}
        <QualitySection />

        {/* Technical Quality Parameters Grid */}
        <div className="my-20 p-8 sm:p-12 rounded-3xl bg-ivory-100 border border-wheat-300/80 shadow-md">
          <SectionTitle
            badge="TECHNICAL RIGOR"
            title="Standard Testing Benchmarks"
            subtitle="Parameters verified on every production batch to guarantee consumer safety and consistent texture. (Placeholder industrial benchmarks shown)."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityChecks.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-wheat-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold font-mono text-gold-600 uppercase tracking-wider mb-2">
                    {item.metric}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-forest-950 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-wheat-100 flex items-center gap-1.5 text-[11px] text-forest-900 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                  <span>Lab Approved Batch Benchmark</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA to Wholesale / Factory Inquiries */}
        <div className="text-center bg-gradient-to-br from-blue-50/90 via-white to-blue-50/90 text-royal-950 p-10 sm:p-12 rounded-3xl border-2 border-blue-200 shadow-xl">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-royal-950 mb-3">
            Interested in Industrial Supply or Plant Audits?
          </h3>
          <p className="text-sm text-stone-600 max-w-xl mx-auto mb-6 font-light">
            We welcome commercial stockists, bulk buyers, and hospitality procurement teams to review our product quality standards.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gold" to="/wholesale-retail">
              Wholesale & Distributor Desk
            </Button>
            <Button variant="outline" to="/contact">
              Contact Compliance Team
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
