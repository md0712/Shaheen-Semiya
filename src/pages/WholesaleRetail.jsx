import React from 'react';
import WholesaleSection from '../sections/WholesaleSection';
import SectionTitle from '../components/SectionTitle';
import { Package, Truck, Award, ShieldCheck, FileSpreadsheet, MapPin, Phone } from 'lucide-react';
import Button from '../components/Button';
import { contactDetails } from '../data/navigation';

export default function WholesaleRetail() {
  const cartonSpecs = [
    {
      product: 'Shaheen Regular Vermicelli',
      sizes: '200g (x50 pkts) / 500g (x24 pkts) / 1kg (x12 pkts)',
      cartonGross: '10 - 12 kg Corrugated Master Box',
      dispatchLead: '24 - 48 Hours',
    },
    {
      product: 'Shaheen Roasted Semiya',
      sizes: '200g (x50 pkts) / 400g (x25 pkts) / 850g (x12 pkts)',
      cartonGross: '10 - 10.5 kg Export Grade Box',
      dispatchLead: '24 - 48 Hours',
    },
    {
      product: 'Shaheen Long Cut Semiya',
      sizes: '250g (x40 pkts) / 500g (x20 pkts)',
      cartonGross: '10 kg Heavy-Duty Fluted Box',
      dispatchLead: '48 Hours',
    },
    {
      product: 'Shaheen Thin Semiya',
      sizes: '150g (x60 pkts) / 350g (x25 pkts) / 700g (x14 pkts)',
      cartonGross: '9 - 10 kg Cushion Packed Box',
      dispatchLead: '24 - 48 Hours',
    },
    {
      product: 'Shaheen Special Semiya',
      sizes: '500g Reserve Box (x20) / 1kg Chef Pack (x10)',
      cartonGross: '10 kg Premium Printed Carton',
      dispatchLead: '24 - 48 Hours',
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-ivory-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-gold-500/20 bg-ivory-200 text-forest-900 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span>TRADE & DISTRIBUTION PORTAL</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-950 tracking-tight leading-tight">
            Wholesale, Retail & Supermarket Supply
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Direct manufacturer supply chains for FMCG distributors, supermarket chains, export brokers, and catering wholesalers.
          </p>
        </div>

        {/* Core Wholesale Section (Dark Green & Gold Banner + Bulk Enquiry Form) */}
        <WholesaleSection />

        {/* Master Carton Packaging Matrix */}
        <div className="my-20 bg-white rounded-3xl p-8 sm:p-10 border border-wheat-300/80 shadow-md overflow-x-auto">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
              Logistics Data
            </span>
            <h3 className="font-serif text-2xl font-bold text-forest-950">
              Standard Master Carton Packing Specifications
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Optimized for palletized loading, container shipment, and distributor warehouse stacking. (Editable placeholder specs).
            </p>
          </div>

          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-wheat-300 bg-ivory-100/70 text-forest-950 font-serif text-sm">
                <th className="py-3 px-4 font-bold">Product Variety</th>
                <th className="py-3 px-4 font-bold">Pack Configuration / Case</th>
                <th className="py-3 px-4 font-bold">Approx. Carton Weight</th>
                <th className="py-3 px-4 font-bold">Standard Dispatch Lead Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-wheat-200">
              {cartonSpecs.map((row, idx) => (
                <tr key={idx} className="hover:bg-ivory-50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-forest-950">{row.product}</td>
                  <td className="py-3.5 px-4 text-stone-600">{row.sizes}</td>
                  <td className="py-3.5 px-4 font-medium text-forest-900">{row.cartonGross}</td>
                  <td className="py-3.5 px-4 text-stone-600">{row.dispatchLead}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
