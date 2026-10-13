import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ShaheenLogo from './ShaheenLogo';

export default function PageLoader({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show smooth intro animation for 1.4s on initial mount
    const timer = setTimeout(() => {
      setLoading(false);
      onComplete?.();
    }, 1400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/95 backdrop-blur-2xl text-stone-800 overflow-hidden"
        >
          {/* Subtle ambient background glow */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-[30rem] h-[30rem] rounded-full bg-brushstroke-500/10 blur-3xl pointer-events-none"
          />
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-[28rem] h-[28rem] rounded-full bg-royal-500/10 blur-3xl pointer-events-none"
          />

          {/* Logo container with scale and fade */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center text-center p-6"
          >
            {/* Pulsing ring around the emblem */}
            <div className="relative mb-6">
              <motion.div
                initial={{ scale: 0.9, opacity: 0.4 }}
                animate={{ scale: 1.3, opacity: 0 }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
                className="absolute -inset-4 rounded-full border border-brushstroke-500/30"
              />
              <ShaheenLogo className="h-20 sm:h-24 w-auto filter drop-shadow-md" />
            </div>

            {/* Subtitle / Tagline reveal */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-1.5"
            >
              <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold text-brushstroke-600 block">
                PREMIUM QUALITY VERMICELLI
              </span>
              <p className="font-serif italic text-base sm:text-lg text-royal-950 font-semibold tracking-wide">
                Goodness in Every Strand
              </p>
            </motion.div>

            {/* Sleek brand progress line */}
            <div className="w-52 h-1 bg-royal-100/80 rounded-full mt-6 overflow-hidden relative border border-royal-200/50">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-brushstroke-600 to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
