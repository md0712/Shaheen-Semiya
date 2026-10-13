import React, { useState } from 'react';
import HeroSection from '../sections/HeroSection';
import BrandTicker from '../components/BrandTicker';
import BrandHighlights from '../sections/BrandHighlights';
import ProductsSection from '../sections/ProductsSection';
import QualitySection from '../sections/QualitySection';
import RecipesSection from '../sections/RecipesSection';
import AboutSection from '../sections/AboutSection';
import WholesaleSection from '../sections/WholesaleSection';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  const [wholesalePrefillProduct, setWholesalePrefillProduct] = useState(null);

  const handleProductEnquiry = (product) => {
    setWholesalePrefillProduct(product);
    const element = document.getElementById('wholesale');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* 1. Hero Section with Asymmetrical Split-Screen & Entrance Animations */}
      <HeroSection />

      {/* Brand Ribbon Marquee Animation */}
      <BrandTicker />

      {/* 2. Brand Highlights & Pillars with Scroll Reveal */}
      <ScrollReveal>
        <BrandHighlights />
      </ScrollReveal>

      {/* 3. Product Collection with Filter & Modal */}
      <ScrollReveal delay={0.1}>
        <ProductsSection onEnquiry={handleProductEnquiry} />
      </ScrollReveal>

      {/* 4. Quality & Process (5-Stage Horizontal Visual Timeline) */}
      <QualitySection />

      {/* 5. Recipes Section in Editorial Grid */}
      <RecipesSection />

      {/* 6. About Brand Story Section */}
      <ScrollReveal delay={0.1}>
        <AboutSection />
      </ScrollReveal>

      {/* 7. Wholesale & Retail Royal Blue & Brushstroke Red Banner Section */}
      <ScrollReveal delay={0.1}>
        <WholesaleSection prefilledProduct={wholesalePrefillProduct} />
      </ScrollReveal>
    </div>
  );
}
