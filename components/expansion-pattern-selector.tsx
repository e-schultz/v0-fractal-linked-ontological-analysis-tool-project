"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import type { ExpansionPattern } from "@/types/expansion-patterns"

interface ExpansionPatternSelectorProps {
  selectedPattern: ExpansionPattern
  onSelectPattern: (pattern: ExpansionPattern) => void
}

export function ExpansionPatternSelector({ selectedPattern, onSelectPattern }: ExpansionPatternSelectorProps) {
  const patterns = [
    {
      id: "concept-led",
      name: "Concept-Led Expansion",
      description: "Start with a single word/concept → Expand semantically and symbolically",
      flow: "seed::idea → floatlog search",
    },
    {
      id: "note-led",
      name: "Note-Led Expansion",
      description: "Pick an existing note → Parse metadata, tags, themes",
      flow: "seed::note → semantic map",
    },
    {
      id: "chat-led",
      name: "Chat-Led Echo Bloom",
      description: "Take a chunk of recent chat history → Distill it into symbolic seed phrases",
      flow: "seed::chat → recursive semantic distillation",
    },
    {
      id: "sigil-seeding",
      name: "Sigil Seeding",
      description: "Start with a sigil-state → Use that as a filter to highlight latent themes",
      flow: "seed::{ψ} or {Ξ} or {⊡}",
    },
    {
      id: "meta-path",
      name: "Meta-Path Traversal",
      description: "Pick a recent floatlog → Identify its connectedTo, sigils, tags",
      flow: "seed::recent floatlog → doctrine linkage",
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-mono font-semibold text-purple-400">Expansion Pattern</h2>
      <RadioGroup
        value={selectedPattern}
        onValueChange={(value) => onSelectPattern(value as ExpansionPattern)}
        className="space-y-3"
      >
        {patterns.map((pattern) => (
          <div
            key={pattern.id}
            className={`flex items-start space-x-3 p-3 rounded-md ${selectedPattern === pattern.id ? "bg-purple-900/20 border border-purple-700" : "border border-purple-800/40"}`}
          >
            <RadioGroupItem value={pattern.id} id={pattern.id} className="mt-1" />
            <div className="space-y-1.5">
              <Label htmlFor={pattern.id} className="text-lg font-mono text-purple-300">
                {pattern.name}
              </Label>
              <p className="text-sm font-mono text-purple-400/80">{pattern.description}</p>
              <p className="text-xs font-mono text-purple-500">Flow: {pattern.flow}</p>
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}
