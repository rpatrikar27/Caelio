import type { Metadata } from 'next';
import { Cinzel, Cormorant_Garamond, Lora, Jost } from 'next/font/google';
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

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600'],
});

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  title: 'CAELIO | Specialty Coffee & Artisanal Food | Nagpur',
  description: 'Nagpur\'s premier luxury specialty coffee sanctuary. Direct-trade Indian single origins, ceremonial Uji matcha, sourdough fermentation, and European culinary artistry on Nandanvan Road.',
  keywords: 'CAELIO, Caelio Coffee, specialty coffee Nagpur, best cafe in Nagpur, ceremonial matcha Nagpur, cold brew, artisanal sourdough, Nandanvan Road cafe',
  openGraph: {
    title: 'CAELIO | Specialty Coffee & Artisanal Food',
    description: 'Sky-Born. Earth-Roasted. Nagpur\'s Destination for Specialty Coffee & Artisanal Dining.',
    images: [{ url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085', width: 1200, height: 630, alt: 'CAELIO Coffee House' }],
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
    "name": "CAELIO Coffee House",
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
    "url": "https://caeliocoffeehouse.com",
    "servesCuisine": ["Specialty Coffee", "Ceremonial Matcha", "Italian", "French", "Artisanal Bakery"],
    "priceRange": "₹₹",
    "openingHours": ["Mo-Su 08:30-02:30"],
    "founder": ["Rohit Patrikar", "Shahnawaz Pathan"]
  };

  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable} ${lora.variable} ${jost.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#120A07] text-[#F4E7D7] antialiased selection:bg-[#A37945] selection:text-white" suppressHydrationWarning>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

