'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GrainOverlay } from '@/components/Starfield';
import { CaelioLogo } from '@/components/CaelioLogo';
import { InstagramSection } from '@/components/InstagramSection';
import { 
  ChevronRight, 
  MapPin, 
  Clock, 
  Sparkles, 
  Award, 
  Coffee, 
  Leaf, 
  Flame, 
  ArrowUpRight,
  Star,
  Instagram
} from 'lucide-react';

// --- Data Arrays ---

const featuredCollections = [
  {
    title: 'Specialty Coffee',
    tagline: 'Single Origins & Precision Nitro',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
    href: '/coffee',
    desc: 'Ethically traded Arabica beans from Coorg, Chikmagalur & Araku Valley. Roasted in small micro-batches for unprecedented clarity.',
  },
  {
    title: 'Ceremonial Matcha',
    tagline: 'First-Harvest Stoneground Uji',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a',
    href: '/matcha',
    desc: 'Authentic shade-grown green tea leaves from Kyoto, Japan. Whisked traditionally into velvety lattes and iced elixirs.',
  },
  {
    title: 'Artisanal Food',
    tagline: 'Sourdough & European Kitchen',
    image: '/images/bento_pasta.jpg',
    href: '/menu#mains',
    desc: '48-hour slow fermented heritage sourdough toasts, hand-rolled brioche, truffle pastas, and wood-fired breakfast platters.',
  },
  {
    title: 'Handcrafted Desserts',
    tagline: 'Classic French & Italian Patisserie',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9',
    href: '/menu#desserts',
    desc: 'House-made Savoyardi Tiramisu, Dark Chocolate Ganache Tartlets, and Pistachio Brioche Toast baked fresh every morning.',
  },
];

const bestSellers = [
  {
    name: 'Stardust Nitro Cold Brew',
    category: 'Signature Nitro',
    price: '₹240',
    desc: 'Nitrogen-infused cold brew, topped with lavender botanical foam and finished with a delicate dusting of edible gold shimmer.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c',
    tag: 'Signature',
  },
  {
    name: 'Caelio Cold Coffee',
    category: 'House Specialty',
    price: '₹170',
    desc: 'Our flagship double-filtered espresso blend, shaken over crystal mountain ice blocks with farm milk.',
    image: '/images/hero_coffee.jpg',
    tag: 'Best Seller',
  },
  {
    name: 'Eclipse Ristretto Pull',
    category: 'Reserve Espresso',
    price: '₹220',
    desc: 'Double risretto pull over shadow dark chocolate bitters, giving deep notes of toasted hazelnut and raw cocoa.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd',
    tag: 'Reserve',
  },
  {
    name: 'Kyoto Ceremonial Matcha',
    category: 'Uji Japanese',
    price: '₹240',
    desc: 'Authentic shade-grown first harvest matcha whisked with oat milk and a touch of organic agave nectar.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a',
    tag: 'Organic',
  },
];

const customerReviews = [
  {
    quote: "Caelio is unlike anything else in Nagpur. The Stardust Cold Brew and sourdough toast feel straight out of a boutique cafe in Milan or Kyoto.",
    author: "Ananya Sharma",
    role: "Architect & Coffee Connoisseur",
  },
  {
    quote: "The attention to detail in their single-origin coffee extraction is phenomenal. This is pure craftsmanship, from the La Marzocco machine to the calm interior.",
    author: "Dr. Vikramaditya Rao",
    role: "Local Gastronomic Critic",
  },
  {
    quote: "A peaceful sanctuary on Nandanvan Road. Exceptional ceremonial matcha, sublime tiramisu, and late-night hospitality until 2:30 AM.",
    author: "Priya Deshmukh",
    role: "Lifestyle Journalist",
  },
];

