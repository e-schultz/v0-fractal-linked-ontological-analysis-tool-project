"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { ExpansionPattern } from "@/types/expansion-patterns"

interface ConceptInputProps {
  value: string
  onChange: (value: string) => void
  pattern: ExpansionPattern
}

export function ConceptInput({ value, onChange, pattern }: ConceptInputProps) {
  const placeholders: Record<ExpansionPattern, string> = {
    "concept-led": "Enter a concept (e.g., sensorial dissonance)",
    "note-led": "Enter a note title or ID",
    "chat-led": "Paste a chunk of chat history",
    "sigil-seeding": "", // Not used for this pattern
    "meta-path": "Enter a floatlog ID (e.g., floatlog::20250413_sso_for_joy)",
  }

  const labels: Record<ExpansionPattern, string> = {
    "concept-led": "Seed Concept",
    "note-led": "Note Reference",
    "chat-led": "Chat Fragment",
    "sigil-seeding": "", // Not used for this pattern
    "meta-path": "Floatlog Reference",
  }

  return (
    <div className="space-y-2">
      <Label htmlFor="seed-input" className="text-xl font-mono font-semibold text-purple-400">
        {labels[pattern]}
      </Label>
      {pattern === "chat-led" ? (
        <textarea
          id="seed-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholders[pattern]}
          className="w-full h-32 p-3 bg-black border border-purple-700 rounded-md font-mono text-purple-200 placeholder:text-purple-700"
        />
      ) : (
        <Input
          id="seed-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholders[pattern]}
          className="bg-black border-purple-700 font-mono text-purple-200 placeholder:text-purple-700"
        />
      )}
    </div>
  )
}
