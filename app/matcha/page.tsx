'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GrainOverlay } from '@/components/Starfield';
import { Leaf, Sparkles, ChevronRight, Check } from 'lucide-react';

const matchaCollection = [
  {
    name: 'Kyoto Ceremonial Iced Matcha',
    price: '₹240',
    tag: 'First Harvest Uji',
    desc: 'Pure stoneground first-harvest green tea from Uji, whisked traditionally with oat milk over crystal ice. Electric green, umami-rich, and smooth.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a',
  },
  {
    name: 'Vanilla Bean Matcha Cloud Latte',
    price: '₹250',
    tag: 'Specialty Cold',
    desc: 'Uji ceremonial green tea layered over Madagascar vanilla bean cold foam and almond milk. Delicately sweet with a botanical finish.',
    image: 'https://images.unsplash.com/photo-1515823689610-18451f280e30',
  },
  {
    name: 'Lavender Blossom Matcha',
    price: '₹260',
    tag: 'Botanical Infusion',
    desc: 'Fresh French lavender syrup infused into stoneground ceremonial matcha, shaken with oat milk for an aromatic relaxation ritual.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574',
  },
  {
    name: 'Traditional Hot Whisked Matcha',
    price: '₹220',
    tag: 'Japanese Ceremonial',
    desc: 'Whisked with a 100-prong bamboo chasen at 70°C in warm mountain water. Served pure with a side of artisanal dark chocolate.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3',
  },
];

export default function MatchaPage() {
  return (
    <main className="relative min-h-screen bg-[#120A07] text-[#F4E7D7] overflow-x-hidden">
      <Navbar />
      <GrainOverlay />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1536256263959-770b48d82b0a" 
            alt="Ceremonial Japanese Uji Matcha" 
            fill 
            className="object-cover opacity-30 scale-105"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#120A07]/90 via-[#120A07]/50 to-[#120A07]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <span className="text-[#A37945] text-[10px] tracking-[0.35em] uppercase font-caption block mb-4">
            SHADE-GROWN · FIRST HARVEST · UJI, KYOTO
          </span>
          <h1 className="font-heading text-5xl md:text-8xl text-[#F4E7D7] mb-6 uppercase">
            Ceremonial <br />
            <span className="italic font-editorial text-[#A37945]">Japanese Matcha</span>
          </h1>
          <p className="font-editorial text-lg md:text-xl text-[#C1B19B] italic max-w-xl mx-auto">
            Stoneground green tea leaves harvested from ancient family farms in Kyoto, brought to Nagpur for a transcendent mind-body ritual.
          </p>
        </div>
      </section>

      {/* Whisking Ritual */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-b border-[#A37945]/15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 luxury-card rounded-xl space-y-4">
            <div className="w-10 h-10 rounded-full border border-[#A37945]/30 flex items-center justify-center text-[#A37945]">
              <Leaf size={20} />
            </div>
            <h3 className="font-heading text-lg text-[#F4E7D7]">Shade-Grown 30 Days</h3>
            <p className="font-body text-xs text-[#C1B19B] leading-relaxed">
              Shielded from sunlight before harvest to boost chlorophyll production, producing an electric emerald color and rich L-theanine content.
            </p>
          </div>

          <div className="p-8 luxury-card rounded-xl space-y-4">
            <div className="w-10 h-10 rounded-full border border-[#A37945]/30 flex items-center justify-center text-[#A37945]">
              <Sparkles size={20} />
            </div>
            <h3 className="font-heading text-lg text-[#F4E7D7]">Granite Stone Ground</h3>
            <p className="font-body text-xs text-[#C1B19B] leading-relaxed">
              Ground at slow mill speeds taking 1 hour to yield just 30 grams of velvety powder, preserving delicate amino acids and floral aroma.
            </p>
          </div>

          <div className="p-8 luxury-card rounded-xl space-y-4">
            <div className="w-10 h-10 rounded-full border border-[#A37945]/30 flex items-center justify-center text-[#A37945]">
              <Check size={20} />
            </div>
            <h3 className="font-heading text-lg text-[#F4E7D7]">Bamboo Chasen Whisked</h3>
            <p className="font-body text-xs text-[#C1B19B] leading-relaxed">
              Every bowl is hand-whisked to order using traditional 100-tine bamboo whisks for a silky, micro-foamed texture.
            </p>
          </div>
        </div>
      </section>

      {/* Matcha Menu Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[#A37945] text-[10px] tracking-[0.35em] uppercase font-caption block mb-2">
            KYOTO COLLECTION
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-[#F4E7D7]">
            Matcha Elixirs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {matchaCollection.map((matcha) => (
            <div key={matcha.name} className="luxury-card rounded-xl overflow-hidden p-6 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-square rounded-lg overflow-hidden mb-6">
                  <Image 
                    src={matcha.image} 
                    alt={matcha.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#120A07]/80 backdrop-blur-md px-2.5 py-1 rounded text-[9px] font-caption uppercase tracking-widest text-[#A37945] border border-[#A37945]/30">
                    {matcha.tag}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#A37945] text-[#120A07] px-3 py-1 rounded text-xs font-caption font-bold">
                    {matcha.price}
                  </div>
                </div>

                <h3 className="font-heading text-xl text-[#F4E7D7] mb-2 group-hover:text-[#A37945] transition-colors">
                  {matcha.name}
                </h3>

                <p className="font-body text-xs text-[#C1B19B] leading-relaxed mb-6">
                  {matcha.desc}
                </p>
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
            Experience Ceremonial Matcha
          </h2>
          <p className="font-editorial italic text-[#C1B19B] text-base">
            Visit CAELIO on Nandanvan Road, Nagpur for a freshly whisked bowl prepared right in front of you.
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
