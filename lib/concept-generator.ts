import type { ConceptNode } from "@/types/concept-node"
import type { ExpansionPattern } from "@/types/expansion-patterns"
import { generateSampleConceptNodes } from "@/lib/sample-float-data"

export function generateConceptNodes(pattern: ExpansionPattern, seed: string, sigil?: string): ConceptNode[] {
  // Check if we should use sample data
  if (
    seed.includes("float_diz") ||
    seed.includes("workflow") ||
    seed.includes("floatctl") ||
    seed === "float_diz" ||
    seed === "workflow" ||
    seed === "floatctl"
  ) {
    return generateSampleConceptNodes(pattern, seed, sigil)
  }

  // This is the original mock implementation that generates different node structures
  // based on the selected pattern
  switch (pattern) {
    case "concept-led":
      return generateConceptLedNodes(seed)
    case "note-led":
      return generateNoteLedNodes(seed)
    case "chat-led":
      return generateChatLedNodes(seed)
    case "sigil-seeding":
      return generateSigilNodes(sigil || "ψ")
    case "meta-path":
      return generateMetaPathNodes(seed)
    default:
      return []
  }
}

function generateConceptLedNodes(concept: string): ConceptNode[] {
  // Generate a semantic expansion from the concept
  const rootNode: ConceptNode = {
    id: "root",
    label: concept,
    type: "concept",
    weight: 8,
    description: `Core concept: ${concept}`,
    tags: ["seed", "core_concept", "semantic_root"],
    timestamp: new Date().toISOString(),
    connections: [],
  }

  // Generate related concepts
  const relatedConcepts = [
    {
      id: "concept1",
      label: `${concept} embodiment`,
      type: "concept" as const,
      weight: 5,
      description: `Physical manifestation of ${concept}`,
      tags: ["embodiment", "physical", "manifestation"],
      connections: [
        {
          targetId: "root",
          targetLabel: concept,
          type: "semantic" as const,
          strength: 0.8,
          context: "Physical expression",
        },
      ],
    },
    {
      id: "concept2",
      label: `${concept} theory`,
      type: "concept" as const,
      weight: 6,
      description: `Theoretical framework for understanding ${concept}`,
      tags: ["theory", "framework", "academic"],
      connections: [
        {
          targetId: "root",
          targetLabel: concept,
          type: "semantic" as const,
          strength: 0.9,
          context: "Theoretical foundation",
        },
      ],
    },
    {
      id: "floatlog1",
      label: `floatlog::${concept.replace(/\s+/g, "_")}_reflection`,
      type: "floatlog" as const,
      weight: 4,
      description: `Personal reflection on ${concept}`,
      timestamp: "2025-04-10T14:30:00Z",
      tags: ["reflection", "personal", "exploration"],
      metadata: {
        status: "floating",
        mood: "contemplative",
      },
      connections: [
        {
          targetId: "root",
          targetLabel: concept,
          type: "reference" as const,
          strength: 0.7,
          context: "Personal exploration",
        },
      ],
    },
    {
      id: "doctrine1",
      label: `doctrineFragment::${concept.replace(/\s+/g, "_")}_principles.v1`,
      type: "doctrine" as const,
      weight: 7,
      description: `Core principles related to ${concept}`,
      sigil: "ψ",
      tags: ["doctrine", "principles", "framework"],
      metadata: {
        version: "v1",
        status: "draft",
      },
      connections: [
        {
          targetId: "root",
          targetLabel: concept,
          type: "contains" as const,
          strength: 0.9,
          context: "Doctrinal foundation",
        },
        {
          targetId: "concept2",
          targetLabel: `${concept} theory`,
          type: "reference" as const,
          strength: 0.6,
          context: "Theoretical alignment",
        },
      ],
    },
  ]

  // Add connections to root node
  rootNode.connections = relatedConcepts.map((node) => ({
    targetId: node.id,
    targetLabel: node.label,
    type: "semantic" as const,
    strength: 0.8,
    context: `Related to ${concept}`,
  }))

  return [rootNode, ...relatedConcepts]
}

