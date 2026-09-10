'use client';

import React, { useState, useEffect } from 'react';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  RefreshCw, 
  FileText, 
  Settings, 
  BarChart3, 
  LogOut, 
  ExternalLink,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Clock,
  Eye,
  Database
} from 'lucide-react';
import Image from 'next/image';

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        router.push('/admin/login');
      } else {
        setUser(u);
        fetchPosts();
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/blog?limit=20');
      const data = await res.json();
      if (Array.isArray(data)) setPosts(data);
    } catch (error) {
      console.error('Fetch Error:', error);
    }
  };

  const handleGenerate = async () => {
    setGenerating(true);
    setMessage(null);
    try {
      const token = await user?.getIdToken();
      const res = await fetch('/api/admin/blog/generate', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await res.json();
      
      if (res.ok) {
        setMessage({ type: 'success', text: `Successfully generated: ${data.title}` });
        fetchPosts();
      } else {
        throw new Error(data.error || 'Generation failed');
      }
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setGenerating(false);
    }
  };

  const handleLogout = () => auth.signOut();

  if (loading) return null;

  return (
    <main className="min-h-screen bg-[#FFF9F5] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#3B1F14] text-[#F4E7D7] flex flex-col p-6 fixed h-full">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-8 bg-[#A37945] rounded-lg flex items-center justify-center font-serif text-white">C</div>
          <span className="font-serif text-xl tracking-tight">Caelio Admin</span>
        </div>

        <nav className="space-y-2 flex-grow">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#A37945] rounded-xl text-xs font-mono uppercase tracking-widest text-white">
            <FileText size={16} /> Journal Posts
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#A37945]/20 rounded-xl text-xs font-mono uppercase tracking-widest text-[#C1B19B] transition-all">
            <BarChart3 size={16} /> Analytics
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#A37945]/20 rounded-xl text-xs font-mono uppercase tracking-widest text-[#C1B19B] transition-all">
            <Database size={16} /> Knowledge Base
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#A37945]/20 rounded-xl text-xs font-mono uppercase tracking-widest text-[#C1B19B] transition-all">
            <Settings size={16} /> Settings
          </button>
        </nav>

        <div className="pt-6 border-t border-[#A37945]/20 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#F4E7D7]/10 flex items-center justify-center">
              <Image 
                src={user?.photoURL || ''} 
                alt="Profile" 
                width={32} 
                height={32} 
                className="rounded-full"
                unoptimized
              />
            </div>
            <div className="overflow-hidden">
              <p className="text-[10px] font-bold truncate">{user?.displayName}</p>
              <p className="text-[8px] text-[#C1B19B] truncate">{user?.email}</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2 hover:text-white text-[#C1B19B] text-[10px] font-mono uppercase tracking-widest transition-all"
          >
            <LogOut size={14} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <section className="flex-grow ml-64 p-10">
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="font-serif text-3xl text-[#3B1F14] mb-1">Journal Management</h1>
            <p className="text-xs text-[#3B1F14]/50 font-mono uppercase tracking-widest">AI Daily Content Engine Dashboard</p>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={handleGenerate}
              disabled={generating}
              className="flex items-center gap-2 px-6 py-3 bg-[#3B1F14] text-[#F4E7D7] rounded-xl text-xs font-mono uppercase tracking-widest hover:bg-[#A37945] transition-all disabled:opacity-50"
            >
              {generating ? <Loader2 size={16} className="animate-spin" /> : <RefreshCw size={16} />}
              {generating ? 'Brewing Article...' : 'Trigger Daily Blog'}
            </button>
          </div>
        </header>

        {/* Status Messages */}
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`mb-8 p-4 rounded-xl flex items-center gap-3 border ${
                message.type === 'success' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-rose-50 text-rose-800 border-rose-200'
              }`}
            >
              {message.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
              <span className="text-xs font-medium">{message.text}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-[#C1B19B]/30 shadow-sm">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#A37945] mb-2">Total Articles</p>
            <h3 className="font-serif text-3xl text-[#3B1F14]">{posts.length}</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#C1B19B]/30 shadow-sm">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#A37945] mb-2">Scheduled Posts</p>
            <h3 className="font-serif text-3xl text-[#3B1F14]">0</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#C1B19B]/30 shadow-sm">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#A37945] mb-2">AI Cycles Used</p>
            <h3 className="font-serif text-3xl text-[#3B1F14]">{posts.length * 2}</h3>
          </div>
        </div>

        {/* Posts Table */}
        <div className="bg-white rounded-3xl border border-[#C1B19B]/30 overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-[#FFF9F5] border-b border-[#C1B19B]/30">
              <tr>
                <th className="px-6 py-4 text-[10px] font-mono uppercase tracking-widest text-[#A37945]">Article</th>
                <th className="px-6 py-4 text-[10px] font-mono uppercase tracking-widest text-[#A37945]">Status</th>
                <th className="px-6 py-4 text-[10px] font-mono uppercase tracking-widest text-[#A37945]">Published</th>
                <th className="px-6 py-4 text-[10px] font-mono uppercase tracking-widest text-[#A37945]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#C1B19B]/20">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-[#FFF9F5]/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-[#F4E7D7]">
                        <Image src={post.heroImage} alt="" fill className="object-cover" unoptimized />
                      </div>
                      <div>
                        <p className="text-sm font-serif text-[#3B1F14]">{post.title}</p>
                        <p className="text-[10px] text-[#A37945] font-mono uppercase tracking-wider">{post.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-mono uppercase tracking-widest rounded-md border border-emerald-100">
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-[10px] text-[#3B1F14]/60 font-mono">
                      <Clock size={12} />
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <Link href={`/blog/${post.slug}`} target="_blank" className="p-2 hover:bg-[#3B1F14] hover:text-white rounded-lg transition-all text-[#3B1F14]">
                        <Eye size={16} />
                      </Link>
                      <button className="p-2 hover:bg-[#3B1F14] hover:text-white rounded-lg transition-all text-[#3B1F14]">
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {posts.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-20 text-center text-xs text-[#3B1F14]/50 font-mono uppercase tracking-widest">
                    No articles found. Trigger the engine to brew some content.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
