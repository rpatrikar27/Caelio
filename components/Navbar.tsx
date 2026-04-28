'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Our Story', href: '/story' },
  { name: 'Kitchen', href: '/food' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-brand-black/95 backdrop-blur-md h-20 border-b border-brand-gold/20' : 'bg-transparent h-24'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-6 lg:px-12 flex justify-between items-center">
        {/* Logo Mark */}
        <Link href="/" className="flex items-center gap-2 group">
          <svg width="32" height="32" viewBox="0 0 100 100" fill="none" className="group-hover:rotate-180 transition-transform duration-700">
            <circle cx="50" cy="50" r="45" stroke="#c9a84c" strokeWidth="1" className="opacity-30" />
            <path d="M30 50C30 38.9543 38.9543 30 50 30C61.0457 30 70 38.9543 70 50" stroke="#c9a84c" strokeWidth="2" />
            <circle cx="50" cy="55" r="5" fill="#c9a84c" />
          </svg>
          <div className="flex flex-col">
            <span className="font-heading text-xl tracking-[0.3em] uppercase font-bold text-brand-gold leading-none">Caelio</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link 
                href={link.href} 
                className="font-body text-[11px] uppercase tracking-[0.2em] font-light text-brand-ivory/80 hover:text-brand-gold transition-colors duration-300"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/contact" 
              className="px-6 py-2 border border-brand-gold text-brand-gold font-body text-[10px] uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-brand-black transition-colors"
            >
              Reserve Table
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-brand-gold"
          onClick={() => setIsOpen(!isOpen)}
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
              className="fixed inset-0 bg-brand-black/80 backdrop-blur-sm z-40 lg:hidden"
            />
            
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-brand-black z-50 flex flex-col justify-center px-12 lg:hidden border-l border-brand-gold/10"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 text-brand-gold hover:text-brand-ivory transition-colors p-2"
              >
                <X size={32} />
              </button>

              <div className="grain-overlay opacity-10" />
              <div className="flex flex-col gap-6">
                <span className="text-brand-gold/50 text-[10px] tracking-[0.4em] uppercase mb-4">Explorer</span>
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="font-heading text-2xl tracking-widest text-brand-ivory hover:text-brand-gold transition-colors flex items-center justify-between group"
                  >
                    <span>{link.name}</span>
                    <div className="h-px w-0 group-hover:w-12 bg-brand-gold transition-all duration-300" />
                  </Link>
                ))}
                <Link 
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-8 px-8 py-4 border border-brand-gold/30 text-brand-gold font-body text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-brand-gold hover:text-brand-black transition-all text-center"
                >
                  Reserve Table
                </Link>
              </div>
              
              <div className="absolute bottom-12 left-12 right-12 flex justify-between items-center opacity-30 text-[9px] tracking-widest transition-opacity hover:opacity-100">
                 <span>EST. 2026</span>
                 <span>CAELIO PARIS</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
