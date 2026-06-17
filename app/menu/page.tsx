'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Starfield, GrainOverlay } from '@/components/Starfield';
import { 
  Coffee, 
  Milk, 
  Leaf, 
  Sparkles, 
  TrendingUp, 
  Bookmark, 
  Award,
  ChevronDown,
  CupSoda,
  GlassWater,
  Flame,
  Sprout
} from 'lucide-react';

// --- Menu Data Definitions ---
interface MenuItem {
  name: string;
  price: string;
  desc: string;
  tag?: 'Bestseller' | 'Recommended' | 'Popular' | 'Signature';
}

interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  accent: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    id: 'hot-coffee',
    name: 'Signature Hot Coffee Collection',
    icon: 'hot-coffee',
    accent: 'An exquisite selection of meticulously roasted single-origin Indian Arabica, brewed hot with state-of-the-art custom parameters.',
    items: [
      { name: 'Velvet Cappuccino', price: '₹160', desc: 'A rich double espresso crowned with silky steamed milk and a dense, velvety foam finish.', tag: 'Bestseller' },
      { name: 'Golden Latte', price: '₹160', desc: 'Smooth house-espresso blended with creamy, lightly texturized steamed milk for a perfectly balanced daily cup.', tag: 'Popular' },
      { name: 'Cloud Flat White', price: '₹160', desc: 'Double-shot espresso extraction combined with velvety micro-foamed milk, delivering a bold, smooth body.' },
      { name: 'Midnight Mocha', price: '₹180', desc: 'Premium espresso meets luxurious liquid cocoa and texturized steamed milk for a bittersweet, dark finish.', tag: 'Recommended' },
      { name: 'Hazelnut Harmony Latte', price: '₹200', desc: 'A soothing milk latte infused with roasted Piedmont hazelnut reduction and freshly pulled espresso.' },
      { name: 'Caramel Royale Latte', price: '₹200', desc: 'Fresh espresso layered with house-crafted organic salted caramel and velvety warm milk.' },
      { name: 'Vanilla Velvet Latte', price: '₹200', desc: 'Classic espresso paired with sweet, scraped Madagascar vanilla bean pod infusion and creamy milk.' },
      { name: 'Shot Doppio', price: '₹100', desc: 'Two concentrated shots of single-origin Indian heirloom estate espresso with a thick, tiger-striped crema.' },
      { name: 'Classic Americano', price: '₹120', desc: 'Two shots of premium espresso diluted with hot mineral spring water for a clean, rich, and full-bodied coffee.' }
    ]
  },
  {
    id: 'coffee-frappes',
    name: 'Signature Coffee Frappes',
    icon: 'frappe',
    accent: 'Thick, creamy frozen blends celebrating premium espresso, organic dairy, and decadent textures.',
    items: [
      { name: 'Classic Frost Frappe', price: '₹240', desc: 'Blended house espresso, cold farm milk, and custom simple syrup spun with block ice for a classic cooling coffee recharge.' },
      { name: 'Mocha Frost Frappe', price: '₹260', desc: 'Rich Dutch process cocoa powder and sweet espresso whipped together into an incredibly smooth, chilled chocolate-coffee bliss.' },
      { name: 'Hazelnut Bliss Frappe', price: '₹260', desc: 'Decadent frozen espresso shake with roasted hazelnut butter and a dense, velvety top layer.', tag: 'Popular' },
      { name: 'Biscoff Cookie Crunch Frappe', price: '₹280', desc: 'Fresh espresso blended with caramelized Belgian Speculoos cookies, finished with loaded Biscoff dust crumbs.', tag: 'Bestseller' },
      { name: 'Nutella Indulgence Frappe', price: '₹280', desc: 'A luxurious chocolate-heavy blend of double espresso, authentic Italian Nutella, cold cream, and crushed crystal ice.', tag: 'Signature' },
      { name: 'Tiramisu Delight Frappe', price: '₹280', desc: 'Inspired by Italy\'s finest cake—creamy mascarpone cheese undertones, sponge ladyfinger crumbs, bold espresso, and cocoa.' }
    ]
  },
  {
    id: 'espresso-refreshers',
    name: 'Espresso Refreshers',
    icon: 'refresher',
    accent: 'Vibrant, effervescent, and cooling. Light-bodied botanical fusions featuring our signature cold espresso shots.',
    items: [
      { name: 'Arctic Americano', price: '₹120', desc: 'Double signature ristretto pulled directly over mountain spring ice blocks and crystal-clear glacier water.' },
      { name: 'Silk Iced Latte', price: '₹160', desc: 'Smooth, bold espresso combined gently with chilled pasture-fed milk over a dense stack of ice.' },
      { name: 'Sparkling Espresso Tonic', price: '₹240', desc: 'A high-contrast, beautiful layering of hot espresso dropped dynamically over chilled tonic water and a twist of Meyer lemon.', tag: 'Signature' },
      { name: 'Ginger Spark Espresso', price: '₹240', desc: 'Freshly pulled single-origin espresso floated over artisanal fizzy ginger ale with a pinch of fresh spice extract.' },
      { name: 'Citrus Sunrise Espresso', price: '₹220', desc: 'Naturally sweet fresh orange juice and cold water layers crowned with an intense double shot of heirloom espresso.', tag: 'Recommended' }
    ]
  },
  {
    id: 'signature-shakes',
    name: 'Signature Shakes',
    icon: 'shake',
    accent: 'Ultra-creamy milk sessions decorated with premium fruits, fudgy cake crumbles, and high-fat artisanal ice creams.',
    items: [
      { name: 'Choco Chip Bliss', price: '₹240', desc: 'Decadent milk shake blended with premium dark chocolate callets, double cocoa syrup, and crunchy roasted cocoa nibs.' },
      { name: 'Oreo Dream Shake', price: '₹280', desc: 'Creamy high-fat vanilla bean milkshake loaded with crunchy crushed black Oreo cookies and whipped white cheese frosting.' },
      { name: 'KitKat Crunch', price: '₹280', desc: 'A playful fusion of premium cold milk, crushed crispy hazelnut wafer KitKat bars, and gourmet fudge ribbons.' },
      { name: 'Brownie Heaven', price: '₹280', desc: 'Thick, dense chocolate milkshake blended dynamically with an entire slice of our signature oven-baked dark chocolate brownie.', tag: 'Bestseller' },
      { name: 'Mango Paradise', price: '₹280', desc: 'Chilled tropical shake highlighting sweet, sun-ripened Indian Alphonso mangos balanced with rich whole milk.' },
      { name: 'Strawberry Velvet', price: '₹280', desc: 'Artisanal garden strawberry preserve milk shake featuring a delicate pink hue and incredibly smooth, silky texture.' },
      { name: 'Blueberry Bliss', price: '₹280', desc: 'Whole wild blueberries slow-simmered, blended with organic yogurt and sweet heavy farm cream.', tag: 'Popular' },
      { name: 'Caramel Banana Royale', price: '₹280', desc: 'Ripe sweet local bananas whipped with a buttery, direct-fire, salted caramel reduction and real vanilla pods.' },
      { name: 'Kiwi Banana Fusion', price: '₹280', desc: 'A tart, refreshing blend of fresh green kiwi pulp and smooth sweet banana for a perfect morning vitamin boost.' }
    ]
  },
  {
    id: 'iced-teas',
    name: 'Signature Iced Teas',
    icon: 'tea',
    accent: 'Fragrant premium single-estate tea leaf extractions cold-steeped over half a day to remove bitterness.',
    items: [
      { name: 'Citrus Chill Iced Tea', price: '₹140', desc: 'Classic Nilgiri black tea extraction blended with fresh Meyer lemon juice and simple botanical sugars.', tag: 'Popular' },
      { name: 'Peach Sunset Tea', price: '₹140', desc: 'A highly fragrant Assam tea infusion blended with sweet peach pulp, served icy cold with fresh mint leaves.', tag: 'Bestseller' },
      { name: 'Green Apple Splash Tea', price: '₹140', desc: 'Sparkling green apple skins and cooling mountain tea combined for a delightfully crisp, restorative beverage.' }
    ]
  },
  {
    id: 'premium-mocktails',
    name: 'Premium Mocktails',
    icon: 'mocktail',
    accent: 'Sophisticated botanical blends, hand-muddled organic herbs, and carbonated local mineral waters.',
    items: [
      { name: 'Mint Breeze Mojito', price: '₹160', desc: 'Freshly slapped spearmint leaves, crushed Key limes, and raw cane sugar, topped with botanical club soda.' },
      { name: 'Peach Paradise Mojito', price: '₹160', desc: 'Rich peach nectar, fresh lime wedges, organic garden basil, and fizzy sparkling water over cracked ice.' },
      { name: 'Apple Orchard Mojito', price: '₹160', desc: 'Crisp green Granny Smith apples muddled with fresh mint sprigs, lime, and chilled natural ginger-infused fizz.' },
      { name: 'Kiwi Crush Mojito', price: '₹160', desc: 'Muddled organic green kiwi, lemon juice, whole peppermint sprigs, and refreshing botanical ginger tonic.' },
      { name: 'Blueberry Spark Mojito', price: '₹160', desc: 'Loaded wild blueberries mashed with cooling mint leaves, simple syrup, and a strong splash of standard soda.', tag: 'Recommended' },
      { name: 'Blue Lagoon Splash', price: '₹160', desc: 'Curacao-infused blue botanical orange peel reduction, sweet key lime juice, and a fizzy carbonated lift.', tag: 'Popular' }
    ]
  },
  {
    id: 'cold-brews',
    name: 'Artisan Cold Brews',
    icon: 'coldbrew',
    accent: 'Meticulously steeped over eighteen hours in pure mineral water, unlocking deep chocolate and fruit notes.',
    items: [
      { name: 'Midnight Straight Brew', price: '₹160', desc: 'Slow-extracted specialty single estate Chikmagalur beans, clean and exceptionally smooth with low natural acidity.', tag: 'Bestseller' },
      { name: 'Cranberry Coffee Twist', price: '₹180', desc: 'Artisanal cold brew blended with tart, antioxidant-rich cranberry fruit extract for an ultra-clean, fruity coffee finish.', tag: 'Signature' },
      { name: 'Rosella Bloom Brew', price: '₹180', desc: 'Our famous slow brew paired with floral organic hibiscus leaves and delicate dark berry reduction.' },
      { name: 'Ginger Spark Cold Brew', price: '₹180', desc: 'Smooth, full-bodied cold brew combined with premium ginger extract for a sparkling, carbonated twist.' },
      { name: 'Orange Zest Cold Brew', price: '₹180', desc: 'Hand-peeled local orange syrup and fresh orange cold juice paired beautifully with high-altitude arabica cold brew.', tag: 'Recommended' },
      { name: 'Tonic Breeze Cold Brew', price: '₹180', desc: 'A crisp, botanical combination of slow cold coffee concentrate, premium tonic water, and cooling star anise.' },
      { name: 'Vietnamese Velvet Brew', price: '₹180', desc: 'Strong cold brew poured directly over sweet pasture-fed condensed milk for an authentic, rich indulgence.', tag: 'Popular' }
    ]
  },
  {
    id: 'matcha',
    name: 'Matcha Collection',
    icon: 'matcha',
    accent: 'Stoneground ceremonial Japanese Uji matcha whisked traditionally. Zen in a cup.',
    items: [
      { name: 'Classic Iced Matcha Latte', price: '₹240', desc: 'Highest stoneground first-harvest Japanese matcha whisked masterfully over iced milk of choice.', tag: 'Bestseller' },
      { name: 'Warm Zen Matcha Latte', price: '₹240', desc: 'Comforting premium green tea powdered leaves combined with velvet steamed milk and a whisked foam top.', tag: 'Signature' },
      { name: 'Mango Cloud Matcha', price: '₹240', desc: 'A stunning bicolor layer of sweet yellow Alphonso mango coulis topped with a layer of ceremonial green matcha milk froth.', tag: 'Popular' },
      { name: 'Tropical Mango Matcha', price: '₹240', desc: 'Diced mangoes and premium ceremonial green whisked matcha served over ice with a sweet, tropical finish.' },
      { name: 'Citrus Sunrise Matcha', price: '₹240', desc: 'Freshly squeezed sweet orange juices topped layered with green traditional matcha froth for a bright citrus spark.', tag: 'Recommended' }
    ]
  }
];

