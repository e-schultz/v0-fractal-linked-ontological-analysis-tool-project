"use client"

import { useRef, useEffect, useState } from "react"
import type { ConceptNode } from "@/types/concept-node"

interface ConceptMapProps {
  nodes: ConceptNode[]
  selectedNode: ConceptNode | null
  onSelectNode: (node: ConceptNode) => void
}

export function ConceptMap({ nodes, selectedNode, onSelectNode }: ConceptMapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      const updateDimensions = () => {
        if (containerRef.current) {
          setDimensions({
            width: containerRef.current.clientWidth,
            height: containerRef.current.clientHeight,
          })
        }
      }

      updateDimensions()
      window.addEventListener("resize", updateDimensions)

      return () => {
        window.removeEventListener("resize", updateDimensions)
      }
    }
  }, [])

  useEffect(() => {
    if (!canvasRef.current || nodes.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Simple force-directed layout simulation
    const nodePositions: Record<string, { x: number; y: number }> = {}

    // Initialize positions
    nodes.forEach((node, i) => {
      const angle = (i / nodes.length) * 2 * Math.PI
      const radius = Math.min(dimensions.width, dimensions.height) * 0.35
      nodePositions[node.id] = {
        x: dimensions.width / 2 + radius * Math.cos(angle),
        y: dimensions.height / 2 + radius * Math.sin(angle),
      }
    })

    // Draw connections
    nodes.forEach((node) => {
      if (node.connections) {
        node.connections.forEach((conn) => {
          const sourcePos = nodePositions[node.id]
          const targetPos = nodePositions[conn.targetId]

          if (sourcePos && targetPos) {
            ctx.beginPath()
            ctx.moveTo(sourcePos.x, sourcePos.y)
            ctx.lineTo(targetPos.x, targetPos.y)
            ctx.strokeStyle = "#9333ea"
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      }
    })

    // Draw nodes
    nodes.forEach((node) => {
      const pos = nodePositions[node.id]
      if (!pos) return

      // Node color based on type
      let color = "#d8b4fe" // default for concept
      if (node.type === "note") color = "#93c5fd"
      else if (node.type === "floatlog") color = "#f9a8d4"
      else if (node.type === "doctrine") color = "#fcd34d"
      else if (node.type === "ritual") color = "#a5b4fc"

      // Highlight selected node
      if (selectedNode && node.id === selectedNode.id) {
        color = "#f0abfc"
      }

      // Draw node circle
      ctx.beginPath()
      ctx.arc(pos.x, pos.y, node.weight * 2, 0, 2 * Math.PI)
      ctx.fillStyle = color
      ctx.fill()
      ctx.strokeStyle = selectedNode && node.id === selectedNode.id ? "#ffffff" : "#9333ea"
      ctx.lineWidth = selectedNode && node.id === selectedNode.id ? 2 : 1
      ctx.stroke()

      // Draw node label
      ctx.font = "12px Monaco, monospace"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillStyle = "#ffffff"
      ctx.fillText(node.label, pos.x, pos.y + node.weight * 2 + 12)
    })

    // Handle click events
    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Check if a node was clicked
      for (const node of nodes) {
        const pos = nodePositions[node.id]
        if (!pos) continue

        const dx = pos.x - x
        const dy = pos.y - y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance <= node.weight * 2) {
          onSelectNode(node)
          break
        }
      }
    }

    canvas.addEventListener("click", handleClick)
    return () => {
      canvas.removeEventListener("click", handleClick)
    }
  }, [nodes, selectedNode, dimensions, onSelectNode])

  return (
    <div ref={containerRef} className="w-full h-[500px]">
      <canvas ref={canvasRef} width={dimensions.width} height={dimensions.height} className="w-full h-full" />
    </div>
  )
}
