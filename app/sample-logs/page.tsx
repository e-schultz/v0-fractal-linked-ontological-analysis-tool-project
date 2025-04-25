"use client"

import { useState } from "react"
import { SampleFloatLogViewer } from "@/components/sample-float-log-viewer"
import ConceptExplorer from "@/components/concept-explorer"
import type { ExpansionPattern } from "@/types/expansion-patterns"
import { Terminal, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SampleLogsPage() {
  const [exploring, setExploring] = useState(false)
  const [pattern, setPattern] = useState<ExpansionPattern>("concept-led")
  const [seed, setSeed] = useState("")

  const handleSelectSample = (patternType: string, seedValue: string) => {
    setPattern(patternType as ExpansionPattern)
    setSeed(seedValue)
    setExploring(true)
  }

  const handleBackToSamples = () => {
    setExploring(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-3 mb-8">
        <Terminal className="h-8 w-8 text-purple-400" />
        <h1 className="text-3xl font-mono font-bold text-purple-400">Sample FLOAT Logs</h1>
      </div>

      {exploring ? (
        <div className="space-y-6">
          <button
            onClick={handleBackToSamples}
            className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Sample Logs</span>
          </button>

          <div className="p-4 border border-purple-700 rounded-md bg-black/50">
            <h2 className="text-xl font-mono font-semibold text-purple-400 mb-4">
              {pattern === "concept-led" && `Exploring Concept: "${seed}"`}
              {pattern === "note-led" && `Mapping Note: "${seed}"`}
              {pattern === "chat-led" && "Chat Echo Bloom"}
              {pattern === "sigil-seeding" && "Sigil Filtering"}
              {pattern === "meta-path" && `Path Traversal: "${seed}"`}
            </h2>
            <p className="text-purple-300 mb-4">
              This visualization shows how the Concept Explorer maps relationships between different FLOAT entries.
              Click on nodes to explore their connections and details.
            </p>
          </div>

          <ConceptExplorer pattern={pattern} seed={seed} sigil={pattern === "sigil-seeding" ? "ψ" : undefined} />
        </div>
      ) : (
        <div className="space-y-8">
          <div className="p-6 border border-purple-700 rounded-md bg-black/50">
            <h2 className="text-xl font-mono font-semibold text-purple-400 mb-4">About Sample FLOAT Logs</h2>
            <p className="text-purple-300 mb-4">
              These sample logs demonstrate how the FLOAT system organizes and connects different types of knowledge.
              Explore the samples below to see how the Concept Explorer visualizes these relationships.
            </p>
            <p className="text-purple-300">
              Each sample represents a different type of FLOAT entry: Floatlogs, Doctrine Fragments, Ritual ASTs, and
              FloatCtl commands. Click "Explore in Concept Explorer" to visualize the connections between these entries.
            </p>
          </div>

          <SampleFloatLogViewer onSelectSample={handleSelectSample} />

          <div className="flex justify-center">
            <Link
              href="/concept-explorer"
              className="px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white font-mono rounded-md transition-colors"
            >
              Return to Concept Explorer
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
