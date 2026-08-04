'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GrainOverlay } from '@/components/Starfield';
import { Coffee, Flame, Sparkles, MapPin, ChevronRight, Award } from 'lucide-react';

const coffeeCollection = [
  {
    name: 'Stardust Nitro Cold Brew',
    price: '₹240',
    tag: 'Signature Concoction',
    origin: 'Chikmagalur Single Estate Arabica',
    notes: 'Dark chocolate, lavender botanical foam, edible gold shimmer',
    desc: 'Slow-extracted for 18 hours, nitrogenated under pressure to create a cascading velvet head, infused with lavender cream and edible gold shimmer.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c',
  },
  {
    name: 'Eclipse Ristretto Pull',
    price: '₹220',
    tag: 'Reserve Single Shot',
    origin: 'Coorg Washed Specialty Arabica',
    notes: 'Bittersweet cacao, toasted macadamia, molasses',
    desc: 'Double ristretto extraction poured precisely over shadow dark chocolate bitters and served in heated ceramic.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd',
  },
  {
    name: 'Caelio Cold Coffee',
    price: '₹170',
    tag: 'House Flagship',
    origin: 'House Specialty Micro-Blend',
    notes: 'Creamy espresso, raw cane sugar, mountain ice',
    desc: 'Our flagship double-filtered espresso blend, shaken vigorously over crystal mountain ice blocks with farm-fresh milk.',
    image: '/images/hero_coffee.jpg',
  },
  {
    name: 'Velvet Flat White',
    price: '₹210',
    tag: 'Espresso Craft',
    origin: 'Araku Valley High-Elevation Arabica',
    notes: 'Silky microfoam, honeyed almond, sweet tobacco',
    desc: 'Double ristretto pulled with velvety microfoam poured at precisely 65°C to preserve natural bean sweetness.',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61',
  },
  {
    name: 'Kyoto Drip Cold Brew',
    price: '₹230',
    tag: 'Slow Extraction',
    origin: 'Single Origin Estate',
    notes: 'Blackberry wine, cedar wood, cocoa nibs',
    desc: 'Brewed drop by slow drop through a Japanese glass tower over 12 hours for crisp clarity and minimal acidity.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
  },
  {
    name: 'Single Origin V60 Pour Over',
    price: '₹220',
    tag: 'Artisan Drip',
    origin: 'Rotational Harvest Arabica',
    notes: 'Bright citrus, jasmine blossom, caramel finish',
    desc: 'Hand-poured at your table using precision goose-neck kettles to extract complex floral and fruity notes.',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38',
  },
];

