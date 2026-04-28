'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Starfield, GrainOverlay } from '@/components/Starfield';
import { Coffee, Stars, Award, Globe, Quote, ChevronRight } from 'lucide-react';

// --- Components ---

const Marquee = () => (
  <div className="bg-brand-gold/10 py-6 border-y border-brand-gold/20 overflow-hidden whitespace-nowrap">
    <div className="flex animate-[marquee_30s_linear_infinite]">
      {[...Array(4)].map((_, i) => (
        <span key={i} className="font-heading text-lg lg:text-2xl tracking-[0.3em] uppercase text-brand-gold mx-8">
          Single Origin · Pour Over · Cold Brew · Espresso Bar · Italian Fast Food · French Cuisine · Nagpur&apos;s Finest ·
        </span>
      ))}
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, desc, index }: { icon: any, title: string, desc: string, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    viewport={{ once: true }}
    className="p-10 border border-brand-gold/10 bg-brand-charcoal/30 backdrop-blur-sm group hover:border-brand-gold/40 transition-colors duration-500"
  >
    <div className="w-12 h-12 rounded-full border border-brand-gold/20 flex items-center justify-center mb-8 group-hover:bg-brand-gold group-hover:text-brand-black transition-all">
      <Icon size={24} />
    </div>
    <h3 className="font-heading text-xl mb-4 tracking-wider">{title}</h3>
    <p className="text-sm text-brand-ivory/60 leading-relaxed font-body">
      {desc}
    </p>
  </motion.div>
);

const SignatureCard = ({ name, desc, img, price }: { name: string, desc: string, img: string, price: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative h-[500px] overflow-hidden border border-brand-gold/10"
  >
    <Image 
      src={img} 
      alt={name} 
      fill 
      sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 33vw"
      className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-80" 
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
    <div className="absolute bottom-0 left-0 p-8 w-full">
      <div className="flex justify-between items-end mb-4">
        <h4 className="font-heading text-2xl tracking-wide">{name}</h4>
        <span className="font-body text-brand-gold text-lg">{price}</span>
      </div>
      <p className="text-sm text-brand-ivory/60 font-body mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        {desc}
      </p>
      <Link href="/menu" className="inline-flex items-center gap-2 text-brand-gold text-[10px] uppercase tracking-widest font-body border-b border-brand-gold/30 pb-1">
        Explore Menu <ChevronRight size={14} />
      </Link>
    </div>
  </motion.div>
);

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const target = new Date('2026-06-01T08:30:00+05:30');
    const interval = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / 86400000),
          hours: Math.floor((diff % 86400000) / 3600000),
          mins: Math.floor((diff % 3600000) / 60000),
          secs: Math.floor((diff % 60000) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8 justify-center">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <span className="font-heading text-3xl md:text-5xl text-brand-gold mb-1">{value.toString().padStart(2, '0')}</span>
          <span className="text-[10px] uppercase tracking-widest text-brand-ivory/40">{label}</span>
        </div>
      ))}
    </div>
  );
};

