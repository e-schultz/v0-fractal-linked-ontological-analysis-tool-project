"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { sampleFloatLog, sampleDoctrineFragment, sampleRitualAST, sampleFloatCtl } from "@/lib/sample-float-data"
import { Calendar, FileText, Hash, Link2, Terminal } from "lucide-react"

interface SampleFloatLogViewerProps {
  onSelectSample: (type: string, id: string) => void
}

export function SampleFloatLogViewer({ onSelectSample }: SampleFloatLogViewerProps) {
  const [activeTab, setActiveTab] = useState("floatlog")

  return (
    <div className="border border-purple-700 rounded-md bg-black/50 p-6 space-y-6 font-mono">
      <div className="flex items-center space-x-3">
        <Terminal className="h-6 w-6 text-purple-400" />
        <h2 className="text-2xl font-semibold text-purple-300">Sample FLOAT Log</h2>
      </div>

      <Separator className="bg-purple-800/50" />

      <p className="text-purple-300">
        Explore sample FLOAT logs to see how the Concept Explorer visualizes relationships between different types of
        entries. Select a log type below to view its details, then click "Explore in Concept Explorer" to visualize its
        connections.
      </p>

      <Tabs defaultValue="floatlog" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-purple-900/20 border border-purple-800">
          <TabsTrigger value="floatlog" className="data-[state=active]:bg-purple-800 data-[state=active]:text-white">
            Floatlog
          </TabsTrigger>
          <TabsTrigger value="doctrine" className="data-[state=active]:bg-purple-800 data-[state=active]:text-white">
            Doctrine
          </TabsTrigger>
          <TabsTrigger value="ritual" className="data-[state=active]:bg-purple-800 data-[state=active]:text-white">
            Ritual
          </TabsTrigger>
          <TabsTrigger value="floatctl" className="data-[state=active]:bg-purple-800 data-[state=active]:text-white">
            FloatCtl
          </TabsTrigger>
        </TabsList>

        <TabsContent value="floatlog" className="mt-4 space-y-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-purple-300">{sampleFloatLog.uid}</h3>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant="outline" className="text-xs border-purple-700 text-purple-400">
                  {sampleFloatLog.status}
                </Badge>
              </div>
            </div>

            <div>
              <p className="text-sm text-purple-300">{sampleFloatLog.summary}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center">
                <Hash className="h-4 w-4 mr-1" /> Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {sampleFloatLog.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-purple-900/30 text-purple-300 hover:bg-purple-800/50"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center">
                <Link2 className="h-4 w-4 mr-1" /> Linked To
              </h4>
              <div className="space-y-2 text-xs">
                {sampleFloatLog.linkedTo.map((link) => (
                  <div key={link} className="p-2 border border-purple-800 rounded-md">
                    <span className="text-purple-300">{link}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center">
                <FileText className="h-4 w-4 mr-1" /> Context
              </h4>
              <div className="space-y-1 text-sm">
                {sampleFloatLog.context.map((ctx, index) => (
                  <p key={index} className="text-purple-300">
                    • {ctx}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex items-center text-xs text-purple-500">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{sampleFloatLog.timestamp}</span>
            </div>

            <button
              onClick={() => onSelectSample("note-led", "floatlog::20250416_float_diz_dryrun")}
              className="px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white font-mono rounded-md transition-colors mt-4"
            >
              Explore in Concept Explorer
            </button>
          </div>
        </TabsContent>

        <TabsContent value="doctrine" className="mt-4 space-y-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-purple-300">{sampleDoctrineFragment.uid}</h3>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant="outline" className="text-xs border-purple-700 text-purple-400">
                  {sampleDoctrineFragment.status}
                </Badge>
              </div>
            </div>

            <div>
              <p className="text-sm text-purple-300">{sampleDoctrineFragment.summary}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center">
                <Hash className="h-4 w-4 mr-1" /> Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {sampleDoctrineFragment.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-purple-900/30 text-purple-300 hover:bg-purple-800/50"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center">
                <Link2 className="h-4 w-4 mr-1" /> Linked To
              </h4>
              <div className="space-y-2 text-xs">
                {sampleDoctrineFragment.linkedTo.map((link) => (
                  <div key={link} className="p-2 border border-purple-800 rounded-md">
                    <span className="text-purple-300">{link}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center">
                <FileText className="h-4 w-4 mr-1" /> Content
              </h4>
              <div className="p-3 border border-purple-800 rounded-md bg-black/70">
                <pre className="text-xs text-purple-300 whitespace-pre-wrap font-mono">
                  {sampleDoctrineFragment.content}
                </pre>
              </div>
            </div>

            <div className="flex items-center text-xs text-purple-500">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{sampleDoctrineFragment.timestamp}</span>
            </div>

            <button
              onClick={() => onSelectSample("concept-led", "float_diz")}
              className="px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white font-mono rounded-md transition-colors mt-4"
            >
              Explore in Concept Explorer
            </button>
          </div>
        </TabsContent>

        <TabsContent value="ritual" className="mt-4 space-y-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-purple-300">{sampleRitualAST.uid}</h3>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant="outline" className="text-xs border-purple-700 text-purple-400">
                  {sampleRitualAST.status}
                </Badge>
                {sampleRitualAST.sigils.map((sigil) => (
                  <Badge key={sigil} variant="outline" className="text-xs border-purple-700 text-purple-400">
                    {sigil}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm text-purple-300">{sampleRitualAST.title}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center">
                <Hash className="h-4 w-4 mr-1" /> Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {sampleRitualAST.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-purple-900/30 text-purple-300 hover:bg-purple-800/50"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center">
                <Link2 className="h-4 w-4 mr-1" /> Linked To
              </h4>
              <div className="space-y-2 text-xs">
                {sampleRitualAST.linkedTo.map((link) => (
                  <div key={link} className="p-2 border border-purple-800 rounded-md">
                    <span className="text-purple-300">{link}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center">
                <FileText className="h-4 w-4 mr-1" /> Content
              </h4>
              <div className="p-3 border border-purple-800 rounded-md bg-black/70">
                <pre className="text-xs text-purple-300 whitespace-pre-wrap font-mono">{sampleRitualAST.content}</pre>
              </div>
            </div>

            <button
              onClick={() => onSelectSample("concept-led", "workflow")}
              className="px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white font-mono rounded-md transition-colors mt-4"
            >
              Explore in Concept Explorer
            </button>
          </div>
        </TabsContent>

        <TabsContent value="floatctl" className="mt-4 space-y-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-purple-300">{sampleFloatCtl.uid}</h3>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant="outline" className="text-xs border-purple-700 text-purple-400">
                  {sampleFloatCtl.status}
                </Badge>
              </div>
            </div>

            <div>
              <p className="text-sm text-purple-300">{sampleFloatCtl.title}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center">
                <Hash className="h-4 w-4 mr-1" /> Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {sampleFloatCtl.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-purple-900/30 text-purple-300 hover:bg-purple-800/50"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center">
                <Link2 className="h-4 w-4 mr-1" /> Linked To
              </h4>
              <div className="space-y-2 text-xs">
                {sampleFloatCtl.linkedTo.map((link) => (
                  <div key={link} className="p-2 border border-purple-800 rounded-md">
                    <span className="text-purple-300">{link}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center">
                <FileText className="h-4 w-4 mr-1" /> Content
              </h4>
              <div className="p-3 border border-purple-800 rounded-md bg-black/70">
                <pre className="text-xs text-purple-300 whitespace-pre-wrap font-mono">{sampleFloatCtl.content}</pre>
              </div>
            </div>

            <button
              onClick={() => onSelectSample("concept-led", "floatctl")}
              className="px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white font-mono rounded-md transition-colors mt-4"
            >
              Explore in Concept Explorer
            </button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
