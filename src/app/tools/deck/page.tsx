"use client";
import Link from 'next/link';
import { ArrowLeft, Layers, AlertTriangle, Zap, Star } from 'lucide-react';
import { DECK_INFO } from '@/data/general_rules';

export default function DeckPage() {
  return (
    <div className="min-h-screen bg-[#0a0c10] p-4 pb-20 pt-20 relative">
      <div className="absolute top-6 left-6 z-40">
          <Link href="/" className="text-gray-500 hover:text-white flex items-center gap-2 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5" /> Menu
          </Link>
      </div>

      <div className="max-w-2xl mx-auto space-y-8">
         <div className="text-center">
            <h1 className="text-3xl font-black text-white mb-2">Deck Reference</h1>
            <p className="text-gray-500">Comparing the shared decks</p>
         </div>

         <div className="grid md:grid-cols-2 gap-6">
            {/* Standard */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
               <div className="flex items-center gap-2 mb-4">
                  <Layers className="w-5 h-5 text-blue-500" />
                  <h2 className="text-xl font-bold text-white">Standard Deck</h2>
               </div>
               <p className="text-gray-400 text-sm mb-4">{DECK_INFO.standard.desc}</p>

               <div className="space-y-4">
                  <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-800/50">
                     <h3 className="font-bold text-blue-300 text-sm mb-1 flex items-center gap-2">
                       <Star className="w-4 h-4" />
                       Favor of the [Suit]
                     </h3>
                     <p className="text-xs text-gray-400">Removes ALL enemy pieces (warriors, buildings, tokens) from clearings of the matching suit.</p>
                  </div>

                  <div className="space-y-2">
                     <h4 className="font-bold text-white text-sm">Key Features:</h4>
                     <ul className="space-y-1 text-sm text-gray-300">
                        <li>• <strong>Ambush:</strong> 5 cards (1/suit + 2 birds)</li>
                        <li>• <strong>Dominance:</strong> 4 cards</li>
                        <li>• <strong>Item Crafting:</strong> Focus on VP generation</li>
                        <li>• <strong>Stand and Deliver:</strong> Card draw mechanics</li>
                     </ul>
                  </div>

                  <div className="bg-gray-800 p-3 rounded-lg">
                     <p className="text-xs text-gray-400">Best for players who enjoy dramatic board resets and high-impact plays.</p>
                  </div>
               </div>
            </div>

            {/* Exiles */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
               <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-orange-500" />
                  <h2 className="text-xl font-bold text-white">Exiles & Partisans</h2>
               </div>
               <p className="text-gray-400 text-sm mb-4">{DECK_INFO.exiles.desc}</p>

               <div className="space-y-4">
                  <div className="bg-orange-900/20 p-3 rounded-lg border border-orange-800/50">
                     <h3 className="font-bold text-orange-300 text-sm mb-1 flex items-center gap-2">
                       <Zap className="w-4 h-4" />
                       Partisan Cards
                     </h3>
                     <p className="text-xs text-gray-400">Deal extra hits in battle but require discarding matching cards from hand.</p>
                  </div>

                  <div className="bg-gray-800 p-3 rounded-lg">
                     <h4 className="font-bold text-white text-sm mb-2">Key Cards:</h4>
                     <ul className="space-y-1 text-xs text-gray-400">
                        <li>• <strong>Coffin Makers:</strong> Score points when warriors die</li>
                        <li>• <strong>Corvid Planners:</strong> Move without ruling clearings</li>
                        <li>• <strong>False Orders:</strong> Force enemy warrior movement</li>
                        <li>• <strong>Root's Teaching:</strong> Card tutoring effect</li>
                        <li>• <strong>Analyze:</strong> Look at opponent's hand</li>
                     </ul>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-gray-500 bg-amber-900/10 p-3 rounded-lg border border-amber-800/30">
                     <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                     <div>
                        <strong className="text-amber-400">Replaces all Favor cards</strong>
                        <p className="mt-1">Generally preferred for competitive play due to more nuanced strategic options.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Comparison Summary */}
         <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Quick Comparison</h3>
            <div className="grid md:grid-cols-2 gap-6">
               <div>
                  <h4 className="text-blue-300 font-bold mb-2">Standard Deck</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                     <li>✓ High impact, board-resetting plays</li>
                     <li>✓ Simpler card interactions</li>
                     <li>✓ Dramatic swing potential</li>
                     <li>⚠ Less strategic depth</li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-orange-300 font-bold mb-2">Exiles & Partisans</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                     <li>✓ More nuanced strategies</li>
                     <li>✓ Player interaction focused</li>
                     <li>✓ Resource management depth</li>
                     <li>⚠ Requires card tracking</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}