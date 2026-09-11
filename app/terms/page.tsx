import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service | Caelio Coffee House',
  description: 'The principles that guide our community and digital sanctuary.',
};

export default function TermsOfServicePage() {
  const lastUpdated = 'September 10, 2026';

  return (
    <main className="min-h-screen bg-[#FFF9F5] antialiased">
      <Navbar />

      <section className="pt-40 pb-24 px-6 md:px-8 bg-[#3B1F14] text-[#F4E7D7] relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-[#A37945] text-[10px] tracking-[0.3em] uppercase font-mono mb-4 block">
            Community Standards
          </span>
          <h1 className="font-serif text-5xl md:text-7xl tracking-tight leading-none mb-6">
            Terms of <br /> <span className="italic text-[#A37945]">Service</span>
          </h1>
          <p className="font-sans text-sm text-[#C1B19B] max-w-xl font-light leading-relaxed tracking-wide">
            Welcome to the Caelio Coffee House digital experience. By engaging with our services, you agree to uphold the following principles.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-8 py-20">
        <div className="prose prose-stone prose-lg max-w-none prose-headings:font-serif prose-headings:text-[#3B1F14] prose-p:text-[#3B1F14]/80 prose-p:font-light prose-p:leading-relaxed prose-strong:text-[#3B1F14] prose-li:text-[#3B1F14]/80">
          <p className="text-sm font-mono text-[#A37945] mb-12">Last Updated: {lastUpdated}</p>

          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing the website caeliocoffeehouse.com or visiting our physical sanctuary in Nagpur, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>

          <h2>2. Intellectual Property</h2>
          <p>
            The content, photography, logo, and branding of Caelio Coffee House are the intellectual property of Caelio and its founders. No material from this site may be reproduced, copied, or used for commercial purposes without our express written consent.
          </p>

          <h2>3. Sanctuary Conduct</h2>
          <p>
            Our physical space is a sanctuary for creators, thinkers, and coffee enthusiasts. We expect all patrons to maintain a respectful and serene environment. We reserve the right to refuse service to anyone who disrupts the sanctuary&apos;s peace or safety.
          </p>

          <h2>4. Accuracy of Materials</h2>
          <p>
            The materials appearing on Caelio&apos;s website could include technical, typographical, or photographic errors. While we strive for perfection in every roast and every word, we do not warrant that any of the materials on its website are accurate, complete, or current.
          </p>

          <h2>5. Reservations & Cancellations</h2>
          <p>
            Reservations for private tastings or tables are subject to availability. We request that cancellations be made at least 2 hours in advance to allow others the opportunity to experience the sanctuary.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of Maharashtra, India, and you irrevocably submit to the exclusive jurisdiction of the courts in Nagpur.
          </p>

          <h2>7. Modifications</h2>
          <p>
            Caelio Coffee House may revise these Terms of Service for its website at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these terms.
          </p>

          <div className="mt-16 pt-8 border-t border-[#C1B19B]/30">
            <p className="text-sm italic text-[#3B1F14]/60">
              For any inquiries regarding our community standards, please contact our concierge at concierge@caeliocoffeehouse.com.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