// --- Page Component ---

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#120A07] text-[#F4E7D7] overflow-x-hidden selection:bg-[#A37945] selection:text-white">
      <Navbar />
      <GrainOverlay />

      {/* Hero Section: Atmospheric, Editorial, Minimal */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_coffee.jpg"
            alt="CAELIO Specialty Coffee Sanctuary"
            fill
            className="object-cover opacity-35 scale-105 transition-transform duration-10000 hover:scale-100"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#120A07]/90 via-[#120A07]/40 to-[#120A07]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6 flex justify-center">
              <CaelioLogo variant="full" size="lg" color="#F4E7D7" taglineColor="#A37945" align="center" />
            </div>

            <h1 className="font-heading text-5xl md:text-8xl lg:text-9xl tracking-tight text-[#F4E7D7] leading-[0.95] mb-8 uppercase">
              SKY<span className="text-[#A37945] italic font-editorial lowercase"> - </span>BORN.<br />
              EARTH<span className="text-[#A37945] italic font-editorial lowercase"> - </span>ROASTED.
            </h1>

            <p className="max-w-xl mx-auto font-editorial text-lg md:text-2xl text-[#C1B19B] italic leading-relaxed mb-12">
              &quot;A sanctuary where direct-trade Indian coffee meets European culinary artistry in Nagpur.&quot;
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center font-caption">
              <Link 
                href="/menu" 
                className="px-8 py-4 bg-[#A37945] text-[#120A07] text-[11px] uppercase tracking-[0.25em] font-semibold hover:bg-[#F4E7D7] transition-all duration-300 rounded-sm shadow-xl flex items-center gap-2 group"
              >
                Explore Specialty Menu 
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link 
                href="/contact" 
                className="px-8 py-4 border border-[#A37945]/40 text-[#F4E7D7] text-[11px] uppercase tracking-[0.25em] hover:bg-[#A37945]/10 hover:border-[#A37945] transition-all duration-300 rounded-sm"
              >
                Visit The Sanctuary
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#C1B19B]/60 font-caption block mb-2">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#A37945] to-transparent mx-auto animate-pulse" />
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="border-y border-[#A37945]/20 bg-[#1C120D] py-5 overflow-hidden whitespace-nowrap">
        <div className="flex animate-[marquee_35s_linear_infinite]">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="font-caption text-xs tracking-[0.35em] uppercase text-[#A37945] mx-8 flex items-center gap-8">
              <span>SINGLE ORIGIN INDIAN ARABICA</span>
              <span className="text-[#C1B19B]/30">•</span>
              <span>FIRST-HARVEST UJI MATCHA</span>
              <span className="text-[#C1B19B]/30">•</span>
              <span>48H FERMENTED SOURDOUGH</span>
              <span className="text-[#C1B19B]/30">•</span>
              <span>LA MARZOCCO EXTRACTION</span>
              <span className="text-[#C1B19B]/30">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Craft Story: Editorial Layout */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[#A37945]/20 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24" 
                alt="CAELIO Interior Ambience" 
                fill 
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-36 h-36 border border-[#A37945]/30 rounded-xl -z-10 hidden md:block" />
          </div>

          <div className="lg:col-span-7 space-y-8">
            <span className="text-[#A37945] text-[10px] tracking-[0.35em] uppercase font-caption block">
              OUR CRAFT & PHILOSOPHY
            </span>
            <h2 className="font-heading text-4xl md:text-6xl text-[#F4E7D7] leading-[1.1]">
              A Sanctuary Designed for <br />
              <span className="italic font-editorial text-[#A37945]">Slow Living & Fine Taste.</span>
            </h2>
            <p className="font-body text-[#C1B19B] text-base leading-relaxed">
              Founded by <strong className="text-[#F4E7D7]">Rohit Patrikar</strong> and <strong className="text-[#F4E7D7]">Shahnawaz Pathan</strong>, CAELIO derives from <em className="italic text-[#A37945]">Caelum</em> — Latin for sky and heaven. Born out of an unyielding obsession with Indian specialty coffee and European cafe culture, CAELIO brings ethically sourced, single-estate Arabica beans from Coorg and Araku Valley directly to Nandanvan Road, Nagpur.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-[#A37945]/15">
              <div>
                <span className="font-heading text-3xl text-[#A37945]">100%</span>
                <p className="font-caption text-[10px] text-[#C1B19B] uppercase tracking-wider mt-1">Traceable Estate Beans</p>
              </div>
              <div>
                <span className="font-heading text-3xl text-[#A37945]">48-Hr</span>
                <p className="font-caption text-[10px] text-[#C1B19B] uppercase tracking-wider mt-1">Wild Sourdough Ferment</p>
              </div>
              <div>
                <span className="font-heading text-3xl text-[#A37945]">2:30 AM</span>
                <p className="font-caption text-[10px] text-[#C1B19B] uppercase tracking-wider mt-1">Late Night Sanctuary</p>
              </div>
            </div>

            <div className="pt-4">
              <Link 
                href="/story" 
                className="inline-flex items-center gap-2 font-caption text-xs uppercase tracking-[0.25em] text-[#A37945] hover:text-[#F4E7D7] transition-colors border-b border-[#A37945]/30 pb-1"
              >
                Read Our Complete Founders Story <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 bg-[#1C120D] border-y border-[#A37945]/15 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-[#A37945] text-[10px] tracking-[0.35em] uppercase font-caption block mb-3">
                ARTISANAL CATEGORIES
              </span>
              <h2 className="font-heading text-3xl md:text-5xl text-[#F4E7D7]">
                Featured Collections
              </h2>
            </div>
            <p className="font-editorial italic text-[#C1B19B] text-lg max-w-sm">
              Discover our curated offerings crafted with uncompromising standard and passion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCollections.map((col, idx) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative bg-[#120A07] rounded-xl overflow-hidden border border-[#A37945]/15 hover:border-[#A37945]/40 transition-all duration-500 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src={col.image} 
                    alt={col.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120A07] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-caption tracking-[0.25em] uppercase text-[#A37945] block mb-1">
                      {col.tagline}
                    </span>
                    <h3 className="font-heading text-xl text-[#F4E7D7] mb-3 group-hover:text-[#A37945] transition-colors">
                      {col.title}
                    </h3>
                    <p className="font-body text-xs text-[#C1B19B] leading-relaxed mb-6">
                      {col.desc}
                    </p>
                  </div>
                  <Link 
                    href={col.href} 
                    className="inline-flex items-center justify-between text-[10px] font-caption uppercase tracking-[0.2em] text-[#F4E7D7] group-hover:text-[#A37945] transition-colors border-t border-[#A37945]/10 pt-4"
                  >
                    <span>Explore Collection</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#A37945] text-[10px] tracking-[0.35em] uppercase font-caption block mb-3">
            SIGNATURE CONCOCTIONS
          </span>
          <h2 className="font-heading text-4xl md:text-6xl text-[#F4E7D7] mb-4">
            Most Loved at CAELIO
          </h2>
          <p className="font-editorial italic text-[#C1B19B] text-lg">
            Our most requested specialty cold brews, ceremonial drinks, and reserve pulls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="luxury-card rounded-xl overflow-hidden p-5 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-square rounded-lg overflow-hidden mb-5">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#120A07]/80 backdrop-blur-md px-2.5 py-1 rounded text-[9px] font-caption uppercase tracking-widest text-[#A37945] border border-[#A37945]/30">
                    {item.tag}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#A37945] text-[#120A07] px-3 py-1 rounded text-xs font-caption font-bold">
                    {item.price}
                  </div>
                </div>

                <span className="text-[9px] font-caption tracking-[0.25em] uppercase text-[#A37945] block mb-1">
                  {item.category}
                </span>
                <h3 className="font-heading text-lg text-[#F4E7D7] mb-2 group-hover:text-[#A37945] transition-colors">
                  {item.name}
                </h3>
                <p className="font-body text-xs text-[#C1B19B] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <Link 
                href="/menu" 
                className="w-full py-2.5 border border-[#A37945]/30 text-[#F4E7D7] font-caption text-[10px] uppercase tracking-[0.2em] text-center rounded hover:bg-[#A37945] hover:text-[#120A07] transition-all block"
              >
                Order On Menu
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Caelio Section */}
      <section className="py-24 bg-[#1C120D] border-y border-[#A37945]/15 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 border border-[#A37945]/15 rounded-xl bg-[#120A07]/50 space-y-4">
              <div className="w-12 h-12 rounded-full border border-[#A37945]/30 flex items-center justify-center text-[#A37945]">
                <Coffee size={24} />
              </div>
              <h3 className="font-heading text-xl text-[#F4E7D7]">Single-Estate Terroir</h3>
              <p className="font-body text-xs text-[#C1B19B] leading-relaxed">
                We partner directly with family estates in Coorg, Araku Valley, and Chikmagalur. Every bag is traceable down to elevation and micro-climatic harvest dates.
              </p>
            </div>

            <div className="p-8 border border-[#A37945]/15 rounded-xl bg-[#120A07]/50 space-y-4">
              <div className="w-12 h-12 rounded-full border border-[#A37945]/30 flex items-center justify-center text-[#A37945]">
                <Leaf size={24} />
              </div>
              <h3 className="font-heading text-xl text-[#F4E7D7]">Ceremonial Uji Matcha</h3>
              <p className="font-body text-xs text-[#C1B19B] leading-relaxed">
                Imported directly from Uji, Kyoto. Shade-grown first harvest leaves stoneground into vivid green powder, whisked traditionally with bamboo chasen.
              </p>
            </div>

            <div className="p-8 border border-[#A37945]/15 rounded-xl bg-[#120A07]/50 space-y-4">
              <div className="w-12 h-12 rounded-full border border-[#A37945]/30 flex items-center justify-center text-[#A37945]">
                <Flame size={24} />
              </div>
              <h3 className="font-heading text-xl text-[#F4E7D7]">48H Wild Sourdough</h3>
              <p className="font-body text-xs text-[#C1B19B] leading-relaxed">
                Fermented naturally over two days using a 6-year-old mother culture. Baked daily for dark caramelized crust and airy, complex crumb.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#A37945] text-[10px] tracking-[0.35em] uppercase font-caption block mb-3">
            PATRON TESTIMONIALS
          </span>
          <h2 className="font-heading text-4xl text-[#F4E7D7]">
            Words from Coffee Lovers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customerReviews.map((rev, i) => (
            <div key={i} className="p-8 luxury-card rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-[#A37945] mb-6">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={14} fill="#A37945" />
                  ))}
                </div>
                <p className="font-editorial italic text-[#F4E7D7] text-base leading-relaxed mb-6">
                  &quot;{rev.quote}&quot;
                </p>
              </div>
              <div className="border-t border-[#A37945]/15 pt-4">
                <span className="font-heading text-sm text-[#F4E7D7] block">{rev.author}</span>
                <span className="font-caption text-[10px] text-[#C1B19B] uppercase tracking-wider">{rev.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest From Instagram Section */}
      <InstagramSection />

      {/* Location & Visit CTA */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-8">
            <span className="text-[#A37945] text-[10px] tracking-[0.35em] uppercase font-caption block">
              VISIT OUR SANCTUARY
            </span>
            <h2 className="font-heading text-4xl md:text-6xl text-[#F4E7D7] leading-tight">
              Located on <br />
              <span className="italic font-editorial text-[#A37945]">Nandanvan Road.</span>
            </h2>

            <div className="space-y-6 font-caption text-xs text-[#C1B19B]">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#A37945] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F4E7D7] block text-sm mb-1 font-heading">Address</strong>
                  Beside LOC, Nandanvan Road, Nagpur, Maharashtra 440008, India
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={18} className="text-[#A37945] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F4E7D7] block text-sm mb-1 font-heading">Sanctuary Hours</strong>
                  Monday – Sunday: 08:30 AM – 02:30 AM (Late Night Coffee & Kitchen)
                </div>
              </div>
            </div>

            <div className="pt-4 flex gap-4">
              <a 
                href="https://share.google/UOD2FOpGrNZ5a01WK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#A37945] text-[#120A07] text-[10px] uppercase tracking-[0.25em] font-caption font-bold hover:bg-[#F4E7D7] transition-all rounded-sm flex items-center gap-2"
              >
                Get Google Map Directions <ArrowUpRight size={14} />
              </a>
              <Link 
                href="/contact" 
                className="px-6 py-3.5 border border-[#A37945]/40 text-[#F4E7D7] text-[10px] uppercase tracking-[0.25em] font-caption hover:bg-[#A37945]/10 transition-all rounded-sm"
              >
                Reserve A Table
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 h-[420px] rounded-2xl overflow-hidden border border-[#A37945]/20 shadow-2xl relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.282570997103!2d79.1175024!3d21.1411516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c73f32c3f1a5%3A0x6b8dd8d28e08d249!2sNandanvan%20Rd%2C%20Nagpur%2C%20Maharashtra%20440008!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(90%) contrast(110%)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Caelio Coffee House Map Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
