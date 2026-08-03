'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { CaelioLogo } from './CaelioLogo';

const navLinks = [
  { name: 'Home', href: '/' },
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
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#120A07]/95 backdrop-blur-md h-20 border-b border-[#A37945]/20 shadow-2xl' : 'bg-transparent h-24'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-6 lg:px-12 flex justify-between items-center">
        {/* Logo Mark */}
        <Link href="/" className="group flex items-center">
          <CaelioLogo variant="full" size="sm" color="#F4E7D7" taglineColor="#A37945" align="left" className="group-hover:opacity-90 transition-opacity" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="relative group"
            >
              <Link 
                href={link.href} 
                className="font-caption text-[11px] uppercase tracking-[0.22em] font-medium text-[#F4E7D7]/80 hover:text-[#A37945] transition-colors duration-300 block py-2"
              >
                {link.name}
                <motion.div 
                  className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#A37945] transition-all duration-300 group-hover:w-full"
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
              className="px-5 py-2.5 border border-[#A37945] text-[#F4E7D7] font-caption text-[10px] uppercase tracking-[0.25em] hover:bg-[#A37945] hover:text-[#120A07] transition-all duration-500 rounded-sm"
            >
              Reserve Table
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-[#A37945] p-2 hover:text-[#F4E7D7] transition-colors"
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
              className="fixed inset-0 bg-[#120A07]/90 backdrop-blur-md z-40 lg:hidden"
            />
            
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed inset-y-0 right-0 w-full sm:w-[420px] bg-[#120A07] z-50 flex flex-col justify-between p-10 lg:hidden border-l border-[#A37945]/20"
            >
              <div className="flex justify-between items-center border-b border-[#A37945]/15 pb-6">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <CaelioLogo variant="full" size="sm" color="#F4E7D7" taglineColor="#A37945" align="left" />
                </Link>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-[#A37945] hover:text-[#F4E7D7] transition-colors p-2"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="grain-overlay opacity-10" />
              
              <div className="flex flex-col gap-4 my-auto py-6">
                <span className="text-[#A37945] text-[10px] tracking-[0.3em] uppercase font-caption mb-2">Explore Caelio</span>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="font-heading text-2xl tracking-[0.1em] text-[#F4E7D7] hover:text-[#A37945] transition-colors flex items-center justify-between group py-1"
                    >
                      <span>{link.name}</span>
                      <div className="h-px w-0 group-hover:w-8 bg-[#A37945] transition-all duration-300" />
                    </Link>
                  </motion.div>
                ))}
                <Link 
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-6 px-6 py-3.5 bg-[#A37945] text-[#120A07] font-caption text-[11px] uppercase tracking-[0.25em] font-semibold hover:bg-[#F4E7D7] transition-all text-center rounded-sm"
                >
                  Reserve A Sanctuary Table
                </Link>
              </div>
              
              <div className="border-t border-[#A37945]/15 pt-6 flex justify-between items-center text-[10px] tracking-widest text-[#C1B19B] font-caption">
                 <span>NANDANVAN, NAGPUR</span>
                 <span>EST. 2026</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
