import type { Metadata } from 'next';
import { Cinzel, Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '500', '600', '700'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  style: ['italic'],
  weight: ['300', '400', '500', '600', '700'],
});

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  title: 'Caelio Coffee House | Nagpur\'s First Specialty Coffee | Sky-Born. Earth-Roasted.',
  description: 'Nagpur\'s premier specialty coffee house. Single-origin Indian beans, precision espresso, pour-overs, cold brew and authentic Italian & French cuisine. Opening 1st June 2026 on Nandanvan Road, Nagpur.',
  keywords: 'specialty coffee Nagpur, best coffee Nagpur, pour over Nagpur, cold brew Nagpur, cafe Nagpur, Nandanvan Road cafe, Caelio coffee',
  openGraph: {
    title: 'Caelio Coffee House | Sky-Born. Earth-Roasted.',
    description: 'Specialty Indian Beans. Italian & French Cuisine. Nagpur\'s Premier Coffee Destination.',
    images: [{ url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085', width: 1200, height: 630, alt: 'Caelio Coffee House' }],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "Caelio Coffee House",
    "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Beside LOC, Nandanvan Road",
      "addressLocality": "Nagpur",
      "addressRegion": "Maharashtra",
      "postalCode": "440008",
      "addressCountry": "IN"
    },
    "telephone": "+918208049909",
    "url": "https://www.caeliocoffeehouse.com",
    "servesCuisine": ["Specialty Coffee", "Italian", "French"],
    "priceRange": "₹₹",
    "openingHours": ["Mo-Su 08:30-02:30"],
    "founder": ["Rohit Patrikar", "Shahnawaz Pathan"]
  };

  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable} ${jost.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#07080b] text-[#f0e6d0] antialiased selection:bg-[#c9a84c] selection:text-black" suppressHydrationWarning>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
