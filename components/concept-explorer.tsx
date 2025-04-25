"use client"

import { useEffect, useState } from "react"
import type { ExpansionPattern } from "@/types/expansion-patterns"
import type { ConceptNode } from "@/types/concept-node"
import { ConceptMap } from "@/components/concept-map"
import { ConceptDetails } from "@/components/concept-details"
import { generateConceptNodes } from "@/lib/concept-generator"
import { Loader2 } from "lucide-react"

interface ConceptExplorerProps {
  pattern: ExpansionPattern
  seed: string
  sigil?: string
}

export default function ConceptExplorer({ pattern, seed, sigil }: ConceptExplorerProps) {
  const [loading, setLoading] = useState(true)
  const [nodes, setNodes] = useState<ConceptNode[]>([])
  const [selectedNode, setSelectedNode] = useState<ConceptNode | null>(null)

  useEffect(() => {
    setLoading(true)

    // Simulate API call to generate concept nodes
    const timer = setTimeout(() => {
      const generatedNodes = generateConceptNodes(pattern, seed, sigil)
      setNodes(generatedNodes)
      setLoading(false)

      if (generatedNodes.length > 0) {
        setSelectedNode(generatedNodes[0])
      }
    }, 1500)

    return () => clearTimeout(timer)
  }, [pattern, seed, sigil])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 border border-purple-700 rounded-md bg-black/50">
        <Loader2 className="h-8 w-8 text-purple-500 animate-spin mb-4" />
        <p className="text-purple-400 font-mono">Generating concept map...</p>
      </div>
    )
  }

  return (
    <div className="border border-purple-700 rounded-md bg-black/50 overflow-hidden">
      <div className="p-4 border-b border-purple-700">
        <h2 className="text-xl font-mono font-semibold text-purple-400">
          {pattern === "concept-led" && `Exploring: "${seed}"`}
          {pattern === "note-led" && `Mapping: "${seed}"`}
          {pattern === "chat-led" && "Chat Echo Bloom"}
          {pattern === "sigil-seeding" && `Sigil Filter: {${sigil}}`}
          {pattern === "meta-path" && `Path Traversal: "${seed}"`}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[500px]">
        <div className="lg:col-span-2 border-r border-purple-700">
          <ConceptMap nodes={nodes} selectedNode={selectedNode} onSelectNode={setSelectedNode} />
        </div>

        <div className="p-4">
          {selectedNode ? (
            <ConceptDetails node={selectedNode} />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-purple-500 font-mono">Select a node to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
