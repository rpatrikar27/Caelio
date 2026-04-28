'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Starfield, GrainOverlay } from '@/components/Starfield';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Coffee, Stars, Award, Globe, Quote, ChevronRight } from 'lucide-react';

// --- Components ---

const Marquee = () => (
  <div className="bg-brand-gold/10 py-6 border-y border-brand-gold/20 overflow-hidden whitespace-nowrap">
    <div className="flex animate-[marquee_30s_linear_infinite]">
      {[...Array(4)].map((_, i) => (
        <span key={i} className="font-heading text-lg lg:text-2xl tracking-[0.3em] uppercase text-brand-gold mx-8">
          Single Origin · Pour Over · Cold Brew · Espresso Bar · Italian Fast Food · French Cuisine · Nagpur's Finest ·
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
    const target = new Date('2026-05-01T07:30:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((distance % (1000 * 60)) / 1000),
      });
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
      <WhatsAppButton />

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
              Opening 1st May 2026
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-[90px] leading-[0.85] uppercase tracking-tighter mb-8 font-heading"
            >
              Parisian Spirit.<br /><span className="text-brand-gold">Hanoian Heart.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-editorial text-xl md:text-2xl opacity-70 mb-12 max-w-md italic font-light"
            >
              A refined Parisian bistro experience, serving the boldest single-origin specialty beans from the Highlands of Vietnam.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-16 lg:mb-20"
            >
              <Link href="/menu" className="bg-brand-gold text-brand-black px-10 md:px-12 py-5 text-[10px] uppercase tracking-widest font-bold hover:bg-brand-ivory transition-all text-center">
                Explore Menu
              </Link>
              <Link href="/story" className="border border-brand-ivory/30 text-brand-ivory px-10 md:px-12 py-5 text-[10px] uppercase tracking-widest hover:bg-brand-ivory hover:text-brand-black transition-all text-center">
                The Story
              </Link>
            </motion.div>

            <div className="pt-10 border-t border-brand-gold/10 flex flex-wrap gap-8 md:gap-12">
              {[
                { n: "01", t: "Vietnam Origin" },
                { n: "02", t: "Parisian Roasting" },
                { n: "03", t: "Bistro Ambience" }
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
              <h3 className="font-heading text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-10">Parisian Rituals</h3>
              <div className="space-y-8 md:space-y-10">
                {[
                  { n: "Le Phin Eclipse", p: "₹240", d: "Vietnamese drip, charcoal cream, gold leaf" },
                  { n: "Mon-Cœur Brew", p: "₹340", d: "18-hour cold brew, Da Lat vanilla" },
                  { n: "Hanoi Gold Latte", p: "₹290", d: "Robusta-Arabica blend, turmeric, honey" },
                  { n: "Cloud Nine", p: "₹260", d: "Parisian micro-foam, cocoa nibs" }
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
                <span>@caaliocoffee</span>
              </div>
              <div className="mt-10 text-[9px] uppercase tracking-widest flex gap-6 opacity-30">
                <span>Mon—Fri: 07:30—22:00</span>
                <span>Sat—Sun: 08:00—23:00</span>
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
            <span className="text-editorial text-brand-gold text-2xl mb-4 block underline-offset-8">The Paris-Saigon Connection</span>
            <h2 className="text-4xl md:text-6xl max-w-2xl leading-[1.1] font-heading">A Union of Two Heritage Realms.</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={Stars} 
              index={0}
              title="Vietnam Highlands" 
              desc="Direct-trade single-origin beans from the basaltic soil of Da Lat and Central Highlands."
            />
            <FeatureCard 
              icon={Award} 
              index={1}
              title="Parisian Roast" 
              desc="Small-batch roasting techniques inspired by Saint-Germain-des-Prés cafes."
            />
            <FeatureCard 
              icon={Globe} 
              index={2}
              title="Bistro Soul" 
              desc="Authentic French-Italian pairings served in an atmosphere of timeless Parisian luxury."
            />
            <FeatureCard 
              icon={Coffee} 
              index={3}
              title="The Phin Ritual" 
              desc="Precision automated Phin-style dripping for the ultimate Vietnamese depth."
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
              name="The Caelio" 
              price="₹320"
              desc="Our secret house specialty — a cold-brewed masterpiece with floral notes."
              img="https://picsum.photos/seed/coffee1/800/1200"
            />
            <SignatureCard 
              name="Golden Hour" 
              price="₹290"
              desc="Turmeric-fused latte with honey and a hint of house-made spice."
              img="https://picsum.photos/seed/coffee2/800/1200"
            />
            <SignatureCard 
              name="Midnight Drift" 
              price="₹340"
              desc="18-hour cold brew infused with organic dark chocolate and sea salt."
              img="https://picsum.photos/seed/coffee3/800/1200"
            />
            <SignatureCard 
              name="Eclipse Tonic" 
              price="₹310"
              desc="Double espresso poured over artisanal tonic and star anise."
              img="https://picsum.photos/seed/coffee4/800/1200"
            />
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/cafeblur/1920/1080" 
            alt="Cafe Interior" 
            fill 
            className="object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-editorial text-brand-gold text-2xl mb-6 block">Join the Ritual</span>
          <h2 className="text-4xl md:text-6xl mb-12">Arriving 1st May 2026.</h2>
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
            <span className="text-editorial text-2xl block italic mb-2">Word from the Aficionados</span>
            <h2 className="text-3xl md:text-4xl uppercase tracking-widest font-heading">Celestial Reviews</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { name: "Ananya R.", review: "The finest pour-over I've ever had in India. The space is just magical." },
              { name: "Vikram S.", review: "Caelio brings a level of coffee culture that Nagpur has been waiting for." }
            ].map((t, i) => (
              <div key={i} className="flex flex-col gap-4 border-l-2 border-brand-gold/20 pl-8">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => <Stars key={j} size={14} className="text-brand-gold fill-brand-gold" />)}
                </div>
                <p className="text-lg text-brand-ivory font-editorial">"{t.review}"</p>
                <div className="flex items-center gap-4 mt-4">
                   <div className="w-10 h-px bg-brand-gold/30" />
                   <span className="font-heading text-xs tracking-widest text-brand-gold">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Placeholder Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="flex justify-between items-center mb-12">
              <h3 className="font-heading text-2xl tracking-widest uppercase">@caaliocoffee</h3>
              <a href="https://instagram.com/caaliocoffee" className="text-xs uppercase tracking-widest text-brand-gold border-b border-brand-transparent hover:border-brand-gold transition-all">Follow Us</a>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="aspect-square bg-brand-charcoal relative overflow-hidden group">
                  <Image 
                    src={`https://picsum.photos/seed/insta${i}/600/600`} 
                    alt="Instagram Post" 
                    fill 
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
          <div className="order-2 lg:order-1 h-[400px] bg-brand-charcoal relative border border-brand-gold/20">
             {/* Mock Map Placeholder */}
             <div className="absolute inset-0 grayscale contrast-125 opacity-50 bg-[url('https://picsum.photos/seed/map/1000/1000')] bg-cover" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-brand-black p-4 border border-brand-gold flex flex-col items-center">
                   <MapPin size={24} className="text-brand-gold mb-2" />
                   <span className="text-[10px] uppercase tracking-widest">Find Us Here</span>
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-editorial text-brand-gold text-2xl mb-4 block">Visit the Sanctuary</span>
            <h2 className="text-4xl md:text-5xl mb-8">Where Earth meets Sky.</h2>
            <div className="space-y-6 font-body text-brand-ivory/80">
              <p>Beside LOC, Nandanvan Road,<br />Nagpur, Maharashtra 440008</p>
              <p>Mon–Fri: 7:30 AM – 10:00 PM<br />Sat–Sun: 8:00 AM – 11:00 PM</p>
              <div className="pt-4">
                <a href="https://maps.google.com" className="text-brand-gold uppercase tracking-[0.2em] text-xs border-b border-brand-gold pb-1">Get Directions</a>
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
