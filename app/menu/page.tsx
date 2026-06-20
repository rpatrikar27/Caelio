'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Starfield, GrainOverlay } from '@/components/Starfield';
import { 
  menuCategories, 
  perfectPairings, 
  MenuCategory, 
  MenuItem, 
  PerfectPairing 
} from './data';
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
  Sprout,
  Search,
  Heart,
  Plus,
  Check,
  ChevronRight,
  Info,
  X,
  SlidersHorizontal
} from 'lucide-react';

// --- Custom Svg icons to ensure zero external dependency crashes ---
const CroissantIcon = ({ size = 18, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm-4 7a4 4 0 0 1 8 0" />
    <path d="M7 11c1.5-1 3.5-1 5 0m-7 3c2-1.5 4-1.5 6 0" />
  </svg>
);

const EggIcon = ({ size = 18, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.1" />
    <path d="M12 8a4 4 0 0 1 4 4" />
  </svg>
);

const SandwichIcon = ({ size = 18, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 11l9-6 9 6H3z" />
    <path d="M3 15l9 6 9-6H3z" />
    <path d="M3 11v4c0 .5.5 1 1 1h16c.5 0 1-.5 1-1v-4" />
    <path d="M5 13h14" />
  </svg>
);

const BurgerIcon = ({ size = 18, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 12h20" />
    <path d="M3 16h18" />
    <path d="M20 12a8 8 0 0 0-16 0" />
    <path d="M4 16a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4" />
    <path d="M7 14h10" />
  </svg>
);

const FriesIcon = ({ size = 18, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 10V4m3 6V2m3 8V3m3 7V2m3 8V5m3 5v2" />
    <path d="M4 10h16l-2 11H6L4 10z" />
  </svg>
);

const PizzaIcon = ({ size = 18, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 11l-5 5" />
    <path d="M4 15l15-11-4 15L4 15z" />
    <path d="M10 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    <path d="M14 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    <path d="M7 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </svg>
);

const CakeIcon = ({ size = 18, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
    <path d="M4 16h16" />
    <path d="M12 11V7" />
    <path d="M12 7c.6 0 1-.4 1-1s-1-2-1-2-1 1.4-1 2 .4 1 1 1z" />
    <path d="M2 21h20" />
  </svg>
);

const ForkIcon = ({ size = 18, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 20V4M6 20V4M10 4v8a2 2 0 0 0 4 0V4" />
  </svg>
);

// --- Diet Icon Standard Label ---
const DietIndicator = ({ type }: { type: 'veg' | 'egg' | 'non-veg' }) => {
  const isVeg = type === 'veg';
  const isEgg = type === 'egg';
  const colorClass = isVeg 
    ? 'text-emerald-600 border-emerald-600/35 bg-emerald-50' 
    : isEgg 
      ? 'text-amber-600 border-amber-600/35 bg-amber-50' 
      : 'text-rose-600 border-rose-600/35 bg-rose-50';
  
  return (
    <span className={`inline-flex items-center gap-1 border px-1.5 py-0.5 rounded text-[8px] font-mono tracking-widest ${colorClass}`}>
      <span className="w-3 h-3 flex items-center justify-center border border-current rounded-sm">
        {type === 'non-veg' ? (
          <svg viewBox="0 0 10 10" className="w-1.5 h-1.5 fill-current text-rose-600">
            <polygon points="5,1.5 1.5,8.5 8.5,8.5" />
          </svg>
        ) : (
          <span className={`w-1.5 h-1.5 rounded-full ${isVeg ? 'bg-emerald-600' : 'bg-amber-500'}`} />
        )}
      </span>
      <span className="font-bold uppercase tracking-widest text-[8px]">
        {type === 'veg' ? 'Veg' : type === 'egg' ? 'Egg' : 'Non-Veg'}
      </span>
    </span>
  );
};

export default function MenuPage() {
  const [activeAnchor, setActiveAnchor] = useState('coffee');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'egg' | 'non-veg'>('all');
  const [selectedPairing, setSelectedPairing] = useState<PerfectPairing | null>(null);

  // Scroll detection to highlight active category in tabbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
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

  const getCategoryIcon = (id: string, size = 18, className = "text-[#C9A84C]") => {
    switch (id) {
      case 'coffee': return <Coffee size={size} className={className} />;
      case 'cold-coffee-frappes': return <CupSoda size={size} className={className} />;
      case 'matcha': return <Sprout size={size} className={className} />;
      case 'shakes': return <Milk size={size} className={className} />;
      case 'refreshers-mocktails': return <GlassWater size={size} className={className} />;
      case 'iced-tea': return <Leaf size={size} className={className} />;
      case 'breakfast': return <CroissantIcon size={size} className={className} />;
      case 'egg-specials': return <EggIcon size={size} className={className} />;
      case 'sandwiches-toasties': return <SandwichIcon size={size} className={className} />;
      case 'burgers': return <BurgerIcon size={size} className={className} />;
      case 'sides-fries': return <FriesIcon size={size} className={className} />;
      case 'pasta': return <ForkIcon size={size} className={className} />;
      case 'pizza': return <PizzaIcon size={size} className={className} />;
      case 'desserts': return <CakeIcon size={size} className={className} />;
      case 'add-ons': return <Plus size={size} className={className} />;
      default: return <Coffee size={size} className={className} />;
    }
  };

  const getTagPill = (tag?: string) => {
    if (!tag) return null;
    let icon = <Sparkles size={10} className="mr-1 inline-block" />;
    let style = "bg-[#C9A84C]/10 text-[#A88832] border-[#C9A84C]/25";

    if (tag === 'Bestseller') {
      icon = <Award size={10} className="mr-1 inline-block" />;
      style = "bg-rose-50 text-rose-800 border-rose-200 font-semibold";
    } else if (tag === 'Recommended') {
      icon = <Bookmark size={10} className="mr-1 inline-block" />;
      style = "bg-emerald-50 text-emerald-800 border-emerald-200";
    } else if (tag === 'Popular') {
      icon = <TrendingUp size={10} className="mr-1 inline-block" />;
      style = "bg-blue-50 text-blue-800 border-blue-200";
    } else if (tag === 'Signature') {
      icon = <Sparkles size={10} className="mr-1 inline-block" />;
      style = "bg-[#2D221D] text-[#C9A84C] border-[#2C1E1A]";
    } else if (tag === 'Chef Recommendation') {
      icon = <Award size={10} className="mr-1 inline-block text-amber-600" />;
      style = "bg-amber-50 text-amber-900 border-amber-300 font-medium";
    }

    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-[9px] uppercase tracking-wider border font-body ${style}`}>
        {icon}
        {tag}
      </span>
    );
  };

  // Extract Crowd Favorites / "Most Loved" list dynamically from our categories
  const mostLovedItems = mostLovedList();

  function mostLovedList() {
    const listNames = [
      'Velvet Cappuccino',
      'Hazelnut Harmony Latte',
      'Biscoff Cookie Crunch Frappe',
      'Nashville Paneer Heat Burger',
      'Caelio Special Mushroom Cheese Omelette',
      'Vegetarian Breakfast Platter',
      'Saoji Spiced Garlic Fries',
      'Vietnamese Velvet Brew'
    ];

    const result: MenuItem[] = [];
    menuCategories.forEach(cat => {
      cat.items.forEach(item => {
        if (listNames.includes(item.name)) {
          // Prevent duplicates
          if (!result.find(r => r.name === item.name)) {
            result.push(item);
          }
        }
      });
    });
    return result;
  }

  // Filter logic across Search AND Diet Toggles
  const filteredCategories = menuCategories.map((category) => {
    const matchedItems = category.items.filter((item) => {
      const matchesSearch = searchQuery === "" || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesDiet = dietFilter === 'all' || item.type === dietFilter;
      
      return matchesSearch && matchesDiet;
    });
    
    return {
      ...category,
      items: matchedItems
    };
  }).filter((category) => {
    // If search is active, do not display empty categories!
    // But if search/diet is empty, we show all categories (including Pizzas which is empty but shows "coming soon")
    if (searchQuery === "" && dietFilter === 'all') {
      return true;
    }
    return category.items.length > 0;
  });

  const totalFilteredCount = filteredCategories.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <main className="min-h-screen bg-brand-black text-[#FAF6F0] antialiased">
      <Navbar />

      {/* Hero Welcome Banner */}
      <section className="relative pt-44 pb-28 px-4 text-center select-none overflow-hidden">
        <Starfield />
        <GrainOverlay />
        <div className="max-w-4xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-editorial text-brand-gold text-lg md:text-2xl mb-3 block leading-none antialiased">
              Nagpur&apos;s Specialty Sanctuary
            </span>
            <h1 className="text-4xl md:text-7xl font-heading mb-4 tracking-[0.16em] text-[#FAF6F0] leading-none uppercase">
              The Grand Menu
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 80 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-[1px] bg-brand-gold/40 mx-auto mb-6"
          />

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto font-body text-brand-ivory/60 leading-relaxed text-[10px] md:text-xs uppercase tracking-[0.3em] font-light"
          >
            Artisan Beans · Handcrafted Brioche Buns · Organic Stoneground Matcha
          </motion.p>
        </div>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce opacity-30">
          <ChevronDown size={22} className="text-brand-gold" />
        </div>
      </section>

      {/* Interactive Controls Panel (Search & Dietary Toggles) */}
      <div className="sticky top-20 z-40 bg-brand-black border-y border-brand-gold/40 shadow-xl transition-all duration-300">
        
        {/* Category Horizonal Scroll Scroller */}
        <div className="border-b border-brand-gold/15 py-2 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 overflow-x-auto whitespace-nowrap scrollbar-none flex justify-start lg:justify-center items-center gap-3">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className={`flex items-center gap-1 cursor-pointer outline-none relative px-2.5 py-1 rounded-full transition-all duration-300 focus:outline-none shrink-0 border ${
                  activeAnchor === category.id 
                    ? 'bg-brand-gold/20 border-brand-gold text-white font-semibold' 
                    : 'bg-white/5 border-brand-gold/10 text-brand-ivory/60 hover:text-brand-gold hover:bg-white/10'
                }`}
              >
                {getCategoryIcon(category.id, 12, activeAnchor === category.id ? "text-brand-gold" : "text-brand-ivory/40")}
                <span className="font-body text-[9px] uppercase tracking-wide">
                  {category.name.replace(/[☕🥤🍵🧋🍹🫖🥐🍳🥪🍔🍟🍝🍕🍰➕]/g, '').trim()}
                </span>
                {activeAnchor === category.id && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute inset-0 border border-brand-gold rounded-full pointer-events-none"
                    transition={{ type: 'spring', stiffness: 380, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </div>
          {/* High-Contrast scroll masks for deep wood/black theme */}
          <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-brand-black to-transparent pointer-events-none md:hidden" />
          <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-brand-black to-transparent pointer-events-none md:hidden" />
        </div>

        {/* Search Input and Food Filters */}
        <div className="max-w-7xl mx-auto px-4 py-2 grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-between text-brand-ivory">
          
          {/* Elegant Search bar with high contrast dark theme */}
          <div className="relative w-full rounded-lg bg-neutral-900 border border-brand-gold/20 shadow-inner transition-colors hover:border-brand-gold flex items-center px-3 py-0.5">
            <Search size={14} className="text-brand-gold mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Search coffee, shakes, sourdoughs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none text-white text-[11px] py-1.5 focus:outline-none placeholder-brand-ivory/30 font-body placeholder:font-light"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="p-1 rounded-full hover:bg-white/10 transition"
              >
                <X size={12} className="text-brand-ivory/60" />
              </button>
            )}
          </div>

          {/* Quick Dietary Selectors */}
          <div className="flex flex-wrap items-center gap-1.5 justify-start md:justify-end">
            <span className="text-[9px] uppercase tracking-wider text-brand-gold font-bold mr-1 flex items-center gap-1 font-body">
              <SlidersHorizontal size={10} className="text-brand-gold" />
              Diet:
            </span>
            {[
              { label: 'All Dishes', value: 'all', dot: null },
              { label: 'Veg Only', value: 'veg', dot: <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> },
              { label: 'Egg Only', value: 'egg', dot: <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> },
              { label: 'Non-Veg', value: 'non-veg', dot: <span className="w-1.5 h-1.5 rotate-45 bg-rose-500 rounded-sm" /> }
            ].map((diet) => (
              <button
                key={diet.value}
                onClick={() => setDietFilter(diet.value as any)}
                className={`px-2 py-1 rounded-md text-[9px] uppercase tracking-wider font-body border flex items-center gap-1 transition-all cursor-pointer ${
                  dietFilter === diet.value
                    ? 'bg-brand-gold text-brand-black border-brand-gold font-bold shadow-md'
                    : 'bg-neutral-900 text-brand-ivory/80 border-brand-gold/15 hover:border-brand-gold/50 hover:text-brand-gold'
                }`}
              >
                {diet.dot}
                {diet.label}
              </button>
            ))}
          </div>

        </div>

        {searchQuery || dietFilter !== 'all' ? (
          <div className="bg-brand-gold/10 border-t border-brand-gold/25 px-4 py-2 text-center text-[10px] uppercase font-mono tracking-widest text-[#C9A84C] animate-fade-in flex justify-center items-center gap-1">
            <Award size={12} className="text-brand-gold animate-pulse" />
            Showing {totalFilteredCount} matching creations
          </div>
        ) : null}
      </div>

      {/* Consolidated Menu Body */}
      <section className="bg-[#FAF6F0] text-[#2D221D] py-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 w-full space-y-24">

          {/* --- Section 1: Dynamic Search / Diet results or Curated Highlights --- */}
          {!searchQuery && dietFilter === 'all' && (
            <div className="space-y-24">
              
              {/* Most Loved Crowd-Favorites Carousel Grid */}
              <div className="space-y-8">
                <div className="text-center max-w-2xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C9A84C]/10 border border-[#C9A84C]/25 rounded-full mb-3 text-[10px] uppercase tracking-wider font-mono text-[#A88832] font-semibold">
                    <StarsIcon className="w-3.5 h-3.5 animate-spin-slow" />
                    Guests&apos; Choice
                  </div>
                  <h2 className="font-heading text-2xl md:text-4xl tracking-widest uppercase mb-2">
                    ⭐⭐ MOST LOVED AT CAELIO
                  </h2>
                  <p className="text-editorial text-[13px] text-[#61514B] italic">
                    The absolute crowd favorites, rated highest by our Nagpur patrons. Handcrafted with obsession.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {mostLovedItems.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="p-5 rounded-xl border border-brand-gold/30 bg-gradient-to-b from-white to-[#FAF6F0] relative overflow-hidden group shadow-sm flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-start gap-2">
                          <DietIndicator type={item.type} />
                          <span className="text-[10px] bg-red-500 text-white rounded font-bold px-1.5 py-0.5 uppercase tracking-wide flex items-center gap-1 shadow-sm">
                            <Heart size={10} className="fill-current animate-pulse" />
                            Most Loved
                          </span>
                        </div>
                        <div>
                          <h3 className="font-heading text-lg font-medium text-[#2D221D] tracking-wide mb-1 transition-colors group-hover:text-brand-gold">
                            {item.name}
                          </h3>
                          <p className="text-xs text-[#61514B] leading-relaxed font-body font-light">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      <div className="pt-4 mt-4 border-t border-brand-gold/10 flex justify-between items-center">
                        <span className="font-heading text-lg font-semibold text-[#C9A84C]">
                          {item.price}
                        </span>
                        <span className="text-[9px] uppercase font-mono tracking-widest text-[#2D221D]/40">
                          Freshly Curated
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Special Curated Hot & Cold Perfect Pairings */}
              <div className="space-y-8 bg-gradient-to-r from-[#2D221D]/5 via-[#FAF6F0] to-[#2D221D]/5 p-6 md:p-12 rounded-2xl border border-[#E8DFC9]/70 relative overflow-hidden">
                <div className="text-center max-w-2xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2D221D] text-brand-gold rounded-full mb-3 text-[10px] uppercase tracking-wider font-mono font-bold">
                    ☕ PERFECT PAIRINGS
                  </div>
                  <h2 className="font-heading text-xl md:text-3xl tracking-widest uppercase mb-2">
                    CRUSHING THE COFFEE HOUSE MYSTIQUE
                  </h2>
                  <p className="text-xs uppercase tracking-widest text-[#C9A84C] font-semibold mb-3">
                    Crafting Chef Combined Flavor Harmonies
                  </p>
                  <p className="text-editorial text-[13px] text-[#61514B] italic">
                    We meticulously matched our single-origin coffees with savory dishes to lock in balanced sweetness and acidity. Click any paring to explore the flavors.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {perfectPairings.map((pairing) => (
                    <motion.div
                      key={pairing.name}
                      onClick={() => setSelectedPairing(selectedPairing?.name === pairing.name ? null : pairing)}
                      className={`p-6 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${
                        selectedPairing?.name === pairing.name 
                          ? 'bg-gradient-to-br from-[#2D221D] to-[#1C1613] text-white border-brand-gold shadow-lg ring-1 ring-brand-gold/30' 
                          : 'bg-white hover:bg-[#F9F5F0] border-[#E8DFC9] hover:border-[#C9A84C]'
                      }`}
                      whileHover={{ y: -3 }}
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded font-mono ${
                            selectedPairing?.name === pairing.name ? 'bg-brand-gold text-[#2D221D]' : 'bg-brand-gold/10 text-[#A88832]'
                          }`}>
                            Signature Synergy
                          </span>
                          <span className={`font-heading text-lg font-bold ${selectedPairing?.name === pairing.name ? 'text-brand-gold' : 'text-[#C9A84C]'}`}>
                            {pairing.comboPrice}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-heading text-base tracking-wide uppercase font-semibold">
                            {pairing.name}
                          </h4>
                          <span className={`text-[10px] uppercase tracking-widest block font-light mb-2 font-mono ${selectedPairing?.name === pairing.name ? 'text-white/60' : 'text-[#2D221D]/55'}`}>
                            {pairing.tagline}
                          </span>
                        </div>

                        {/* Interactive items connector visually */}
                        <div className="space-y-1 py-2 relative">
                          <div className={`text-xs flex items-center justify-between ${selectedPairing?.name === pairing.name ? 'text-white/95' : 'text-[#2D221D]'}`}>
                            <span>☕ {pairing.coffee}</span>
                            <span className="text-[10px] text-brand-gold font-bold">PLUS</span>
                          </div>
                          <div className={`text-xs flex items-center justify-between ${selectedPairing?.name === pairing.name ? 'text-white/95' : 'text-[#2D221D]'}`}>
                            <span>🥐 {pairing.food}</span>
                            <span className="text-[9px] line-through text-[#2D221D]/45">Separate</span>
                          </div>
                        </div>

                        {/* Expandable flavor profile details */}
                        <AnimatePresence>
                          {(selectedPairing?.name === pairing.name) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="pt-3 border-t border-white/10 text-[11.5px] leading-relaxed text-brand-ivory/80 font-body font-light"
                            >
                              {pairing.description}
                            </motion.div>
                          )}
                        </AnimatePresence>
                        <div className={`text-[9px] uppercase tracking-widest text-center mt-3 block ${selectedPairing?.name === pairing.name ? 'text-brand-gold font-bold' : 'text-[#2D221D]/40'}`}>
                          {selectedPairing?.name === pairing.name ? '↑ Click to Close Detail' : '↓ Click to Reveal Flavor Profile'}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* --- Section 2: Core Render Category loop --- */}
          {filteredCategories.length === 0 ? (
            <div className="text-center py-24 select-none placeholder-[#2D221D]/30 max-w-md mx-auto space-y-4">
              <div className="p-4 bg-brand-gold/10 inline-block rounded-full mb-2">
                <Coffee size={36} className="text-brand-gold animate-bounce" />
              </div>
              <h3 className="font-heading text-lg tracking-widest uppercase">No dishes match</h3>
              <p className="text-xs text-[#61514B] font-body leading-relaxed font-light">
                We couldn&apos;t find any items matching &ldquo;{searchQuery}&rdquo; within the diet filter. Try looking for some coffee, milk, shakes, or potato fries instead!
              </p>
              <button 
                onClick={() => { setSearchQuery(''); setDietFilter('all'); }}
                className="px-4 py-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white rounded text-xs uppercase tracking-widest font-bold transition duration-300"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            filteredCategories.map((category) => (
              <div 
                id={category.id} 
                key={category.id} 
                className="scroll-mt-28"
              >
                {/* Category Showcase Header */}
                <div className="flex flex-col items-center text-center mb-10 max-w-2xl mx-auto">
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="p-3.5 rounded-full bg-[#2D221D]/5 mb-4 border border-[#2D221D]/10"
                  >
                    {getCategoryIcon(category.id, 24, "text-[#2D221D]")}
                  </motion.div>

                  <h2 className="font-heading text-2xl md:text-3xl text-[#2D221D] tracking-widest uppercase mb-2 leading-none flex items-center gap-2">
                    {category.name}
                  </h2>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-[1px] w-8 bg-[#C9A84C]" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C] font-semibold">Fine Curation</span>
                    <div className="h-[1px] w-8 bg-[#C9A84C]" />
                  </div>

                  <p className="text-editorial text-xs text-[#61514B] italic leading-relaxed max-w-lg font-light">
                    &ldquo;{category.accent}&rdquo;
                  </p>
                </div>

                {/* Items Card List Grid */}
                {category.items.length === 0 && category.id === 'pizza' ? (
                  // Custom stunning Neapolitan Pizzas arriving soon card
                  <div className="max-w-2xl mx-auto p-8 rounded-xl border-2 border-dashed border-brand-gold/30 bg-gradient-to-br from-white to-[#FAF6F0] text-center space-y-4 shadow-sm relative overflow-hidden group">
                    <StarsIcon className="w-8 h-8 mx-auto text-brand-gold absolute top-4 right-4 opacity-60 group-hover:scale-125 transition duration-500" />
                    <PizzaIcon size={32} className="mx-auto text-[#C9A84C]" />
                    <h3 className="font-heading text-lg tracking-widest uppercase">Woodfired Pizzas Coming Soon</h3>
                    <p className="text-xs text-[#61514B] leading-relaxed max-w-md mx-auto font-body font-light">
                      Our chefs are currently setting our custom thermal stone ovens, hand-shaping and cold-fermenting sourdough bases for Nagpur&apos;s finest Neapolitan-style pizzas. Arriving shortly!
                    </p>
                    <div className="inline-flex items-center text-[9px] uppercase tracking-widest text-[#C9A84C] font-bold border border-[#C9A84C]/25 bg-[#C9A84C]/5 px-3 py-1 rounded">
                      Caelio Secret Kitchen
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {category.items.map((item, idx) => {
                      const isChefRec = item.tag === 'Chef Recommendation';
                      const isBestseller = item.tag === 'Bestseller';
                      const isSignature = item.tag === 'Signature';

                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.4 }}
                          whileHover={{ 
                            y: -4,
                            borderColor: 'rgba(201, 168, 76, 0.4)',
                            boxShadow: '0 12px 28px -12px rgba(61, 38, 32, 0.12)'
                          }}
                          className={`p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                            isChefRec || isBestseller || isSignature
                              ? 'bg-gradient-to-br from-white via-white to-[#FAF6F0] border-brand-gold/30 shadow-sm shadow-[#C9A84C]/5'
                              : 'bg-white border-[#E6DFC9]/70 hover:shadow-md'
                          }`}
                        >
                          <div>
                            {/* Tags row */}
                            <div className="flex justify-between items-start gap-4 mb-3">
                              <DietIndicator type={item.type} />
                              {item.tag && (
                                <div className="pt-0.5">
                                  {getTagPill(item.tag)}
                                </div>
                              )}
                            </div>

                            {/* Name and pricing */}
                            <div className="flex justify-between items-start gap-3 mb-2">
                              <h3 className="font-heading text-base md:text-lg text-[#2D221D] tracking-wide font-medium">
                                {item.name}
                              </h3>
                              <span className="font-heading text-base md:text-lg text-[#C9A84C] font-semibold whitespace-nowrap">
                                {item.price}
                              </span>
                            </div>

                            {/* Description */}
                            <p className="text-[12.5px] text-[#61514B]/90 font-body leading-relaxed font-light">
                              {item.desc}
                            </p>
                          </div>

                          {/* Quick upsell pair note for custom items */}
                          {item.name === 'Velvet Cappuccino' && (
                            <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-body">
                              <span className="text-[#2D221D]/55 flex items-center gap-1">
                                <Info size={11} className="text-[#C9A84C]" />
                                Pairs elegantly with our signature:
                              </span>
                              <span className="text-[#C9A84C] font-bold">Fudgy Brownie</span>
                            </div>
                          )}
                          {item.name === 'Hazelnut Harmony Latte' && (
                            <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-body">
                              <span className="text-[#2D221D]/55 flex items-center gap-1">
                                <Info size={11} className="text-[#C9A84C]" />
                                Recommended pairing:
                              </span>
                              <span className="text-[#C9A84C] font-bold">Smashed Avocado Toast</span>
                            </div>
                          )}
                          {item.name === 'Vietnamese Velvet Brew' && (
                            <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-body">
                              <span className="text-[#2D221D]/55 flex items-center gap-1">
                                <Info size={11} className="text-[#C9A84C]" />
                                Beautifully complements:
                              </span>
                              <span className="text-[#C9A84C] font-bold">Chicken Sandwich</span>
                            </div>
                          )}

                          {/* Premium subtle connector accent */}
                          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/10 to-transparent mt-5" />
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))
          )}

        </div>

        {/* Ambient background blur elements */}
        <div className="absolute top-[20%] left-[-200px] w-[500px] h-[500px] rounded-full bg-[#C9A84C]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-200px] w-[500px] h-[500px] rounded-full bg-[#3D2620]/5 blur-[120px] pointer-events-none" />
      </section>

      <Footer />
    </main>
  );
}

// --- Internal asset icon components to prevent compile failures ---
const StarsIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);
