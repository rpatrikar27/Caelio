'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Instagram, Mail, Phone, MapPin, ArrowRight, Check } from 'lucide-react';
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
    <footer className="bg-[#0D0705] pt-24 pb-12 border-t border-[#A37945]/20 relative overflow-hidden text-[#F4E7D7]">
      <div className="grain-overlay opacity-5" />

      {/* Luxury Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20 pb-16 border-b border-[#A37945]/15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-[#A37945] text-[10px] tracking-[0.3em] uppercase font-caption mb-2 block">
              The Caelio Journal
            </span>
            <h3 className="font-heading text-3xl md:text-4xl text-[#F4E7D7]">
              Subscribe to Private Tastings & Stories
            </h3>
            <p className="font-body text-[#C1B19B] text-sm mt-2 max-w-md">
              Receive invitations to secret bean drops, seasonal menu launches, and artisanal brewing masterclasses in Nagpur.
            </p>
          </div>
          <div>
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                required
                className="bg-[#1C120D] border border-[#A37945]/30 text-[#F4E7D7] placeholder-[#C1B19B]/50 px-5 py-3.5 text-xs font-caption focus:outline-none focus:border-[#A37945] flex-grow rounded-sm"
              />
              <button
                type="submit"
                className="bg-[#A37945] text-[#120A07] px-6 py-3.5 font-caption text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-[#F4E7D7] transition-all flex items-center justify-center gap-2 rounded-sm shrink-0"
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
          <CaelioLogo align="left" variant="full" size="md" color="#F4E7D7" taglineColor="#A37945" />
          <p className="text-xs text-[#C1B19B] leading-relaxed max-w-xs mt-2">
            &quot;Sky-Born. Earth-Roasted.&quot; Nagpur&apos;s premier specialty coffee destination and artisanal European culinary sanctuary.
          </p>
          <div className="flex gap-3 mt-2">
            <motion.a 
              href="https://instagram.com/caeliocoffee" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.05, backgroundColor: '#A37945', color: '#120A07' }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 border border-[#A37945]/30 text-[#A37945] transition-all rounded-sm flex items-center justify-center"
              aria-label="Caelio Instagram"
            >
              <Instagram size={18} />
            </motion.a>
          </div>
        </div>

        {/* Quick Navigation */}
        <div>
          <h4 className="font-heading text-[#A37945] tracking-[0.25em] text-xs uppercase mb-6">Explore</h4>
          <ul className="flex flex-col gap-3 text-xs text-[#C1B19B] font-caption">
            {[
              { label: 'Specialty Menu', href: '/menu' },
              { label: 'Single Origin Coffee', href: '/coffee' },
              { label: 'Ceremonial Japanese Matcha', href: '/matcha' },
              { label: 'Our Story & Philosophy', href: '/story' },
              { label: 'Why Caelio', href: '/why-us' },
              { label: 'The Journal & Blog', href: '/blog' }
            ].map((link) => (
              <li key={link.label}>
                <Link 
                  href={link.href} 
                  className="group flex items-center gap-2 hover:text-[#F4E7D7] transition-colors block w-fit"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Visit Us */}
        <div>
          <h4 className="font-heading text-[#A37945] tracking-[0.25em] text-xs uppercase mb-6">Sanctuary Location</h4>
          <ul className="flex flex-col gap-4 text-xs text-[#C1B19B] font-caption">
            <li className="flex gap-3 items-start">
              <MapPin size={16} className="text-[#A37945] shrink-0 mt-0.5" />
              <span className="leading-relaxed">Beside LOC, Nandanvan Road,<br />Nagpur, Maharashtra 440008</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={16} className="text-[#A37945] shrink-0" />
              <span>+91 8208049909</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={16} className="text-[#A37945] shrink-0" />
              <span>concierge@caeliocoffeehouse.com</span>
            </li>
          </ul>
        </div>

        {/* Hours & Sanctuary Details */}
        <div>
          <h4 className="font-heading text-[#A37945] tracking-[0.25em] text-xs uppercase mb-6">Opening Hours</h4>
          <ul className="flex flex-col gap-3 text-xs text-[#C1B19B] font-caption">
            <li className="flex justify-between border-b border-[#A37945]/15 pb-2">
              <span>Monday – Sunday</span>
              <span className="text-[#F4E7D7] font-medium">8:30 AM – 2:30 AM</span>
            </li>
            <li className="pt-2 text-[11px] text-[#A37945] italic font-body">
              Late night coffee & gourmet desserts served until 2:30 AM daily.
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[#A37945]/15 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-[#C1B19B]/60 font-caption">
        <p>© 2026 CAELIO Coffee House. All Rights Reserved.</p>
        <p className="flex gap-2">
          <span>Crafted by Founders</span>
          <span className="text-[#A37945]">Rohit Patrikar & Shahnawaz Pathan</span>
        </p>
      </div>
    </footer>
  );
};
