import { HelpCircle, Network, FileText } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function HelpPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-3 mb-8">
          <HelpCircle className="h-8 w-8 text-purple-400" />
          <h1 className="text-3xl font-mono font-bold text-purple-400">Help & Documentation</h1>
        </div>

        <div className="border border-purple-700 rounded-md p-6 bg-black/50 space-y-6 font-mono">
          <div>
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">Getting Started with FLOAT</h2>
            <p className="text-purple-300 mb-4">
              FLOAT (Fractal Linked Ontological Analysis Tool) is a knowledge management system designed for exploring
              conceptual relationships through multiple dimensions. It enables users to map their knowledge ecosystem
              using various expansion patterns and visualization techniques.
            </p>
          </div>

          <Separator className="bg-purple-800/50" />

          <div>
            <h2 className="text-xl font-semibold text-purple-300 mb-4">Concept Explorer</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Network className="h-5 w-5 text-purple-400 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-purple-300">Using the Concept Explorer</h3>
                  <p className="text-sm text-purple-400 mt-1">
                    1. Select an expansion pattern
                    <br />
                    2. Enter a seed concept or select a sigil
                    <br />
                    3. Click "Explore" to generate the concept map
                    <br />
                    4. Click on nodes to view details
                    <br />
                    5. Use "Reset" to start a new exploration
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-purple-800/50" />

          <div>
            <h2 className="text-xl font-semibold text-purple-300 mb-4">Sample FLOAT Logs</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FileText className="h-5 w-5 text-purple-400 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-purple-300">Exploring Sample Logs</h3>
                  <p className="text-sm text-purple-400 mt-1">
                    The{" "}
                    <Link href="/sample-logs" className="text-purple-300 underline">
                      Sample Logs
                    </Link>{" "}
                    section contains examples of different FLOAT log types:
                    <br />
                    <br />
                    1. <strong>Floatlogs</strong> - Atomic units of knowledge capture
                    <br />
                    2. <strong>Doctrine Fragments</strong> - Crystallized knowledge patterns
                    <br />
                    3. <strong>Ritual ASTs</strong> - Formalized workflow patterns
                    <br />
                    4. <strong>FloatCtl Commands</strong> - System control operations
                    <br />
                    <br />
                    Each sample can be explored in the Concept Explorer to visualize its relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-purple-800/50" />

          <div>
            <h2 className="text-xl font-semibold text-purple-300 mb-4">Expansion Patterns</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-purple-300">Concept-Led Expansion</h3>
                <p className="text-sm text-purple-400">
                  Start with a single word or concept and expand semantically and symbolically. This pattern is useful
                  for exploring the semantic field around a specific idea.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-purple-300">Note-Led Expansion</h3>
                <p className="text-sm text-purple-400">
                  Pick an existing note and parse its metadata, tags, and themes. This pattern helps you discover
                  connections between your notes and extract key concepts.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-purple-300">Chat-Led Echo Bloom</h3>
                <p className="text-sm text-purple-400">
                  Take a chunk of recent chat history and distill it into symbolic seed phrases. This pattern is useful
                  for extracting insights from conversations.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-purple-300">Sigil Seeding</h3>
                <p className="text-sm text-purple-400">
                  Start with a sigil-state and use it as a filter to highlight latent themes. This pattern helps you
                  explore your knowledge through specific cognitive lenses.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-purple-300">Meta-Path Traversal</h3>
                <p className="text-sm text-purple-400">
                  Pick a recent floatlog and identify its connections, sigils, and tags. This pattern reveals the
                  network of relationships between your knowledge artifacts.
                </p>
              </div>
            </div>
          </div>

          <Separator className="bg-purple-800/50" />

          <div>
            <h2 className="text-xl font-semibold text-purple-300 mb-4">Sigil System</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-purple-800 rounded-md p-3">
                <h3 className="font-semibold text-purple-300">{"{ψ}"} - Psyche/Mind</h3>
                <p className="text-sm text-purple-400 mt-1">
                  Represents cognitive patterns and mental models. Use this sigil to explore psychological aspects,
                  thought processes, and conceptual frameworks.
                </p>
              </div>

              <div className="border border-purple-800 rounded-md p-3">
                <h3 className="font-semibold text-purple-300">{"{Ξ}"} - Structure/System</h3>
                <p className="text-sm text-purple-400 mt-1">
                  Represents organizational frameworks and systems. Use this sigil to explore structural relationships,
                  hierarchies, and systematic patterns.
                </p>
              </div>

              <div className="border border-purple-800 rounded-md p-3">
                <h3 className="font-semibold text-purple-300">{"{⊡}"} - Container/Frame</h3>
                <p className="text-sm text-purple-400 mt-1">
                  Represents bounded contexts and conceptual containers. Use this sigil to explore boundaries, contexts,
                  and contained knowledge domains.
                </p>
              </div>

              <div className="border border-purple-800 rounded-md p-3">
                <h3 className="font-semibold text-purple-300">{"{}"} - Mirror Logic</h3>
                <p className="text-sm text-purple-400 mt-1">
                  Represents identity recursion and self-observation loops. Use this sigil to explore self-referential
                  concepts, recursive patterns, and meta-cognitive processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
