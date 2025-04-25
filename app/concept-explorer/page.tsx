"use client"

import { useState } from "react"
import ConceptExplorer from "@/components/concept-explorer"
import { ExpansionPatternSelector } from "@/components/expansion-pattern-selector"
import { SigilSelector } from "@/components/sigil-selector"
import { ConceptInput } from "@/components/concept-input"
import type { ExpansionPattern } from "@/types/expansion-patterns"
import { AboutFloat } from "@/components/about-float"
import { HelpModal } from "@/components/help-modal"

export default function ConceptExplorerPage() {
  const [selectedPattern, setSelectedPattern] = useState<ExpansionPattern>("concept-led")
  const [selectedSigil, setSelectedSigil] = useState<string>("ψ")
  const [seedConcept, setSeedConcept] = useState<string>("")
  const [isExploring, setIsExploring] = useState(false)

  const handleExplore = () => {
    if (seedConcept.trim() || selectedPattern === "sigil-seeding") {
      setIsExploring(true)
    }
  }

  const handleReset = () => {
    setIsExploring(false)
    setSeedConcept("")
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-purple-300">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-8 p-6 border border-purple-500 bg-black rounded-md">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-mono font-bold text-purple-400">FLOAT Concept Explorer</h1>
            <HelpModal />
          </div>

          <p className="mb-6 font-mono">
            Select an expansion pattern and provide a seed to begin exploring your knowledge ecosystem.
          </p>

          <div className="space-y-6">
            <ExpansionPatternSelector selectedPattern={selectedPattern} onSelectPattern={setSelectedPattern} />

            {selectedPattern === "sigil-seeding" && (
              <SigilSelector selectedSigil={selectedSigil} onSelectSigil={setSelectedSigil} />
            )}

            {selectedPattern !== "sigil-seeding" && (
              <ConceptInput value={seedConcept} onChange={setSeedConcept} pattern={selectedPattern} />
            )}

            <div className="flex space-x-4">
              <button
                onClick={handleExplore}
                className="px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white font-mono rounded-md transition-colors"
              >
                Explore
              </button>

              {isExploring && (
                <button
                  onClick={handleReset}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-mono rounded-md transition-colors"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>

        {isExploring ? (
          <ConceptExplorer
            pattern={selectedPattern}
            seed={seedConcept}
            sigil={selectedPattern === "sigil-seeding" ? selectedSigil : undefined}
          />
        ) : (
          <AboutFloat />
        )}
      </div>
    </div>
  )
}
