'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Starfield, GrainOverlay } from '@/components/Starfield';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { MapPin, Phone, Mail, Instagram, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Navbar />
      <Starfield />
      <GrainOverlay />
      <WhatsAppButton />

      <section className="pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <motion.span 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="text-editorial text-brand-gold text-2xl mb-4 block"
             >
               Reach the Celestial
             </motion.span>
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-5xl md:text-8xl font-heading mb-8"
             >
               Get in <span className="text-editorial italic font-light">Touch.</span>
             </motion.h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
               <div>
                  <h2 className="font-heading text-3xl mb-12 tracking-widest text-brand-gold">Our Sanctuary</h2>
                  <div className="space-y-8">
                     <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 rounded-full border border-brand-gold/20 flex items-center justify-center shrink-0">
                           <MapPin className="text-brand-gold" size={20} />
                        </div>
                        <div className="font-body space-y-1">
                           <p className="text-xs uppercase tracking-widest text-brand-gold font-bold">Address</p>
                           <p className="text-brand-ivory/70 leading-relaxed">Beside LOC, Nandanvan Road,<br />Nagpur, Maharashtra 440008</p>
                        </div>
                     </div>
                     <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 rounded-full border border-brand-gold/20 flex items-center justify-center shrink-0">
                           <Phone className="text-brand-gold" size={20} />
                        </div>
                        <div className="font-body space-y-1">
                           <p className="text-xs uppercase tracking-widest text-brand-gold font-bold">Phone</p>
                           <p className="text-brand-ivory/70">+91 8208049909</p>
                        </div>
                     </div>
                     <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 rounded-full border border-brand-gold/20 flex items-center justify-center shrink-0">
                           <Mail className="text-brand-gold" size={20} />
                        </div>
                        <div className="font-body space-y-1">
                           <p className="text-xs uppercase tracking-widest text-brand-gold font-bold">Careers</p>
                           <p className="text-brand-ivory/70">careers@caaliocoffee.com</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="pt-12 border-t border-brand-gold/10">
                  <h3 className="font-heading text-xl mb-6 tracking-widest uppercase">Follow the Ritual</h3>
                  <div className="flex gap-4">
                     <a href="#" className="w-10 h-10 border border-brand-gold/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all">
                        <Instagram size={18} />
                     </a>
                     <a href="#" className="w-10 h-10 border border-brand-gold/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all">
                        <MessageSquare size={18} />
                     </a>
                  </div>
               </div>
            </div>

            {/* Contact Form */}
            <div className="bg-brand-charcoal/30 p-12 border border-brand-gold/10 backdrop-blur-md">
               <h2 className="font-heading text-3xl mb-10 tracking-widest underline underline-offset-8 decoration-brand-gold/30">Send a Message</h2>
               <form className="space-y-6 font-body">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-brand-ivory/40">Name</label>
                        <input type="text" className="w-full bg-brand-black border border-brand-gold/10 px-6 py-4 focus:border-brand-gold outline-none transition-all text-brand-ivory" placeholder="John Doe" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-brand-ivory/40">Email</label>
                        <input type="email" className="w-full bg-brand-black border border-brand-gold/10 px-6 py-4 focus:border-brand-gold outline-none transition-all text-brand-ivory" placeholder="john@example.com" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest text-brand-ivory/40">Subject</label>
                     <select className="w-full bg-brand-black border border-brand-gold/10 px-6 py-4 focus:border-brand-gold outline-none transition-all text-brand-ivory appearance-none">
                        <option>General Inquiry</option>
                        <option>Table Reservation</option>
                        <option>Careers</option>
                        <option>Business Opportunity</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest text-brand-ivory/40">Message</label>
                     <textarea rows={5} className="w-full bg-brand-black border border-brand-gold/10 px-6 py-4 focus:border-brand-gold outline-none transition-all text-brand-ivory placeholder:text-brand-ivory/20" placeholder="How can we assist your coffee journey?"></textarea>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-brand-gold text-brand-black font-body text-xs uppercase tracking-[0.3em] font-bold py-5 mt-4 transition-all hover:bg-brand-ivory"
                  >
                    Transmit Message
                  </motion.button>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Repeat or Join Team */}
      <section className="py-32 px-6 border-t border-brand-gold/10">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl mb-8 tracking-widest">Join Our Team</h2>
            <p className="font-body text-brand-ivory/60 leading-relaxed mb-12">
               Are you an artisan barista or a culinary expert? Join the Caelio family and help us redefine café culture in Nagpur.
            </p>
            <a href="mailto:careers@caaliocoffee.com" className="inline-block border border-brand-gold px-12 py-5 font-body text-xs uppercase tracking-[0.2em] text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-500">
               Inquire at careers@caaliocoffee.com
            </a>
         </div>
      </section>

      <Footer />
    </main>
  );
}
