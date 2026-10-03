'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Volume2, 
  Moon, 
  ArrowUpRight, 
  Check, 
  ShieldCheck, 
  Clock, 
  Music,
  Heart
} from 'lucide-react';

interface ShaktiDay {
  day: number;
  name: string;
  avatar: string;
  colorName: string;
  colorHex: string;
  accentBg: string;
  virtue: string;
  coffeePairing: string;
  pairingDesc: string;
  notes: string[];
}

const shaktiDays: ShaktiDay[] = [
  {
    day: 1,
    name: 'Pratipada',
    avatar: 'Shailaputri',
    colorName: 'Royal Saffron Orange',
    colorHex: '#D97706',
    accentBg: 'bg-[#D97706]/15 border-[#D97706]/40 text-[#D97706]',
    virtue: 'Grounded Strength & Awakening',
    coffeePairing: 'Kesar Saffron Nitro Cold Brew',
    pairingDesc: 'Direct-trade Coorg Arabica steeped 20 hours with Kashmiri saffron strands, topped with cardamom botanical foam.',
    notes: ['Single-Estate Coorg', 'Kashmiri Mogra Saffron', 'Velvet Nitro Cascade']
  },
  {
    day: 2,
    name: 'Dwitiya',
    avatar: 'Brahmacharini',
    colorName: 'Sacred Ivory Cream',
    colorHex: '#FDFBF7',
    accentBg: 'bg-[#FDFBF7]/10 border-[#FDFBF7]/30 text-[#FDFBF7]',
    virtue: 'Quiet Dedication & Penance',
    coffeePairing: 'Steamed Cardamom Oat Flat White',
    pairingDesc: 'Gentle micro-foamed oat milk, double ristretto pull, and freshly cracked green cardamom from Idukki hills.',
    notes: ['Zero Sugar', 'Organic Sprouted Oat', 'Washed Arabica']
  },
  {
    day: 3,
    name: 'Tritiya',
    avatar: 'Chandraghanta',
    colorName: 'Sindoor Vermilion Red',
    colorHex: '#8B1E1E',
    accentBg: 'bg-[#8B1E1E]/20 border-[#8B1E1E]/40 text-[#E58080]',
    virtue: 'Courage, Radiance & Grace',
    coffeePairing: 'Cascara Blood Orange Cold Brew Spritz',
    pairingDesc: 'Sun-dried coffee cherry cascara infusion charged with sparkling blood orange botanical tonic.',
    notes: ['Natural Antioxidants', 'Nagpur Orange Terroir', 'Effervescent']
  },
  {
    day: 4,
    name: 'Chaturthi',
    avatar: 'Kushmanda',
    colorName: 'Peacock Ocean Blue',
    colorHex: '#0D4C59',
    accentBg: 'bg-[#0D4C59]/20 border-[#0D4C59]/40 text-[#40C4DB]',
    virtue: 'Cosmic Creative Spark',
    coffeePairing: 'Blue Pea & Cardamom Cold Elixir',
    pairingDesc: 'Butterfly pea flower tea layered delicately over sweet vanilla condensed milk and chilled espresso.',
    notes: ['Dual Tone Layering', 'Aromatic Cardamom', 'Visual Alchemy']
  },
  {
    day: 5,
    name: 'Panchami',
    avatar: 'Skandamata',
    colorName: 'Warm Golden Sunshine',
    colorHex: '#D4AF37',
    accentBg: 'bg-[#D4AF37]/15 border-[#D4AF37]/40 text-[#D4AF37]',
    virtue: 'Maternal Grace & Deep Care',
    coffeePairing: 'Almond Haldi Cinnamon Cortado',
    pairingDesc: 'Artisanal golden turmeric, single-origin espresso, steamed almond milk, and Ceylon cinnamon dust.',
    notes: ['Warming Spices', 'Anti-inflammatory', 'Comforting Finish']
  },
  {
    day: 6,
    name: 'Shashti',
    avatar: 'Katyayani',
    colorName: 'Jade Forest Green',
    colorHex: '#1B4D3E',
    accentBg: 'bg-[#1B4D3E]/20 border-[#1B4D3E]/40 text-[#52D3A8]',
    virtue: 'Fierce Passion & Unbending Truth',
    coffeePairing: 'First-Harvest Kyoto Ceremonial Matcha',
    pairingDesc: 'Stoneground imperial green tea from Uji, whisked traditionally with bamboo chasen at 80°C.',
    notes: ['Stoneground Uji', 'High L-Theanine', 'Electric Jade Foam']
  },
  {
    day: 7,
    name: 'Saptami',
    avatar: 'Kaalratri',
    colorName: 'Deep Obsidian Plum',
    colorHex: '#2D0B20',
    accentBg: 'bg-[#2D0B20]/40 border-[#D4AF37]/30 text-[#E0A0CE]',
    virtue: 'Unstoppable Power & Transformation',
    coffeePairing: 'Eclipse Double Ristretto on 85% Dark Cacao',
    pairingDesc: 'Dense 22-second espresso extraction poured directly over shaved dark single-origin chocolate bitters.',
    notes: ['Deep Roast Clarity', 'Valrhona Bitters', 'Complex Body']
  },
  {
    day: 8,
    name: 'Ashtami',
    avatar: 'Mahagauri',
    colorName: 'Blush Rose & Warm Pink',
    colorHex: '#C05C7E',
    accentBg: 'bg-[#C05C7E]/20 border-[#C05C7E]/40 text-[#FFAEC7]',
    virtue: 'Serene Purity & Renewal',
    coffeePairing: 'Kannauj Rose Petal & Pistachio Velvet Latte',
    pairingDesc: 'Organic steam-distilled Kannauj rose essence with slow-textured farm milk and crushed green pistachio.',
    notes: ['Kannauj Rose Mist', 'Iranian Pistachio', 'Sublime Floral Balance']
  },
  {
    day: 9,
    name: 'Navami',
    avatar: 'Siddhidatri',
    colorName: 'Imperial Peacock Green',
    colorHex: '#0F5257',
    accentBg: 'bg-[#0F5257]/20 border-[#D4AF37]/40 text-[#4EE5D0]',
    virtue: 'Ultimate Fulfillment & Celebration',
    coffeePairing: 'Caelio Grand Reserve 24K Saffron Espresso Flight',
    pairingDesc: 'A celebratory 3-stage tasting: single-origin espresso shot, kesar palate cleanser, and chilled saffron affogato.',
    notes: ['3-Course Tasting', 'Edible 24k Gold', 'Festive Climax']
  }
];

