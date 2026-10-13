import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { contactDetails } from '../data/navigation';
import { validateContactForm } from '../utils/validation';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, AlertCircle, ChevronDown } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'What is the shelf life of Shaheen Semiya packs?',
      a: 'All Shaheen Semiya products are hermetically packaged to protect freshness with an estimated shelf life of 12 months from manufacturing date when stored in a cool, dry place. Always refer to individual printed packs for specific batch expiry.',
    },
    {
      q: 'Do I need to roast Shaheen Roasted Semiya before cooking?',
      a: 'No! Shaheen Roasted Semiya is uniformly pre-toasted in specialized thermal roasters. You can introduce it directly into boiling milk for payasam or seasoned hot water for savory upma, saving you 8-10 minutes of preparation.',
    },
    {
      q: 'How can retailers and supermarkets become official stockists?',
      a: 'Retailers can submit a distributor enquiry via our Wholesale & Retail portal or text our direct B2B WhatsApp desk. Our regional territory managers will visit with sample packs and wholesale rate cards.',
    },
    {
      q: 'Are any preservatives or artificial colors added?',
      a: 'Shaheen Semiya products are made purely from 100% selected wheat semolina and clean water. We do not use chemical bleaching agents or artificial colors.',
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    setSubmitted(true);
  };

  const handleWhatsAppForward = () => {
    const msg = `*SHAHEEN SEMIYA — Website Customer Contact*\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    window.open(createWhatsAppUrl(msg, contactDetails.whatsapp), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-28 pb-20 bg-ivory-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-gold-500/20 bg-ivory-200 text-forest-900 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-950 tracking-tight leading-tight">
            Contact Shaheen Semiya
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Have questions about our products, feedback, or trade partnerships? Our team is here to assist you.
          </p>
        </div>

        {/* Contact Grid: Info Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-24">
          
          {/* Left: Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-forest-950 text-ivory-100 border border-gold-400/30 shadow-xl space-y-6">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block">
                Direct Contact Points
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                Shaheen Food Products
              </h3>

              <div className="space-y-4 text-sm text-ivory-300/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Factory & Office</strong>
                    <span>{contactDetails.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Customer Helpline</strong>
                    <span>{contactDetails.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Email Inquiries</strong>
                    <span>{contactDetails.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Operating Hours</strong>
                    <span>{contactDetails.workingHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-forest-800">
                <Button
                  variant="whatsapp"
                  size="md"
                  onClick={() => {
                    window.open(createWhatsAppUrl('Hello Shaheen Semiya team, I would like to connect.', contactDetails.whatsapp), '_blank');
                  }}
                  icon={MessageCircle}
                  className="w-full"
                >
                  Direct WhatsApp Chat
                </Button>
              </div>
            </div>

            {/* Note on placeholder */}
            <div className="p-4 rounded-2xl bg-white border border-wheat-300 text-xs text-stone-500">
              * Note: Contact numbers, trade address and registration numbers are editable placeholder representations for the brand website.
            </div>
          </div>

          {/* Right: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-wheat-300/80 shadow-md">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-forest-950">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-forest-950">{formData.name}</span>. We have received your message regarding "{formData.subject}".
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="whatsapp" onClick={handleWhatsAppForward} icon={MessageCircle}>
                    Also Send via WhatsApp
                  </Button>
                  <Button variant="secondary" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-2xl font-bold text-forest-950 mb-1">
                  Send us a Message
                </h3>
                <p className="text-xs text-stone-500">
                  Fill in your details below and our team will get back to you promptly.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Ayesha Rahman"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-ivory-100 border border-wheat-300 text-xs text-forest-950 placeholder-stone-400 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g., ayesha@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-ivory-100 border border-wheat-300 text-xs text-forest-950 placeholder-stone-400 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-ivory-100 border border-wheat-300 text-xs text-forest-950 placeholder-stone-400 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Enquiry Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-ivory-100 border border-wheat-300 text-xs text-forest-950 focus:outline-none focus:border-gold-500 transition-colors"
                    >
                      <option value="General Enquiry">General Product Enquiry</option>
                      <option value="Wholesale & Bulk">Wholesale & Distributor Supply</option>
                      <option value="Recipe Suggestion">Recipe or Culinary Feedback</option>
                      <option value="Retail Stockist">Retailer Stockist Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How may our customer care team assist you today?..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-ivory-100 border border-wheat-300 text-xs text-forest-950 placeholder-stone-400 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  size="md"
                  icon={Send}
                  iconPosition="right"
                  className="w-full"
                >
                  Submit Message
                </Button>
              </form>
            )}
          </div>

        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-wheat-300/80 shadow-md">
          <SectionTitle
            badge="HELP & CLARITY"
            title="Frequently Asked Questions"
            subtitle="Common questions regarding vermicelli storage, cooking techniques, and distributor terms."
          />

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-wheat-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 bg-ivory-100 hover:bg-wheat-200/50 transition-colors focus:outline-none"
                  >
                    <span className="font-serif text-base font-semibold text-forest-950">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gold-600 transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-5 bg-white text-xs sm:text-sm text-stone-600 leading-relaxed font-light border-t border-wheat-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
