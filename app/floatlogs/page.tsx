import { BookOpen } from "lucide-react"

export default function FloatlogsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-3 mb-8">
          <BookOpen className="h-8 w-8 text-purple-400" />
          <h1 className="text-3xl font-mono font-bold text-purple-400">Floatlogs</h1>
        </div>

        <div className="border border-purple-700 rounded-md p-6 bg-black/50">
          <p className="text-purple-300 mb-6">
            This section is under development. Floatlogs will be available in a future update.
          </p>

          <div className="p-4 border border-purple-800 rounded-md bg-purple-900/10">
            <p className="text-sm text-purple-300">
              <span className="font-semibold">Coming Soon:</span> Browse, create, and manage your floatlogs - the atomic
              units of knowledge capture that form the foundation of your FLOAT system.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
