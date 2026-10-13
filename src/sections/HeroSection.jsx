import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Wheat, Shield, HeartHandshake, ShoppingBag } from 'lucide-react';
import { useOrder } from '../context/OrderContext';
import Button from '../components/Button';

export default function HeroSection() {
  const { openOrder } = useOrder();
  const highlights = [
    {
      title: 'Carefully Selected Wheat',
      desc: 'Prime hard amber durum semolina',
      icon: Wheat,
    },
    {
      title: 'Consistent Quality',
      desc: 'Precision Italian micro-extrusion',
      icon: Shield,
    },
    {
      title: 'Made for Every Kitchen',
      desc: 'From daily upma to festive payasam',
      icon: HeartHandshake,
    },
  ];

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-[#FAF7F0] to-[#F5EFE4]">
      {/* Decorative ambient background glows */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-10 w-96 h-96 bg-[#EEDBB8]/50 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 right-10 w-[30rem] h-[30rem] bg-blue-200/30 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Asymmetrical Split-Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Brand Narrative & Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 xl:col-span-7 space-y-6 sm:space-y-8 text-left"
          >
            {/* Category Badge */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-brushstroke-200 shadow-sm backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-brushstroke-600 animate-ping" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal-950">
                  PREMIUM QUALITY VERMICELLI
                </span>
              </div>
            </motion.div>

            {/* Main Heading & Tagline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold text-royal-950 tracking-tight leading-[1.08]">
                SHAHEEN <br />
                <span className="font-display italic font-semibold text-brushstroke-600">
                  SEMIYA
                </span>
              </h1>
              <p className="font-serif text-2xl sm:text-3xl text-royal-700 font-medium tracking-wide">
                “Goodness in Every Strand”
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-stone-600 max-w-xl leading-relaxed font-light"
            >
              Crafting delicious moments with quality vermicelli for everyday meals and special occasions. Made with 100% selected wheat and precision processing to ensure non-sticky, wholesome culinary perfection.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Button
                variant="gold"
                size="lg"
                onClick={() => openOrder()}
                icon={ShoppingBag}
                iconPosition="left"
                className="shadow-lg shadow-red-500/25 transform hover:scale-105 transition-transform"
              >
                Order Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                to="/products"
                icon={ArrowRight}
                iconPosition="right"
                className="transform hover:scale-105 transition-transform"
              >
                Explore Products
              </Button>
              <Button
                variant="ghost"
                size="md"
                to="/wholesale-retail"
                className="text-xs uppercase tracking-wider font-semibold text-royal-950 hover:text-brushstroke-600"
              >
                Wholesale Enquiry →
              </Button>
            </motion.div>

            {/* Three Quality Highlights */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-wheat-300/80">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {highlights.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -4, borderColor: 'rgba(212, 175, 55, 0.7)' }}
                      transition={{ duration: 0.2 }}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-white/85 border border-wheat-200/80 shadow-sm transition-all"
                    >
                      <div className="p-2 rounded-lg bg-blue-50 text-royal-700 shrink-0 mt-0.5">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-royal-950">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Animated Product Entrance with 3D Packaging on Sculptural Podium */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg lg:max-w-none"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brushstroke-500/20 via-transparent to-royal-800/15 rounded-3xl transform rotate-2 scale-95 pointer-events-none blur-sm" />

              {/* Main 3D Display Canvas with card shine */}
              <div className="relative rounded-3xl overflow-hidden border border-brushstroke-500/30 shadow-2xl bg-white p-2 card-shine-container">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                  src="/images/hero/hero_packaging.jpg"
                  alt="Shaheen Semiya 3D Product Packaging and Cooked Vermicelli Dish on Display Platform"
                  className="w-full h-auto object-cover rounded-2xl"
                />

                {/* Floating Botanical/Wheat Stalk Badge overlay */}
                <motion.div
                  animate={{
                    y: [-6, 6, -6],
                    rotate: [-1, 2, -1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-brushstroke-200 shadow-md flex items-center gap-2 cursor-default"
                >
                  <Wheat className="w-4 h-4 text-brushstroke-600" />
                  <span className="text-[11px] font-semibold tracking-wider text-royal-950 uppercase">
                    100% Golden Durum Wheat
                  </span>
                </motion.div>

                {/* Floating Culinary Excellence Tag */}
                <motion.div
                  animate={{
                    y: [6, -6, 6],
                    rotate: [1, -1, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute bottom-6 right-6 bg-royal-950/95 text-white backdrop-blur-md px-4 py-2 rounded-2xl border border-brushstroke-500/40 shadow-xl flex items-center gap-2.5 cursor-default"
                >
                  <Sparkles className="w-4 h-4 text-brushstroke-400" />
                  <div>
                    <div className="text-[10px] text-red-200 uppercase tracking-widest font-semibold">Festive Favorite</div>
                    <div className="text-xs font-bold text-white">Silky • Non-Sticky • Pure</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative Curved Divider Between Hero and Next Section */}
      <div className="relative w-full overflow-hidden leading-none mt-16 lg:mt-24">
        <svg
          className="relative block w-full h-12 sm:h-16 lg:h-20 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,-20 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
