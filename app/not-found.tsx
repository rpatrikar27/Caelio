'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Home, Sparkles, Coffee } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#180309] text-[#FDFBF7] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background Mandala Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-radial from-[#D4AF37]/15 via-transparent to-transparent blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full text-center relative z-10 p-8 rounded-2xl border border-[#D4AF37]/30 bg-[#2A0812]/80 backdrop-blur-md shadow-2xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-medium uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CAELIO NAVRATRI</span>
        </div>

        <h1 className="font-['Cinzel',serif] text-6xl font-bold text-[#D4AF37] mb-2 tracking-tight">
          404
        </h1>
        <h2 className="font-['Cinzel',serif] text-xl text-[#FDFBF7] mb-4">
          A Lost Step in the Garba Circle
        </h2>
        <p className="text-stone-300 text-sm leading-relaxed mb-8 font-light">
          The page you are looking for has danced away into the midnight hours. Return to the sanctuary of CAELIO Coffee House.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#D4AF37] text-[#180309] font-medium text-sm hover:bg-[#E5C158] transition-colors duration-200"
          >
            <Home className="w-4 h-4" />
            <span>Return to Sanctuary</span>
          </Link>
          <Link
            href="/#navratri-experience"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[#D4AF37]/50 text-[#FDFBF7] hover:bg-[#D4AF37]/10 transition-colors duration-200 text-sm"
          >
            <Coffee className="w-4 h-4" />
            <span>Navratri Special</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
