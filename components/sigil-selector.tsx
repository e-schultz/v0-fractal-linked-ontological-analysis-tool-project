"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface SigilSelectorProps {
  selectedSigil: string
  onSelectSigil: (sigil: string) => void
}

export function SigilSelector({ selectedSigil, onSelectSigil }: SigilSelectorProps) {
  const sigils = [
    { id: "ψ", name: "{ψ}", description: "Psyche/Mind - Cognitive patterns and mental models" },
    { id: "Ξ", name: "{Ξ}", description: "Structure/System - Organizational frameworks and systems" },
    { id: "⊡", name: "{⊡}", description: "Container/Frame - Bounded contexts and conceptual containers" },
    { id: "{}", name: "{}", description: "Mirror Logic - Identity recursion and self-observation loops" },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-mono font-semibold text-purple-400">Select Sigil Filter</h2>
      <RadioGroup value={selectedSigil} onValueChange={onSelectSigil} className="grid grid-cols-2 gap-3">
        {sigils.map((sigil) => (
          <div
            key={sigil.id}
            className={`flex items-start space-x-3 p-3 rounded-md ${selectedSigil === sigil.id ? "bg-purple-900/20 border border-purple-700" : "border border-purple-800/40"}`}
          >
            <RadioGroupItem value={sigil.id} id={`sigil-${sigil.id}`} className="mt-1" />
            <div className="space-y-1">
              <Label htmlFor={`sigil-${sigil.id}`} className="text-lg font-mono text-purple-300">
                {sigil.name}
              </Label>
              <p className="text-xs font-mono text-purple-500">{sigil.description}</p>
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}
