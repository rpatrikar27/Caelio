'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Starfield, GrainOverlay } from '@/components/Starfield';
import { Clock, Calendar } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "What is Specialty Coffee? A Guide for Nagpur Coffee Lovers",
    excerpt: "Discover the rigorous standards that define specialty coffee and why Caelio is bringing this culture to central India.",
    category: "Coffee 101",
    date: "April 15, 2026",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e"
  },
  {
    id: 2,
    title: "From Seed to Cup: The Story of Indian Single-Origin Coffee",
    excerpt: "Tracing the journey of our beans from the mist-covered estates of Chikmagalur to our precision espresso bar.",
    category: "Origins",
    date: "April 18, 2026",
    readTime: "8 min read",
    img: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe"
  },
  {
    id: 3,
    title: "Why Pour-Over Coffee is the Future of Café Culture",
    excerpt: "Exploring the meditative art of the V60 and Chemex, and why slow brewing reveals the soul of the bean.",
    category: "Brew Methods",
    date: "April 22, 2026",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772"
  },
  {
    id: 4,
    title: "Italian vs French Café Culture — And How Caelio Blends Both",
    excerpt: "How we've combined the rapid energy of an Italian espresso bar with the leisurely elegance of a French bistro.",
    category: "Culture",
    date: "April 25, 2026",
    readTime: "7 min read",
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24"
  }
];

export default function BlogPage() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
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
               className="text-editorial text-brand-gold text-2xl mb-4 block underline-offset-8"
             >
               The Chronicled Ritual
             </motion.span>
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-5xl md:text-8xl font-heading mb-8"
             >
               The <span className="text-editorial italic font-light">Blog.</span>
             </motion.h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogPosts.map((post, i) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col border border-brand-gold/10 hover:border-brand-gold/40 transition-all duration-700 bg-brand-charcoal/10"
              >
                <div className="relative aspect-video overflow-hidden">
                   <Image 
                     src={post.img} 
                     alt={post.title} 
                     fill 
                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                     className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                     referrerPolicy="no-referrer"
                   />
                   <div className="absolute top-6 left-6 ring-1 ring-brand-gold px-4 py-1 bg-brand-black/80 text-[10px] uppercase tracking-widest text-brand-gold font-body">
                      {post.category}
                   </div>
                </div>
                <div className="p-10 flex flex-col flex-1">
                   <div className="flex items-center gap-6 mb-6 text-[10px] uppercase tracking-widest text-brand-ivory/40 font-body">
                      <div className="flex items-center gap-2"><Calendar size={12} /> {post.date}</div>
                      <div className="flex items-center gap-2"><Clock size={12} /> {post.readTime}</div>
                   </div>
                   <h2 className="font-heading text-2xl mb-6 tracking-wide leading-tight group-hover:text-brand-gold transition-colors">{post.title}</h2>
                   <p className="font-body text-brand-ivory/60 leading-relaxed mb-8 text-sm line-clamp-2">
                     {post.excerpt}
                   </p>
                   <div className="mt-auto">
                     <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-brand-gold uppercase tracking-[0.2em] text-[10px] font-body border-b border-brand-gold/20 pb-1 hover:border-brand-gold transition-all">
                        Read Full Story
                     </Link>
                   </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 px-6 border-y border-brand-gold/10">
         <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-heading text-3xl mb-8 tracking-widest leading-tight">Subscribe to the <span className="text-editorial italic text-brand-gold">Caelio Letters.</span></h3>
            <p className="font-body text-brand-ivory/60 mb-10 text-sm italic">Weekly insights into specialty coffee culture, brewing techniques, and culinary news.</p>
            {isSubscribed ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 border border-brand-gold/40 bg-brand-gold/10 text-brand-gold font-heading tracking-widest"
              >
                Thank you! We&apos;ll be in touch before opening day.
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex group border border-brand-gold/20 p-1">
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email" 
                  className="flex-1 bg-brand-black px-6 py-4 font-body outline-none text-brand-ivory"
                />
                <button type="submit" className="bg-brand-gold text-brand-black px-10 py-4 font-body text-[10px] uppercase tracking-widest font-bold hover:bg-brand-ivory transition-all whitespace-nowrap">
                    Subscribe
                </button>
              </form>
            )}
         </div>
      </section>

      <Footer />
    </main>
  );
}
