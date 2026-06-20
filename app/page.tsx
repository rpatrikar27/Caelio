'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Starfield, GrainOverlay } from '@/components/Starfield';
import { CaelioLogo } from '@/components/CaelioLogo';
import { 
  Coffee, 
  Stars, 
  Award, 
  Quote, 
  ChevronRight, 
  Instagram, 
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';
import { perfectPairings } from '@/app/menu/data';

// --- Components ---

const Marquee = () => (
  <div className="bg-brand-gold/10 py-6 border-y border-brand-gold/20 overflow-hidden whitespace-nowrap">
    <div className="flex animate-[marquee_30s_linear_infinite]">
      {[...Array(4)].map((_, i) => (
        <span key={i} className="font-heading text-lg lg:text-2xl tracking-[0.3em] uppercase text-brand-gold mx-8">
          Single Origin · Pour Over · Cold Brew · Espresso Bar · Premium Shakes · Artisan Mocktails · Nagpur&apos;s Finest ·
        </span>
      ))}
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, desc, index }: { icon: any, title: string, desc: string, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5, borderColor: 'rgba(201, 168, 76, 0.4)', boxShadow: '0 10px 30px -15px rgba(201, 168, 76, 0.2)' }}
    transition={{ delay: index * 0.2, duration: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="p-10 border border-brand-gold/10 bg-brand-charcoal/10 backdrop-blur-sm group transition-all duration-500"
  >
    <div className="w-12 h-12 rounded-full border border-brand-gold/20 flex items-center justify-center mb-8 group-hover:bg-brand-gold group-hover:text-brand-black transition-all">
      <Icon size={24} />
    </div>
    <h3 className="font-heading text-xl mb-4 tracking-wider group-hover:text-brand-gold transition-colors">{title}</h3>
    <p className="text-sm text-brand-ivory/80 leading-relaxed font-body">
      {desc}
    </p>
  </motion.div>
);

const SignatureCard = ({ name, desc, img, price }: { name: string, desc: string, img: string, price: string }) => (
  <motion.div 
    whileHover={{ y: -10, boxShadow: '0 20px 40px -20px rgba(0,0,0,0.5)' }}
    className="group relative h-[500px] overflow-hidden border border-brand-gold/10 transition-all duration-500"
  >
    <Image 
      src={img} 
      alt={name} 
      fill 
      sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 33vw"
      className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-75 group-hover:opacity-100" 
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute bottom-0 left-0 p-8 w-full">
      <div className="flex justify-between items-end mb-4">
        <h4 className="font-heading text-2xl tracking-wide group-hover:text-brand-gold transition-colors">{name}</h4>
        <span className="font-body text-brand-gold text-lg">{price}</span>
      </div>
      <p className="text-sm text-brand-ivory/80 font-body mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 leading-relaxed">
        {desc}
      </p>
      <Link href="/menu" className="inline-flex items-center gap-2 text-brand-gold text-[10px] uppercase tracking-widest font-body border-b border-brand-gold/30 pb-1 hover:border-brand-gold hover:gap-3 transition-all">
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
    <main className="relative min-h-screen overflow-x-hidden bg-brand-black">
      <Navbar />
      <GrainOverlay />

      {/* Hero Section: Atmospheric & Immersive */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_coffee.jpg"
            alt="Atmospheric Specialty Coffee"
            fill
            className="object-cover opacity-40 scale-105"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-transparent to-brand-black" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="mb-8 inline-flex items-center gap-3 px-4 py-1.5 border border-brand-gold/30 rounded-full text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold bg-brand-gold/5 backdrop-blur-sm mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              Now Open in Nagpur
            </div>
            
            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl tracking-tighter text-brand-ivory mb-8 leading-none">
              SKY<span className="text-brand-gold text-outline">-</span>BORN<br/>
              EARTH<span className="text-brand-gold text-outline">-</span>ROASTED
            </h1>
            
            <p className="max-w-2xl mx-auto text-brand-ivory/70 font-body text-base md:text-xl font-light leading-relaxed tracking-wide mb-12 uppercase text-xs">
              Nagpur’s first destination for certified specialty coffee and <br className="hidden md:block" /> authentic European artisanal cuisine.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/menu" className="group relative inline-flex items-center justify-center px-10 py-5 bg-brand-gold text-brand-black font-bold text-[10px] uppercase tracking-[0.3em] overflow-hidden transition-all duration-300 hover:bg-brand-ivory">
                  Explore Menu <ChevronRight size={14} className="ml-2" />
                </Link>
              </motion.div>
              
              <Link href="https://share.google/jXbsilyHMCPPEt43T" target="_blank" className="text-brand-ivory hover:text-brand-gold transition-colors text-[10px] uppercase tracking-[0.3em] font-bold flex items-center gap-2 border-b border-transparent hover:border-brand-gold pb-1 px-4">
                Establish Directions
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-gold/50"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent mx-auto" />
        </motion.div>
      </section>

      <Marquee />

      {/* Bento Grid Highlights */}
      <section className="py-24 bg-brand-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-brand-gold font-body uppercase tracking-[0.5em] text-[10px] block mb-4 italic">The Collection</span>
              <h2 className="text-4xl md:text-6xl text-brand-ivory leading-tight font-heading uppercase tracking-tighter">
                Crafted for <span className="italic text-brand-gold">Connoisseurs</span>
              </h2>
            </div>
            <p className="text-brand-ivory/50 font-body text-xs max-w-xs md:text-right uppercase tracking-widest leading-loose">
              Every bean. Every ingredient. Every plate. A study in precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[850px]">
            {/* Feature 1: Coffee Loft */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-2 md:row-span-2 group relative overflow-hidden bg-neutral-900 border border-brand-gold/10"
            >
              <Image 
                src="/images/bento_vibe.jpg"
                alt="Specialty Coffee"
                fill
                className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10">
                <span className="text-brand-gold text-[10px] uppercase font-bold tracking-[0.4em] mb-4 block">Certified Specialty</span>
                <h3 className="text-4xl text-brand-ivory mb-6 font-heading uppercase tracking-tighter">Liquid Wisdom</h3>
                <p className="text-brand-ivory/60 text-sm max-w-sm mb-8 leading-relaxed">Experience the precision of our Velvet Cappuccinos, Midnight Straight Cold Brews, and single-origin pour-overs.</p>
                <Link href="/menu#coffee" className="inline-flex items-center gap-4 text-brand-gold text-[10px] uppercase tracking-widest font-bold group border border-brand-gold/20 px-6 py-3 hover:bg-brand-gold hover:text-brand-black transition-all">
                  Discover Brews <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* Feature 2: The Sourdough Lab */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-2 group relative overflow-hidden bg-neutral-900 border border-brand-gold/10"
            >
              <Image 
                src="/images/bento_bread.jpg"
                alt="Artisan Sourdough"
                fill
                className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl text-brand-ivory mb-2 font-heading uppercase tracking-widest">Loaves of Art</h3>
                <p className="text-brand-ivory/60 text-[10px] uppercase tracking-[0.2em] max-w-xs">48-Hour slow fermented heritage sourdoughs.</p>
              </div>
            </motion.div>

            {/* Feature 3: Petit Dejeuner */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-1 group relative overflow-hidden bg-neutral-900 border border-brand-gold/10"
            >
              <Image 
                src="/images/bento_breakfast.jpg"
                alt="European Breakfast"
                fill
                className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-lg text-brand-ivory mb-1 font-heading uppercase tracking-widest">Petit Dej</h3>
                <span className="text-brand-gold text-[9px] uppercase tracking-[0.3em]">Morning Rituals</span>
              </div>
            </motion.div>

            {/* Feature 4: Italian Al Fresco */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-1 group relative overflow-hidden bg-neutral-900 border border-brand-gold/10"
            >
              <Image 
                src="/images/bento_pasta.jpg"
                alt="Italian Pasta"
                fill
                className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-lg text-brand-ivory mb-1 font-heading uppercase tracking-widest">Mains</h3>
                <span className="text-brand-gold text-[9px] uppercase tracking-[0.3em]">Artisanal Pasta</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Pairings: Horizontal Scroll with Style */}
      <section className="py-32 bg-brand-charcoal/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <span className="text-brand-gold font-body uppercase tracking-[0.5em] text-[10px] block mb-6">Curated Symbiosis</span>
          <h2 className="text-5xl md:text-7xl font-heading uppercase tracking-tighter">Perfect Pairings</h2>
        </div>
        
        <div className="flex gap-12 overflow-x-auto px-[10%] pb-12 no-scrollbar scroll-smooth">
          {perfectPairings.map((pairing, index) => {
            const pairingImages = [
              '/images/pairing_harmony.jpg',
              '/images/pairing_morning.jpg',
              '/images/pairing_saigon.jpg',
              '/images/pairing_royal.jpg',
              '/images/pairing_street.jpg',
              '/images/pairing_kyoto.jpg'
            ];
            
            return (
              <motion.div 
                key={index} 
                className="flex-shrink-0 w-[350px] md:w-[450px] group"
                whileHover={{ y: -15 }}
              >
                <div className="relative aspect-[4/5] overflow-hidden border border-brand-gold/10 mb-8 p-3 bg-brand-charcoal/30">
                  <Image 
                    src={pairingImages[index] || "/images/bento_vibe.jpg"}
                    alt={pairing.tagline}
                    fill
                    className="object-cover opacity-60 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-90 grayscale hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-neutral-950/20" />
                  <div className="absolute top-6 right-6 font-heading text-4xl text-brand-gold/20 select-none">{String(index + 1).padStart(2, '0')}</div>
                </div>
                <div className="px-2">
                  <h4 className="text-brand-gold text-[10px] uppercase font-bold tracking-[0.4em] mb-3">{pairing.tagline}</h4>
                  <h3 className="text-brand-ivory text-xl md:text-2xl font-heading mb-4 leading-tight">
                    {pairing.coffee} <br className="hidden md:block"/> 
                    <span className="text-brand-gold/40 text-sm font-body italic lowercase mx-2">&</span>
                    {pairing.food}
                  </h3>
                  <p className="text-brand-ivory/50 text-xs font-body leading-relaxed max-w-xs">{pairing.description}</p>
                  <div className="mt-6 font-body text-brand-gold text-sm tracking-widest">{pairing.comboPrice}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Atmospheric Philosophy */}
      <section className="py-32 bg-brand-ivory relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="aspect-[3/4] relative overflow-hidden transition-all duration-1000 group-hover:p-4">
              <Image 
                src="/images/sanctuary_vibe.jpg"
                alt="The Caelio Experience"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-brand-gold/20 -z-10 hidden md:block" />
            <div className="absolute -top-10 -left-10 w-48 h-48 border border-brand-gold/20 -z-10 hidden md:block" />
          </div>
          
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-brand-gold font-body uppercase tracking-[0.6em] text-[10px] block">Manifesto</span>
              <h2 className="text-5xl md:text-7xl font-heading uppercase leading-tight text-neutral-900 tracking-tighter">
                A Celestial <br/> <span className="italic text-brand-gold">Sanctuary</span>
              </h2>
            </div>
            
            <p className="text-neutral-600 font-body text-xl font-light leading-relaxed">
              Caelio (Latin: <span className="italic text-brand-gold font-medium">Of the Heavens</span>) is Nagpur&apos;s defiant step towards a more intentional coffee ritual. We curate beans that have touched the clouds and food that honors the soil.
            </p>

            <div className="grid grid-cols-2 gap-12 pt-8 border-t border-neutral-200">
              <div>
                <span className="text-brand-gold font-bold text-4xl font-heading mb-2 block">100%</span>
                <p className="text-[9px] text-neutral-400 uppercase tracking-[0.2em] font-bold">Specialty Grade Arabica</p>
              </div>
              <div>
                <span className="text-brand-gold font-bold text-4xl font-heading mb-2 block">48H</span>
                <p className="text-[9px] text-neutral-400 uppercase tracking-[0.2em] font-bold">Slow-Ferment Sourdough</p>
              </div>
            </div>

            <motion.div whileHover={{ x: 10 }}>
              <Link href="/story" className="inline-flex items-center gap-6 text-neutral-900 text-[10px] uppercase tracking-[0.4em] font-bold group pb-2 border-b-2 border-brand-gold/10 hover:border-brand-gold transition-all">
                The Origin Story <ChevronRight size={18} className="text-brand-gold" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Location & Experience */}
      <section className="py-32 bg-brand-black relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-8xl font-heading uppercase text-brand-ivory leading-none tracking-tighter">
              VISIT THE <br/><span className="text-brand-gold italic">LOFT</span>.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-brand-gold" size={18} />
                  <h4 className="text-brand-ivory font-bold uppercase text-[10px] tracking-widest">Sanctuary Address</h4>
                </div>
                <p className="text-brand-ivory/50 text-sm font-light leading-relaxed">
                  Near Nandanvan Road,<br />Nagpur, Maharashtra 440008
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="text-brand-gold" size={18} />
                  <h4 className="text-brand-ivory font-bold uppercase text-[10px] tracking-widest">Ritual Hours</h4>
                </div>
                <p className="text-brand-ivory/50 text-sm font-light leading-relaxed">
                  Daily Open Session:<br />08:30 AM – 02:30 AM
                </p>
              </div>
            </div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link 
                href="https://share.google/jXbsilyHMCPPEt43T" 
                target="_blank"
                className="inline-flex items-center gap-6 bg-brand-gold text-brand-black px-12 py-6 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-brand-ivory transition-all shadow-[0_20px_40px_-15px_rgba(201,168,76,0.3)]"
              >
                Establish Route <ChevronRight size={16} />
              </Link>
            </motion.div>
          </div>
          
          <div className="relative aspect-square border-l border-brand-gold/10 hidden lg:flex items-center justify-center bg-brand-charcoal/5">
             <div className="relative w-2/3 aspect-square border border-brand-gold/20 flex flex-col items-center justify-center p-12 text-center group transition-all duration-1000 hover:border-brand-gold">
                <Stars className="text-brand-gold/20 absolute top-8 left-8" size={32} />
                <Stars className="text-brand-gold/20 absolute bottom-8 right-8" size={32} />
                
                <CaelioLogo variant="icon" iconSize={100} />
                <h3 className="text-brand-gold font-heading text-2xl tracking-[0.3em] mt-8 mb-4">Caelio Nagpur</h3>
                <p className="text-brand-ivory/30 text-[9px] uppercase tracking-[0.4em] max-w-xs">Nagpur&apos;s Premier Destination for Specialty Grades & Artisan Craft</p>
                
                <div className="absolute top-0 right-0 w-8 h-8 bg-brand-gold scale-0 group-hover:scale-100 transition-transform origin-bottom-left" />
                <div className="absolute bottom-0 left-0 w-8 h-8 bg-brand-gold scale-0 group-hover:scale-100 transition-transform origin-top-right" />
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

