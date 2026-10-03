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
    id: 'slide-navratri-shakti',
    badge: 'CAELIO NAVRATRI · SEASONAL EXPERIENCE',
    title: 'Celebrate Shakti. Celebrate Her. Celebrate Together.',
    body: 'Where every beat celebrates Shakti. Highlighting modern Indian grace, divine energy, and artisanal coffee culture.',
    buttonText: 'Explore Navratri Menu',
    buttonLink: '#navratri-experience',
    secondaryButtonText: 'Reserve Garba Table',
    secondaryButtonLink: '/contact',
    image: '/images/navratri_hero_shakti.jpg'
  },
  {
    id: 'slide-midnight-garba',
    badge: 'NAGPUR · OPEN 8:00 AM TILL 2:00 AM',
    title: 'Where Every Beat Celebrates Shakti',
    body: 'Post-Garba Midnight Sanctuary. Step off the dance floor into calm amber warmth, cooling hydration, and slow-brewed comfort.',
    buttonText: 'Midnight Sanctuary',
    buttonLink: '#midnight-sanctuary',
    secondaryButtonText: 'View Sanctuary Hours',
    secondaryButtonLink: '#visit-section',
    image: '/images/navratri_garba_midnight.jpg'
  },
  {
    id: 'slide-saffron-brew',
    badge: '9 NIGHTS OF SACRED FLAVORS',
    title: 'Kesar Saffron Nitro & Vrat Artisanal Fare',
    body: 'Kashmiri saffron cold brew, green cardamom velvet lattes, and crispy amaranth delicacies crafted for festive devotion.',
    buttonText: 'Taste The Festive Brews',
    buttonLink: '#festive-offerings',
    secondaryButtonText: 'Explore All Menu',
    secondaryButtonLink: '/menu',
    image: '/images/navratri_saffron_coffee.jpg'
  },
  {
    id: 'slide-women-craft',
    badge: 'HONORING THE DIVINE FEMININE',
    title: 'Women in Coffee, Craft & Community',
    body: 'Celebrating the incredible female farmers of Western Ghats estates, our master baristas, and every woman shaping our sanctuary.',
    buttonText: 'Read Our Shakti Story',
    buttonLink: '#coffee-story',
    secondaryButtonText: 'Visit Sanctuary',
    secondaryButtonLink: '/contact',
    image: '/images/navratri_shakti_portrait.jpg'
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
    id: 'kesar-specials',
    title: 'Festive Kesar & Spice',
    tagline: 'Kashmiri Saffron & Single Origin Brews',
    image: '/images/navratri_saffron_coffee.jpg',
    href: '#festive-offerings',
    desc: 'Pure royal saffron infusions, green cardamom velvety cold brews, and single-estate nitro pulls crafted for festive celebration.',
    badge: 'Navratri Reserve'
  },
  {
    id: 'vrat-gourmet',
    title: 'Artisanal Vrat Gourmet',
    tagline: 'Fasting-Friendly European Elegance',
    image: '/images/navratri_vrat_gourmet.jpg',
    href: '#festive-offerings',
    desc: 'Crispy amaranth & water chestnut galettes, pink rock salt roasted makhana with black truffle, and heritage dairy accompaniments.',
    badge: 'Pure Vrat'
  },
  {
    id: 'shakti-craft',
    title: 'Honoring Women in Craft',
    tagline: 'Curated by Master Women Baristas',
    image: '/images/navratri_shakti_portrait.jpg',
    href: '#coffee-story',
    desc: 'Sourced from women-led coffee cooperatives in Coorg and Araku Valley, roasted in micro-lots for immaculate nuance and floral sweetness.',
    badge: 'Women in Coffee'
  },
  {
    id: 'matcha',
    title: 'Ceremonial Rose Matcha',
    tagline: 'Stoneground Kyoto × Kannauj Rose',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a',
    href: '/matcha',
    desc: 'Authentic first-harvest shade-grown green tea leaves from Uji, whisked with cold-pressed rose nectar and creamy almond milk.',
    badge: 'Kyoto × Kannauj'
  },
  {
    id: 'midnight-garba-fuel',
    title: 'Post-Garba Midnight Fuel',
    tagline: 'Open 8:00 AM Till 2:00 AM Daily',
    image: '/images/navratri_garba_midnight.jpg',
    href: '#midnight-sanctuary',
    desc: 'Cooling botanical iced brews, cascara spritzes, and warm spiced hot chocolates for Nagpur night-owls after Dandiya Raas.',
    badge: 'Midnight Cafe'
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
  isFestive?: boolean;
}

