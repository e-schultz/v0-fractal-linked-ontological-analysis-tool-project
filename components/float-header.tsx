import { Terminal } from "lucide-react"
import { HelpModal } from "@/components/help-modal"

export function FloatHeader() {
  return (
    <header className="border-b border-purple-800 p-4 bg-black">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Terminal className="h-6 w-6 text-purple-400" />
          <span className="font-mono text-xl text-purple-400">[FLOAT BBS | module::concept-explorer.v1]</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="font-mono text-sm text-purple-400 hover:text-purple-300 transition-colors">
            (E) Exit
          </button>
          <HelpModal />
        </div>
      </div>
    </header>
  )
}
