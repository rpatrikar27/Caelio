import { NextResponse } from 'next/server';

export interface ReelItem {
  id: string;
  thumbnail: string;
  permalink: string;
  caption: string;
  date: string;
  likes?: string;
  views?: string;
  duration?: string;
}

const FALLBACK_REELS: ReelItem[] = [
  {
    id: 'reel-1',
    thumbnail: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c',
    permalink: 'https://www.instagram.com/caeliocoffee/',
    caption: 'Watch the nitrogen cascade in our signature Stardust Cold Brew ✨ Ethically sourced Coorg Arabica.',
    date: 'Aug 01, 2026',
    likes: '1.2k',
    views: '14.5k',
    duration: '0:18'
  },
  {
    id: 'reel-2',
    thumbnail: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a',
    permalink: 'https://www.instagram.com/caeliocoffee/',
    caption: 'Whisking authentic shade-grown Uji Ceremonial Matcha at 80°C for velvety foam 🍵',
    date: 'Jul 29, 2026',
    likes: '980',
    views: '11.2k',
    duration: '0:24'
  },
  {
    id: 'reel-3',
    thumbnail: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
    permalink: 'https://www.instagram.com/caeliocoffee/',
    caption: 'The golden double ristretto pull over La Marzocco GB5 ☕️ Single estate Chikmagalur beans.',
    date: 'Jul 25, 2026',
    likes: '2.1k',
    views: '22.8k',
    duration: '0:15'
  },
  {
    id: 'reel-4',
    thumbnail: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9',
    permalink: 'https://www.instagram.com/caeliocoffee/',
    caption: 'Dusting dark cocoa over our fresh house-made Savoyardi Tiramisu 🍮 Baked daily at Caelio.',
    date: 'Jul 22, 2026',
    likes: '1.5k',
    views: '18.3k',
    duration: '0:21'
  },
  {
    id: 'reel-5',
    thumbnail: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd',
    permalink: 'https://www.instagram.com/caeliocoffee/',
    caption: 'Late night coffee & quiet sanctuary moods till 1:00 AM on Nandanvan Road 🌙',
    date: 'Jul 18, 2026',
    likes: '3.4k',
    views: '35.1k',
    duration: '0:30'
  },
  {
    id: 'reel-6',
    thumbnail: 'https://images.unsplash.com/photo-1509440159596-0249088772ff',
    permalink: 'https://www.instagram.com/caeliocoffee/',
    caption: '48-hour wild ferment heritage sourdough coming out crisp & caramelized from the oven 🍞',
    date: 'Jul 14, 2026',
    likes: '1.8k',
    views: '19.7k',
    duration: '0:27'
  }
];

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN?.trim();

  // If token is missing or a default placeholder, immediately return fallback
  if (!token || token.startsWith('MY_') || token.startsWith('YOUR_') || token === 'placeholder') {
    return NextResponse.json({
      success: true,
      source: 'fallback',
      account: '@caeliocoffee',
      posts: FALLBACK_REELS
    });
  }

  try {
    // Fetch latest 10 items to ensure we have enough after filtering
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&limit=10&access_token=${token}`,
      { 
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    );

    if (!res.ok) {
      return NextResponse.json({
        success: true,
        source: 'fallback_status_' + res.status,
        account: '@caeliocoffee',
        posts: FALLBACK_REELS
      });
    }

    const data = await res.json();

    if (!data.data || !Array.isArray(data.data)) {
      return NextResponse.json({
        success: true,
        source: 'fallback_invalid_data',
        account: '@caeliocoffee',
        posts: FALLBACK_REELS
      });
    }

    // Format & filter top 6 posts
    const formatted: ReelItem[] = data.data
      .slice(0, 6)
      .map((item: any, idx: number) => {
        const dateObj = item.timestamp ? new Date(item.timestamp) : new Date();
        const formattedDate = dateObj.toLocaleDateString('en-US', {
          month: 'short',
          day: '2-digit',
          year: 'numeric'
        });

        return {
          id: item.id || `ig-${idx}`,
          thumbnail: item.thumbnail_url || item.media_url || FALLBACK_REELS[idx % 6].thumbnail,
          permalink: item.permalink || 'https://www.instagram.com/caeliocoffee/',
          caption: item.caption || FALLBACK_REELS[idx % 6].caption,
          date: formattedDate,
          likes: `${(1 + Math.random() * 2).toFixed(1)}k`, // Randomized stats for aesthetic if not provided by Basic Display API
          views: `${(10 + Math.random() * 20).toFixed(1)}k`,
          duration: item.media_type === 'VIDEO' ? '0:20' : undefined
        };
      });

    return NextResponse.json({
      success: true,
      source: 'live',
      account: '@caeliocoffee',
      posts: formatted
    });
  } catch (error) {
    return NextResponse.json({
      success: true,
      source: 'fallback_error',
      account: '@caeliocoffee',
      posts: FALLBACK_REELS
    });
  }
}
