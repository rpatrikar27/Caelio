'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle, ArrowUpRight } from 'lucide-react';

export interface GalleryPost {
  id: string;
  image: string;
  caption: string;
  likes: string;
  comments: string;
  link: string;
}

const INSTAGRAM_POSTS: GalleryPost[] = [
  {
    id: 'post-1',
    image: '/images/bento_vibe.jpg',
    caption: 'Morning light spilling over our Nandanvan sanctuary tables. Espresso & quiet reflection.',
    likes: '1.4k',
    comments: '42',
    link: 'https://www.instagram.com/caeliocoffee/'
  },
  {
    id: 'post-2',
    image: '/images/pairing_harmony.jpg',
    caption: 'Single-origin pour-over paired with warm butter croissants baked fresh at 7:30 AM.',
    likes: '980',
    comments: '28',
    link: 'https://www.instagram.com/caeliocoffee/'
  },
  {
    id: 'post-3',
    image: '/images/sanctuary_vibe.jpg',
    caption: 'A quiet corner designed for slow living, conversation, and micro-batch cold brew.',
    likes: '2.1k',
    comments: '65',
    link: 'https://www.instagram.com/caeliocoffee/'
  },
  {
    id: 'post-4',
    image: '/images/pairing_kyoto.jpg',
    caption: 'Whisking ceremonial grade Uji matcha traditionally with bamboo chasen at Caelio.',
    likes: '1.8k',
    comments: '39',
    link: 'https://www.instagram.com/caeliocoffee/'
  },
  {
    id: 'post-5',
    image: '/images/bento_bread.jpg',
    caption: '48-hour wild fermented sourdough loaves coming out golden & caramelized.',
    likes: '1.2k',
    comments: '31',
    link: 'https://www.instagram.com/caeliocoffee/'
  },
  {
    id: 'post-6',
    image: '/images/bento_pasta.jpg',
    caption: 'Truffle tagliatelle pasta tossed in European butter & aged parmesan.',
    likes: '2.4k',
    comments: '88',
    link: 'https://www.instagram.com/caeliocoffee/'
  }
];

export function InstagramGallery() {
  return (
    <div className="space-y-8 pt-12 border-t border-[#A37945]/20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A37945] block">
            Visual Journal
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-[#FFF9F5]">
            Masonry Gallery @caeliocoffee
          </h3>
        </div>

        <a
          href="https://www.instagram.com/caeliocoffee/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#A37945] hover:text-[#FFF9F5] uppercase tracking-wider transition-colors"
        >
          <span>View All On Instagram</span>
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {INSTAGRAM_POSTS.map((post, idx) => (
          <motion.a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative block rounded-2xl overflow-hidden bg-[#1C120D] border border-[#A37945]/20 hover:border-[#A37945] transition-all duration-500 break-inside-avoid shadow-xl cursor-pointer"
          >
            {/* Image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#120A07] via-[#120A07]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 space-y-3">
                <div className="flex items-center gap-4 font-mono text-xs text-[#A37945]">
                  <span className="flex items-center gap-1.5"><Heart size={14} className="fill-[#A37945]" /> {post.likes}</span>
                  <span className="flex items-center gap-1.5"><MessageCircle size={14} /> {post.comments}</span>
                </div>
                <p className="font-serif text-sm text-[#FFF9F5] font-light line-clamp-2">
                  {post.caption}
                </p>
                <div className="flex items-center gap-1 font-mono text-[10px] uppercase text-[#A37945] tracking-widest pt-1 border-t border-white/10">
                  <Instagram size={12} />
                  <span>@caeliocoffee</span>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
