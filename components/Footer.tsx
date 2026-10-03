'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Instagram, Mail, Phone, MapPin, ArrowRight, Check, Sparkles, Moon } from 'lucide-react';
import { CaelioLogo } from './CaelioLogo';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#140308] pt-24 pb-12 border-t border-[#D4AF37]/25 relative overflow-hidden text-[#FDFBF7]">
      <div className="grain-overlay opacity-5" />

      {/* Navratri Festive Greeting Banner */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#2A0812] via-[#8B1E1E]/50 to-[#2A0812] border border-[#D4AF37]/35 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left shadow-xl">
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles size={12} />
              Caelio Navratri Experience
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-[#FFF9F5]">
              Celebrate Shakti. Celebrate Her. Celebrate Together.
            </h4>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-[#D4AF37] text-[#1C040B] font-mono text-xs uppercase tracking-widest font-bold rounded-sm hover:bg-[#FDFBF7] transition-all shrink-0 shadow-lg flex items-center gap-1.5"
          >
            <Moon size={12} />
            <span>Reserve Midnight Garba Table</span>
          </Link>
        </div>
      </div>

      {/* Luxury Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20 pb-16 border-b border-[#D4AF37]/15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase font-caption mb-2 block">
              The Caelio Journal
            </span>
            <h3 className="font-heading text-3xl md:text-4xl text-[#FFF9F5]">
              Subscribe to Private Tastings & Stories
            </h3>
            <p className="font-body text-[#C1B19B] text-sm mt-2 max-w-md">
              Receive invitations to festive micro-batch bean drops, seasonal menu launches, and artisanal brewing masterclasses in Nagpur.
            </p>
          </div>
          <div>
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3" suppressHydrationWarning>
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                required
                className="bg-[#2A0812] border border-[#D4AF37]/30 text-[#FDFBF7] placeholder-[#C1B19B]/50 px-5 py-3.5 text-xs font-caption focus:outline-none focus:border-[#D4AF37] flex-grow rounded-sm"
                suppressHydrationWarning
              />
              <button
                type="submit"
                className="bg-[#D4AF37] text-[#1C040B] px-6 py-3.5 font-caption text-[11px] tracking-[0.25em] uppercase font-bold hover:bg-[#FDFBF7] transition-all flex items-center justify-center gap-2 rounded-sm shrink-0"
              >
                {subscribed ? (
                  <>
                    <Check size={16} /> Subscribed
                  </>
                ) : (
                  <>
                    Join <ArrowRight size={14} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 font-body">
        {/* Brand Column */}
        <div className="flex flex-col gap-5">
          <CaelioLogo align="left" variant="full" size="md" color="#FDFBF7" taglineColor="#D4AF37" />
          <p className="text-xs text-[#C1B19B] leading-relaxed max-w-xs mt-2">
            &ldquo;Sky-Born. Earth-Roasted.&rdquo; Nagpur&apos;s premier specialty coffee destination and artisanal European culinary sanctuary.
          </p>
          <div className="flex gap-3 mt-2">
            <motion.a 
              href="https://instagram.com/caeliocoffee" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.05, backgroundColor: '#D4AF37', color: '#1C040B' }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 border border-[#D4AF37]/40 text-[#D4AF37] transition-all rounded-sm flex items-center justify-center hover:border-[#D4AF37]"
              aria-label="Caelio Instagram"
            >
              <Instagram size={18} />
            </motion.a>
          </div>
        </div>

        {/* Quick Navigation */}
        <div>
          <h4 className="font-heading text-[#D4AF37] tracking-[0.25em] text-xs uppercase mb-6">Explore</h4>
          <ul className="flex flex-col gap-3 text-xs text-[#C1B19B] font-caption">
            {[
              { label: 'Caelio Navratri Experience', href: '/#navratri-experience', external: false },
              { label: 'Midnight Sanctuary (Till 2 AM)', href: '/#midnight-sanctuary', external: false },
              { label: 'Order On Zomato', href: 'https://www.zomato.com/nagpur/caelio-nandanvan/order', external: true },
              { label: 'Specialty Menu', href: '/menu', external: false },
              { label: 'Single Origin Coffee', href: '/coffee', external: false },
              { label: 'Ceremonial Japanese Matcha', href: '/matcha', external: false },
              { label: 'Our Story & Philosophy', href: '/story', external: false },
              { label: 'The Journal & Blog', href: '/blog', external: false }
            ].map((link) => (
              <li key={link.label}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-[#8B1E1E] hover:text-[#D4AF37] transition-colors font-bold w-fit"
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1">{link.label} ↗</span>
                  </a>
                ) : (
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-2 hover:text-[#D4AF37] transition-colors block w-fit"
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1">{link.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Visit Us */}
        <div>
          <h4 className="font-heading text-[#D4AF37] tracking-[0.25em] text-xs uppercase mb-6">Sanctuary Location</h4>
          <ul className="flex flex-col gap-4 text-xs text-[#C1B19B] font-caption">
            <li className="flex gap-3 items-start">
              <MapPin size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
              <span className="leading-relaxed">Beside LOC, Nandanvan Road,<br />Nagpur, Maharashtra 440008</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={16} className="text-[#D4AF37] shrink-0" />
              <span>+91 8208049909</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={16} className="text-[#D4AF37] shrink-0" />
              <span>concierge@caeliocoffeehouse.com</span>
            </li>
          </ul>
        </div>

        {/* Hours & Sanctuary Details */}
        <div>
          <h4 className="font-heading text-[#D4AF37] tracking-[0.25em] text-xs uppercase mb-6">Navratri Hours</h4>
          <ul className="flex flex-col gap-3 text-xs text-[#C1B19B] font-caption">
            <li className="flex justify-between border-b border-[#D4AF37]/15 pb-2">
              <span>Monday – Sunday</span>
              <span className="text-[#D4AF37] font-semibold">8:00 AM – 2:00 AM</span>
            </li>
            <li className="pt-2 text-[11px] text-[#E5C158] italic font-body">
              Special post-Garba late-night coffee & kitchen sanctuary open nightly throughout Navratri.
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[#D4AF37]/15 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-[#C1B19B]/60 font-caption">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <p>© 2026 CAELIO Coffee House. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#D4AF37] transition-colors">Terms of Service</Link>
          </div>
        </div>
        <p className="flex gap-2">
          <span>Crafted by Founders</span>
          <span className="text-[#D4AF37]">Rohit Patrikar & Shahnawaz Pathan</span>
        </p>
      </div>
    </footer>
  );
};
