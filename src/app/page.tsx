"use client";

import Link from 'next/link';
import { Book, Calculator, Swords, Users, Play, BookOpen, Layers, RotateCcw, HelpCircle, PlayCircle, Sparkles, Gamepad2, Shield, MapPin } from 'lucide-react';

export default function Home() {
  const clearData = () => {
    if (confirm("This will erase all saved progress and settings. Continue?")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <main className="bg-[#0a0c10] text-white p-6 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="py-8 space-y-4 text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="w-8 h-8 text-orange-400" />
          <h1 className="text-7xl font-black tracking-tighter bg-gradient-to-br from-white via-gray-200 to-gray-600 bg-clip-text text-transparent">
            ROOT
          </h1>
          <Sparkles className="w-8 h-8 text-orange-400" />
        </div>
        <h2 className="text-2xl font-light text-gray-400">Tactical Field Assistant v1.2</h2>
        <p className="text-gray-500 text-sm max-w-md mx-auto">Your comprehensive companion for mastering the woodland realms of Root</p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">

        {/* Large: Start Game */}
        <div className="md:col-span-2 lg:col-span-2">
          <Link href="/setup" className="block h-full bg-gradient-to-br from-orange-600/20 to-orange-800/10 backdrop-blur border border-orange-500/20 hover:border-orange-400/40 rounded-2xl p-8 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-6 right-6 w-24 h-24 bg-orange-500/10 rounded-full flex items-center justify-center">
              <PlayCircle className="w-12 h-12 text-orange-400 group-hover:text-orange-300 transition-colors" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <Gamepad2 className="w-6 h-6 text-orange-400" />
                <span className="text-xs font-bold text-orange-300 uppercase tracking-wider">Main Action</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">Start Game</h3>
              <p className="text-orange-200/70 text-lg">Begin your woodland conquest with our unified setup wizard</p>
            </div>
          </Link>
        </div>

        {/* Large: Faction Guides */}
        <div className="md:col-span-1 lg:col-span-2">
          <Link href="/play" className="block h-full bg-gradient-to-br from-blue-600/20 to-blue-800/10 backdrop-blur border border-blue-500/20 hover:border-blue-400/40 rounded-2xl p-8 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-6 right-6 w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center">
              <BookOpen className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-blue-400" />
                <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">Learning Hub</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">Faction Guides</h3>
              <p className="text-blue-200/70 text-lg">Master every faction with detailed strategy guides</p>
            </div>
          </Link>
        </div>

        {/* Tools: Battle Sim */}
        <Link href="/tools/battle" className="bg-gray-900/40 backdrop-blur border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-4 right-4 w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center">
            <Swords className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors" />
          </div>
          <div className="relative z-10">
            <h4 className="text-xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">Battle Sim</h4>
            <p className="text-gray-400 text-sm">Calculate combat outcomes</p>
          </div>
        </Link>

        {/* Tools: Glossary */}
        <Link href="/tools/glossary" className="bg-gray-900/40 backdrop-blur border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-4 right-4 w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center">
            <Book className="w-8 h-8 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
          </div>
          <div className="relative z-10">
            <h4 className="text-xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">Glossary</h4>
            <p className="text-gray-400 text-sm">Keywords & rules reference</p>
          </div>
        </Link>

        {/* Tools: Hirelings */}
        <Link href="/tools/hirelings" className="bg-gray-900/40 backdrop-blur border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-4 right-4 w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center">
            <Users className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
          </div>
          <div className="relative z-10">
            <h4 className="text-xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">Hirelings</h4>
            <p className="text-gray-400 text-sm">Manage your woodland allies</p>
          </div>
        </Link>

        {/* Tools: Decks & Rules */}
        <Link href="/tools/deck" className="bg-gray-900/40 backdrop-blur border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-4 right-4 w-16 h-16 bg-purple-400/10 rounded-full flex items-center justify-center">
            <Layers className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
          </div>
          <div className="relative z-10">
            <h4 className="text-xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">Decks & Rules</h4>
            <p className="text-gray-400 text-sm">Card management & rulebook</p>
          </div>
        </Link>

        {/* Tools: App Guide */}
        <Link href="/tools/app-guide" className="bg-gray-900/40 backdrop-blur border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-4 right-4 w-16 h-16 bg-gray-500/10 rounded-full flex items-center justify-center">
            <HelpCircle className="w-8 h-8 text-gray-400 group-hover:text-gray-300 transition-colors" />
          </div>
          <div className="relative z-10">
            <h4 className="text-xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">App Guide</h4>
            <p className="text-gray-400 text-sm">Learn app features</p>
          </div>
        </Link>

        {/* Tools: Landmarks */}
        <Link href="/tools/landmarks" className="bg-gray-900/40 backdrop-blur border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-4 right-4 w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center">
            <MapPin className="w-8 h-8 text-amber-400 group-hover:text-amber-300 transition-colors" />
          </div>
          <div className="relative z-10">
            <h4 className="text-xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">Landmarks</h4>
            <p className="text-gray-400 text-sm">Marauder landmarks</p>
          </div>
        </Link>

        {/* Settings: Clear Progress */}
        <button
          onClick={clearData}
          className="bg-gray-900/40 backdrop-blur border border-white/5 hover:border-red-500/20 hover:bg-red-900/20 rounded-2xl p-6 transition-all duration-300 group relative overflow-hidden text-left"
        >
          <div className="absolute top-4 right-4 w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center">
            <RotateCcw className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors" />
          </div>
          <div className="relative z-10">
            <h4 className="text-xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">Reset Progress</h4>
            <p className="text-gray-400 text-sm">Clear all saved data</p>
          </div>
        </button>

      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Version</span>
          </div>
          <p className="text-blue-300 font-mono text-sm mb-6">1.2.0</p>
          <div className="text-xs text-gray-600 uppercase tracking-widest">
            <p>Root: The Woodland Game © Leder Games</p>
            <p className="mt-1">Companion App — Built with precision for tactical excellence</p>
            <p className="mt-1">
              Licensed under GNU AGPLv3 • Created by{' '}
              <a
                href="mailto:l.walek@proton.me"
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                Lukáš Walek
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}