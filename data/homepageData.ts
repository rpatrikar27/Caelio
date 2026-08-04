export interface HeroSlide {
  id: string;
  badge: string;
  title: string;
  body: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  image: string;
  mockupUrl?: string;
}

export const heroSlidesData: HeroSlide[] = [
  {
    id: 'slide-1',
    badge: 'CAELIO Specialty Coffee',
    title: 'Crafted Green. Served Calmly.',
    body: 'Specialty Coffee. Artisanal Food. Moments that stay with you.',
    buttonText: 'Explore Menu',
    buttonLink: '/menu',
    secondaryButtonText: 'Visit Sanctuary',
    secondaryButtonLink: '/contact',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085'
  },
  {
    id: 'slide-2',
    badge: 'Uji Kyoto Imperial Reserve',
    title: 'Meet The Matcha Collection',
    body: 'Ceremonial Grade Matcha. Whisked Daily. Crafted With Intention.',
    buttonText: 'Discover Matcha',
    buttonLink: '/matcha',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a'
  },
  {
    id: 'slide-3',
    badge: 'Digital Concierge',
    title: 'The Complete Caelio Experience',
    body: 'Browse Our Menu. Discover Our Story. Experience Specialty Coffee.',
    buttonText: 'Visit Website',
    buttonLink: '/menu',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
    mockupUrl: 'www.caeliocoffeehouse.com'
  },
  {
    id: 'slide-4',
    badge: 'Nandanvan Sanctuary',
    title: 'More Than Coffee.',
    body: 'Work. Meet. Create. Relax.',
    buttonText: 'Visit Caelio',
    buttonLink: '/contact',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c'
  }
];

export interface CollectionItem {
  id: string;
  title: string;
  tagline: string;
  image: string;
  href: string;
  desc: string;
  badge?: string;
}

export const featuredCollectionsData: CollectionItem[] = [
  {
    id: 'coffee',
    title: 'Specialty Coffee',
    tagline: 'Single Origins & Precision Nitro',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
    href: '/coffee',
    desc: 'Ethically traded Arabica from Coorg, Chikmagalur & Araku Valley roasted in micro-batches for unprecedented clarity.',
    badge: 'Single Origin'
  },
  {
    id: 'matcha',
    title: 'Ceremonial Matcha',
    tagline: 'First-Harvest Stoneground Uji',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a',
    href: '/matcha',
    desc: 'Authentic shade-grown green tea leaves from Kyoto, Japan. Whisked traditionally into velvety lattes and iced elixirs.',
    badge: 'Kyoto Import'
  },
  {
    id: 'food',
    title: 'Artisanal Food',
    tagline: 'Sourdough & European Kitchen',
    image: '/images/bento_pasta.jpg',
    href: '/menu#mains',
    desc: '48-hour slow fermented sourdough toasts, hand-rolled brioche, truffle pastas, and wood-fired breakfast platters.',
    badge: '48H Sourdough'
  },
  {
    id: 'desserts',
    title: 'Handcrafted Desserts',
    tagline: 'Classic French & Italian Patisserie',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9',
    href: '/menu#desserts',
    desc: 'House-made Savoyardi Tiramisu, Dark Chocolate Ganache Tartlets, and Pistachio Brioche Toast baked fresh every morning.',
    badge: 'Baked Daily'
  },
  {
    id: 'specials',
    title: 'Seasonal Specials',
    tagline: 'Limited Micro-Batch Brews',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd',
    href: '/menu#specials',
    desc: 'Rotational single-estate harvest flights, cascara infusions, and seasonal botanical spritzes curated by our master baristas.',
    badge: 'Limited Edition'
  }
];

export interface BestSellerProduct {
  id: string;
  name: string;
  category: string;
  price: string;
  desc: string;
  image: string;
  badge: string;
  rating?: string;
}

export const bestSellerProducts: BestSellerProduct[] = [
  {
    id: 'stardust-nitro',
    name: 'Stardust Nitro Cold Brew',
    category: 'Signature Nitro',
    price: '₹240',
    desc: 'Nitrogen-infused cold brew topped with lavender botanical foam and finished with edible gold shimmer.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c',
    badge: 'Best Seller',
    rating: '4.9'
  },
  {
    id: 'caelio-cold-coffee',
    name: 'Caelio Cold Coffee',
    category: 'House Specialty',
    price: '₹170',
    desc: 'Our flagship double-filtered espresso blend shaken over crystal mountain ice blocks with rich farm milk.',
    image: '/images/hero_coffee.jpg',
    badge: 'Most Popular',
    rating: '5.0'
  },
  {
    id: 'eclipse-ristretto',
    name: 'Eclipse Ristretto Pull',
    category: 'Reserve Espresso',
    price: '₹220',
    desc: 'Double ristretto pull over shadow dark chocolate bitters with notes of toasted hazelnut and raw cocoa.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd',
    badge: 'Barista Pick',
    rating: '4.8'
  },
  {
    id: 'kyoto-matcha-latte',
    name: 'Kyoto Ceremonial Matcha',
    category: 'Uji Japanese Import',
    price: '₹240',
    desc: 'Authentic shade-grown first harvest matcha whisked with oat milk and a touch of organic agave nectar.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a',
    badge: 'First Harvest',
    rating: '4.9'
  },
  {
    id: 'tiramisu-savoyardi',
    name: 'Artisanal Savoyardi Tiramisu',
    category: 'Italian Patisserie',
    price: '₹280',
    desc: 'Layers of espresso-soaked Savoyardi biscuits, whipped mascarpone cream, and 70% dark Valrhona cocoa.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9',
    badge: 'House Made',
    rating: '5.0'
  }
];

export const reviewStats = {
  averageRating: '4.9',
  totalReviews: '1,280+',
  satisfactionRate: '99.4%',
  loyalPatrons: '8,500+'
};

export const customerReviewsData = [
  {
    id: 'rev-1',
    quote: "Caelio is unlike anything else in Nagpur. The Stardust Cold Brew and sourdough toast feel straight out of a boutique cafe in Milan or Kyoto.",
    author: "Ananya Sharma",
    role: "Architect & Coffee Connoisseur",
    date: "July 2026",
    rating: 5
  },
  {
    id: 'rev-2',
    quote: "The attention to detail in their single-origin coffee extraction is phenomenal. This is pure craftsmanship, from the La Marzocco machine to the calm interior.",
    author: "Dr. Vikramaditya Rao",
    role: "Local Gastronomic Critic",
    date: "June 2026",
    rating: 5
  },
  {
    id: 'rev-3',
    quote: "A peaceful sanctuary on Nandanvan Road. Exceptional ceremonial matcha, sublime tiramisu, and late-night hospitality until 2:30 AM.",
    author: "Priya Deshmukh",
    role: "Lifestyle Journalist",
    date: "July 2026",
    rating: 5
  }
];
