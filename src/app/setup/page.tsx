"use client";

import React, { useState } from 'react';
import { SetupWizard } from '@/components/SetupWizard';
import { AdSetDraft } from '@/components/AdSetDraft';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, ChevronRight, Map, Layers, Users, Play, CheckCircle } from 'lucide-react';
import { SETUP_GUIDE_DATA, SetupVariant } from '@/data/setup_guide';

type SetupMethod = 'calculator' | 'draft';

export default function SetupPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [setupVariant, setSetupVariant] = useState<SetupVariant>('standard');
  const [setupMethod, setSetupMethod] = useState<SetupMethod>('calculator');
  const [mapChoice, setMapChoice] = useState<string>('');
  const [deckChoice, setDeckChoice] = useState<string>('');

  const totalSteps = 4;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step: number) => {
    setCurrentStep(Math.max(1, Math.min(totalSteps, step)));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Map & Deck Configuration</h2>
              <p className="text-gray-400">Choose your map and deck variant</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Map Selection */}
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Map className="w-5 h-5 text-emerald-400" />
                  Map Selection
                </h3>
                <div className="space-y-3">
                  {['Mountain Map', 'Lake Map', 'Autumn Map', 'Winter Map', 'Custom Map'].map((map) => (
                    <button
                      key={map}
                      onClick={() => setMapChoice(map)}
                      className={`
                        w-full p-4 rounded-lg border-2 transition-all text-left
                        ${mapChoice === map
                          ? 'bg-emerald-900/30 border-emerald-600 text-white'
                          : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600 hover:text-gray-300'
                        }
                      `}
                    >
                      <div className="font-bold">{map}</div>
                      {map === 'Mountain Map' && (
                        <div className="text-xs text-gray-500 mt-1">The Pass: Tower in center, 6 rubble paths</div>
                      )}
                      {map === 'Lake Map' && (
                        <div className="text-xs text-gray-500 mt-1">The Lake: Central water, Ferry corner</div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Deck Selection */}
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-purple-400" />
                  Deck Selection
                </h3>
                <div className="space-y-3">
                  {['Standard Deck', 'Exiles & Partisans'].map((deck) => (
                    <button
                      key={deck}
                      onClick={() => setDeckChoice(deck)}
                      className={`
                        w-full p-4 rounded-lg border-2 transition-all text-left
                        ${deckChoice === deck
                          ? 'bg-purple-900/30 border-purple-600 text-white'
                          : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600 hover:text-gray-300'
                        }
                      `}
                    >
                      <div className="font-bold">{deck}</div>
                      {deck === 'Standard Deck' && (
                        <div className="text-xs text-gray-500 mt-1">Favor cards for board resets</div>
                      )}
                      {deck === 'Exiles & Partisans' && (
                        <div className="text-xs text-gray-500 mt-1">Partisan cards for extra hits</div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Rules Summary */}
            <div className="bg-blue-900/20 border border-blue-800/50 rounded-xl p-4">
              <h4 className="text-blue-300 font-bold mb-2">Map Rules Summary</h4>
              <div className="text-sm text-gray-400 space-y-1">
                <p><strong>Mountain Map:</strong> Place Tower in the central pass. Cover 6 paths with rubble tokens. Players can spend cards to clear rubble for 1 VP each.</p>
                <p><strong>Lake Map:</strong> Place Ferry in a corner clearing. The lake is adjacent to all coastal clearings.</p>
                <p><strong>Ruins & Items:</strong> Place Ruin tokens on all "R" clearings. Place Item tokens on the top track. Shuffle the deck.</p>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Faction Selection Method</h2>
              <p className="text-gray-400">Choose how you want to select factions</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Reach Calculator */}
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 border border-blue-800/50 rounded-xl p-6 hover:border-blue-600/50 transition-all cursor-pointer group">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:scale-105 transition-transform">
                    Reach Calculator
                  </h3>
                  <p className="text-blue-200/50 text-sm mb-4">Traditional faction selection</p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>• Choose factions based on reach values</p>
                    <p>• Check game balance before starting</p>
                    <p>• Recommended for new players</p>
                  </div>
                  <button
                    onClick={() => setSetupMethod('calculator')}
                    className={`
                      w-full px-6 py-3 rounded-lg font-bold transition-all
                      ${setupMethod === 'calculator'
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-blue-800 text-blue-300 hover:bg-blue-700'
                      }
                  `}
                  >
                    Select This Method
                  </button>
                </div>
              </div>

              {/* AdSet Draft */}
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 border border-purple-800/50 rounded-xl p-6 hover:border-purple-600/50 transition-all cursor-pointer group">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:scale-105 transition-transform">
                    AdSet Draft
                  </h3>
                  <p className="text-purple-200/50 text-sm mb-4">Advanced draft variant</p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>• Draft factions from pool and hand</p>
                    <p>• Strategic gameplay mechanics</p>
                    <p>• Based on Law of Root rules</p>
                  </div>
                  <button
                    onClick={() => setSetupMethod('draft')}
                    className={`
                      w-full px-6 py-3 rounded-lg font-bold transition-all
                      ${setupMethod === 'draft'
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                        : 'bg-purple-800 text-purple-300 hover:bg-purple-700'
                      }
                    `}
                  >
                    Select This Method
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                {setupMethod === 'calculator' ? 'Reach Calculator' : 'AdSet Draft'}
              </h2>
              <p className="text-gray-400">
                {setupMethod === 'calculator'
                  ? 'Check faction balance and finalize selection'
                  : 'Draft factions and assign to players'
                }
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6">
              {setupMethod === 'calculator' ? (
                <SetupWizard />
              ) : (
                <AdSetDraft />
              )}
            </div>
          </div>
        );

      case 4:
        const setupData = SETUP_GUIDE_DATA[setupVariant];
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Final Setup Order</h2>
              <p className="text-gray-400">Physical preparation steps</p>
            </div>

            <div className="space-y-4">
              {setupData.map((step, index) => (
                <div key={index} className="bg-gray-900/60 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 mb-3">{step.content}</p>
                  {step.substeps && (
                    <ul className="space-y-2">
                      {step.substeps.map((substep, subIndex) => (
                        <li key={subIndex} className="text-sm text-gray-500 flex items-start gap-2">
                          <span className="text-emerald-400 mt-0.5">•</span>
                          <span>{substep}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-green-900/20 border border-green-800/50 rounded-xl p-6 text-center">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Setup Complete!</h3>
              <p className="text-gray-400 mb-4">You're ready to start playing Root</p>
              <Link
                href="/play"
                className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold transition-colors"
              >
                Go to Faction Guides
              </Link>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0c10] p-4 pb-20 pt-20 relative">
      <div className="absolute top-6 left-6 z-40">
        <Link href="/" className="text-gray-500 hover:text-white flex items-center gap-2 transition-colors font-medium">
          <ArrowLeft className="w-5 h-5" /> Menu
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            {Array.from({ length: totalSteps }, (_, index) => {
              const stepNumber = index + 1;
              const isCompleted = stepNumber < currentStep;
              const isCurrent = stepNumber === currentStep;

              return (
                <button
                  key={stepNumber}
                  onClick={() => goToStep(stepNumber)}
                  className={`
                    w-10 h-10 rounded-full font-bold text-sm transition-all
                    ${isCompleted
                      ? 'bg-green-600 text-white cursor-pointer hover:bg-green-700'
                      : isCurrent
                      ? 'bg-blue-600 text-white cursor-default ring-4 ring-blue-500/50'
                      : 'bg-gray-700 text-gray-400 cursor-pointer hover:bg-gray-600'
                    }
                  `}
                  title={`Step ${stepNumber}`}
                >
                  {stepNumber}
                </button>
              );
            })}
          </div>
          <div className="text-center text-sm text-gray-500">
            Step {currentStep} of {totalSteps}
          </div>
        </div>

        {/* Step Content */}
        {renderStepContent()}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`
              px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2
              ${currentStep === 1
                ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                : 'bg-gray-700 hover:bg-gray-600 text-white'
              }
            `}
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          {currentStep === totalSteps ? (
            <button
              onClick={() => setCurrentStep(1)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-colors"
            >
              Start Over
            </button>
          ) : (
            <button
              onClick={nextStep}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all flex items-center gap-2"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </main>
  );
}