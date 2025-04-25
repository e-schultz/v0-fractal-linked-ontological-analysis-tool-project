import { Separator } from "@/components/ui/separator"
import { Terminal, BookOpen, Network, Sparkles } from "lucide-react"

export function AboutFloat() {
  return (
    <div className="border border-purple-700 rounded-md bg-black/50 p-6 space-y-6 font-mono">
      <div className="flex items-center space-x-3">
        <Terminal className="h-6 w-6 text-purple-400" />
        <h2 className="text-2xl font-semibold text-purple-300">About FLOAT</h2>
      </div>

      <Separator className="bg-purple-800/50" />

      <p className="text-purple-300">
        FLOAT (Fractal Linked Ontological Analysis Tool) is a knowledge management system designed for exploring
        conceptual relationships through multiple dimensions. It enables users to map their knowledge ecosystem using
        various expansion patterns and visualization techniques.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="border border-purple-800 rounded-md p-4 space-y-3">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-purple-300">Floatlogs</h3>
          </div>
          <p className="text-sm text-purple-400">
            Atomic units of knowledge capture that form the foundation of the FLOAT system. Each floatlog contains
            metadata, tags, and connections to other concepts.
          </p>
        </div>

        <div className="border border-purple-800 rounded-md p-4 space-y-3">
          <div className="flex items-center space-x-2">
            <Network className="h-5 w-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-purple-300">Sigil System</h3>
          </div>
          <p className="text-sm text-purple-400">
            A symbolic framework for categorizing and filtering knowledge. Sigils like {"{ψ}"}, {"{Ξ}"}, and {"{⊡}"}
            represent different cognitive patterns and organizational structures.
          </p>
        </div>

        <div className="border border-purple-800 rounded-md p-4 space-y-3">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-purple-300">Doctrine Fragments</h3>
          </div>
          <p className="text-sm text-purple-400">
            Crystallized knowledge patterns that emerge from repeated exploration. These form the foundational
            principles and frameworks within your knowledge ecosystem.
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 border border-purple-800 rounded-md bg-purple-900/10">
        <p className="text-sm text-purple-300">
          <span className="font-semibold">Getting Started:</span> Select an expansion pattern from the options above,
          provide a seed concept or select a sigil, and click "Explore" to begin mapping your knowledge ecosystem.
        </p>
      </div>
    </div>
  )
}
