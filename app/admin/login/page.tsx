'use client';

import React, { useState, useEffect } from 'react';
import { auth, googleAuthProvider } from '@/lib/firebase';
import { signInWithPopup, onAuthStateChanged, User } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Coffee, Lock, ShieldCheck } from 'lucide-react';

export default function AdminLoginPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
      if (u) router.push('/admin/blog');
    });
    return () => unsubscribe();
  }, [router]);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  if (loading) return null;

  return (
    <main className="min-h-screen bg-[#3B1F14] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-[#FFF9F5] rounded-3xl p-10 shadow-2xl space-y-8 text-center"
      >
        <div className="w-16 h-16 bg-[#3B1F14] rounded-2xl flex items-center justify-center mx-auto text-[#A37945]">
          <Coffee size={32} />
        </div>
        
        <div className="space-y-2">
          <h1 className="font-serif text-3xl text-[#3B1F14]">Caelio Admin</h1>
          <p className="text-sm text-[#3B1F14]/60 font-light">
            Authorized access only. Please sign in to manage the AI Content Engine.
          </p>
        </div>

        <button
          onClick={handleLogin}
          className="w-full flex items-center justify-center gap-3 py-4 bg-[#3B1F14] text-[#F4E7D7] rounded-xl font-mono text-xs uppercase tracking-widest hover:bg-[#A37945] transition-all"
        >
          <Lock size={16} />
          Sign in with Google
        </button>

        <div className="flex items-center justify-center gap-2 text-[10px] text-[#A37945] uppercase tracking-widest font-mono">
          <ShieldCheck size={12} />
          Secure Enterprise Gateway
        </div>
      </motion.div>
    </main>
  );
}
