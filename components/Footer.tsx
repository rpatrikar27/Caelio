'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-black pt-24 pb-12 border-t border-brand-gold/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 font-body">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
           <div className="flex flex-col gap-2">
            <span className="font-heading text-2xl tracking-widest text-brand-gold">CAELIO</span>
            <span className="text-[10px] tracking-[0.3em] font-body text-brand-ivory/60 uppercase">Coffee House</span>
          </div>
          <p className="text-sm text-brand-ivory/60 leading-relaxed max-w-xs">
            "Sky-Born. Earth-Roasted." Nagpur's premier specialty coffee destination and European culinary experience.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/caaliocoffee" target="_blank" rel="noopener noreferrer" className="p-2 border border-brand-gold/20 text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Menu Links */}
        <div>
          <h4 className="font-heading text-brand-gold tracking-widest text-sm uppercase mb-6">Menu</h4>
          <ul className="flex flex-col gap-4 text-sm text-brand-ivory/60">
            <li><Link href="/menu" className="hover:text-brand-gold transition-colors">Hot Espresso Bar</Link></li>
            <li><Link href="/menu" className="hover:text-brand-gold transition-colors">Filter & Pour Over</Link></li>
            <li><Link href="/menu" className="hover:text-brand-gold transition-colors">Cold Brew & Iced</Link></li>
            <li><Link href="/food" className="hover:text-brand-gold transition-colors">Italian & French Food</Link></li>
            <li><Link href="/menu" className="hover:text-brand-gold transition-colors">Beans & Retail</Link></li>
          </ul>
        </div>

        {/* Visit Us */}
        <div>
          <h4 className="font-heading text-brand-gold tracking-widest text-sm uppercase mb-6">Visit Us</h4>
          <ul className="flex flex-col gap-4 text-sm text-brand-ivory/60">
            <li className="flex gap-3 items-start">
              <MapPin size={16} className="text-brand-gold shrink-0 mt-1" />
              <span>Beside LOC, Nandanvan Road,<br />Nagpur, Maharashtra 440008</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={16} className="text-brand-gold" />
              <span>+91 8208049909</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={16} className="text-brand-gold" />
              <span>careers@caaliocoffee.com</span>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h4 className="font-heading text-brand-gold tracking-widest text-sm uppercase mb-6">Hours</h4>
          <ul className="flex flex-col gap-3 text-sm text-brand-ivory/60 font-medium">
            <li className="flex justify-between border-b border-brand-gold/10 pb-2">
              <span>Mon – Fri</span>
              <span className="text-brand-gold">7:30 AM – 10:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-brand-gold/10 pb-2">
              <span>Sat – Sun</span>
              <span className="text-brand-gold">8:00 AM – 11:00 PM</span>
            </li>
            <li className="pt-2 text-xs text-brand-gold italic">Opening 1st May 2026</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-brand-gold/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-brand-ivory/40">
        <p>© 2026 Caelio Coffee House. Nagpur, India. All Rights Reserved.</p>
        <p className="flex gap-2">
          <span>Founded by</span>
          <span className="text-brand-gold/60">Rohit Patrikar & Shahnawaz Pathan</span>
        </p>
      </div>
    </footer>
  );
};
