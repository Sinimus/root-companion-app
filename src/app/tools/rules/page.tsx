"use client";
import Link from 'next/link';
import { ArrowLeft, BookOpen, Layers, Map, Users } from 'lucide-react';
import { GOLDEN_RULES, DECK_INFO } from '@/data/general_rules';

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-[#0a0c10] p-4 pb-20 pt-20 relative">
      <div className="absolute top-6 left-6 z-40">
          <Link href="/" className="text-gray-500 hover:text-white flex items-center gap-2 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5" /> Menu
          </Link>
      </div>

      <div className="max-w-2xl mx-auto space-y-8">

        {/* Golden Rules */}
        <section className="space-y-4">
           <h2 className="text-2xl font-bold text-yellow-500 flex items-center gap-2">
             <BookOpen className="w-6 h-6" /> Golden Rules
           </h2>
           <div className="grid gap-3">
             {GOLDEN_RULES.map((rule, i) => (
               <div key={i} className="bg-gray-900/50 border border-gray-800 p-4 rounded-xl">
                 <h3 className="text-white font-bold mb-1">{rule.title}</h3>
                 <p className="text-gray-400 text-sm">{rule.text}</p>
               </div>
             ))}
           </div>
        </section>

        {/* Decks */}
        <section className="space-y-4">
           <h2 className="text-2xl font-bold text-blue-400 flex items-center gap-2">
             <Layers className="w-6 h-6" /> Deck Composition
           </h2>
           <div className="grid gap-4 md:grid-cols-2">
             <div className="bg-gray-900/50 border border-gray-800 p-5 rounded-xl">
                <h3 className="text-white font-bold text-lg mb-2">{DECK_INFO.standard.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{DECK_INFO.standard.desc}</p>
                <ul className="list-disc pl-4 space-y-1 text-xs text-gray-500">
                   {DECK_INFO.standard.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
             </div>
             <div className="bg-gray-900/50 border border-gray-800 p-5 rounded-xl">
                <h3 className="text-white font-bold text-lg mb-2">{DECK_INFO.exiles.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{DECK_INFO.exiles.desc}</p>
                <ul className="list-disc pl-4 space-y-1 text-xs text-gray-500">
                   {DECK_INFO.exiles.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
             </div>
           </div>
        </section>

        {/* Maps */}
        <section className="space-y-4">
           <h2 className="text-2xl font-bold text-emerald-400 flex items-center gap-2">
             <Map className="w-6 h-6" /> Map Rules
           </h2>
           <div className="grid gap-4">
             <div className="bg-gray-900/50 border border-gray-800 p-5 rounded-xl">
                <h3 className="text-white font-bold text-lg mb-2">Mountain Map</h3>
                <p className="text-gray-400 text-sm mb-2"><strong>The Pass:</strong> The central clearing (Tower) is the Pass. Whoever rules it at end of their Evening scores 1 VP.</p>
                <p className="text-gray-400 text-sm"><strong>Closed Paths:</strong> Paths with rubble are blocked. You can spend a card to clear rubble and score 1 VP.</p>
             </div>
             <div className="bg-gray-900/50 border border-gray-800 p-5 rounded-xl">
                <h3 className="text-white font-bold text-lg mb-2">Lake Map</h3>
                <p className="text-gray-400 text-sm mb-2"><strong>The Lake:</strong> The central lake is adjacent to all coastal clearings.</p>
                <p className="text-gray-400 text-sm"><strong>The Ferry:</strong> If you move from the Ferry clearing, you can move to ANY coastal clearing. You draw 1 card after moving.</p>
             </div>
           </div>
        </section>

        {/* Hirelings Brief */}
        <section className="space-y-4">
           <h2 className="text-2xl font-bold text-purple-400 flex items-center gap-2">
             <Users className="w-6 h-6" /> Hirelings
           </h2>
           <div className="bg-gray-900/50 border border-gray-800 p-5 rounded-xl">
              <p className="text-gray-400 text-sm mb-2">Hirelings are neutral factions that players can control for a short time. They unlock at 4, 8, and 12 VP.</p>
              <ul className="list-disc pl-4 space-y-1 text-xs text-gray-500">
                 <li><strong>Control:</strong> When you gain a Hireling, roll the Control Die to see how long you keep it.</li>
                 <li><strong>Limit:</strong> You lose 1 Control marker each turn. When empty, you pass the Hireling.</li>
                 <li><strong>Rule:</strong> Hirelings count for Rule but generally don't battle for you.</li>
              </ul>
           </div>
        </section>

      </div>
    </div>
  );
}