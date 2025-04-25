export interface ConceptNode {
  id: string
  label: string
  type: "concept" | "note" | "floatlog" | "doctrine" | "ritual"
  description?: string
  weight: number
  sigil?: string
  tags?: string[]
  metadata?: Record<string, string>
  timestamp?: string
  connections?: Connection[]
}

export interface Connection {
  targetId: string
  targetLabel: string
  type: "semantic" | "reference" | "contains" | "inspiredBy" | "ritual"
  strength: number
  context?: string
}