export function NavratriShaktiExperience() {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);
  const activeDay = shaktiDays.find((d) => d.day === selectedDay) || shaktiDays[0];

  const startGarbaBeats = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.2, ctx.currentTime);
      masterGain.connect(ctx.destination);

      // Warm Tanpura Drone
      const droneOsc = ctx.createOscillator();
      const droneGain = ctx.createGain();
      droneOsc.type = 'triangle';
      droneOsc.frequency.setValueAtTime(146.83, ctx.currentTime);
      droneGain.gain.setValueAtTime(0.08, ctx.currentTime);
      droneOsc.connect(droneGain);
      droneGain.connect(masterGain);
      droneOsc.start();

      let beatStep = 0;
      const stepTimeMs = 380;

      const playDholStep = () => {
        const now = ctx.currentTime;
        beatStep = (beatStep + 1) % 8;

        if (beatStep === 0 || beatStep === 4) {
          const bassOsc = ctx.createOscillator();
          const bassGain = ctx.createGain();
          bassOsc.type = 'sine';
          bassOsc.frequency.setValueAtTime(82, now);
          bassOsc.frequency.exponentialRampToValueAtTime(42, now + 0.25);
          bassGain.gain.setValueAtTime(0.7, now);
          bassGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
          bassOsc.connect(bassGain);
          bassGain.connect(masterGain);
          bassOsc.start(now);
          bassOsc.stop(now + 0.35);
        }

        if (beatStep === 2 || beatStep === 4 || beatStep === 6) {
          const snareOsc = ctx.createOscillator();
          const snareGain = ctx.createGain();
          snareOsc.type = 'triangle';
          snareOsc.frequency.setValueAtTime(320, now);
          snareOsc.frequency.exponentialRampToValueAtTime(110, now + 0.08);
          snareGain.gain.setValueAtTime(0.35, now);
          snareGain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
          snareOsc.connect(snareGain);
          snareGain.connect(masterGain);
          snareOsc.start(now);
          snareOsc.stop(now + 0.09);
        }

        if (beatStep % 2 === 1) {
          const chimeOsc = ctx.createOscillator();
          const chimeGain = ctx.createGain();
          chimeOsc.type = 'sine';
          chimeOsc.frequency.setValueAtTime(1200 + (beatStep * 50), now);
          chimeGain.gain.setValueAtTime(0.04, now);
          chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
          chimeOsc.connect(chimeGain);
          chimeGain.connect(masterGain);
          chimeOsc.start(now);
          chimeOsc.stop(now + 0.06);
        }
      };

      const timerId = window.setInterval(playDholStep, stepTimeMs);
      intervalRef.current = timerId;
      setIsPlayingAudio(true);
    } catch (e) {
      console.error('Audio synthesizer error:', e);
      setIsPlayingAudio(false);
    }
  };

  const stopGarbaBeats = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
    }
    setIsPlayingAudio(false);
  };

  const toggleAudio = () => {
    if (isPlayingAudio) {
      stopGarbaBeats();
    } else {
      startGarbaBeats();
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      if (audioContextRef.current) audioContextRef.current.close().catch(() => {});
    };
  }, []);

  return (
    <section id="navratri-experience" className="relative py-28 md:py-36 px-6 md:px-12 bg-[#1C040B] text-[#FDFBF7] border-b border-[#D4AF37]/25 overflow-hidden">
      {/* Decorative Traditional Rangoli Radial Patterns in Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full border border-[#D4AF37]/15 opacity-40 pointer-events-none animate-spin-slow" />
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] rounded-full border border-[#D4AF37]/10 opacity-30 pointer-events-none animate-spin-slow" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#8B1E1E]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-[#D97706]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        
        {/* SECTION HEADER: The Core Creative Thought */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#2A0812] border border-[#D4AF37]/40 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
              Caelio Navratri · Temporary Seasonal Experience
            </span>
          </div>

          <h2 
            className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#FFF9F5] leading-[1.05] tracking-tight"
            style={{ fontFamily: '"Times New Roman MT", "Times New Roman", "Playfair Display", serif' }}
          >
            Celebrate Shakti. <br />
            <span className="shakti-gradient-text italic font-serif">Celebrate Her. Celebrate Together.</span>
          </h2>

          <p className="font-serif italic text-lg sm:text-2xl text-[#E5C158] max-w-2xl mx-auto leading-relaxed">
            &ldquo;Where every beat celebrates Shakti.&rdquo;
          </p>

          <p className="font-sans text-sm sm:text-base text-[#EADBCE]/80 max-w-2xl mx-auto leading-relaxed">
            Navratri is not merely a festival. It is the eternal celebration of <strong>Shakti</strong> — the sublime, fearless, and nurturing creative power embodied by women. We bring this sacred energy alive through royal Indian spices, artisanal single-origin coffees, and an open-door midnight sanctuary for Nagpur.
          </p>

          {/* Festive Ambient Soundscape Toggle */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={toggleAudio}
              className={`inline-flex items-center gap-3 px-5 py-3 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 shadow-xl border ${
                isPlayingAudio 
                  ? 'bg-[#D4AF37] text-[#1C040B] border-[#D4AF37] font-bold' 
                  : 'bg-[#2A0812] text-[#FDFBF7] border-[#D4AF37]/40 hover:border-[#D4AF37] hover:bg-[#3D0818]'
              }`}
              aria-label="Toggle Garba Beats Ambient Sound"
            >
              {isPlayingAudio ? (
                <>
                  <Volume2 size={16} className="animate-bounce" />
                  <span>Garba Dhol Beats Playing</span>
                  <span className="flex gap-0.5 items-end h-3">
                    <span className="w-0.5 h-3 bg-[#1C040B] animate-pulse" />
                    <span className="w-0.5 h-2 bg-[#1C040B] animate-pulse delay-75" />
                    <span className="w-0.5 h-3.5 bg-[#1C040B] animate-pulse delay-150" />
                  </span>
                </>
              ) : (
                <>
                  <Music size={16} className="text-[#D4AF37]" />
                  <span>Play Ambient Garba Beats 🪘</span>
                </>
              )}
            </button>

            <Link
              href="#midnight-sanctuary"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono uppercase tracking-wider bg-transparent border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
            >
              <Moon size={14} />
              <span>Midnight Garba Cafe (Till 2 AM)</span>
            </Link>
          </div>
        </div>

        {/* FEATURE MODULE 1: THE NINE NIGHTS OF SHAKTI */}
        <div className="bg-[#2A0812]/70 rounded-3xl border border-[#D4AF37]/30 p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#D4AF37]/20 pb-6">
              <div>
                <span className="text-[#D4AF37] font-mono text-[10px] uppercase tracking-[0.3em] block mb-1">
                  Sacred Daily Rituals
                </span>
                <h3 
                  className="text-3xl md:text-5xl font-serif text-[#FFF9F5]"
                  style={{ fontFamily: '"Times New Roman MT", "Times New Roman", serif' }}
                >
                  The Nine Nights of Shakti
                </h3>
              </div>
              <p className="font-serif italic text-sm text-[#C1B19B] max-w-sm">
                Each day honors a divine avatar of Mata Rani, paired with a bespoke single-estate brew crafted for its cosmic energy.
              </p>
            </div>

            {/* 9 Days Selector Bar */}
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 pb-2">
              {shaktiDays.map((item) => {
                const isCurrent = item.day === selectedDay;
                return (
                  <button
                    key={item.day}
                    onClick={() => setSelectedDay(item.day)}
                    className={`flex flex-col items-center p-3 rounded-xl border text-center transition-all duration-300 relative ${
                      isCurrent
                        ? 'bg-[#3D0818] border-[#D4AF37] shadow-lg scale-102'
                        : 'bg-[#180309]/80 border-white/5 hover:border-[#D4AF37]/40 text-[#C1B19B]'
                    }`}
                  >
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#D4AF37] block">
                      Day 0{item.day}
                    </span>
                    <span className="font-serif text-sm font-semibold text-[#FFF9F5] mt-1 truncate w-full">
                      {item.avatar}
                    </span>
                    <div 
                      className="w-3.5 h-3.5 rounded-full mt-2 border border-white/40 shadow-sm"
                      style={{ backgroundColor: item.colorHex }}
                      title={`Color: ${item.colorName}`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Active Day Detail Spotlight Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay.day}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4"
              >
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border ${activeDay.accentBg}`}>
                      Day {activeDay.day} · {activeDay.name}
                    </span>
                    <span className="font-mono text-xs text-[#E5C158] flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeDay.colorHex }} />
                      Traditional Color: {activeDay.colorName}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 
                      className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FFF9F5]"
                      style={{ fontFamily: '"Times New Roman MT", "Times New Roman", serif' }}
                    >
                      Mata {activeDay.avatar}
                    </h4>
                    <p className="font-serif italic text-lg text-[#D4AF37]">
                      &ldquo;{activeDay.virtue}&rdquo;
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#180309] border border-[#D4AF37]/25 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">
                        Sacred Coffee Pairing
                      </span>
                      <Sparkles size={14} className="text-[#D4AF37]" />
                    </div>
                    <strong className="font-serif text-xl sm:text-2xl text-[#FFF9F5] block">
                      {activeDay.coffeePairing}
                    </strong>
                    <p className="font-sans text-xs sm:text-sm text-[#C1B19B] leading-relaxed">
                      {activeDay.pairingDesc}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {activeDay.notes.map((note) => (
                        <span key={note} className="text-[11px] font-mono text-[#D4AF37] px-2.5 py-1 rounded bg-[#2A0812] border border-[#D4AF37]/20">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <Link
                      href="/contact"
                      className="px-6 py-3 bg-[#D4AF37] text-[#1C040B] font-mono text-xs uppercase tracking-widest font-bold rounded-sm hover:bg-[#FDFBF7] transition-colors shadow-lg"
                    >
                      Reserve For Day {activeDay.day}
                    </Link>
                    <Link
                      href="/menu"
                      className="px-6 py-3 border border-[#D4AF37]/40 text-[#FDFBF7] font-mono text-xs uppercase tracking-widest hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                    >
                      View Full Festival Menu
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#D4AF37]/35 shadow-2xl bg-[#180309]">
                    <Image
                      src={
                        activeDay.day % 2 === 1 
                          ? '/images/navratri_saffron_coffee.jpg' 
                          : '/images/navratri_vrat_gourmet.jpg'
                      }
                      alt={activeDay.coffeePairing}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#180309] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#2A0812]/90 backdrop-blur-md border border-[#D4AF37]/30 flex items-center justify-between">
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#D4AF37] block">
                          Day {activeDay.day} Essence
                        </span>
                        <span className="font-serif text-sm text-[#FFF9F5] font-medium">
                          {activeDay.avatar} · {activeDay.colorName}
                        </span>
                      </div>
                      <div 
                        className="w-5 h-5 rounded-full border border-white"
                        style={{ backgroundColor: activeDay.colorHex }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* FEATURE MODULE 2: POST-GARBA MIDNIGHT SANCTUARY */}
        <div id="midnight-sanctuary" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative aspect-[16/11] rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-[#180309]">
              <Image
                src="/images/navratri_garba_midnight.jpg"
                alt="Post-Garba Midnight Sanctuary at Caelio Coffee"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C040B] via-transparent to-transparent opacity-75" />
            </div>

            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[#2A0812] border border-[#D4AF37]/50 p-5 rounded-2xl shadow-2xl max-w-xs space-y-1.5">
              <span className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-widest block flex items-center gap-1.5">
                <Clock size={12} />
                Sanctuary Hours: 8:00 AM – 2:00 AM
              </span>
              <p className="font-serif italic text-sm text-[#FDFBF7]">
                Open daily from <strong>8:00 AM</strong> until <strong>02:00 AM</strong> with late-night Garba sanctuary dining.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] font-mono text-[10px] uppercase tracking-widest">
              <Moon size={12} />
              <span>Nagpur Garba Culture</span>
            </div>

            <h3 
              className="text-3xl sm:text-5xl font-serif text-[#FFF9F5] leading-tight"
              style={{ fontFamily: '"Times New Roman MT", "Times New Roman", serif' }}
            >
              From the Garba Grounds <br />
              <span className="text-[#D4AF37] italic font-serif">To Calm Midnight Coffee</span>
            </h3>

            <p className="font-sans text-sm sm:text-base text-[#C1B19B] leading-relaxed">
              Nagpur dances with unmatched devotion, swirl, and heartbeat. When the final dhol crescendo fades and your Dandiya sticks rest, the evening doesn&apos;t end — it evolves into quiet laughter, shared stories, and soothing warmth.
            </p>

            <div className="space-y-3 font-sans text-xs sm:text-sm text-[#EADBCE]">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#2A0812]/60 border border-[#D4AF37]/20">
                <Check size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span><strong>Cooling Botanical Hydration:</strong> Cascara spritzes, iced Kannauj rose matcha, and chilled tender coconut cold brew to replenish after vigorous Garba.</span>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#2A0812]/60 border border-[#D4AF37]/20">
                <Check size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span><strong>No Loud Blaring Speakers:</strong> Soft acoustic melodies and gentle jazz allow genuine conversation with your friends and family.</span>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#2A0812]/60 border border-[#D4AF37]/20">
                <Check size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span><strong>Dressed in Traditional Attire?</strong> You are warmly welcomed with respectful hospitality, group tables, and festive photography spots.</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-[#D4AF37] text-[#1C040B] font-mono text-xs uppercase tracking-widest font-bold rounded-sm hover:bg-[#FDFBF7] transition-all shadow-xl"
              >
                Book Dandiya Group Table
              </Link>
              <a
                href="https://share.google/UOD2FOpGrNZ5a01WK"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-[#D4AF37]/40 text-[#FDFBF7] font-mono text-xs uppercase tracking-widest hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
              >
                <span>Navigate to Nandanvan</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* FEATURE MODULE 3: FESTIVE & VRAT ARTISANAL MENU */}
        <div id="festive-offerings" className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#D4AF37] font-mono text-[10px] uppercase tracking-[0.3em] block">
              Pure Devotion · European Technique
            </span>
            <h3 
              className="text-3xl sm:text-5xl font-serif text-[#FFF9F5]"
              style={{ fontFamily: '"Times New Roman MT", "Times New Roman", serif' }}
            >
              Navratri Seasonal Tasting Menu
            </h3>
            <p className="font-serif italic text-sm sm:text-base text-[#C1B19B]">
              Prepared with strict fast-friendly ingredients: Amaranth, Water Chestnut (Shinghara), Makhana, Himalayan Rock Salt (Sendha Namak), and Pure Kashmiri Saffron.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dish 1 */}
            <div className="group bg-[#2A0812] rounded-2xl overflow-hidden border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all duration-500 shadow-xl flex flex-col justify-between">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/navratri_saffron_coffee.jpg"
                  alt="Kesar Saffron Nitro Cold Brew"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-106 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A0812] via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1C040B]/90 border border-[#D4AF37]/40 text-[#D4AF37] font-mono text-[9px] uppercase tracking-wider">
                  24k Gold Shimmer
                </span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-serif text-xl font-medium text-[#FFF9F5]">
                    Kesar Saffron Nitro Brew
                  </h4>
                  <span className="font-mono text-sm font-bold text-[#D4AF37]">₹260</span>
                </div>
                <p className="font-sans text-xs text-[#C1B19B] leading-relaxed">
                  Single-origin Coorg nitro cold brew steeped with whole Kashmiri saffron, crowned with cardamom cream foam and edible gold leaf.
                </p>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#D4AF37]">
                  <span>Vrat-Friendly · Sugar-Free Optional</span>
                  <Sparkles size={12} />
                </div>
              </div>
            </div>

            {/* Dish 2 */}
            <div className="group bg-[#2A0812] rounded-2xl overflow-hidden border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all duration-500 shadow-xl flex flex-col justify-between">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/navratri_vrat_gourmet.jpg"
                  alt="Crispy Amaranth & Chestnut Galette"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-106 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A0812] via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1C040B]/90 border border-[#D4AF37]/40 text-[#D4AF37] font-mono text-[9px] uppercase tracking-wider">
                  Artisanal Vrat Kitchen
                </span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-serif text-xl font-medium text-[#FFF9F5]">
                    Amaranth & Chestnut Galette
                  </h4>
                  <span className="font-mono text-sm font-bold text-[#D4AF37]">₹290</span>
                </div>
                <p className="font-sans text-xs text-[#C1B19B] leading-relaxed">
                  Crispy water chestnut & amaranth sourdough-style crust topped with creamy goat cheese, fresh pomegranate seeds, and roasted walnuts.
                </p>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#D4AF37]">
                  <span>Pure Sendha Namak · 100% Vrat</span>
                  <ShieldCheck size={12} />
                </div>
              </div>
            </div>

            {/* Dish 3 */}
            <div className="group bg-[#2A0812] rounded-2xl overflow-hidden border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all duration-500 shadow-xl flex flex-col justify-between">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/navratri_shakti_portrait.jpg"
                  alt="Rose Petal & Pistachio Milk Velvet"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-106 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A0812] via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1C040B]/90 border border-[#D4AF37]/40 text-[#D4AF37] font-mono text-[9px] uppercase tracking-wider">
                  Kannauj Distillation
                </span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-serif text-xl font-medium text-[#FFF9F5]">
                    Rose & Pistachio Milk Velvet
                  </h4>
                  <span className="font-mono text-sm font-bold text-[#D4AF37]">₹230</span>
                </div>
                <p className="font-sans text-xs text-[#C1B19B] leading-relaxed">
                  Steamed whole milk or oat milk infused with steam-distilled Damascus rose essence, cardamom, and toasted pistachio crumble.
                </p>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#D4AF37]">
                  <span>Caffeine-Free Night Cap</span>
                  <Heart size={12} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
