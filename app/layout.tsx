import type { Metadata } from 'next';
import './globals.css';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.caeliocoffeehouse.com'),
  title: {
    default: 'CAELIO NAVRATRI | Celebrate Shakti. Celebrate Her. Celebrate Together.',
    template: '%s | CAELIO Coffee House Nagpur',
  },
  description: 'Experience CAELIO NAVRATRI: Nagpur\'s luxury coffee sanctuary celebration of Shakti, Garba, and modern Indian culture. Single-origin estate brews, festive kesar creations, and sanctuary open 8:00 AM till 2:00 AM on Nandanvan Road.',
  keywords: 'CAELIO Navratri, Garba Nagpur, Celebrate Shakti, specialty coffee Nagpur, best cafe in Nagpur, late night cafe Nagpur, kesar nitro cold brew, vrat menu Nagpur',
  authors: [{ name: 'CAELIO Coffee House' }],
  creator: 'CAELIO Coffee House',
  publisher: 'CAELIO Coffee House',
  openGraph: {
    title: 'CAELIO NAVRATRI | Celebrate Shakti. Celebrate Her. Celebrate Together.',
    description: 'Where every beat celebrates Shakti. Nagpur\'s Destination for Specialty Coffee, Garba Nights & Artisanal Dining.',
    url: 'https://www.caeliocoffeehouse.com',
    siteName: 'CAELIO Coffee House',
    images: [{ url: '/images/navratri_hero_shakti.jpg', width: 1200, height: 630, alt: 'CAELIO Navratri Experience' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CAELIO NAVRATRI | Celebrate Shakti. Celebrate Her. Celebrate Together.',
    description: 'Where every beat celebrates Shakti. Nagpur\'s Destination for Specialty Coffee, Garba Nights & Artisanal Dining.',
    images: ['/images/navratri_hero_shakti.jpg'],
  },
  alternates: {
    canonical: 'https://www.caeliocoffeehouse.com',
  },
  robots: {
    index: true,
    follow: true,
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
    "image": "https://caeliocoffeehouse.com/images/navratri_hero_shakti.jpg",
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
    "servesCuisine": ["Specialty Coffee", "Kesar Nitro", "Artisanal Vrat Menu", "Ceremonial Matcha", "Italian", "French"],
    "priceRange": "₹₹",
    "openingHours": ["Mo-Su 08:00-02:00"],
    "founder": ["Rohit Patrikar", "Shahnawaz Pathan"]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#180309] text-[#FDFBF7] antialiased selection:bg-[#D4AF37] selection:text-[#1C040B]" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