// The rest of the original functions remain unchanged
function generateNoteLedNodes(noteTitle: string): ConceptNode[] {
  // Generate a semantic map from a note
  const rootNode: ConceptNode = {
    id: "note-root",
    label: noteTitle,
    type: "note",
    weight: 8,
    description: `Source note: ${noteTitle}`,
    tags: ["source_note", "seed"],
    timestamp: "2025-03-15T09:45:00Z",
    metadata: {
      status: "complete",
      type: "research",
    },
    connections: [],
  }

  // Generate extracted concepts and related notes
  const relatedNodes = [
    {
      id: "extracted1",
      label: "Key Concept A",
      type: "concept" as const,
      weight: 6,
      description: "First key concept extracted from the note",
      tags: ["extracted", "concept", "key_insight"],
      connections: [
        {
          targetId: "note-root",
          targetLabel: noteTitle,
          type: "contains" as const,
          strength: 0.9,
          context: "Extracted from source",
        },
      ],
    },
    {
      id: "extracted2",
      label: "Key Concept B",
      type: "concept" as const,
      weight: 5,
      description: "Second key concept extracted from the note",
      tags: ["extracted", "concept", "insight"],
      connections: [
        {
          targetId: "note-root",
          targetLabel: noteTitle,
          type: "contains" as const,
          strength: 0.8,
          context: "Extracted from source",
        },
        {
          targetId: "extracted1",
          targetLabel: "Key Concept A",
          type: "semantic" as const,
          strength: 0.6,
          context: "Conceptual relationship",
        },
      ],
    },
    {
      id: "related-note1",
      label: "Related Note 1",
      type: "note" as const,
      weight: 4,
      description: "A note related to the source note",
      timestamp: "2025-02-20T14:30:00Z",
      tags: ["related", "reference"],
      connections: [
        {
          targetId: "note-root",
          targetLabel: noteTitle,
          type: "reference" as const,
          strength: 0.7,
          context: "Topical relationship",
        },
      ],
    },
    {
      id: "floatlog2",
      label: `floatlog::${noteTitle.replace(/\s+/g, "_").toLowerCase()}_expansion`,
      type: "floatlog" as const,
      weight: 3,
      description: `Expansion of ideas from ${noteTitle}`,
      timestamp: "2025-04-05T16:15:00Z",
      tags: ["expansion", "exploration", "development"],
      metadata: {
        status: "floating",
        mood: "analytical",
      },
      connections: [
        {
          targetId: "note-root",
          targetLabel: noteTitle,
          type: "inspiredBy" as const,
          strength: 0.8,
          context: "Inspired development",
        },
      ],
    },
  ]

  // Add connections to root node
  rootNode.connections = relatedNodes.map((node) => ({
    targetId: node.id,
    targetLabel: node.label,
    type: node.type === "concept" ? ("contains" as const) : ("reference" as const),
    strength: node.type === "concept" ? 0.9 : 0.7,
    context: node.type === "concept" ? "Contains concept" : "Related material",
  }))

  return [rootNode, ...relatedNodes]
}

function generateChatLedNodes(chatFragment: string): ConceptNode[] {
  // Generate a recursive semantic distillation from chat
  const rootNode: ConceptNode = {
    id: "chat-root",
    label: "Chat Fragment",
    type: "floatlog",
    weight: 7,
    description: "Source chat fragment for echo bloom",
    timestamp: new Date().toISOString(),
    metadata: {
      type: "chat_fragment",
      length: `${Math.min(chatFragment.length, 100)} chars`,
    },
    connections: [],
  }

  // Generate distilled concepts and echoes
  const distilledNodes = [
    {
      id: "distilled1",
      label: "Distilled Theme 1",
      type: "concept" as const,
      weight: 6,
      description: "Primary theme extracted from chat",
      tags: ["distilled", "primary_theme", "echo"],
      connections: [
        {
          targetId: "chat-root",
          targetLabel: "Chat Fragment",
          type: "contains" as const,
          strength: 0.9,
          context: "Primary extraction",
        },
      ],
    },
    {
      id: "distilled2",
      label: "Distilled Theme 2",
      type: "concept" as const,
      weight: 5,
      description: "Secondary theme extracted from chat",
      tags: ["distilled", "secondary_theme", "echo"],
      connections: [
        {
          targetId: "chat-root",
          targetLabel: "Chat Fragment",
          type: "contains" as const,
          strength: 0.7,
          context: "Secondary extraction",
        },
      ],
    },
    {
      id: "echo1",
      label: "Echo: Historical Resonance",
      type: "floatlog" as const,
      weight: 4,
      description: "Echo of similar themes from past conversations",
      timestamp: "2025-01-10T11:20:00Z",
      tags: ["echo", "historical", "resonance"],
      metadata: {
        echo_strength: "strong",
        temporal_distance: "3 months",
      },
      connections: [
        {
          targetId: "distilled1",
          targetLabel: "Distilled Theme 1",
          type: "semantic" as const,
          strength: 0.8,
          context: "Historical echo",
        },
      ],
    },
    {
      id: "ritual1",
      label: "ritualAST::echo_bloom_ritual.v1",
      type: "ritual" as const,
      weight: 5,
      description: "Ritual for processing echo blooms",
      sigil: "Ξ",
      tags: ["ritual", "echo_processing", "bloom"],
      metadata: {
        version: "v1",
        trigger: "Strong echo detection",
      },
      connections: [
        {
          targetId: "distilled1",
          targetLabel: "Distilled Theme 1",
          type: "ritual" as const,
          strength: 0.7,
          context: "Processing ritual",
        },
        {
          targetId: "distilled2",
          targetLabel: "Distilled Theme 2",
          type: "ritual" as const,
          strength: 0.6,
          context: "Processing ritual",
        },
      ],
    },
  ]

  // Add connections to root node
  rootNode.connections = distilledNodes.map((node) => ({
    targetId: node.id,
    targetLabel: node.label,
    type: "contains" as const,
    strength: 0.8,
    context: "Extracted from chat",
  }))

  return [rootNode, ...distilledNodes]
}

