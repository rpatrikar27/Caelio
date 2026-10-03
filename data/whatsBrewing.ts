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
    id: 'garba-midnight-hours',
    badge: 'Extended Hours',
    title: 'Sanctuary Open 8:00 AM till 2:00 AM Daily',
    description: 'From morning pour-overs to late-night post-Garba coffee on Nandanvan Road for early risers, dancers, and midnight thinkers.',
    image: '/images/navratri_garba_midnight.jpg',
    ctaText: 'View Sanctuary Hours',
    ctaLink: '#visit-section',
    date: 'Navratri Nights'
  },
  {
    id: 'kesar-nitro-launch',
    badge: 'Seasonal Reserve',
    title: 'Kesar Saffron Nitro Cold Brew with 24k Gold',
    description: 'Cold-steeped Coorg Arabica infused with Grade-A Kashmiri saffron, cardamom foam, and edible shimmering gold dust.',
    image: '/images/navratri_saffron_coffee.jpg',
    ctaText: 'Taste The Brew',
    ctaLink: '#festive-offerings',
    date: 'Limited Edition'
  },
  {
    id: 'vrat-gourmet-menu',
    badge: 'Artisanal Vrat Kitchen',
    title: 'Gourmet Fasting Menu: Amaranth & Lotus Crunch',
    description: 'Crispy water chestnut galettes, pink rock salt roasted makhana with black truffle, and pure coconut yogurt parfaits.',
    image: '/images/navratri_vrat_gourmet.jpg',
    ctaText: 'Explore Vrat Menu',
    ctaLink: '#festive-offerings',
    date: 'All 9 Days'
  },
  {
    id: 'shakti-women-honor',
    badge: 'Celebrate Shakti',
    title: 'Honoring Women in Craft: Free Saffron Shot',
    description: 'Complimentary welcome espresso or kesar elixir for all female patrons celebrating the festival of Shakti with us on Day 1.',
    image: '/images/navratri_shakti_portrait.jpg',
    ctaText: 'Our Shakti Story',
    ctaLink: '#coffee-story',
    date: 'Pratipada to Navami'
  }
];
