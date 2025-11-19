"use client";

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  PlayCircle,
  BookOpen,
  Users,
  Swords,
  Layers,
  HelpCircle,
  Shuffle,
  Target,
  Clock,
  Shield,
  TrendingUp
} from 'lucide-react';

export default function AppGuidePage() {
  return (
    <main className="min-h-screen bg-[#0a0c10] p-4 pb-20 pt-20">
      <div className="absolute top-6 left-6 z-40">
        <Link href="/" className="text-gray-500 hover:text-white flex items-center gap-2 transition-colors font-medium">
          <ArrowLeft className="w-5 h-5" /> Back to Menu
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-white mb-2 flex items-center justify-center gap-3">
            <HelpCircle className="w-10 h-10 text-blue-400" />
            App Guide
          </h1>
          <p className="text-gray-400">Complete guide to the Root Companion App</p>
        </div>

        {/* Game Setup Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-green-900/20 to-green-800/10 border border-green-800/50 rounded-xl p-6 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <PlayCircle className="w-7 h-7 text-green-400" />
              Game Setup
            </h2>

            <div className="space-y-6">
              {/* AdSet Draft */}
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-5">
                <h3 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">
                  <Shuffle className="w-5 h-5" />
                  AdSet Draft (Advanced Setup)
                </h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <p><strong>What it is:</strong> An advanced faction selection variant from the Law of Root expansion.</p>
                  <p><strong>How it works:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 ml-4">
                    <li><strong>Draft Order:</strong> Starts from the last player and moves backwards (Player 3 → Player 2 → Player 1)</li>
                    <li><strong>Pool System:</strong> One militant faction goes to a central pool</li>
                    <li><strong>Choice:</strong> Each player chooses either their dealt faction or the pool faction</li>
                    <li><strong>Dynamic Pool:</strong> If a player takes from pool, their dealt faction replaces it</li>
                  </ul>
                  <p><strong>When to use:</strong> For experienced players who want strategic faction selection beyond simple reach calculations.</p>
                </div>
              </div>

              {/* Reach Calculator */}
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-5">
                <h3 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Reach Calculator (Traditional Setup)
                </h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <p><strong>What it is:</strong> Traditional faction selection based on reach values for game balance.</p>
                  <p><strong>How it works:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 ml-4">
                    <li>Each faction has a reach value indicating its power level</li>
                    <li>Players can see all available factions and their reach values</li>
                    <li>The system helps ensure balanced faction distribution</li>
                    <li>Recommended for new players or balanced games</li>
                  </ul>
                  <p><strong>When to use:</strong> For new players or when you want guaranteed game balance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Faction Tools Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/10 border border-blue-800/50 rounded-xl p-6 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-blue-400" />
              Faction Tools
            </h2>

            <div className="space-y-6">
              {/* Vagabond */}
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-5">
                <h3 className="text-lg font-bold text-emerald-400 mb-3">Vagabond (Item Management)</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <p><strong>Automatic Features:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 ml-4">
                    <li><strong>Item States:</strong> Track items as Ready, Exhausted, or Damaged</li>
                    <li><strong>Birdsong Refresh:</strong> Automatically calculates refresh count: <code>3 + (Tea × 2)</code></li>
                    <li><strong>One-Click Refresh:</strong> Exhausted items become Ready with a single button</li>
                    <li><strong>Damage Tracking:</strong> Easy damage application and recovery</li>
                  </ul>
                  <p><strong>How it helps:</strong> Eliminates manual item counting and refresh calculations during Birdsong.</p>
                </div>
              </div>

              {/* Hundreds */}
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-5">
                <h3 className="text-lg font-bold text-red-400 mb-3">Lord of the Hundreds (Hoard Stats)</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <p><strong>Automatic Features:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 ml-4">
                    <li><strong>Stat Calculation:</strong> Automatic calculation based on Rule 14.2.4</li>
                    <li><strong>Formula:</strong> 0 items = 0, 1 item = 1, 2 items = 2, 3 items = 3, 4+ items = 4</li>
                    <li><strong>Real-time Updates:</strong> Stats update immediately when items are added/removed</li>
                    <li><strong>Type Tracking:</strong> Separate tracking for different item types</li>
                  </ul>
                  <p><strong>How it helps:</strong> No need to manually count hoard items or reference the stat chart during battles.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hirelings Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/10 border border-purple-800/50 rounded-xl p-6 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Users className="w-7 h-7 text-purple-400" />
              Hirelings
            </h2>

            <div className="space-y-4">
              {/* Promoted vs Demoted */}
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-5">
                <h3 className="text-lg font-bold text-yellow-400 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Promoted vs. Demoted Cards
                </h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <p><strong>Card Flip Mechanics:</strong> Hirelings can operate in two different states that you can switch between.</p>
                  <p><strong>States:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 ml-4">
                    <li><strong>Promoted (Active):</strong> Uses Control Markers and places pieces on the map. Gold border indicates active state.</li>
                    <li><strong>Demoted (Passive):</strong> Provides persistent abilities without pieces or markers. Silver/gray border indicates passive state.</li>
                  </ul>
                  <p><strong>How to Use:</strong> Click the flip button (↻) on active hirelings to toggle between promoted and demoted sides. Each side has different abilities and game effects.</p>
                </div>
              </div>

              {/* Control Markers */}
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-5">
                <h3 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Control Markers & Lifecycle
                </h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <p><strong>Automatic Tracking:</strong> The app handles the complete control marker lifecycle for promoted hirelings.</p>
                  <p><strong>Lifecycle Management:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 ml-4">
                    <li><strong>Hire:</strong> Sets default markers based on the hireling type (shown as "Default: X")</li>
                    <li><strong>Manual Adjustment:</strong> Add/remove individual markers as needed during gameplay</li>
                    <li><strong>End Turn Decay:</strong> Press the global decay button to remove 1 marker from ALL active promoted hirelings</li>
                    <li><strong>Release Warning:</strong> Visual alert when markers reach 0 (hireling is released)</li>
                  </ul>
                  <p><strong>How it helps:</strong> The global "End Turn Decay" button saves time by automatically managing all hireling markers at once, preventing manual bookkeeping errors.</p>
                </div>
              </div>

              {/* Faction Hirelings */}
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-5">
                <h3 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Faction Hirelings
                </h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <p><strong>Special Allies:</strong> Some hirelings are tied to specific factions and have special availability rules.</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 ml-4">
                    <li><strong>Forest Patrol:</strong> Faction-aligned hireling with specialized abilities</li>
                    <li><strong>Availability Rule:</strong> Faction hirelings are typically only available when their corresponding main faction is NOT in play</li>
                    <li><strong>Unique Abilities:</strong> Each faction hireling provides strategic advantages related to their faction's playstyle</li>
                  </ul>
                  <p><strong>How it helps:</strong> The app includes all hireling types so you can manage any alliance composition, including faction-specific combinations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Battle Sim Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-red-900/20 to-red-800/10 border border-red-800/50 rounded-xl p-6 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Swords className="w-7 h-7 text-red-400" />
              Battle Simulator
            </h2>

            <div className="space-y-4">
              {/* Faction Selection */}
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-5">
                <h3 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Faction Selection & Automatic Rules
                </h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <p><strong>Smart Faction Detection:</strong> The Battle Wizard isn't just a dice roller—it calculates final hit counts based on complex faction interactions.</p>
                  <p><strong>Automatic Rules Applied:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 ml-4">
                    <li><strong>Alliance Defense:</strong> Automatically takes the <strong>higher roll</strong> (Guerrilla War ability)</li>
                    <li><strong>Vagabond Attack:</strong> Hits automatically <strong>limited to sword count</strong></li>
                    <li><strong>Corvid Plots:</strong> +1 defender hit when hidden plots are in clearing</li>
                    <li><strong>Keepers Armor:</strong> First hit ignored when Relic is present</li>
                    <li><strong>Hundreds Bonuses:</strong> +1 hit when Warlord attacks while Wrathful</li>
                    <li><strong>Eyrie Commanders:</strong> +1 hit bonus for Commander leaders</li>
                  </ul>
                  <p><strong>How it helps:</strong> Select your factions first—the app automatically knows the specific rules and applies them without manual lookup.</p>
                </div>
              </div>

              {/* Battle Conditions */}
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-5">
                <h3 className="text-lg font-bold text-orange-400 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Battle Conditions
                </h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <p><strong>Board State Modifiers:</strong> These conditions represent the tactical situation in the clearing.</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 ml-4">
                    <li><strong>Defenseless (+1 Hit):</strong> Add when defender has no warriors in clearing</li>
                    <li><strong>Ambush (2 Immediate Hits):</strong> Defender deals 2 hits before dice calculation</li>
                    <li><strong>Situation-specific:</strong> Apply based on actual board state, not just faction abilities</li>
                  </ul>
                </div>
              </div>

              {/* Advanced Cards */}
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-5">
                <h3 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  Advanced Cards (Exiles & Partisans)
                </h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <p><strong>Special Battle Cards:</strong> These powerful cards can dramatically alter combat math without manual calculation.</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 ml-4">
                    <li><strong>Armorers (Blue):</strong> Defender <strong>ignores all rolled hits</strong> taken (Law 2.1.1)</li>
                    <li><strong>Sappers (Green):</strong> Defender deals <strong>+1 hit</strong> to attacker</li>
                    <li><strong>Brutal Tactics (Red):</strong> Attacker deals <strong>+1 hit</strong>, defender scores <strong>1 VP</strong></li>
                    <li><strong>Command Warren (Purple):</strong> Allows battle at <strong>start of Daylight phase</strong> (instead of Evening)</li>
                  </ul>
                  <p><strong>How it helps:</strong> Toggle these cards to see their effects instantly without doing the complex math yourself.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Reference */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-yellow-900/20 to-yellow-800/10 border border-yellow-800/50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-yellow-400" />
              Quick Tips
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-4">
                <h3 className="font-bold text-green-400 mb-2">🎯 New Players</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>Start with Reach Calculator for balanced games</li>
                  <li>Use faction guides to learn abilities</li>
                  <li>Battle sim shows automatic faction rules</li>
                  <li>Try hireling flip mechanics to understand options</li>
                </ul>
              </div>

              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-4">
                <h3 className="font-bold text-purple-400 mb-2">⚡ Experienced Players</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>Try AdSet Draft for strategic variety</li>
                  <li>Advanced cards add combat depth</li>
                  <li>Hireling auto-decay saves time</li>
                  <li>Faction hirelings expand alliance options</li>
                </ul>
              </div>

              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-4">
                <h3 className="font-bold text-blue-400 mb-2">🆕 New Features</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>Advanced Battle Cards: Armorers, Sappers, Brutal Tactics, Command Warren</li>
                  <li>Legendary Forge item tracking for crafted items</li>
                  <li>Promoted/Demoted hireling flip system</li>
                  <li>Landmarks selection with Black Market deck management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}