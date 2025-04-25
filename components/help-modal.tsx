"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HelpCircle, MousePointer, Lightbulb } from "lucide-react"

export function HelpModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors">
          <HelpCircle className="h-4 w-4" />
          <span className="text-sm">Help</span>
        </button>
      </DialogTrigger>
      <DialogContent className="bg-black border-purple-700 text-purple-300 font-mono max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl text-purple-300">FLOAT Concept Explorer Help</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="basics" className="mt-4">
          <TabsList className="bg-purple-900/20 border border-purple-800">
            <TabsTrigger value="basics" className="data-[state=active]:bg-purple-800 data-[state=active]:text-white">
              Basics
            </TabsTrigger>
            <TabsTrigger value="patterns" className="data-[state=active]:bg-purple-800 data-[state=active]:text-white">
              Expansion Patterns
            </TabsTrigger>
            <TabsTrigger value="sigils" className="data-[state=active]:bg-purple-800 data-[state=active]:text-white">
              Sigil System
            </TabsTrigger>
            <TabsTrigger value="shortcuts" className="data-[state=active]:bg-purple-800 data-[state=active]:text-white">
              Keyboard Shortcuts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="basics" className="mt-4 space-y-4">
            <div className="flex items-start space-x-3">
              <MousePointer className="h-5 w-5 text-purple-400 mt-0.5" />
              <div>
                <h3 className="font-semibold text-purple-300">Navigation</h3>
                <p className="text-sm text-purple-400 mt-1">
                  Click on nodes in the concept map to view their details. The selected node will be highlighted and its
                  information will appear in the details panel.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Lightbulb className="h-5 w-5 text-purple-400 mt-0.5" />
              <div>
                <h3 className="font-semibold text-purple-300">Getting Started</h3>
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
          </TabsContent>

          <TabsContent value="patterns" className="mt-4 space-y-4">
            <div className="space-y-3">
              <h3 className="font-semibold text-purple-300">Concept-Led Expansion</h3>
              <p className="text-sm text-purple-400">
                Start with a single word or concept and expand semantically and symbolically. This pattern is useful for
                exploring the semantic field around a specific idea.
              </p>

              <h3 className="font-semibold text-purple-300">Note-Led Expansion</h3>
              <p className="text-sm text-purple-400">
                Pick an existing note and parse its metadata, tags, and themes. This pattern helps you discover
                connections between your notes and extract key concepts.
              </p>

              <h3 className="font-semibold text-purple-300">Chat-Led Echo Bloom</h3>
              <p className="text-sm text-purple-400">
                Take a chunk of recent chat history and distill it into symbolic seed phrases. This pattern is useful
                for extracting insights from conversations.
              </p>

              <h3 className="font-semibold text-purple-300">Sigil Seeding</h3>
              <p className="text-sm text-purple-400">
                Start with a sigil-state and use it as a filter to highlight latent themes. This pattern helps you
                explore your knowledge through specific cognitive lenses.
              </p>

              <h3 className="font-semibold text-purple-300">Meta-Path Traversal</h3>
              <p className="text-sm text-purple-400">
                Pick a recent floatlog and identify its connections, sigils, and tags. This pattern reveals the network
                of relationships between your knowledge artifacts.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="sigils" className="mt-4 space-y-4">
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
          </TabsContent>

          <TabsContent value="shortcuts" className="mt-4">
            <div className="border border-purple-800 rounded-md p-4">
              <h3 className="font-semibold text-purple-300 mb-2">Keyboard Shortcuts</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-purple-400">E</span>
                  <span className="text-purple-300">Exit current view</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-400">H</span>
                  <span className="text-purple-300">Open help dialog</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-400">1-5</span>
                  <span className="text-purple-300">Select expansion pattern</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-400">Space</span>
                  <span className="text-purple-300">Explore/Generate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-400">R</span>
                  <span className="text-purple-300">Reset exploration</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-400">Tab</span>
                  <span className="text-purple-300">Navigate between nodes</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