export const bestSellerProducts: BestSellerProduct[] = [
  {
    id: 'mont-blanc',
    name: '01 | Mont Blanc',
    category: 'Special Coffee',
    price: '₹220',
    desc: 'Inspired by the elegance of the French dessert. Rich espresso, velvety steamed milk, luscious cream, and delicate notes of chocolate.',
    image: 'https://images.unsplash.com/photo-1572442388796-11668ba67e53',
    badge: 'Signature',
    rating: '5.0'
  },
  {
    id: 'tiger-bomb',
    name: '02 | Tiger Bomb',
    category: 'Special Coffee',
    price: '₹240',
    desc: 'Robust espresso with creamy milk and decadent chocolate notes, delivering an explosive burst of energy and sweetness.',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e',
    badge: 'Signature',
    rating: '4.9'
  },
  {
    id: 'brownie-sizzler',
    name: '04 | Brownie Sizzler ★',
    category: 'Brownie Collection',
    price: '₹299',
    desc: 'Signature brownie served sizzling hot with vanilla ice cream, rich chocolate sauce and a dramatic tableside finish.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87',
    badge: 'Bestseller',
    rating: '5.0'
  },
  {
    id: 'truffle-mushroom-pasta',
    name: 'Truffle & Mushroom Spaghetti',
    category: 'Pasta & Spaghetti',
    price: '₹280',
    desc: 'Creamy truffle mushroom spaghetti cooked al dente and served with golden toasted garlic bread.',
    image: '/images/bento_pasta.jpg',
    badge: 'Chef Pick',
    rating: '4.9'
  },
  {
    id: 'biscoff-cookie-crunch-frappe',
    name: 'Biscoff Cookie Crunch Frappe',
    category: 'Signature Frappe',
    price: '₹280',
    desc: 'Creamy espresso blended with caramelized Biscoff cookies and chilled farm milk for irresistible crunch.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87',
    badge: 'Popular',
    rating: '4.9'
  },
  {
    id: 'vietnamese-velvet-brew',
    name: 'Vietnamese Velvet Cold Brew',
    category: 'Artisan Cold Brew',
    price: '₹190',
    desc: 'Strong 18-hour slow cold brew blended with creamy sweet milk for an authentic Vietnamese-style delight.',
    image: '/images/pairing_saigon.jpg',
    badge: 'Bestseller',
    rating: '4.9'
  },
  {
    id: 'kesar-saffron-nitro',
    name: 'Kesar Saffron Gold Nitro',
    category: 'Festive Reserve',
    price: '₹260',
    desc: 'Single-origin cold brew infused with whole Kashmiri saffron, cardamom foam, and genuine edible 24k gold shimmer.',
    image: '/images/navratri_saffron_coffee.jpg',
    badge: 'Navratri Special',
    rating: '5.0',
    isFestive: true
  }
];

export const reviewStats = {
  averageRating: '4.9',
  totalReviews: '1,350+',
  satisfactionRate: '99.6%',
  loyalPatrons: '9,200+'
};

export const customerReviewsData = [
  {
    id: 'rev-1',
    quote: "Caelio's Navratri experience is truly elevated. The Kesar Saffron Nitro after dancing Garba in Nagpur is sublime. It honors our culture with so much dignity and aesthetic grace.",
    author: "Tanvi Kulkarni",
    role: "Classical Kathak Dancer & Patron",
    date: "Navratri Season 2026",
    rating: 5
  },
  {
    id: 'rev-2',
    quote: "Finally, a luxury cafe that celebrates Shakti with genuine depth and reverence. The amaranth galette and the midnight sanctuary vibe till 2 AM are unmatched in Nagpur.",
    author: "Dr. Vikramaditya Rao",
    role: "Gastronomic Critic & Coffee Connoisseur",
    date: "October 2026",
    rating: 5
  },
  {
    id: 'rev-3',
    quote: "A peaceful sanctuary on Nandanvan Road. Stepping in after a long evening of Dandiya Raas with friends for their warm cardamom latte has become our yearly tradition.",
    author: "Priya Deshmukh",
    role: "Lifestyle Journalist & Nagpur Native",
    date: "Navratri Season 2026",
    rating: 5
  }
];
