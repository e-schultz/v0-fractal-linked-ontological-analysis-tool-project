import { Terminal } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-purple-800 p-4 bg-black mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Terminal className="h-5 w-5 text-purple-400" />
          <span className="font-mono text-sm text-purple-400">FLOAT Concept Explorer v1.0.0</span>
        </div>

        <div className="flex space-x-6 text-xs font-mono">
          <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
            Documentation
          </a>
          <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
            GitHub
          </a>
          <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
            About FLOAT
          </a>
          <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
            Privacy
          </a>
        </div>

        <div className="mt-4 md:mt-0 text-xs font-mono text-purple-500">
          &copy; {new Date().getFullYear()} FLOAT System
        </div>
      </div>
    </footer>
  )
}
