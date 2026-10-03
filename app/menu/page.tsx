'use client';

import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Starfield, GrainOverlay } from '@/components/Starfield';
import {
  menuData,
  categoryStructure,
  MenuItem,
  energyBowlAddOns
} from './data';
import {
  Search,
  X,
  Coffee,
  Utensils,
  Sparkles,
  Award,
  ChevronDown,
  ArrowUpRight,
  TrendingUp,
  Bookmark,
  PlusCircle,
  Heart
} from 'lucide-react';

// --- Diet Indicator (Veg / Egg / Non-Veg) ---
const DietIndicator = ({ type }: { type: 'veg' | 'egg' | 'non-veg' }) => {
  const isVeg = type === 'veg';
  const isEgg = type === 'egg';

  const borderColor = isVeg
    ? 'border-emerald-600'
    : isEgg
      ? 'border-amber-600'
      : 'border-rose-600';

  const dotColor = isVeg
    ? 'bg-emerald-600'
    : isEgg
      ? 'bg-amber-600'
      : 'bg-rose-600';

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border bg-[#FFF9F5] text-[9px] font-mono tracking-widest uppercase text-[#3B1F14] shadow-xs ${
        isVeg
          ? 'border-emerald-200'
          : isEgg
            ? 'border-amber-200'
            : 'border-rose-200'
      }`}
      title={isVeg ? 'Vegetarian' : isEgg ? 'Contains Egg' : 'Non-Vegetarian'}
    >
      <span className={`w-3 h-3 flex items-center justify-center border ${borderColor} rounded-xs`}>
        {type === 'non-veg' ? (
          <span className="w-1.5 h-1.5 bg-rose-600" />
        ) : (
          <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
        )}
      </span>
      <span className="font-bold text-[9px] text-[#3B1F14]">
        {isVeg ? 'Veg' : isEgg ? 'Egg' : 'Non-Veg'}
      </span>
    </span>
  );
};

// --- Badge Component ---
const Badge = ({ tag }: { tag: string }) => {
  let style = 'bg-[#A37945]/10 text-[#A37945] border-[#A37945]/30';
  let icon = <Sparkles size={10} className="mr-1 inline-block" />;

  if (tag === 'Bestseller') {
    icon = <Award size={10} className="mr-1 inline-block" />;
    style = 'bg-rose-50 text-rose-800 border-rose-200 font-semibold';
  } else if (tag === 'Chef Recommendation') {
    icon = <Award size={10} className="mr-1 inline-block text-amber-600" />;
    style = 'bg-amber-50 text-amber-900 border-amber-300 font-medium';
  } else if (tag === 'Signature') {
    icon = <Sparkles size={10} className="mr-1 inline-block text-[#D4AF37]" />;
    style = 'bg-[#1C040B] text-[#D4AF37] border-[#D4AF37]/50 font-medium';
  } else if (tag === 'Popular') {
    icon = <TrendingUp size={10} className="mr-1 inline-block" />;
    style = 'bg-blue-50 text-blue-900 border-blue-200';
  } else if (tag === 'Recommended') {
    icon = <Bookmark size={10} className="mr-1 inline-block" />;
    style = 'bg-emerald-50 text-emerald-900 border-emerald-200';
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-wider border font-sans ${style}`}>
      {icon}
      {tag}
    </span>
  );
};