// --- Page Root ---

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Starfield />
      <GrainOverlay />

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col pt-20">
        <div className="flex-1 grid grid-cols-12 max-w-7xl mx-auto w-full border-x border-brand-gold/10">
          {/* Left Column: Primary Content */}
          <section className="col-span-12 lg:col-span-7 flex flex-col justify-center px-6 lg:px-12 border-b lg:border-b-0 lg:border-r border-brand-gold/10 py-16 lg:py-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mb-6 px-4 py-1.5 border border-brand-gold/30 w-fit rounded-full text-[9px] uppercase tracking-widest text-brand-gold font-bold"
            >
              Opening 1st June 2026
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-[95px] leading-[0.8] uppercase tracking-tighter mb-8 font-heading"
            >
              Sky-Born.<br /><span className="text-brand-gold">Earth-Roasted.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-editorial text-xl md:text-2xl opacity-70 mb-12 max-w-md italic font-light leading-relaxed"
            >
              Nagpur&apos;s first dedicated specialty coffee house. Single origin Indian beans. Precision craft. Celestial ambiance.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-16 lg:mb-20"
            >
              <Link href="/menu" className="bg-brand-gold text-brand-black px-10 md:px-14 py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-brand-ivory transition-all text-center">
                Explore Menu
              </Link>
              <Link href="/story" className="border border-brand-ivory/30 text-brand-ivory px-10 md:px-14 py-5 text-[10px] uppercase tracking-[0.3em] hover:bg-brand-ivory hover:text-brand-black transition-all text-center">
                Our Story
              </Link>
            </motion.div>

            <div className="pt-10 border-t border-brand-gold/10 flex flex-wrap gap-8 md:gap-12">
              {[
                { n: "01", t: "Indian Origins" },
                { n: "02", t: "Artisan Roasting" },
                { n: "03", t: "Celestial Ambience" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + (i * 0.2) }}
                  className="flex flex-col"
                >
                  <span className="text-brand-gold text-2xl md:text-3xl font-heading mb-1">{stat.n}</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] opacity-50 leading-tight">
                    {stat.t.split(' ').join('\n')}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Right Column: Teaser & Info */}
          <section className="col-span-12 lg:col-span-5 flex flex-col bg-brand-charcoal/5 backdrop-blur-sm">
            <div className="p-8 lg:p-12 border-b border-brand-gold/10 flex-1">
              <h3 className="font-heading text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-10">Signature Rituals</h3>
              <div className="space-y-8 md:space-y-10">
                {[
                  { n: "The Eclipse", p: "₹240", d: "Ristretto with a shadow of dark chocolate bitters" },
                  { n: "Midnight Drift", p: "₹340", d: "18-hour cold brew, dark chocolate notes" },
                  { n: "Golden Hour Latte", p: "₹290", d: "Silky micro-foam with turmeric-gold syrup" },
                  { n: "Cloud Nine", p: "₹260", d: "Equal parts espresso, steamed milk, and airy foam" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="flex justify-between items-end border-b border-brand-ivory/5 pb-3 group cursor-default"
                  >
                    <div className="flex flex-col">
                      <span className="text-lg font-light group-hover:text-brand-gold transition-colors">{item.n}</span>
                      <span className="text-editorial text-[11px] opacity-40 italic">{item.d}</span>
                    </div>
                    <span className="text-brand-gold font-body text-sm tracking-widest">{item.p}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-8 lg:p-12 bg-brand-charcoal/20">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-heading text-[10px] uppercase tracking-[0.3em] text-brand-gold">Location</h3>
                <span className="text-[9px] uppercase tracking-widest opacity-40">Nagpur, India</span>
              </div>
              <p className="text-sm font-light mb-6 leading-relaxed opacity-70">
                Caelio Coffee House,<br />
                Beside LOC, Nandanvan Road,<br />
                Maharashtra 440008
              </p>
              <div className="flex flex-col gap-2 text-xs text-brand-gold font-body tracking-[0.1em]">
                <span>+91 82080 49909</span>
                <span>@caeliocoffeehouse</span>
              </div>
              <div className="mt-10 text-[9px] uppercase tracking-widest flex gap-6 opacity-30">
                <span>Daily: 08:30—02:30</span>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Marquee />

      {/* Why Caelio */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-editorial text-brand-gold text-2xl mb-4 block underline-offset-8">The Caelio Philosophy</span>
            <h2 className="text-4xl md:text-6xl max-w-2xl leading-[1.1] font-heading">Sky-Born. Earth-Roasted.</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={Stars} 
              index={0}
              title="Indian Origins" 
              desc="Direct-trade beans from Coorg, Araku Valley, and Chikmagalur estates. Traceable to the estate."
            />
            <FeatureCard 
              icon={Award} 
              index={1}
              title="Precision Craft" 
              desc="V60, Chemex, AeroPress, and 18-hour cold brew program on world-class machinery."
            />
            <FeatureCard 
              icon={Globe} 
              index={2}
              title="European Kitchen" 
              desc="Authentic Italian & French culinary experience paired perfectly with our specialty brews."
            />
            <FeatureCard 
              icon={Coffee} 
              index={3}
              title="Celestial Ambiance" 
              desc="Dark moody walls, warm gold lighting, and premium seating. A destination, not just a café."
            />
          </div>
        </div>
      </section>

      {/* Signature Drinks */}
      <section className="py-32 px-6 bg-brand-charcoal/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-editorial text-brand-gold text-2xl mb-4 block">The Celestial Series</span>
              <h2 className="text-4xl md:text-5xl">Signature Drinks.</h2>
            </div>
            <Link href="/menu" className="text-brand-gold uppercase tracking-widest text-xs border-b border-brand-gold/20 pb-2 flex items-center gap-2 font-body">
              View Full Menu <ChevronRight size={14} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SignatureCard 
              name="The Eclipse" 
              price="₹240"
              desc="Ristretto with a shadow of dark chocolate bitters. Intense and mysterious."
              img="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
            />
            <SignatureCard 
              name="Golden Hour" 
              price="₹290"
              desc="Silky micro-foam with turmeric-gold syrup. A warm embrace in a cup."
              img="https://images.unsplash.com/photo-1541167760496-1628856ab772"
            />
            <SignatureCard 
              name="Midnight Drift" 
              price="₹340"
              desc="18-hour cold brew with cocoa notes. Smooth, refreshing, and deeply caffeinated."
              img="https://images.unsplash.com/photo-1461023058943-07fcbe16d735"
            />
            <SignatureCard 
              name="Pour Over" 
              price="₹320"
              desc="Single origin Dawn Drop V60. Bright, floral, and delicate extraction."
              img="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
            />
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24" 
            alt="Cafe Interior" 
            fill 
            sizes="100vw"
            className="object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-editorial text-brand-gold text-2xl mb-6 block">Join the Ritual</span>
          <h2 className="text-4xl md:text-6xl mb-12">Arriving 1st June 2026.</h2>
          <Countdown />
          <p className="mt-12 text-brand-ivory/60 font-body tracking-[0.2em] uppercase text-xs">
            Nandanvan Road, Nagpur
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <Quote className="mx-auto text-brand-gold mb-8 opacity-40" size={48} />
            <span className="text-editorial text-2xl block italic mb-2">Be Our First Reviewer</span>
            <h2 className="text-3xl md:text-4xl uppercase tracking-widest font-heading">Coming Soon</h2>
          </div>
          
          <div className="flex flex-col items-center">
            <p className="text-lg text-brand-ivory font-editorial text-center mb-10 max-w-2xl px-6 opacity-70">
              Caelio opens 1st June 2026. Experience it. Then tell the world.
            </p>
            <Link href="https://maps.google.com/?q=Nandanvan+Road,+Nagpur,+Maharashtra+440008" className="bg-brand-gold text-brand-black px-12 py-5 text-[10px] uppercase tracking-widest font-bold hover:bg-brand-ivory transition-all flex items-center gap-3">
              Leave a Google Review <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Placeholder Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="flex justify-between items-center mb-12">
              <h3 className="font-heading text-2xl tracking-widest uppercase">@caeliocoffeehouse</h3>
              <a href="https://instagram.com/caeliocoffeehouse" className="text-xs uppercase tracking-widest text-brand-gold border-b border-brand-transparent hover:border-brand-gold transition-all">Follow Us</a>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="aspect-square bg-brand-charcoal relative overflow-hidden group">
                  <Image 
                    src={i % 2 === 0 ? "https://images.unsplash.com/photo-1447933601403-0c6688de566e" : "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe"} 
                    alt="Instagram Post" 
                    fill 
                    sizes="(max-width: 640px) 50vw, (max-width: 1080px) 25vw, 16vw"
                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
           </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-32 px-6 bg-brand-charcoal/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 h-[400px] bg-brand-charcoal relative border border-brand-gold/20 overflow-hidden">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14886.643329188!2d79.11!3d21.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5fa665c87%3A0xe54d262d04a742!2sNandanvan%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(1.2)' }} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="absolute inset-0"
               suppressHydrationWarning
             />
             <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <div className="bg-brand-black p-4 border border-brand-gold flex flex-col items-center">
                   <MapPin size={24} className="text-brand-gold mb-2" />
                   <span className="text-[10px] uppercase tracking-widest">Nagpur Sanctuary</span>
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-editorial text-brand-gold text-2xl mb-4 block">Visit the Sanctuary</span>
            <h2 className="text-4xl md:text-5xl mb-8">Where Earth meets Sky.</h2>
            <div className="space-y-6 font-body text-brand-ivory/80">
              <p>Beside LOC, Nandanvan Road,<br />Nagpur, Maharashtra 440008</p>
              <p>Daily: 8:30 AM – 2:30 AM</p>
              <div className="pt-4">
                <a 
                  href="https://maps.google.com/?q=Nandanvan+Road,+Nagpur,+Maharashtra+440008" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold uppercase tracking-[0.2em] text-xs border-b border-brand-gold pb-1"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const MapPin = ({ size, className }: { size: number, className: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