function generateSigilNodes(sigil: string): ConceptNode[] {
  // Generate nodes filtered by sigil
  const sigilMap: Record<string, { name: string; description: string }> = {
    ψ: {
      name: "Psyche/Mind",
      description: "Cognitive patterns and mental models",
    },
    Ξ: {
      name: "Structure/System",
      description: "Organizational frameworks and systems",
    },
    "⊡": {
      name: "Container/Frame",
      description: "Bounded contexts and conceptual containers",
    },
    "{}": {
      name: "Mirror Logic",
      description: "Identity recursion and self-observation loops",
    },
  }

  const sigilInfo = sigilMap[sigil] || { name: "Unknown Sigil", description: "Undefined sigil pattern" }

  const rootNode: ConceptNode = {
    id: "sigil-root",
    label: `Sigil {${sigil}}`,
    type: "concept",
    weight: 8,
    description: `${sigilInfo.name}: ${sigilInfo.description}`,
    sigil: sigil,
    tags: ["sigil", "filter", "cosmology"],
    connections: [],
  }

  // Generate sigil-filtered nodes
  const filteredNodes = [
    {
      id: "doctrine1",
      label: `doctrineFragment::${sigil}_principles.v1`,
      type: "doctrine" as const,
      weight: 7,
      description: `Core principles related to ${sigilInfo.name}`,
      sigil: sigil,
      tags: ["doctrine", "principles", sigil],
      metadata: {
        version: "v1",
        status: "established",
      },
      connections: [
        {
          targetId: "sigil-root",
          targetLabel: `Sigil {${sigil}}`,
          type: "semantic" as const,
          strength: 0.9,
          context: "Core principles",
        },
      ],
    },
    {
      id: "floatlog1",
      label: `floatlog::${sigil}_reflection_20250405`,
      type: "floatlog" as const,
      weight: 5,
      description: `Reflection on ${sigilInfo.name}`,
      sigil: sigil,
      timestamp: "2025-04-05T10:15:00Z",
      tags: ["reflection", sigil, "exploration"],
      metadata: {
        status: "floating",
        mood: "introspective",
      },
      connections: [
        {
          targetId: "sigil-root",
          targetLabel: `Sigil {${sigil}}`,
          type: "reference" as const,
          strength: 0.8,
          context: "Sigil reflection",
        },
      ],
    },
    {
      id: "ritual1",
      label: `ritualAST::${sigil}_invocation.v1`,
      type: "ritual" as const,
      weight: 6,
      description: `Ritual for invoking ${sigilInfo.name} state`,
      sigil: sigil,
      tags: ["ritual", "invocation", sigil],
      metadata: {
        version: "v1",
        trigger: "Need for alignment",
      },
      connections: [
        {
          targetId: "sigil-root",
          targetLabel: `Sigil {${sigil}}`,
          type: "ritual" as const,
          strength: 0.9,
          context: "Invocation ritual",
        },
        {
          targetId: "doctrine1",
          targetLabel: `doctrineFragment::${sigil}_principles.v1`,
          type: "reference" as const,
          strength: 0.7,
          context: "Doctrinal foundation",
        },
      ],
    },
    {
      id: "concept1",
      label: `${sigilInfo.name} Pattern`,
      type: "concept" as const,
      weight: 6,
      description: `Conceptual pattern related to ${sigilInfo.name}`,
      sigil: sigil,
      tags: ["pattern", "concept", sigil],
      connections: [
        {
          targetId: "sigil-root",
          targetLabel: `Sigil {${sigil}}`,
          type: "semantic" as const,
          strength: 0.8,
          context: "Pattern manifestation",
        },
      ],
    },
  ]

  // Add connections to root node
  rootNode.connections = filteredNodes.map((node) => ({
    targetId: node.id,
    targetLabel: node.label,
    type: "contains" as const,
    strength: 0.8,
    context: `${sigilInfo.name} manifestation`,
  }))

  return [rootNode, ...filteredNodes]
}

