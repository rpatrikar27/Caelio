'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Starfield, GrainOverlay } from '@/components/Starfield';
import { MapPin, Phone, Mail, Instagram, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-brand-black">
      <Navbar />
      <Starfield />
      <GrainOverlay />

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
                     <motion.a 
                        href="https://instagram.com/caeliocoffee" 
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, backgroundColor: '#c9a84c', color: '#07080b' }} 
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 border border-brand-gold/20 flex items-center justify-center text-brand-gold transition-all"
                     >
                        <Instagram size={18} />
                     </motion.a>
                     <motion.a 
                        href="https://wa.me/918208049909" 
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, backgroundColor: '#c9a84c', color: '#07080b' }} 
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 border border-brand-gold/20 flex items-center justify-center text-brand-gold transition-all"
                      >
                        <MessageSquare size={18} />
                      </motion.a>
                  </div>
               </div>
            </div>

            {/* Reservation / Contact Form */}
            <div className="bg-brand-charcoal/30 p-12 border border-brand-gold/10 backdrop-blur-md">
               <h2 className="font-heading text-3xl mb-10 tracking-widest underline underline-offset-8 decoration-brand-gold/30">Reservations</h2>
               
               {isSubmitted ? (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="p-12 border border-brand-gold/40 bg-brand-gold/10 text-center space-y-6"
                 >
                   <h3 className="text-brand-gold font-heading text-2xl tracking-widest">Reservation Received</h3>
                   <p className="text-brand-ivory/70 font-body leading-relaxed">
                     Thank you for choosing Caelio. We have received your request and will confirm your table shortly via WhatsApp or Email.
                   </p>
                   <button 
                     onClick={() => setIsSubmitted(false)}
                     className="text-brand-gold border-b border-brand-gold/20 pb-1 text-[10px] uppercase tracking-widest font-body"
                   >
                     Make another request
                   </button>
                 </motion.div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-6 font-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest text-brand-ivory/40">Full Name</label>
                          <input required type="text" className="w-full bg-brand-black border border-brand-gold/10 px-6 py-4 focus:border-brand-gold outline-none transition-all text-brand-ivory" placeholder="John Doe" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest text-brand-ivory/40">Phone Number</label>
                          <input required type="tel" className="w-full bg-brand-black border border-brand-gold/10 px-6 py-4 focus:border-brand-gold outline-none transition-all text-brand-ivory" placeholder="+91 00000 00000" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest text-brand-ivory/40">Email Address</label>
                       <input required type="email" className="w-full bg-brand-black border border-brand-gold/10 px-6 py-4 focus:border-brand-gold outline-none transition-all text-brand-ivory" placeholder="john@example.com" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest text-brand-ivory/40">Date</label>
                          <input required type="date" className="w-full bg-brand-black border border-brand-gold/10 px-6 py-4 focus:border-brand-gold outline-none transition-all text-brand-ivory [color-scheme:dark]" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest text-brand-ivory/40">Time</label>
                          <input required type="time" className="w-full bg-brand-black border border-brand-gold/10 px-6 py-4 focus:border-brand-gold outline-none transition-all text-brand-ivory [color-scheme:dark]" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest text-brand-ivory/40">Guests</label>
                          <select required className="w-full bg-brand-black border border-brand-gold/10 px-6 py-4 focus:border-brand-gold outline-none transition-all text-brand-ivory appearance-none">
                             <option value="1">1 Person</option>
                             <option value="2">2 People</option>
                             <option value="3">3 People</option>
                             <option value="4">4 People</option>
                             <option value="5+">5+ People</option>
                          </select>
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest text-brand-ivory/40">Special Requests</label>
                       <textarea rows={3} className="w-full bg-brand-black border border-brand-gold/10 px-6 py-4 focus:border-brand-gold outline-none transition-all text-brand-ivory placeholder:text-brand-ivory/20" placeholder="Birthdays, allergies, or preferred seating..."></textarea>
                    </div>
                    <motion.button 
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-brand-gold text-brand-black font-body text-xs uppercase tracking-[0.3em] font-bold py-5 mt-4 transition-all hover:bg-brand-ivory"
                    >
                      Request Table
                    </motion.button>
                 </form>
               )}
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
            <motion.a 
              href="mailto:careers@caaliocoffee.com" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block border border-brand-gold px-12 py-5 font-body text-xs uppercase tracking-[0.2em] text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-500"
            >
               Inquire at careers@caaliocoffee.com
            </motion.a>
         </div>
      </section>

      <Footer />
    </main>
  );
}
