import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Caelio Coffee House',
  description: 'Your privacy is paramount at Caelio. Learn how we handle your data with artisanal care and transparency.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'September 10, 2026';

  return (
    <main className="min-h-screen bg-[#FFF9F5] antialiased">
      <Navbar />

      <section className="pt-40 pb-24 px-6 md:px-8 bg-[#3B1F14] text-[#F4E7D7] relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-[#A37945] text-[10px] tracking-[0.3em] uppercase font-mono mb-4 block">
            Legal & Transparency
          </span>
          <h1 className="font-serif text-5xl md:text-7xl tracking-tight leading-none mb-6">
            Privacy <br /> <span className="italic text-[#A37945]">Policy</span>
          </h1>
          <p className="font-sans text-sm text-[#C1B19B] max-w-xl font-light leading-relaxed tracking-wide">
            At Caelio Coffee House, your trust is as valuable as the beans we roast. This policy outlines our commitment to your data security and privacy.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-8 py-20">
        <div className="prose prose-stone prose-lg max-w-none prose-headings:font-serif prose-headings:text-[#3B1F14] prose-p:text-[#3B1F14]/80 prose-p:font-light prose-p:leading-relaxed prose-strong:text-[#3B1F14] prose-li:text-[#3B1F14]/80">
          <p className="text-sm font-mono text-[#A37945] mb-12">Last Updated: {lastUpdated}</p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to Caelio Coffee House (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We operate from our sanctuary in Nagpur and are committed to protecting the privacy of our patrons and website visitors. This Privacy Policy explains how we collect, use, and safeguard your information.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We collect information that helps us provide a better specialty coffee experience:
          </p>
          <ul>
            <li><strong>Newsletter Data:</strong> When you subscribe to the Caelio Journal, we collect your email address.</li>
            <li><strong>Reservation Data:</strong> Information provided for table bookings or private tastings.</li>
            <li><strong>Usage Data:</strong> Anonymous information about how you interact with our digital platforms to help us optimize the user experience.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>
            Your data is used strictly for artisanal purposes:
          </p>
          <ul>
            <li>To send you updates on new coffee roasts and seasonal menu launches.</li>
            <li>To manage and confirm your sanctuary reservations.</li>
            <li>To improve our digital services and provide personalized recommendations.</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement high-level security measures to protect your personal information. We do not sell, trade, or otherwise transfer your data to outside parties, except for trusted third-party services that assist us in operating our website or serving you (e.g., email delivery services).
          </p>

          <h2>5. Cookies</h2>
          <p>
            Our website uses subtle cookies to enhance your browsing experience and analyze site traffic. You can choose to disable cookies through your browser settings, though some features of the site may not function optimally.
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            Occasionally, we may include links to external partners (such as Zomato for delivery). These sites have separate and independent privacy policies, and we have no responsibility for their content or activities.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have questions regarding this Privacy Policy, please reach out to our concierge:
          </p>
          <p className="bg-[#FFF9F5] p-6 border border-[#C1B19B]/30 rounded-xl inline-block">
            <strong>Caelio Coffee House Concierge</strong><br />
            Beside LOC, Nandanvan Road,<br />
            Nagpur, Maharashtra 440008<br />
            Email: concierge@caeliocoffeehouse.com
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
