'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, Moon } from 'lucide-react';
import { CaelioLogo } from './CaelioLogo';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Navratri', href: '/#navratri-experience', isFestive: true },
  { name: 'Menu', href: '/menu' },
  { name: 'Coffee', href: '/coffee' },
  { name: 'Matcha', href: '/matcha' },
  { name: 'Our Story', href: '/story' },
  { name: 'Why Us', href: '/why-us' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
      {/* Seasonal Navratri Announcement Ribbon */}
      <div className="w-full bg-gradient-to-r from-[#2A0812] via-[#8B1E1E] to-[#2A0812] text-[#FDFBF7] py-1.5 px-4 text-center border-b border-[#D4AF37]/30 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em]">
          <span className="text-[#D4AF37] hidden sm:inline">✦</span>
          <span className="font-semibold text-[#D4AF37]">Caelio Navratri:</span>
          <span>Celebrate Shakti. Celebrate Her. Celebrate Together.</span>
          <span className="hidden md:inline text-[#E5C158]">· Open 8:00 AM till 2:00 AM Daily</span>
          <span className="text-[#D4AF37] hidden sm:inline">✦</span>
        </div>
      </div>

      <nav 
        className={`w-full transition-all duration-500 ${
          scrolled 
            ? 'bg-[#180309]/95 backdrop-blur-md h-20 border-b border-[#D4AF37]/20 shadow-2xl' 
            : 'bg-gradient-to-b from-[#180309]/80 to-transparent h-24'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 lg:px-12 flex justify-between items-center">
          {/* Logo Mark */}
          <Link href="/" className="group flex items-center">
            <CaelioLogo 
              variant="full" 
              size="sm" 
              color="#FDFBF7" 
              taglineColor="#D4AF37" 
              align="left" 
              className="group-hover:opacity-90 transition-opacity" 
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className="relative group"
              >
                <Link 
                  href={link.href} 
                  className={`font-caption text-[11px] uppercase tracking-[0.22em] font-medium transition-colors duration-300 block py-2 flex items-center gap-1 ${
                    link.isFestive 
                      ? 'text-[#D4AF37] font-semibold hover:text-[#FFF9F5]' 
                      : 'text-[#FDFBF7]/80 hover:text-[#D4AF37]'
                  }`}
                >
                  {link.isFestive && <Sparkles size={11} className="text-[#D4AF37]" />}
                  {link.name}
                  <motion.div 
                    className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                      link.isFestive ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]'
                    }`}
                  />
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link 
                href="/contact" 
                className="px-5 py-2.5 bg-[#D4AF37] text-[#1C040B] font-caption text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-[#FDFBF7] transition-all duration-500 rounded-sm shadow-lg flex items-center gap-1.5"
              >
                <Moon size={12} />
                <span>Reserve Garba Table</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-[#D4AF37] p-2 hover:text-[#FDFBF7] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Background Overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-[#180309]/90 backdrop-blur-md z-40 lg:hidden"
              />
              
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 220 }}
                className="fixed inset-y-0 right-0 w-full sm:w-[420px] bg-[#1C040B] z-50 flex flex-col justify-between p-8 sm:p-10 lg:hidden border-l border-[#D4AF37]/30 shadow-2xl"
              >
                <div className="flex justify-between items-center border-b border-[#D4AF37]/20 pb-6">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <CaelioLogo variant="full" size="sm" color="#FDFBF7" taglineColor="#D4AF37" align="left" />
                  </Link>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-[#D4AF37] hover:text-[#FDFBF7] transition-colors p-2"
                    aria-label="Close Menu"
                  >
                    <X size={28} />
                  </button>
                </div>

                <div className="flex flex-col gap-3.5 my-auto py-6">
                  <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-caption mb-1 flex items-center gap-1.5">
                    <Sparkles size={11} />
                    Caelio Navratri Season
                  </span>
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04 }}
                    >
                      <Link 
                        href={link.href} 
                        onClick={() => setIsOpen(false)}
                        className={`font-heading text-xl tracking-[0.1em] transition-colors flex items-center justify-between group py-1.5 ${
                          link.isFestive ? 'text-[#D4AF37] font-semibold' : 'text-[#FDFBF7] hover:text-[#D4AF37]'
                        }`}
                      >
                        <span>{link.name}</span>
                        <div className="h-px w-0 group-hover:w-8 bg-[#D4AF37] transition-all duration-300" />
                      </Link>
                    </motion.div>
                  ))}
                  
                  <Link 
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="mt-4 px-6 py-3.5 bg-[#D4AF37] text-[#1C040B] font-caption text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-[#FDFBF7] transition-all text-center rounded-sm shadow-xl"
                  >
                    Reserve Garba Table
                  </Link>
                </div>
                
                <div className="border-t border-[#D4AF37]/20 pt-6 flex justify-between items-center text-[10px] tracking-widest text-[#E5C158] font-caption">
                  <span>NANDANVAN · NAGPUR</span>
                  <span>OPEN 8:00 AM – 2:00 AM</span>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
