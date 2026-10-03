export interface JournalPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  status: 'published' | 'draft' | 'scheduled';
  heroImage: string;
  heroImageAlt: string;
  metaTitle: string;
  metaDescription: string;
  readingTime: number;
  publishedAt: Date | string | null;
  scheduledFor?: Date | string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  seoData?: {
    ogTitle?: string;
    ogDescription?: string;
    keywords?: string[];
    ogImage?: string;
    canonicalUrl?: string;
  } | null;
}

export const FALLBACK_JOURNAL_POSTS: JournalPost[] = [
  {
    id: 101,
    title: 'The Art of Saffron Infusion: Elevating Nagpur’s Coffee Culture',
    slug: 'art-of-saffron-infusion-nagpur',
    excerpt: 'How our signature saffron-infused nitro brews blend sacred Indian botanical traditions with third-wave specialty extraction on Nandanvan Road.',
    category: 'Coffee Craft',
    status: 'published',
    heroImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: 'Artisanal coffee brewing with saffron notes at Caelio Coffee House',
    metaTitle: 'The Art of Saffron Infusion | Caelio Coffee Nagpur',
    metaDescription: 'Discover how Caelio blends Kashmiri saffron with specialty single-estate coffee in Nagpur.',
    readingTime: 4,
    publishedAt: new Date('2026-10-01T10:00:00Z'),
    seoData: {
      ogTitle: 'The Art of Saffron Infusion | Caelio Coffee House',
      ogDescription: 'Blending ancient botanical traditions with third-wave coffee extraction.',
      keywords: ['specialty coffee nagpur', 'saffron coffee', 'caelio coffee house', 'nandanvan cafe']
    },
    content: `
# The Art of Saffron Infusion: Elevating Nagpur’s Coffee Culture

At **Caelio Coffee House**, every extraction is treated not merely as a morning beverage, but as a deliberate culinary exploration. Situated on Nandanvan Road, Nagpur, our sanctuary was designed from the ground up to unite India's revered botanical heritage with modern third-wave specialty coffee.

## The Sacred Chemistry of Saffron & Coffee

For millennia, saffron (*Crocus sativus*) has symbolized illumination, vitality, and celebration across Indian culture. When paired with high-altitude, naturally processed Arabica from Karnataka's Baba Budangiri hills, the delicate floral aroma of saffron harmonizes with the deep cocoa and cherry undertones of the roasted bean.

Key flavor milestones in our brew:
- **Floral Top Notes:** Fragrant Spanish and Kashmiri saffron threads steeped at sub-boiling precision.
- **Velvety Mid-Palate:** Nitrogen agitation producing micro-foam without dairy additives.
- **Lingering Sweet Finish:** Natural caramelized stone-fruit notes inherent to high-grown single origins.

## The Caelio Connection

Our baristas calibrated the infusion ratio across dozens of trial batches to avoid overpowering the origin characteristics of the beans. Whether you arrive at 8:00 AM for a morning reflection or at 1:00 AM after midnight Garba, our saffron brew offers unmatched clarity and warmth.

Visit us on Nandanvan Road or explore our full artisanal brew lineup at the bar.
    `
  },
  {
    id: 102,
    title: 'Midnight Garba & Single-Origin Espresso: A Navratri Sanctuary',
    slug: 'midnight-garba-and-espresso-navratri-sanctuary',
    excerpt: 'Why Caelio opens from 8:00 AM till 2:00 AM daily on Nandanvan Road as a sanctuary for dancers, thinkers, and nocturnal artisans.',
    category: 'Culture & Sanctuary',
    status: 'published',
    heroImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: 'Warm ambient coffee sanctuary atmosphere at night',
    metaTitle: 'Midnight Garba & Single-Origin Espresso | Caelio Coffee',
    metaDescription: 'Caelio Coffee House opens from 8:00 AM till 2:00 AM daily in Nagpur as a late-night sanctuary.',
    readingTime: 3,
    publishedAt: new Date('2026-10-02T12:00:00Z'),
    seoData: {
      ogTitle: 'Midnight Garba & Single-Origin Espresso | Caelio Coffee',
      ogDescription: 'Nagpur’s premier sanctuary open 8:00 AM till 2:00 AM daily.',
      keywords: ['late night cafe nagpur', 'open till 2am nagpur', 'caelio navratri', 'garba coffee']
    },
    content: `
# Midnight Garba & Single-Origin Espresso: A Navratri Sanctuary

Nagpur pulsates with rhythm during the festive nights of Navratri. As the resounding beats of the dhol fade and dancers step out of the circular dance grounds under starry skies, where does the evening go?

## An Extended Sanctuary: 8:00 AM to 2:00 AM Daily

We extended our operating hours to **8:00 AM till 2:00 AM daily** to provide a peaceful, European-inspired oasis for midnight conversations. 

Inside our warm-timbered space beside LOC on Nandanvan Road:
1. **Curated Caffeine & Herbal Elixirs:** From vibrant double-shots of single-estate espresso to calming chamomile and golden turmeric infusions.
2. **Navratri-Friendly Fasting Delicacies:** Clean, wholesome pairings crafted specifically for devotees and night-owls.
3. **Gentle Acoustic Resonance:** Soft ambient rhythms that soothe after the thundering Garba soundscapes.

## The Spirit of Shakti

Caelio is rooted in honoring strength, elegance, and communal warmth. We invite creators, night thinkers, families, and circles of friends to share a cup and celebrate together.
    `
  },
  {
    id: 103,
    title: 'Ceremonial Uji Matcha: From Kyoto Hills to Nandanvan',
    slug: 'ceremonial-uji-matcha-from-kyoto-to-nagpur',
    excerpt: 'An intimate exploration of stone-ground tencha, ceremonial whisking techniques, and pristine plant-based pairings.',
    category: 'Matcha Heritage',
    status: 'published',
    heroImage: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: 'Freshly whisked stone-ground ceremonial Uji matcha',
    metaTitle: 'Ceremonial Uji Matcha in Nagpur | Caelio Coffee',
    metaDescription: 'Authentic stone-ground Japanese ceremonial matcha in Nagpur at Caelio Coffee House.',
    readingTime: 5,
    publishedAt: new Date('2026-10-02T16:00:00Z'),
    seoData: {
      ogTitle: 'Ceremonial Uji Matcha in Nagpur | Caelio Coffee',
      ogDescription: 'Stone-ground Uji tencha prepared with ceremonial chasen whisking.',
      keywords: ['matcha nagpur', 'ceremonial matcha uji', 'japanese tea nagpur', 'caelio matcha']
    },
    content: `
# Ceremonial Uji Matcha: From Kyoto Hills to Nandanvan

True matcha is not a green tea powder flavor; it is an entire agricultural tradition dating back over eight centuries to Kyoto’s Uji terroir. At Caelio Coffee House, we bring the genuine ceremonial ritual to Nagpur.

## What Distinguishes Ceremonial Uji Grade?

- **Shade-Grown Tencha:** Cultivated under rice straw screens (*tana*) for four weeks prior to harvest to concentrate L-theanine and chlorophyll.
- **Granite Stone-Milling:** Grinding at low temperatures to produce an ultrafine 5-micron powder that suspends harmoniously in water.
- **L-Theanine & Sustained Focus:** Unlike the sharp peaks of commercial caffeine, high-grade ceremonial matcha delivers calm, sustained alertness without jitter.

## Prepared Tableside with Traditional Chasen

Every bowl at Caelio is prepared using an authentic 100-prong bamboo chasen, whisked at 78°C to create micro-froth with emerald lustre and umami sweetness.
    `
  },
  {
    id: 104,
    title: 'The Philosophy of Slow Coffee & Sourdough Fermentation',
    slug: 'philosophy-of-slow-coffee-and-sourdough',
    excerpt: 'Why patience is the core ingredient in both naturally leavened country sourdough and precision pour-over extractions.',
    category: 'Culinary Craft',
    status: 'published',
    heroImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: 'Artisanal sourdough bread and pour-over coffee',
    metaTitle: 'Slow Coffee & Sourdough Fermentation | Caelio Coffee',
    metaDescription: 'Exploring the shared alchemy of natural fermentation and slow pour-over coffee at Caelio.',
    readingTime: 4,
    publishedAt: new Date('2026-10-03T06:00:00Z'),
    seoData: {
      ogTitle: 'Slow Coffee & Sourdough Fermentation | Caelio Coffee',
      ogDescription: 'Patience and craft in every cup and loaf at Caelio Coffee House.',
      keywords: ['sourdough nagpur', 'artisan bakery nagpur', 'pour over coffee', 'caelio slow coffee']
    },
    content: `
# The Philosophy of Slow Coffee & Sourdough Fermentation

In a fast-paced world, Caelio Coffee House stands for intentional craft. Both third-wave coffee brewing and wild yeast sourdough baking share a profound commonality: they cannot be hurried.

## The Fermentation Continuum

- **36-Hour Cold Proofing:** Our sourdough loaves ferment slowly over 36 hours, allowing wild lactobacilli to break down complex gluten structures, yielding a caramelized crust, open airy crumb, and gentle prebiotic acidity.
- **Controlled Dwell Time:** Our manual pour-overs (V60 and Kalita Wave) are timed to the second, matching grind distribution and water temperature to draw out sparkling fruit notes without bitterness.

Taste the difference daily at our sanctuary on Nandanvan Road.
    `
  }
];