function generateMetaPathNodes(floatlogId: string): ConceptNode[] {
  // Generate a path traversal from a floatlog
  const rootNode: ConceptNode = {
    id: "floatlog-root",
    label: floatlogId,
    type: "floatlog",
    weight: 7,
    description: "Source floatlog for path traversal",
    timestamp: "2025-04-10T15:30:00Z",
    tags: ["source", "floatlog", "path_root"],
    metadata: {
      status: "floating",
      type: "reflection",
    },
    connections: [],
  }

  // Generate connected nodes along the path
  const pathNodes = [
    {
      id: "connected1",
      label: "Connected Floatlog 1",
      type: "floatlog" as const,
      weight: 5,
      description: "Floatlog connected to the source",
      timestamp: "2025-04-08T11:20:00Z",
      tags: ["connected", "floatlog", "path_node"],
      metadata: {
        status: "floating",
        type: "observation",
      },
      connections: [
        {
          targetId: "floatlog-root",
          targetLabel: floatlogId,
          type: "reference" as const,
          strength: 0.8,
          context: "Direct reference",
        },
      ],
    },
    {
      id: "doctrine1",
      label: "doctrineFragment::path_principles.v1",
      type: "doctrine" as const,
      weight: 6,
      description: "Doctrine fragment related to the path",
      sigil: "⊡",
      tags: ["doctrine", "principles", "path"],
      metadata: {
        version: "v1",
        status: "established",
      },
      connections: [
        {
          targetId: "floatlog-root",
          targetLabel: floatlogId,
          type: "contains" as const,
          strength: 0.7,
          context: "Doctrinal foundation",
        },
        {
          targetId: "connected1",
          targetLabel: "Connected Floatlog 1",
          type: "reference" as const,
          strength: 0.6,
          context: "Supporting evidence",
        },
      ],
    },
    {
      id: "concept1",
      label: "Path Concept",
      type: "concept" as const,
      weight: 5,
      description: "Concept extracted from the path",
      tags: ["concept", "extracted", "path"],
      connections: [
        {
          targetId: "floatlog-root",
          targetLabel: floatlogId,
          type: "contains" as const,
          strength: 0.8,
          context: "Extracted concept",
        },
        {
          targetId: "doctrine1",
          targetLabel: "doctrineFragment::path_principles.v1",
          type: "semantic" as const,
          strength: 0.7,
          context: "Conceptual alignment",
        },
      ],
    },
    {
      id: "ritual1",
      label: "ritualAST::path_traversal.v1",
      type: "ritual" as const,
      weight: 6,
      description: "Ritual for traversing paths",
      sigil: "Ξ",
      tags: ["ritual", "traversal", "path"],
      metadata: {
        version: "v1",
        trigger: "Path discovery",
      },
      connections: [
        {
          targetId: "floatlog-root",
          targetLabel: floatlogId,
          type: "ritual" as const,
          strength: 0.8,
          context: "Traversal ritual",
        },
      ],
    },
  ]

  // Add connections to root node
  rootNode.connections = pathNodes.map((node) => ({
    targetId: node.id,
    targetLabel: node.label,
    type: node.type === "floatlog" ? ("reference" as const) : ("contains" as const),
    strength: 0.8,
    context: "Path connection",
  }))

  return [rootNode, ...pathNodes]
}