// --- Single Product Card Component ---
const ProductCard = ({ item }: { item: MenuItem }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.35 }}
      whileHover={{
        y: -4,
        boxShadow: '0 16px 32px -12px rgba(28, 4, 11, 0.16)',
        borderColor: 'rgba(212, 175, 55, 0.5)'
      }}
      className="group relative bg-[#FFF9F5] border border-[#C1B19B]/30 rounded-2xl p-5 md:p-6 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:border-[#D4AF37]"
    >
      {/* Top Media / Header */}
      <div>
        {item.image && !imgError ? (
          <div className="relative w-full h-44 md:h-48 rounded-xl overflow-hidden mb-4 bg-[#F4E7D7]/40 border border-[#C1B19B]/20">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              onError={() => setImgError(true)}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C040B]/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

            <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
              <DietIndicator type={item.type} />
            </div>

            {item.tag && (
              <div className="absolute top-3 right-3 z-10">
                <Badge tag={item.tag} />
              </div>
            )}
          </div>
        ) : (
          /* Premium Minimal Luxury Placeholder Card */
          <div className="relative w-full h-32 md:h-36 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-[#F4E7D7]/60 via-[#FFF9F5] to-[#F4E7D7]/30 border border-[#C1B19B]/30 flex flex-col items-center justify-center p-4 text-center group-hover:bg-[#F4E7D7]/80 transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#1C040B]/5 border border-[#D4AF37]/30 flex items-center justify-center mb-2 text-[#D4AF37]">
              {item.category === 'Coffee' ? (
                <Coffee size={20} />
              ) : item.category === 'Desserts' ? (
                <Sparkles size={20} />
              ) : (
                <Utensils size={20} />
              )}
            </div>
            <span className="font-serif italic text-xs text-[#A37945] tracking-wide">
              Artisanal {item.subCategory}
            </span>
            <div className="absolute top-3 left-3">
              <DietIndicator type={item.type} />
            </div>
            {item.tag && (
              <div className="absolute top-3 right-3">
                <Badge tag={item.tag} />
              </div>
            )}
          </div>
        )}

        {/* Tasting Notes (for Special Coffees) */}
        {item.notes && (
          <div className="mb-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#A37945] text-[10px] font-mono uppercase tracking-wider">
            <Sparkles size={10} className="text-[#D4AF37]" />
            <span>{item.notes}</span>
          </div>
        )}

        {/* Title & Price Header */}
        <div className="flex justify-between items-start gap-3 mb-2">
          <h3 className="font-serif text-lg md:text-xl font-medium text-[#1C040B] tracking-tight leading-snug group-hover:text-[#A37945] transition-colors">
            {item.name}
          </h3>
          <span className="font-sans font-semibold text-lg md:text-xl text-[#A37945] whitespace-nowrap pt-0.5">
            {item.price}
          </span>
        </div>

        {/* Description */}
        <p className="font-sans text-xs md:text-[13px] text-[#1C040B]/75 leading-relaxed font-light mb-4">
          {item.desc || `Artisanal preparation of ${item.name.toLowerCase()} made fresh to order.`}
        </p>
      </div>

      {/* Footer Info / Buy Now CTA */}
      <div className="pt-3 border-t border-[#C1B19B]/20 flex items-center justify-between gap-2">
        <span className="text-[10px] uppercase tracking-widest text-[#C1B19B] font-mono">{item.subCategory}</span>
        <a
          href="https://www.zomato.com/nagpur/caelio-nandanvan/order"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3.5 py-1.5 bg-[#E23744] hover:bg-[#1C040B] text-white font-mono text-[10px] uppercase tracking-wider font-bold rounded-lg transition-all flex items-center gap-1 shadow-xs shrink-0"
        >
          <span>Buy Now</span>
          <ArrowUpRight size={12} />
        </a>
      </div>
    </motion.article>
  );
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<'food' | 'coffee' | 'desserts'>('coffee');
  const [activeSubCategory, setActiveSubCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'egg' | 'non-veg'>('all');
  const stickyNavRef = useRef<HTMLDivElement>(null);

  // Schema Markup generation
  const schemaData = useMemo(() => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Menu',
      name: 'CAELIO Specialty Coffee & Artisanal Food Menu',
      description: 'The official complete menu of CAELIO Specialty Coffee House & Kitchen in Nagpur.',
      hasMenuSection: categoryStructure.map((cat) => ({
        '@type': 'MenuSection',
        name: cat.name,
        description: cat.tagline,
        hasMenuItem: cat.subCategories.flatMap((sub) =>
          sub.items.map((item) => ({
            '@type': 'MenuItem',
            name: item.name,
            description: item.desc,
            offers: {
              '@type': 'Offer',
              price: item.price.replace('₹', ''),
              priceCurrency: 'INR'
            }
          }))
        )
      }))
    };
  }, []);

  const currentCategoryData = useMemo(() => {
    return categoryStructure.find((c) => c.id === activeCategory) || categoryStructure[0];
  }, [activeCategory]);

  const filteredItems = useMemo(() => {
    let items = currentCategoryData.subCategories.flatMap((s) => s.items);

    if (activeSubCategory !== 'all') {
      const sub = currentCategoryData.subCategories.find((s) => s.name === activeSubCategory);
      items = sub ? sub.items : [];
    }

    if (dietFilter !== 'all') {
      items = items.filter((item) => item.type === dietFilter);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q) ||
          item.subCategory.toLowerCase().includes(q)
      );
    }

    return items;
  }, [currentCategoryData, activeSubCategory, dietFilter, searchQuery]);

  const globalSearchMatches = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return menuData.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.subCategory.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const handleCategoryChange = (catId: 'food' | 'coffee' | 'desserts') => {
    setActiveCategory(catId);
    setActiveSubCategory('all');
    setSearchQuery('');
    if (stickyNavRef.current) {
      stickyNavRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#FFF9F5] text-[#1C040B] antialiased selection:bg-[#D4AF37] selection:text-[#1C040B]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Navbar />

      {/* --- Editorial Hero Header --- */}
      <section className="relative pt-36 pb-20 px-4 md:px-8 bg-gradient-to-b from-[#180309] via-[#2A0812] to-[#180309] text-[#FDFBF7] overflow-hidden">
        <Starfield />
        <GrainOverlay />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#FDFBF7] text-[10px] md:text-xs font-mono uppercase tracking-widest"
          >
            <Sparkles size={13} className="text-[#D4AF37]" />
            Official Menu · Thoughtfully Crafted · Happily Served
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-7xl lg:text-8xl tracking-tight text-[#FDFBF7] font-normal leading-none"
          >
            The Menu
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 72 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-[1.5px] bg-[#D4AF37] mx-auto my-3"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif italic text-base md:text-xl text-[#D4AF37] max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
          >
            &ldquo;Where every bite feels like art.&rdquo;
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-sans text-xs md:text-sm text-stone-300 max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
          >
            Specialty coffee, slow cold brews, ceremonial matcha, artisanal sourdough melts, pastas, gourmet burgers, and fudgy brownie indulgences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="https://www.zomato.com/nagpur/caelio-nandanvan/order"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-[#E23744] text-white font-mono text-xs uppercase tracking-[0.2em] font-bold rounded-full hover:bg-white hover:text-[#E23744] transition-all shadow-2xl flex items-center gap-2 group"
            >
              <span>Order On Zomato</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="https://wa.me/918208049909?text=Hi%20Caelio!%20I%20would%20like%20to%20reserve%20a%20table%20or%20ask%20about%20the%20menu."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 border border-[#D4AF37]/50 text-[#FDFBF7] font-mono text-xs uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-[#D4AF37]/15 transition-all flex items-center gap-2"
            >
              <span>Reserve Table</span>
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 animate-bounce opacity-40 text-[#D4AF37]">
          <ChevronDown size={20} />
        </div>
      </section>

      {/* --- Sticky Navigation & Filter Controls --- */}
      <div
        ref={stickyNavRef}
        className="sticky top-20 z-40 bg-[#FFF9F5]/95 backdrop-blur-md border-b border-[#C1B19B]/30 shadow-xs transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 space-y-3">
          
          {/* Main Category Tabs (Coffee & Beverages, Food, Brownie Collection) */}
          <div className="flex items-center justify-center gap-2 md:gap-4 overflow-x-auto no-scrollbar py-1">
            {categoryStructure.map((cat) => {
              const isActive = activeCategory === cat.id;
              const itemCount = menuData.filter((i) => i.category.toLowerCase() === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id as any)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-sans tracking-wider uppercase transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? 'bg-[#180309] text-[#FDFBF7] border-[#D4AF37] shadow-sm font-medium'
                      : 'bg-white text-[#1C040B]/70 border-[#C1B19B]/30 hover:border-[#D4AF37] hover:text-[#1C040B]'
                  }`}
                >
                  <span className="text-base">{cat.icon}</span>
                  <span>{cat.name}</span>
                  <span
                    className={`ml-1 text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                      isActive ? 'bg-[#D4AF37] text-[#180309]' : 'bg-[#F4E7D7] text-[#1C040B]'
                    }`}
                  >
                    {itemCount}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar & Diet Filters Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-1 border-t border-[#C1B19B]/20">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80 bg-white border border-[#C1B19B]/40 rounded-full px-4 py-1.5 flex items-center shadow-xs focus-within:border-[#D4AF37] transition-colors">
              <Search size={15} className="text-[#A37945] mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Search menu (e.g. Cold Brew, Truffle, Mont Blanc, Burger)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none text-xs text-[#1C040B] focus:outline-none placeholder-[#C1B19B] font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1 rounded-full hover:bg-[#F4E7D7]/50 text-[#1C040B]/50"
                  aria-label="Clear search"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Sub-Category Chips */}
            <div className="w-full md:w-auto overflow-x-auto no-scrollbar flex items-center gap-1.5 py-1">
              <button
                onClick={() => setActiveSubCategory('all')}
                className={`px-3 py-1 rounded-full text-[11px] font-sans tracking-wide uppercase transition-all shrink-0 border ${
                  activeSubCategory === 'all'
                    ? 'bg-[#180309] text-[#D4AF37] border-[#D4AF37] font-semibold'
                    : 'bg-white text-[#1C040B]/70 border-[#C1B19B]/30 hover:bg-[#F4E7D7]/40'
                }`}
              >
                All {currentCategoryData.name}
              </button>

              {currentCategoryData.subCategories.map((sub) => {
                const isSubActive = activeSubCategory === sub.name;
                return (
                  <button
                    key={sub.name}
                    onClick={() => setActiveSubCategory(sub.name)}
                    className={`px-3 py-1 rounded-full text-[11px] font-sans tracking-wide uppercase transition-all shrink-0 border ${
                      isSubActive
                        ? 'bg-[#180309] text-[#D4AF37] border-[#D4AF37] font-semibold'
                        : 'bg-white text-[#1C040B]/70 border-[#C1B19B]/30 hover:bg-[#F4E7D7]/40'
                    }`}
                  >
                    {sub.name} ({sub.items.length})
                  </button>
                );
              })}
            </div>

            {/* Diet Filter Buttons */}
            <div className="flex items-center gap-1 shrink-0">
              {[
                { label: 'All', value: 'all' },
                { label: 'Veg', value: 'veg', dot: 'bg-emerald-500' },
                { label: 'Egg', value: 'egg', dot: 'bg-amber-500' },
                { label: 'Non-Veg', value: 'non-veg', dot: 'bg-rose-500' }
              ].map((diet) => (
                <button
                  key={diet.value}
                  onClick={() => setDietFilter(diet.value as any)}
                  className={`px-2.5 py-1 rounded-md text-[10px] uppercase tracking-wider font-mono font-bold border transition-all flex items-center gap-1 ${
                    dietFilter === diet.value
                      ? 'bg-[#180309] text-[#D4AF37] border-[#D4AF37] shadow-xs'
                      : 'bg-white text-[#1C040B]/60 border-[#C1B19B]/30 hover:border-[#D4AF37]'
                  }`}
                >
                  {diet.dot && <span className={`w-1.5 h-1.5 rounded-full ${diet.dot}`} />}
                  {diet.label}
                </button>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* --- Main Content Showcase --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-16">
        
        {/* If user searched globally and has results */}
        {searchQuery.trim() !== '' ? (
          <div className="space-y-8">
            <div className="border-b border-[#C1B19B]/30 pb-4">
              <h2 className="font-serif text-2xl md:text-3xl text-[#1C040B]">
                Search Results for &ldquo;{searchQuery}&rdquo;
              </h2>
              <p className="font-sans text-xs text-[#A37945] font-mono uppercase tracking-widest mt-1">
                Found {globalSearchMatches.length} matching items across the entire menu
              </p>
            </div>

            {globalSearchMatches.length === 0 ? (
              <div className="text-center py-20 max-w-md mx-auto space-y-4">
                <Coffee size={40} className="mx-auto text-[#A37945] animate-pulse" />
                <h3 className="font-serif text-xl text-[#1C040B]">No creations found</h3>
                <p className="font-sans text-xs text-[#1C040B]/70 leading-relaxed font-light">
                  We couldn&apos;t find any item matching &ldquo;{searchQuery}&rdquo;. Try searching for Frappe, Cold Brew, Truffle, Aglio, Burger, Toast, or Brownie.
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setDietFilter('all'); }}
                  className="px-5 py-2 bg-[#180309] text-[#D4AF37] rounded-full text-xs font-mono uppercase tracking-widest"
                >
                  Clear Search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {globalSearchMatches.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Standard Category & SubCategory Breakdown */
          <div className="space-y-16">
            
            {/* Category Banner */}
            <div className="bg-gradient-to-r from-[#F4E7D7]/80 via-[#FFF9F5] to-[#F4E7D7]/40 border border-[#C1B19B]/40 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center md:text-left">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#A37945] font-bold">
                  {currentCategoryData.icon} {currentCategoryData.name}
                </span>
                <h2 className="font-serif text-2xl md:text-4xl text-[#1C040B]">
                  {currentCategoryData.tagline}
                </h2>
              </div>
              <div className="text-right shrink-0">
                <span className="font-mono text-xs text-[#1C040B]/60 uppercase tracking-widest">
                  Showing {filteredItems.length} Products
                </span>
              </div>
            </div>

            {/* Display by Subcategories if activeSubCategory is 'all', or just filtered list */}
            {activeSubCategory === 'all' ? (
              currentCategoryData.subCategories.map((subGroup) => {
                const subItems = subGroup.items.filter(
                  (item) => dietFilter === 'all' || item.type === dietFilter
                );

                if (subItems.length === 0) return null;

                return (
                  <div key={subGroup.name} className="space-y-6 scroll-mt-36" id={subGroup.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}>
                    {/* Subcategory Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#C1B19B]/30 pb-3 gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                          <h3 className="font-serif text-2xl md:text-3xl text-[#1C040B] tracking-tight">
                            {subGroup.name}
                          </h3>
                        </div>
                        {subGroup.description && (
                          <p className="font-sans text-xs text-[#1C040B]/65 font-light mt-0.5 ml-4">
                            {subGroup.description}
                          </p>
                        )}
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#A37945] font-bold ml-4 md:ml-0">
                        {subItems.length} {subItems.length === 1 ? 'Item' : 'Items'}
                      </span>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {subItems.map((item) => (
                        <ProductCard key={item.id} item={item} />
                      ))}
                    </div>

                    {/* Add-Ons Box (e.g. for Energy Bowls) */}
                    {subGroup.addOns && subGroup.addOns.length > 0 && (
                      <div className="p-4 md:p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <PlusCircle size={16} className="text-[#A37945]" />
                          <span className="font-serif font-medium text-sm text-[#1C040B]">
                            Custom Add-Ons Available
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2.5">
                          {subGroup.addOns.map((add) => (
                            <span
                              key={add.name}
                              className="px-3 py-1 rounded-full bg-white border border-amber-200 text-[#1C040B] text-xs font-mono shadow-2xs"
                            >
                              {add.name}: <strong className="text-[#A37945]">{add.price}</strong>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="space-y-6">
                <div className="border-b border-[#C1B19B]/30 pb-3">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#1C040B]">
                    {activeSubCategory}
                  </h3>
                  <p className="font-sans text-xs text-[#A37945] font-mono uppercase tracking-widest mt-0.5">
                    Displaying {filteredItems.length} products
                  </p>
                </div>

                {filteredItems.length === 0 ? (
                  <div className="py-16 text-center text-[#1C040B]/50 text-xs font-mono uppercase tracking-widest">
                    No items match the current diet filter.
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredItems.map((item) => (
                        <ProductCard key={item.id} item={item} />
                      ))}
                    </div>

                    {/* Check if active subcategory has add-ons */}
                    {activeSubCategory === 'Energy Bowls' && (
                      <div className="p-4 md:p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-6">
                        <div className="flex items-center gap-2">
                          <PlusCircle size={16} className="text-[#A37945]" />
                          <span className="font-serif font-medium text-sm text-[#1C040B]">
                            Custom Add-Ons Available
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2.5">
                          {energyBowlAddOns.map((add) => (
                            <span
                              key={add.name}
                              className="px-3 py-1 rounded-full bg-white border border-amber-200 text-[#1C040B] text-xs font-mono shadow-2xs"
                            >
                              {add.name}: <strong className="text-[#A37945]">{add.price}</strong>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

          </div>
        )}

      </section>

      {/* --- Brand Story Callout from Official Menu Page 10 & 20 --- */}
      <section className="bg-[#180309] text-[#FDFBF7] py-16 px-4 md:px-8 border-t border-[#D4AF37]/30 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#D4AF37]">
            More Than A Café · Our Story
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#FDFBF7] font-normal">
            &ldquo;Good Food. Brighter Days. Better Coffee, Happier People.&rdquo;
          </h2>
          <p className="font-sans text-xs md:text-sm text-stone-300 font-light leading-relaxed max-w-2xl mx-auto">
            Caelio was born from a simple thought – that great coffee and good food have the power to bring people closer, create better conversations and make everyday moments feel a little more special.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 text-center">
            <div className="p-4 rounded-xl border border-[#D4AF37]/20 bg-[#2A0812]/50">
              <span className="block font-serif text-sm text-[#D4AF37] font-semibold mb-1">Specialty Coffee</span>
              <span className="text-[11px] text-stone-400 font-light">Classics & Signatures</span>
            </div>
            <div className="p-4 rounded-xl border border-[#D4AF37]/20 bg-[#2A0812]/50">
              <span className="block font-serif text-sm text-[#D4AF37] font-semibold mb-1">Fresh Ingredients</span>
              <span className="text-[11px] text-stone-400 font-light">Farm-fresh daily</span>
            </div>
            <div className="p-4 rounded-xl border border-[#D4AF37]/20 bg-[#2A0812]/50">
              <span className="block font-serif text-sm text-[#D4AF37] font-semibold mb-1">Artisanal Recipes</span>
              <span className="text-[11px] text-stone-400 font-light">Slow-crafted dishes</span>
            </div>
            <div className="p-4 rounded-xl border border-[#D4AF37]/20 bg-[#2A0812]/50">
              <span className="block font-serif text-sm text-[#D4AF37] font-semibold mb-1">Made With Care</span>
              <span className="text-[11px] text-stone-400 font-light">Served with happiness</span>
            </div>
          </div>

          <div className="pt-4 text-stone-400 text-xs font-mono">
            <span>Beside LOC, Nandanvan Road, Nagpur</span>
            <span className="mx-2">·</span>
            <span>+91 82080 49909</span>
            <span className="mx-2">·</span>
            <span>@caeliocoffee</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
