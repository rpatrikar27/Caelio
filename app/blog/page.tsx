import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BlogCard } from '@/components/BlogCard';
import { db } from '@/db';
import { posts } from '@/db/schema';
import { desc, eq } from 'drizzle-orm';
import { Starfield, GrainOverlay } from '@/components/Starfield';
import { Coffee, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Caelio Journal | Specialty Coffee & Culture in Nagpur',
  description: 'Deep dives into specialty coffee, artisanal baking, and the vibrant cafe culture of Nagpur. Automated insights from the Caelio team.',
};

export default async function BlogListingPage() {
  const allPosts = await db.select()
    .from(posts)
    .where(eq(posts.status, 'published'))
    .orderBy(desc(posts.publishedAt))
    .limit(50);

  return (
    <main className="min-h-screen bg-[#FFF9F5] antialiased">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-40 pb-24 px-4 md:px-8 bg-[#3B1F14] text-[#F4E7D7] overflow-hidden">
        <Starfield />
        <GrainOverlay />
        
        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A37945]/20 border border-[#A37945]/40 text-[#F4E7D7] text-xs font-mono uppercase tracking-[0.2em]">
            <Sparkles size={14} className="text-[#A37945]" />
            The Caelio Journal
          </div>
          
          <h1 className="font-serif text-5xl md:text-8xl tracking-tight leading-none">
            Reflections & <br /> <span className="italic text-[#A37945]">Roasts</span>
          </h1>
          
          <p className="font-sans text-sm md:text-base text-[#C1B19B] max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Your daily dose of specialty coffee science, European culinary heritage, and local Nagpur updates. Freshly brewed by our AI engine.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        {allPosts.length === 0 ? (
          <div className="text-center py-32 space-y-4">
            <Coffee size={48} className="mx-auto text-[#C1B19B]/30" />
            <h2 className="font-serif text-2xl text-[#3B1F14]">The journal is being brewed...</h2>
            <p className="font-sans text-sm text-[#3B1F14]/50 max-w-xs mx-auto">
              Our automated content engine is currently researching and writing our first entries. Check back shortly.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
