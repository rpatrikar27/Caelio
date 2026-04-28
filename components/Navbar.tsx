'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Our Story', href: '/story' },
  { name: 'Why Us', href: '/why-us' },
  { name: 'Food', href: '/food' },
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
            <Link 
              key={link.name} 
              href={link.href} 
              className="font-body text-[11px] uppercase tracking-[0.2em] font-light text-brand-ivory/60 hover:text-brand-gold transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="px-6 py-2 border border-brand-gold text-brand-gold font-body text-[10px] uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-brand-black transition-colors"
          >
            Reserve Table
          </Link>
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
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-black z-40 flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            <div className="grain-overlay opacity-10" />
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="font-heading text-3xl tracking-widest text-brand-gold hover:text-brand-ivory transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-10 py-4 border border-brand-gold text-brand-gold font-body text-sm uppercase tracking-[0.2em]"
            >
              Reserve Table
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
