import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { validateWholesaleForm } from '../utils/validation';
import { createWhatsAppUrl, getWholesaleEnquiryMessage } from '../utils/whatsapp';
import { contactDetails } from '../data/navigation';
import { Building2, Truck, BadgePercent, CheckCircle, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function WholesaleSection({ prefilledProduct }) {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    phone: '',
    email: '',
    location: '',
    quantity: '',
    productType: prefilledProduct ? prefilledProduct.name : 'All Semiya Varieties',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validateWholesaleForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const msg = getWholesaleEnquiryMessage(formData);
    window.open(createWhatsAppUrl(msg, contactDetails.whatsapp), '_blank', 'noopener,noreferrer');
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      businessName: '',
      contactPerson: '',
      phone: '',
      email: '',
      location: '',
      quantity: '',
      productType: 'All Semiya Varieties',
      notes: '',
    });
  };

  return (
    <section id="wholesale" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background radial ambient glow styling */}
      <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-royal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[32rem] h-[32rem] bg-brushstroke-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <SectionTitle
          badge="B2B & DISTRIBUTION"
          title="Wholesale Supply & Retail Partnerships"
          subtitle="Partner with Shaheen Semiya for consistent supply, competitive distributor pricing, dependable delivery, and marketing support across regional markets."
        />

        {/* Light Royal Blue & Crisp White B2B Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-gradient-to-br from-blue-50/70 via-white to-blue-50/70 rounded-3xl border-2 border-blue-200/90 overflow-hidden shadow-2xl backdrop-blur-md">
          
          {/* Left Column: Warehouse & Logistics Photography & B2B Highlights (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-blue-200/80 relative">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-royal-600 block mb-2">
                Supply Chain & Logistics
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-royal-950 mb-4">
                Reliable Inventory. Pan-Regional Reach.
              </h3>
              
              {/* Warehouse Photography */}
              <div className="rounded-2xl overflow-hidden border border-blue-200 shadow-md mb-6 aspect-video">
                <img
                  src="/images/about/wholesale_logistics.jpg"
                  alt="Shaheen Semiya FMCG Wholesale Distribution Warehouse"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Partnership Pillars */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-100/80 text-royal-700 shrink-0 mt-0.5 border border-blue-200">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-royal-950">Consistent Bulk Fulfillment</h5>
                    <p className="text-[11px] text-stone-600 leading-relaxed">
                      High-capacity automated extrusion lines ensuring steady batch availability for supermarkets and caterers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-100/80 text-royal-700 shrink-0 mt-0.5 border border-blue-200">
                    <BadgePercent className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-royal-950">Distributor Margins & Terms</h5>
                    <p className="text-[11px] text-stone-600 leading-relaxed">
                      Structured tier pricing, trade promotions, and flexible payment arrangements for registered stockists.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-100/80 text-royal-700 shrink-0 mt-0.5 border border-blue-200">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-royal-950">Private Label & Institutional Packs</h5>
                    <p className="text-[11px] text-stone-600 leading-relaxed">
                      Custom bulk packing options for restaurant chains, marriage caterers, and export markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action for B2B */}
            <div className="pt-8 mt-6 border-t border-blue-200/80">
              <div className="text-xs text-stone-500 mb-2">Prefer instant discussion?</div>
              <Button
                variant="whatsapp"
                size="sm"
                onClick={() => {
                  const url = createWhatsAppUrl(
                    'Hello Shaheen Semiya, I want to discuss wholesale distribution and bulk supplies.',
                    contactDetails.whatsapp
                  );
                  window.open(url, '_blank', 'noopener,noreferrer');
                }}
                icon={MessageCircle}
                className="w-full shadow-md"
              >
                Quick WhatsApp B2B Desk
              </Button>
            </div>
          </div>

          {/* Right Column: Bulk-Order Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center bg-white/60">
            {submitted ? (
              <div className="bg-white rounded-2xl p-8 border border-blue-200 text-center space-y-5 shadow-lg animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-brushstroke-50 text-brushstroke-600 border border-brushstroke-200 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-royal-950">
                  Wholesale Enquiry Prepared!
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-royal-700">{formData.contactPerson}</span> from <span className="font-semibold text-royal-700">{formData.businessName}</span>. Your enquiry for {formData.quantity} of {formData.productType} in {formData.location} has been compiled.
                </p>
                <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-left text-xs space-y-1.5 max-w-md mx-auto text-royal-900">
                  <div><span className="text-royal-600/80 font-medium">Business:</span> {formData.businessName}</div>
                  <div><span className="text-royal-600/80 font-medium">Location:</span> {formData.location}</div>
                  <div><span className="text-royal-600/80 font-medium">Volume:</span> {formData.quantity}</div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <Button
                    variant="whatsapp"
                    size="md"
                    onClick={handleSendToWhatsApp}
                    icon={MessageCircle}
                  >
                    Send Instantly to WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    onClick={resetForm}
                  >
                    Submit Another Query
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <h4 className="font-serif text-2xl font-bold text-royal-950">
                    Request Wholesale Quotation
                  </h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Fill out your commercial supply requirements. Our trade representatives respond within 24 business hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Business Name */}
                    <div>
                      <label className="block text-xs font-semibold text-royal-950 mb-1">
                        Business / Trade Name *
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g., Apex Supermarkets Ltd."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-blue-200 text-royal-950 placeholder-stone-400 text-xs focus:outline-none focus:border-royal-500 focus:ring-2 focus:ring-blue-100 shadow-sm transition-all"
                      />
                      {errors.businessName && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.businessName}
                        </p>
                      )}
                    </div>

                    {/* Contact Person */}
                    <div>
                      <label className="block text-xs font-semibold text-royal-950 mb-1">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        placeholder="e.g., Rajesh Kumar"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-blue-200 text-royal-950 placeholder-stone-400 text-xs focus:outline-none focus:border-royal-500 focus:ring-2 focus:ring-blue-100 shadow-sm transition-all"
                      />
                      {errors.contactPerson && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.contactPerson}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Contact Number */}
                    <div>
                      <label className="block text-xs font-semibold text-royal-950 mb-1">
                        Contact / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 95979 12663"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-blue-200 text-royal-950 placeholder-stone-400 text-xs focus:outline-none focus:border-royal-500 focus:ring-2 focus:ring-blue-100 shadow-sm transition-all"
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-royal-950 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="procurement@business.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-blue-200 text-royal-950 placeholder-stone-400 text-xs focus:outline-none focus:border-royal-500 focus:ring-2 focus:ring-blue-100 shadow-sm transition-all"
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Supply Location */}
                    <div>
                      <label className="block text-xs font-semibold text-royal-950 mb-1">
                        Location / Delivery City *
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g., Kochi / Bengaluru / Chennai"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-blue-200 text-royal-950 placeholder-stone-400 text-xs focus:outline-none focus:border-royal-500 focus:ring-2 focus:ring-blue-100 shadow-sm transition-all"
                      />
                      {errors.location && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.location}
                        </p>
                      )}
                    </div>

                    {/* Required Quantity */}
                    <div>
                      <label className="block text-xs font-semibold text-royal-950 mb-1">
                        Required Quantity *
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g., 50 Cartons / 500 Kilograms"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-blue-200 text-royal-950 placeholder-stone-400 text-xs focus:outline-none focus:border-royal-500 focus:ring-2 focus:ring-blue-100 shadow-sm transition-all"
                      />
                      {errors.quantity && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.quantity}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Semiya Variety */}
                  <div>
                    <label className="block text-xs font-semibold text-royal-950 mb-1">
                      Semiya Variety Required
                    </label>
                    <select
                      name="productType"
                      value={formData.productType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-blue-200 text-royal-950 text-xs focus:outline-none focus:border-royal-500 focus:ring-2 focus:ring-blue-100 shadow-sm transition-all"
                    >
                      <option value="All Semiya Varieties">All Semiya Varieties (Mixed Assortment)</option>
                      <option value="Shaheen Regular Vermicelli">Shaheen Regular Vermicelli</option>
                      <option value="Shaheen Roasted Semiya">Shaheen Roasted Semiya</option>
                      <option value="Shaheen Long Cut Semiya">Shaheen Long Cut Semiya</option>
                      <option value="Shaheen Thin Semiya">Shaheen Thin Semiya</option>
                      <option value="Shaheen Special Semiya">Shaheen Special Semiya</option>
                    </select>
                  </div>

                  {/* Notes / Comments */}
                  <div>
                    <label className="block text-xs font-semibold text-royal-950 mb-1">
                      Additional Requirements / Notes
                    </label>
                    <textarea
                      rows={2}
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Specify pack sizes preferred, recurring schedule, or trade credit terms..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-blue-200 text-royal-950 placeholder-stone-400 text-xs focus:outline-none focus:border-royal-500 focus:ring-2 focus:ring-blue-100 shadow-sm transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      variant="gold"
                      size="md"
                      type="submit"
                      className="w-full shadow-lg"
                      icon={Send}
                      iconPosition="right"
                    >
                      Submit Wholesale Enquiry
                    </Button>
                    <p className="text-[10px] text-stone-500 text-center mt-2">
                      All trade enquiries are kept confidential. Placeholder demo data accepted.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
