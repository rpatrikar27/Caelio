import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db } from '@/db';
import { posts } from '@/db/schema';
import { eq, desc, ne, and } from 'drizzle-orm';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import ReactMarkdown from 'react-markdown';
import { Calendar, Clock, ArrowLeft, Share2, Instagram, ChevronRight } from 'lucide-react';
import { BlogCard } from '@/components/BlogCard';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const [post] = await db.select().from(posts).where(eq(posts.slug, slug));

  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.metaTitle} | Caelio Coffee`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      images: [post.heroImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const [post] = await db.select().from(posts).where(eq(posts.slug, slug));

  if (!post) notFound();

  const morePosts = await db.select()
    .from(posts)
    .where(and(eq(posts.status, 'published'), ne(posts.slug, slug)))
    .orderBy(desc(posts.publishedAt))
    .limit(3);

  const date = new Date(post.publishedAt!).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <main className="min-h-screen bg-[#FFF9F5] antialiased">
      <Navbar />

      <article className="pt-32 pb-20">
        {/* Header Section */}
        <header className="max-w-4xl mx-auto px-4 md:px-8 mb-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-[10px] font-mono text-[#A37945] uppercase tracking-widest mb-8 hover:text-[#3B1F14] transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Journal
          </Link>

          <div className="flex items-center gap-4 text-[10px] font-mono text-[#A37945] uppercase tracking-widest mb-6">
            <span className="px-3 py-1 bg-[#3B1F14] text-[#F4E7D7] rounded-full">{post.category}</span>
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={12} />
              <span>{post.readingTime} min read</span>
            </div>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl text-[#3B1F14] mb-8 leading-tight tracking-tight">
            {post.title}
          </h1>

          <p className="font-sans text-lg md:text-xl text-[#3B1F14]/70 font-light leading-relaxed mb-8 italic border-l-2 border-[#A37945] pl-6">
            {post.excerpt}
          </p>
        </header>

        {/* Hero Image */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 mb-16">
          <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={post.heroImage}
              alt={post.heroImageAlt}
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Article Body */}
        <div className="max-w-4xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-12">
            <div className="sticky top-32 space-y-12">
              <div className="space-y-4">
                <h4 className="font-serif text-lg text-[#3B1F14]">About the Author</h4>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#3B1F14] flex items-center justify-center text-[#F4E7D7] text-xs font-mono">CC</div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-[#3B1F14]">Caelio Content Engine</p>
                    <p className="text-[10px] text-[#A37945] uppercase tracking-wider">AI Powered Insights</p>
                  </div>
                </div>
                <p className="text-xs text-[#3B1F14]/60 leading-relaxed">
                  Our automated engine researches, optimizes, and delivers daily updates on Nagpur's coffee culture.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-serif text-lg text-[#3B1F14]">Share Article</h4>
                <div className="flex gap-2">
                  <button className="p-3 rounded-full border border-[#C1B19B]/30 text-[#3B1F14] hover:bg-[#3B1F14] hover:text-white transition-all">
                    <Share2 size={16} />
                  </button>
                  <a 
                    href="https://instagram.com/caeliocoffee" 
                    target="_blank" 
                    className="p-3 rounded-full border border-[#C1B19B]/30 text-[#3B1F14] hover:bg-[#3B1F14] hover:text-white transition-all"
                  >
                    <Instagram size={16} />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 prose prose-stone prose-lg max-w-none prose-headings:font-serif prose-headings:text-[#3B1F14] prose-p:text-[#3B1F14]/80 prose-p:font-light prose-p:leading-relaxed prose-strong:text-[#3B1F14] prose-blockquote:border-[#A37945] prose-blockquote:font-serif prose-blockquote:italic prose-a:text-[#A37945] prose-a:no-underline hover:prose-a:underline">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </article>

      {/* More Posts */}
      {morePosts.length > 0 && (
        <section className="bg-white py-20 px-4 md:px-8 border-t border-[#C1B19B]/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-[#3B1F14]">More from the Journal</h2>
              <Link 
                href="/blog" 
                className="flex items-center gap-2 text-xs font-mono text-[#A37945] uppercase tracking-widest hover:gap-4 transition-all"
              >
                View All <ChevronRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {morePosts.map((p, i) => (
                <BlogCard key={p.id} post={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
