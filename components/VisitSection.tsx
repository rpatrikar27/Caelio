'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, MessageSquare, Instagram, ArrowUpRight, Calendar } from 'lucide-react';

export function VisitSection() {
  return (
    <section className="py-28 md:py-36 px-6 md:px-12 bg-[#1C120D] text-[#F4E7D7] border-b border-[#A37945]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#A37945]/20 pb-8">
          <div className="space-y-3">
            <span className="text-[#A37945] font-mono text-[10px] uppercase tracking-[0.35em] block">
              Sanctuary Location & Hours
            </span>
            <h2 
              className="text-4xl sm:text-6xl font-serif text-[#FFF9F5] leading-none"
              style={{ fontFamily: '"Times New Roman MT", "Times New Roman", "Playfair Display", serif' }}
            >
              Visit CAELIO Coffee House
            </h2>
          </div>

          <p className="font-serif italic text-base md:text-lg text-[#C1B19B] max-w-md">
            &quot;An artisanal European cafe sanctuary open late night on Nandanvan Road, Nagpur.&quot;
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Address */}
            <div className="flex items-start gap-4 p-5 bg-[#120A07] rounded-2xl border border-[#A37945]/20">
              <MapPin size={22} className="text-[#A37945] shrink-0 mt-1" />
              <div className="space-y-1">
                <strong className="font-serif text-lg text-[#FFF9F5] block font-medium">Sanctuary Address</strong>
                <p className="font-sans text-xs text-[#C1B19B] leading-relaxed">
                  Beside LOC, Nandanvan Road, Nagpur, Maharashtra 440008, India
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start gap-4 p-5 bg-[#120A07] rounded-2xl border border-[#A37945]/20">
              <Clock size={22} className="text-[#A37945] shrink-0 mt-1" />
              <div className="space-y-1">
                <strong className="font-serif text-lg text-[#FFF9F5] block font-medium">Opening Hours</strong>
                <p className="font-sans text-xs text-[#C1B19B] leading-relaxed">
                  Monday – Sunday: <span className="text-[#A37945] font-semibold">08:30 AM – 02:30 AM</span> <br />
                  (Late Night Specialty Coffee & Kitchen)
                </p>
              </div>
            </div>

            {/* Action Buttons Grid */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Zomato Order Button */}
              <a
                href="https://www.zomato.com/nagpur/caelio-nandanvan/order"
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 p-3.5 bg-[#E23744] text-white font-mono text-xs uppercase tracking-wider font-bold rounded-xl hover:bg-white hover:text-[#E23744] transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Order On Zomato (Online Delivery)</span>
                <ArrowUpRight size={16} />
              </a>

              {/* Google Directions */}
              <a
                href="https://share.google/UOD2FOpGrNZ5a01WK"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-[#A37945] text-[#120A07] font-mono text-[10px] uppercase tracking-wider font-bold rounded-xl hover:bg-[#F4E7D7] transition-all flex items-center justify-center gap-1.5 shadow-lg"
              >
                <span>Google Maps</span>
                <ArrowUpRight size={14} />
              </a>

              {/* Reserve Table */}
              <Link
                href="/contact"
                className="p-3.5 border border-[#A37945]/50 text-[#FFF9F5] font-mono text-[10px] uppercase tracking-wider font-semibold rounded-xl hover:bg-[#3B1F14] transition-all flex items-center justify-center gap-1.5"
              >
                <Calendar size={14} className="text-[#A37945]" />
                <span>Reserve Table</span>
              </Link>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919876543210?text=Hello%20CAELIO%20Coffee%20House%20I%20would%20like%20to%20reserve%20a%20table"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-[#120A07] border border-[#A37945]/30 text-[#C1B19B] hover:text-[#FFF9F5] font-mono text-[10px] uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5"
              >
                <MessageSquare size={14} className="text-[#A37945]" />
                <span>WhatsApp</span>
              </a>

              {/* Direct Call */}
              <a
                href="tel:+919876543210"
                className="p-3.5 bg-[#120A07] border border-[#A37945]/30 text-[#C1B19B] hover:text-[#FFF9F5] font-mono text-[10px] uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5"
              >
                <Phone size={14} className="text-[#A37945]" />
                <span>Call Us</span>
              </a>

            </div>

          </div>

          {/* Map Column */}
          <div className="lg:col-span-7 h-[450px] rounded-3xl overflow-hidden border border-[#A37945]/30 shadow-2xl relative bg-[#120A07]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.282570997103!2d79.1175024!3d21.1411516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c73f32c3f1a5%3A0x6b8dd8d28e08d249!2sNandanvan%20Rd%2C%20Nagpur%2C%20Maharashtra%20440008!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(90%) contrast(110%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CAELIO Coffee House Google Map Location"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