export default function MenuPage() {
  const [activeAnchor, setActiveAnchor] = useState('hot-coffee');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (const section of menuCategories) {
        const el = document.getElementById(section.id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveAnchor(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 180;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      setActiveAnchor(id);
    }
  };

  const getCategoryIcon = (iconName: string, size = 24, className = "text-[#C9A84C]") => {
    switch (iconName) {
      case 'hot-coffee': return <Coffee size={size} className={className} />;
      case 'frappe': return <CupSoda size={size} className={className} />;
      case 'refresher': return <GlassWater size={size} className={className} />;
      case 'shake': return <Milk size={size} className={className} />;
      case 'tea': return <Leaf size={size} className={className} />;
      case 'mocktail': return <WineIcon size={size} className={className} />;
      case 'coldbrew': return <Flame size={size} className={className} />; // Starburst or sparkling representation
      case 'matcha': return <Sprout size={size} className={className} />;
      default: return <Coffee size={size} className={className} />;
    }
  };

  const getTagPill = (tag?: string) => {
    if (!tag) return null;
    let icon = <Sparkles size={10} className="mr-1 inline-block" />;
    let style = "bg-[#C9A84C]/10 text-[#A88832] border-[#C9A84C]/25";

    if (tag === 'Bestseller') {
      icon = <Award size={10} className="mr-1 inline-block" />;
      style = "bg-[#3D2620]/10 text-[#3D2620] border-[#3D2620]/25 font-semibold";
    } else if (tag === 'Recommended') {
      icon = <Bookmark size={10} className="mr-1 inline-block" />;
      style = "bg-emerald-50 text-emerald-800 border-emerald-200";
    } else if (tag === 'Popular') {
      icon = <TrendingUp size={10} className="mr-1 inline-block" />;
      style = "bg-amber-50 text-amber-800 border-amber-200";
    } else if (tag === 'Signature') {
      icon = <Sparkles size={10} className="mr-1 inline-block" />;
      style = "bg-[#2D221D] text-[#C9A84C] border-[#2C1E1A]";
    }

    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-wider border font-body ${style}`}>
        {icon}
        {tag}
      </span>
    );
  };

  return (
    <main className="min-h-screen bg-brand-black text-[#FAF6F0] antialiased">
      <Navbar />

      {/* Hero Welcome Banner (Stunning Outer Space Visual Transitioning Into Cream Menu) */}
      <section className="relative pt-48 pb-32 px-6 text-center select-none overflow-hidden">
        <Starfield />
        <GrainOverlay />
        <div className="max-w-4xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-editorial text-brand-gold text-2xl md:text-3xl mb-4 block leading-none">
              Earth-Roasted. Sky-Born.
            </span>
            <h1 className="text-5xl md:text-8xl font-heading mb-6 tracking-[0.15em] text-[#FAF6F0] leading-none">
              COFFEE MENU
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 96 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-[1px] bg-brand-gold/45 mx-auto mb-8"
          />

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto font-body text-brand-ivory/65 leading-relaxed text-[11px] md:text-xs uppercase tracking-[0.35em]"
          >
            Nagpur&apos;s First Specialty Sanctuary · Serving Heritage Single-Origins
          </motion.p>
        </div>
        
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce opacity-40">
          <ChevronDown size={28} className="text-brand-gold" />
        </div>
      </section>

      {/* Sticky Fast-Navigation Bar with Spring Underscore */}
      <div className="sticky top-20 z-30 bg-[#FAF6F0] border-y border-[#E8DFC9] shadow-md transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 overflow-x-auto whitespace-nowrap scrollbar-none py-4 flex justify-between items-center gap-6">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => scrollToSection(category.id)}
              className="flex items-center gap-2 cursor-pointer outline-none relative py-1.5 focus:outline-none"
            >
              {getCategoryIcon(category.icon, 16, activeAnchor === category.id ? "text-[#2D221D]" : "text-[#2D221D]/45")}
              <span className={`font-body text-[11px] uppercase tracking-widest transition-colors duration-300 ${
                activeAnchor === category.id ? 'text-[#2D221D] font-bold' : 'text-[#2D221D]/60 hover:text-[#2D221D]'
              }`}>
                {category.name.replace(' Collection', '')}
              </span>
              {activeAnchor === category.id && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A84C]"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Physical Paper layout for Menu Listings */}
      <section className="bg-[#FAF6F0] text-[#2D221D] py-24 md:py-36 px-6 relative overflow-hidden">
        {/* Editorial Corner Lines */}
        <div className="absolute top-16 left-16 w-32 h-32 border-t border-l border-[#C9A84C]/30 pointer-events-none hidden lg:block" />
        <div className="absolute top-16 right-16 w-32 h-32 border-t border-r border-[#C9A84C]/30 pointer-events-none hidden lg:block" />

        <div className="max-w-5xl mx-auto relative z-10 w-full">
          {menuCategories.map((category, catIdx) => (
            <div 
              id={category.id} 
              key={category.id} 
              className="mb-32 scroll-mt-32"
            >
              {/* Category Showcase Header */}
              <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  className="p-4 rounded-full bg-[#2D221D]/5 mb-5 border border-[#2D221D]/10"
                >
                  {getCategoryIcon(category.icon, 30, "text-[#2D221D]")}
                </motion.div>

                <h2 className="font-heading text-2xl md:text-4xl text-[#2D221D] tracking-widest uppercase mb-4 leading-none">
                  {category.name}
                </h2>

                <div className="flex items-center gap-2 mb-4">
                  <div className="h-[1px] w-12 bg-[#C9A84C]" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A84C] font-semibold">Caelio House</span>
                  <div className="h-[1px] w-12 bg-[#C9A84C]" />
                </div>

                <p className="text-editorial text-base text-[#61514B] italic leading-relaxed max-w-lg font-light">
                  &ldquo;{category.accent}&rdquo;
                </p>
              </div>

              {/* Items Card List Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {category.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    whileHover={{ 
                      y: -5,
                      borderColor: 'rgba(201, 168, 76, 0.4)',
                      boxShadow: '0 15px 35px -15px rgba(61, 38, 32, 0.15)'
                    }}
                    className={`p-6 md:p-8 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                      item.tag === 'Bestseller' || item.tag === 'Signature'
                        ? 'bg-gradient-to-br from-white to-[#F9F5F0] border-[#C9A84C]/35 shadow-sm shadow-[#C9A84C]/10'
                        : 'bg-white border-[#E6DFC9]/70 hover:shadow-md'
                    }`}
                  >
                    <div>
                      {/* Name, Price & Tag Row */}
                      <div className="flex justify-between items-start gap-4 mb-3">
                        <div className="space-y-2">
                          <h3 className="font-heading text-lg md:text-xl text-[#2D221D] tracking-wide font-medium">
                            {item.name}
                          </h3>
                          {item.tag && (
                            <div className="pt-0.5">
                              {getTagPill(item.tag)}
                            </div>
                          )}
                        </div>
                        <span className="font-body text-base md:text-xl text-[#C9A84C] font-bold whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-[13px] md:text-sm text-[#61514B]/90 font-body leading-relaxed max-w-md font-light">
                        {item.desc}
                      </p>
                    </div>

                    {/* Premium underline accents for aesthetic appeal */}
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent mt-6" />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Ambient background blur elements mimicking coffee dust/breaths */}
        <div className="absolute top-[20%] left-[-150px] w-[400px] h-[400px] rounded-full bg-[#C9A84C]/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[25%] right-[-150px] w-[400px] h-[400px] rounded-full bg-[#3D2620]/5 blur-[100px] pointer-events-none" />

        {/* Bottom Corner Lines */}
        <div className="absolute bottom-16 left-16 w-32 h-32 border-b border-l border-[#C9A84C]/30 pointer-events-none hidden lg:block" />
        <div className="absolute bottom-16 right-16 w-32 h-32 border-b border-r border-[#C9A84C]/30 pointer-events-none hidden lg:block" />
      </section>

      <Footer />
    </main>
  );
}

// --- Custom Wine/Mocktail glass rendering internally to ensure robust asset delivery ---
const WineIcon = ({ size, className }: { size: number; className: string }) => (
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
    <path d="M15.2 3.84a1.8 1.8 0 0 1 0 2.56L13.8 7.82l-5.6-5.6 1.42-1.42a1.8 1.8 0 0 1 2.56 0l1.42 1.42z" />
    <path d="M8.2 7.82 2.57 2.2a1.8 1.8 0 0 0 0 2.56l5.63 5.63" />
    <path d="M11 11v9" />
    <path d="M7 21h10" />
    <path d="M22 13.5a1.5 1.5 0 0 1-1.5 1.5l-4-4 1.5-1.5 4 4z" />
  </svg>
);
