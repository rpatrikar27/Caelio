import type { Metadata } from 'next';
import { Cinzel, Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';

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
  title: 'Caelio Coffee House | Sky-Born. Earth-Roasted.',
  description: 'Premium specialty coffee and European café experience in Nagpur, India.',
  openGraph: {
    title: 'Caelio Coffee House',
    description: 'Sky-Born. Earth-Roasted. Specialty Coffee & French-Italian Cuisine.',
    images: [{ url: 'https://picsum.photos/seed/caelio/1200/630' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable} ${jost.variable}`} suppressHydrationWarning>
      <body className="bg-[#07080b] text-[#f0e6d0] antialiased selection:bg-[#c9a84c] selection:text-black" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
