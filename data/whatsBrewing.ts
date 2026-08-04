export interface BrewingAnnouncement {
  id: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  date?: string;
}

export const whatsBrewingData: BrewingAnnouncement[] = [
  {
    id: 'matcha-launch',
    badge: 'New Arrival',
    title: 'Kyoto First-Harvest Matcha Collection',
    description: 'Ceremonial grade Uji matcha whisked with oat milk and cold-pressed organic agave.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a',
    ctaText: 'Explore Matcha',
    ctaLink: '/matcha',
    date: 'Aug 2026'
  },
  {
    id: 'stardust-nitro',
    badge: 'Seasonal Special',
    title: 'Stardust Lavender Nitro Cold Brew',
    description: 'Micro-purged nitrogen cascade with organic French lavender foam and edible gold shimmer.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c',
    ctaText: 'Discover Brew',
    ctaLink: '/coffee',
    date: 'Signature'
  },
  {
    id: 'sourdough-brunch',
    badge: 'Artisanal Kitchen',
    title: '48-Hour Wild Ferment Sourdough Toasts',
    description: 'Hand-crafted heritage loaves baked fresh daily, paired with avocado & cultured European butter.',
    image: '/images/bento_bread.jpg',
    ctaText: 'View Bakery',
    ctaLink: '/menu#mains',
    date: 'Baked Daily'
  },
  {
    id: 'late-night-sanctuary',
    badge: 'Sanctuary Hours',
    title: 'Late Night Coffee & Kitchen till 2:30 AM',
    description: 'A quiet night-owl sanctuary on Nandanvan Road for deep focus, conversations & espresso.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd',
    ctaText: 'Visit Us',
    ctaLink: '/contact',
    date: 'Daily 8:30 AM - 2:30 AM'
  }
];
