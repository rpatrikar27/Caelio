'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  post: {
    title: string;
    slug: string;
    excerpt: string;
    category: string;
    heroImage: string;
    heroImageAlt: string;
    publishedAt: string | Date | null;
    readingTime: number;
  };
  index: number;
}

export const BlogCard = ({ post, index }: BlogCardProps) => {
  const date = post.publishedAt 
    ? new Date(post.publishedAt).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    : 'Draft';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-[#FFF9F5] border border-[#C1B19B]/30 rounded-2xl overflow-hidden flex flex-col h-full"
    >
      <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10" />
      
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={post.heroImage}
          alt={post.heroImageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 bg-[#3B1F14]/80 backdrop-blur-sm text-[#F4E7D7] text-[10px] font-mono uppercase tracking-widest rounded-full border border-[#A37945]/30">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-[10px] font-mono text-[#A37945] uppercase tracking-widest mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{post.readingTime} min read</span>
          </div>
        </div>

        <h3 className="font-serif text-xl md:text-2xl text-[#3B1F14] mb-3 group-hover:text-[#A37945] transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="font-sans text-sm text-[#3B1F14]/70 line-clamp-3 mb-6 flex-grow font-light leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-2 text-[#3B1F14] font-mono text-[10px] uppercase tracking-widest font-bold group-hover:gap-4 transition-all">
          <span>Read Article</span>
          <ArrowRight size={14} className="text-[#A37945]" />
        </div>
      </div>
    </motion.article>
  );
};
