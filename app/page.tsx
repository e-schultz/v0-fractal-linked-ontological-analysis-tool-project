import { Terminal, Network, Sparkles, FileText } from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-mono font-bold text-purple-400 mb-4">FLOAT System</h1>
          <p className="text-xl text-purple-300 font-mono">Fractal Linked Ontological Analysis Tool</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Link
            href="/concept-explorer"
            className="border border-purple-700 rounded-md p-6 bg-black/50 hover:bg-purple-900/20 transition-colors group"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Network className="h-8 w-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
              <h2 className="text-2xl font-semibold text-purple-300 font-mono">Concept Explorer</h2>
            </div>
            <p className="text-purple-400 group-hover:text-purple-300 transition-colors">
              Explore conceptual relationships through multiple dimensions using various expansion patterns and
              visualization techniques.
            </p>
          </Link>

          <Link
            href="/sample-logs"
            className="border border-purple-700 rounded-md p-6 bg-black/50 hover:bg-purple-900/20 transition-colors group"
          >
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="h-8 w-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
              <h2 className="text-2xl font-semibold text-purple-300 font-mono">Sample Logs</h2>
            </div>
            <p className="text-purple-400 group-hover:text-purple-300 transition-colors">
              Explore sample FLOAT logs to see how the Concept Explorer visualizes relationships between different types
              of entries.
            </p>
          </Link>
        </div>

        <Separator className="bg-purple-800/50 my-12" />

        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-purple-300 font-mono text-center">About FLOAT</h2>

          <div className="prose prose-invert max-w-none">
            <p className="text-purple-300 text-lg">
              FLOAT is a recursive ritual framework for building knowledge systems that feel like home. It enables you
              to map your knowledge ecosystem using various expansion patterns and visualization techniques.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="border border-purple-800 rounded-md p-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <Terminal className="h-5 w-5 text-purple-400" />
                  <h3 className="text-lg font-semibold text-purple-300">Sigil System</h3>
                </div>
                <p className="text-sm text-purple-400">
                  A symbolic framework for categorizing and filtering knowledge. Sigils like {"{ψ}"}, {"{Ξ}"}, and{" "}
                  {"{⊡}"}
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

              <div className="border border-purple-800 rounded-md p-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <Network className="h-5 w-5 text-purple-400" />
                  <h3 className="text-lg font-semibold text-purple-300">Concept Maps</h3>
                </div>
                <p className="text-sm text-purple-400">
                  Visualize the connections between concepts, notes, floatlogs, and doctrine fragments to discover new
                  insights and patterns in your knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
