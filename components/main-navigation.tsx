"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Terminal, Home, Network, BookOpen, HelpCircle, FileText } from "lucide-react"
import { cn } from "@/lib/utils"

export function MainNavigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    {
      href: "/",
      label: "Home",
      icon: Home,
      active: pathname === "/",
    },
    {
      href: "/concept-explorer",
      label: "Concept Explorer",
      icon: Network,
      active: pathname === "/concept-explorer",
    },
    {
      href: "/sample-logs",
      label: "Sample Logs",
      icon: FileText,
      active: pathname === "/sample-logs",
    },
    {
      href: "/floatlogs",
      label: "Floatlogs",
      icon: BookOpen,
      active: pathname === "/floatlogs",
    },
    {
      href: "/help",
      label: "Help",
      icon: HelpCircle,
      active: pathname === "/help",
    },
  ]

  return (
    <nav className="border-b border-purple-800 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Terminal className="h-6 w-6 text-purple-400" />
              <span className="font-mono text-xl text-purple-400">[FLOAT BBS]</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "flex items-center space-x-1 font-mono text-sm transition-colors",
                    route.active ? "text-purple-300" : "text-purple-500 hover:text-purple-300",
                  )}
                >
                  <route.icon className="h-4 w-4" />
                  <span>{route.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-purple-400 hover:text-purple-300">
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center space-x-2 rounded-md px-3 py-2 font-mono text-sm",
                  route.active
                    ? "bg-purple-900/20 text-purple-300"
                    : "text-purple-500 hover:bg-purple-900/10 hover:text-purple-300",
                )}
                onClick={() => setIsOpen(false)}
              >
                <route.icon className="h-4 w-4" />
                <span>{route.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