export default function CoffeePage() {
  return (
    <main className="relative min-h-screen bg-[#120A07] text-[#F4E7D7] overflow-x-hidden">
      <Navbar />
      <GrainOverlay />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e" 
            alt="CAELIO Specialty Coffee Beans" 
            fill 
            className="object-cover opacity-30 scale-105"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#120A07]/90 via-[#120A07]/50 to-[#120A07]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <span className="text-[#A37945] text-[10px] tracking-[0.35em] uppercase font-caption block mb-4">
            ETHICALLY TRADED · SMALL BATCH ROASTED
          </span>
          <h1 className="font-heading text-5xl md:text-8xl text-[#F4E7D7] mb-6 uppercase">
            Specialty Coffee <br />
            <span className="italic font-editorial text-[#A37945]">Collection</span>
          </h1>
          <p className="font-editorial text-lg md:text-xl text-[#C1B19B] italic max-w-xl mx-auto">
            From the misty high-altitude slopes of Coorg and Araku Valley to our custom La Marzocco machine on Nandanvan Road.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-b border-[#A37945]/15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 luxury-card rounded-xl space-y-4">
            <div className="w-10 h-10 rounded-full border border-[#A37945]/30 flex items-center justify-center text-[#A37945]">
              <MapPin size={20} />
            </div>
            <h3 className="font-heading text-lg text-[#F4E7D7]">100% Indian Estate Arabica</h3>
            <p className="font-body text-xs text-[#C1B19B] leading-relaxed">
              We exclusively source Grade-1 Specialty Arabica cultivated under indigenous shade trees at elevations above 3,500 ft.
            </p>
          </div>

          <div className="p-8 luxury-card rounded-xl space-y-4">
            <div className="w-10 h-10 rounded-full border border-[#A37945]/30 flex items-center justify-center text-[#A37945]">
              <Flame size={20} />
            </div>
            <h3 className="font-heading text-lg text-[#F4E7D7]">Artisanal Micro-Roasting</h3>
            <p className="font-body text-xs text-[#C1B19B] leading-relaxed">
              Every batch is profile-roasted to highlight naturally occurring fruit sugars, dark cocoa body, and floral brightness.
            </p>
          </div>

          <div className="p-8 luxury-card rounded-xl space-y-4">
            <div className="w-10 h-10 rounded-full border border-[#A37945]/30 flex items-center justify-center text-[#A37945]">
              <Award size={20} />
            </div>
            <h3 className="font-heading text-lg text-[#F4E7D7]">SCA Standard Extraction</h3>
            <p className="font-body text-xs text-[#C1B19B] leading-relaxed">
              Water mineral content, pressure profiling, and extraction ratios are calibrated twice daily by our lead barista team.
            </p>
          </div>
        </div>
      </section>

      {/* Coffee Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[#A37945] text-[10px] tracking-[0.35em] uppercase font-caption block mb-2">
            CURATED BEVERAGES
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-[#F4E7D7]">
            The Coffee Menu
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffeeCollection.map((coffee) => (
            <div key={coffee.name} className="luxury-card rounded-xl overflow-hidden p-6 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6">
                  <Image 
                    src={coffee.image} 
                    alt={coffee.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#120A07]/80 backdrop-blur-md px-2.5 py-1 rounded text-[9px] font-caption uppercase tracking-widest text-[#A37945] border border-[#A37945]/30">
                    {coffee.tag}
                  </div>
                </div>

                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading text-xl text-[#F4E7D7] group-hover:text-[#A37945] transition-colors">
                    {coffee.name}
                  </h3>
                  <span className="font-caption text-sm font-bold text-[#A37945] ml-2">
                    {coffee.price}
                  </span>
                </div>

                <p className="font-caption text-[10px] uppercase tracking-wider text-[#A37945] mb-3">
                  {coffee.origin}
                </p>

                <p className="font-body text-xs text-[#C1B19B] leading-relaxed mb-4">
                  {coffee.desc}
                </p>

                <div className="border-t border-[#A37945]/15 pt-3 mb-6">
                  <span className="font-caption text-[9px] uppercase tracking-widest text-[#C1B19B]/60 block mb-1">Flavor Notes</span>
                  <p className="font-editorial italic text-xs text-[#F4E7D7]">{coffee.notes}</p>
                </div>
              </div>

              <a 
                href="https://www.zomato.com/nagpur/caelio-nandanvan/order" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#E23744] text-white font-caption text-[10px] uppercase tracking-[0.2em] font-bold text-center rounded hover:bg-white hover:text-[#E23744] transition-all block shadow-md"
              >
                Order On Zomato
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 bg-[#1C120D] border-t border-[#A37945]/15 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl text-[#F4E7D7]">
            Taste The Difference in Person
          </h2>
          <p className="font-editorial italic text-[#C1B19B] text-base">
            Visit CAELIO Coffee House on Nandanvan Road for our complete pour-over lineup and seasonal single-origin flights.
          </p>
          <div className="pt-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-[#A37945] text-[#120A07] font-caption text-[10px] uppercase tracking-[0.25em] font-semibold hover:bg-[#F4E7D7] transition-all rounded-sm inline-flex items-center gap-2"
            >
              Reserve Table <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
