import type { ConceptNode } from "@/types/concept-node"
import type { ExpansionPattern } from "@/types/expansion-patterns"

// Sample FLOAT log data
export const sampleFloatLog = {
  uid: "floatlog::20250416_float_diz_dryrun",
  timestamp: "20250416T204500Z",
  status: "floating",
  tags: ["float_diz", "scratch_rituals", "ambient_pattern", "floatctl_ready", "bbs_reference"],
  summary:
    "Captured first explicit dry run of `float_diz::` convention during April 16 FLOAT sync. Confirmed value of ambient metadata tags and outlined future parser hooks.",
  linkedTo: [
    "doctrineFragment::float_diz_spec",
    "floatlog::20250416_scratch_notes",
    "chatlog::68001583-44cc-8010-abbd-2c0301e46522",
    "floatctl::toss_20250416_shift_capture",
  ],
  context: [
    "Initiated during 4:45pm reflection inside FLOATCTRL scratch thread",
    "File taglines treated as embedded BBS-style `.diz` blurbs",
    "Confirmed use in real workflow (e.g. roadmap, Gemini exports, daily syncs)",
  ],
  note: [
    "Potential parser behavior and plugin flow mapped in response",
    "Doctrine fragment seeded (`doctrineFragment::float_diz_spec`)",
  ],
}

export const sampleDoctrineFragment = {
  uid: "doctrineFragment::float_diz_spec",
  timestamp: "20250416T215900Z",
  status: "draft",
  tags: ["float_diz", "metadata_hint", "ritual_ui", "ambient_structure", "bbs_inspired"],
  summary:
    "Defines the `float_diz::` convention as a lightweight, BBS-inspired way to tag attached files with ambient context or intent within scratch notes and chats.",
  linkedTo: [
    "floatctl::toss_20250416_shift_capture",
    "floatlog::20250416_scratch_notes",
    "ritualAST::workflow_shift_log_20250416",
  ],
  content: `
### \`float_diz::\` Convention

Inspired by \`.diz\` files from BBS archives, \`float_diz::\` blocks allow users to embed quick context for attached or referenced files within freeform notes.

They are:
- **Lightweight**: Designed for ambient use during scratch capture
- **Optional**: Don't require full structure; can just hint at intent
- **Parser-Friendly**: Easy for \`floatctl\` to scan and associate with fragments

---

### Example

\`\`\`markdown
[float_diz:: FLOATCTL Roadmap PDF]
    ⁃ Source of the April 16 toss plan
    ⁃ Links to Milestone 1 + plugin architecture deferment
[/float_diz]
\`\`\`

Future Integration
- floatctl extract: Optionally captures float_diz blocks into metadata or as diz.md sidecars
- floatctl enhance: Uses float_diz content to suggest tags or linkedTo
- Doctrine Plugins: Potential ritual parser to promote diz blocks into ritualAST::metadata_hint entries
  `,
}

export const sampleRitualAST = {
  uid: "ritualAST::workflow_shift_log_20250416",
  title: "Ritual Shift — Lighter Capture, Smarter Import",
  tags: ["ritual_shift", "capture_logic", "memory_ritual", "friction_reduction"],
  linkedTo: ["floatlog::20250416_scratch_notes", "doctrineVolume::note_infrastructure"],
  sigils: ["{∴}", "{ψ}"],
  status: "active",
  content: `
### Why It Shifted
- Capturing everything into Obsidian led to overload
- Plugins + mass import slowed performance and navigation
- Needed quick capture without file placement friction

---

### What Emerged
- Apple Notes + ChatGPT as frictionless scratch pad
- Files save as a "note envelope" for each day
- Scratch ≠ archive: filtering before Obsidian import now essential

---

### What's Next
- Float transform pipeline under consideration
- Summary rituals embedded directly in notes
- Chat-as-capture awareness: reduce overfit to past ideation

---

This log is a transitional moment:  
not abandoning tools, just listening to the ritual.
  `,
}

export const sampleFloatCtl = {
  uid: "floatctl::toss_20250416_shift_capture",
  title: "Toss Seed — Capture Shift & Vault Filtering",
  tags: ["floatctl", "toss", "workflow_seed", "scratch_loop", "ritual_shift"],
  linkedTo: [
    "floatlog::20250416_scratch_notes",
    "ritualAST::workflow_shift_log_20250416",
    "toolflow::apple_notes_capture",
  ],
  status: "seed",
  content: `
### 🪞 Prompt Reflection
What happens when scratch stops being the archive?  
What does a vault look like when it's only the echoes, not the raw sound?

---

### 🧩 Puzzle Fragments (toss directions)

- **float→shack transform system**  
  _Design:_ Input scratch format → Apply filters/tags → Output Obsidian-ready  
  _Prompt:_ What metadata or shape makes scratch import-worthy?

- **daily envelope capture archetype**  
  _Explore:_ Use Files+Notes as ambient structure  
  _Prompt:_ How can attachments + note summaries become ephemeral nodes?

- **Obsidian-lite scratch layer**  
  _Prototype:_ Pre-vault scratch space that isn't cluttered  
  _Prompt:_ Can ChatGPT or a local parser simulate this "filter layer"?

- **thread summary infrastructure**  
  _Routine:_ Embed EOD summaries inside scratch logs  
  _Prompt:_ What format helps later reentry and limits overfitting?

- **chat id anchoring system**  
  _Hack:_ Easier thread ID lookup or auto-logging  
  _Prompt:_ What rituals reduce the annoyance here?

---

### ⚙️ Toss Actions

- [ ] Draft \`float → shack\` transform YAML spec  
- [ ] Create \`daily-envelope.md\` template for vault use  
- [ ] Prototype \`chat-scratch-buffer.md\` for Obsidian-lite layer  
- [ ] Develop \`thread-sync-template.md\` with chat ID, title, summary blocks  
- [ ] Build \`chat-anchor-tool.sh\` or shortcut for easier thread URL pulls

---

### ✍️ Meta Note

This toss seeds a liminal layer:  
between raw scratch and curated vault.  
Between presence and persistence.  
Between daily drift and future echoes.

Let the float roll.
  `,
}

// Generate concept nodes from sample data for different expansion patterns
export function generateSampleConceptNodes(pattern: ExpansionPattern, seed: string, sigil?: string): ConceptNode[] {
  // This function generates nodes based on the sample FLOAT log data
  const nodes: ConceptNode[] = []

  // Root node based on pattern
  let rootNode: ConceptNode = {
    id: "root",
    label: "",
    type: "concept",
    weight: 8,
    description: "",
    tags: [],
    connections: [],
  }

  switch (pattern) {
    case "concept-led":
      rootNode = {
        id: "root",
        label: seed,
        type: "concept",
        weight: 8,
        description: `Core concept: ${seed}`,
        tags: ["seed", "core_concept", "semantic_root"],
        timestamp: new Date().toISOString(),
        connections: [],
      }

      // Add related nodes based on the seed concept
      if (seed.toLowerCase().includes("float") || seed.toLowerCase().includes("diz")) {
        nodes.push({
          id: "floatlog1",
          label: "floatlog::20250416_float_diz_dryrun",
          type: "floatlog",
          weight: 6,
          description: sampleFloatLog.summary,
          tags: sampleFloatLog.tags,
          timestamp: sampleFloatLog.timestamp,
          metadata: {
            status: sampleFloatLog.status,
            uid: sampleFloatLog.uid,
          },
          connections: [
            {
              targetId: "root",
              targetLabel: seed,
              type: "semantic",
              strength: 0.8,
              context: "Related concept",
            },
          ],
        })

        nodes.push({
          id: "doctrine1",
          label: "doctrineFragment::float_diz_spec",
          type: "doctrine",
          weight: 7,
          description: sampleDoctrineFragment.summary,
          tags: sampleDoctrineFragment.tags,
          timestamp: sampleDoctrineFragment.timestamp,
          sigil: "ψ",
          metadata: {
            status: sampleDoctrineFragment.status,
            uid: sampleDoctrineFragment.uid,
          },
          connections: [
            {
              targetId: "root",
              targetLabel: seed,
              type: "semantic",
              strength: 0.9,
              context: "Core definition",
            },
            {
              targetId: "floatlog1",
              targetLabel: "floatlog::20250416_float_diz_dryrun",
              type: "reference",
              strength: 0.7,
              context: "Source reference",
            },
          ],
        })
      }

      if (seed.toLowerCase().includes("ritual") || seed.toLowerCase().includes("workflow")) {
        nodes.push({
          id: "ritual1",
          label: "ritualAST::workflow_shift_log_20250416",
          type: "ritual",
          weight: 6,
          description: sampleRitualAST.title,
          tags: sampleRitualAST.tags,
          sigil: "ψ",
          metadata: {
            status: sampleRitualAST.status,
            uid: sampleRitualAST.uid,
          },
          connections: [
            {
              targetId: "root",
              targetLabel: seed,
              type: "semantic",
              strength: 0.8,
              context: "Related ritual",
            },
          ],
        })
      }

      if (seed.toLowerCase().includes("floatctl") || seed.toLowerCase().includes("tool")) {
        nodes.push({
          id: "floatctl1",
          label: "floatctl::toss_20250416_shift_capture",
          type: "floatlog",
          weight: 5,
          description: sampleFloatCtl.title,
          tags: sampleFloatCtl.tags,
          metadata: {
            status: sampleFloatCtl.status,
            uid: sampleFloatCtl.uid,
          },
          connections: [
            {
              targetId: "root",
              targetLabel: seed,
              type: "semantic",
              strength: 0.7,
              context: "Tool reference",
            },
          ],
        })
      }
      break

    case "note-led":
      if (seed.toLowerCase().includes("float_diz")) {
        rootNode = {
          id: "note-root",
          label: "floatlog::20250416_float_diz_dryrun",
          type: "floatlog",
          weight: 8,
          description: sampleFloatLog.summary,
          tags: sampleFloatLog.tags,
          timestamp: sampleFloatLog.timestamp,
          metadata: {
            status: sampleFloatLog.status,
            uid: sampleFloatLog.uid,
          },
          connections: [],
        }

        nodes.push({
          id: "doctrine1",
          label: "doctrineFragment::float_diz_spec",
          type: "doctrine",
          weight: 7,
          description: sampleDoctrineFragment.summary,
          tags: sampleDoctrineFragment.tags,
          timestamp: sampleDoctrineFragment.timestamp,
          sigil: "ψ",
          metadata: {
            status: sampleDoctrineFragment.status,
            uid: sampleDoctrineFragment.uid,
          },
          connections: [
            {
              targetId: "note-root",
              targetLabel: "floatlog::20250416_float_diz_dryrun",
              type: "reference",
              strength: 0.9,
              context: "Derived from",
            },
          ],
        })

        nodes.push({
          id: "concept1",
          label: "BBS-Style Metadata",
          type: "concept",
          weight: 6,
          description: "Concept of using BBS-inspired metadata in notes",
          tags: ["concept", "metadata", "bbs"],
          connections: [
            {
              targetId: "note-root",
              targetLabel: "floatlog::20250416_float_diz_dryrun",
              type: "contains",
              strength: 0.8,
              context: "Extracted concept",
            },
            {
              targetId: "doctrine1",
              targetLabel: "doctrineFragment::float_diz_spec",
              type: "semantic",
              strength: 0.7,
              context: "Related concept",
            },
          ],
        })

        nodes.push({
          id: "floatctl1",
          label: "floatctl::toss_20250416_shift_capture",
          type: "floatlog",
          weight: 5,
          description: sampleFloatCtl.title,
          tags: sampleFloatCtl.tags,
          metadata: {
            status: sampleFloatCtl.status,
            uid: sampleFloatCtl.uid,
          },
          connections: [
            {
              targetId: "note-root",
              targetLabel: "floatlog::20250416_float_diz_dryrun",
              type: "reference",
              strength: 0.6,
              context: "Related tool",
            },
          ],
        })
      } else if (seed.toLowerCase().includes("workflow")) {
        rootNode = {
          id: "note-root",
          label: "ritualAST::workflow_shift_log_20250416",
          type: "ritual",
          weight: 8,
          description: sampleRitualAST.title,
          tags: sampleRitualAST.tags,
          sigil: "ψ",
          metadata: {
            status: sampleRitualAST.status,
            uid: sampleRitualAST.uid,
          },
          connections: [],
        }

        nodes.push({
          id: "floatlog1",
          label: "floatlog::20250416_scratch_notes",
          type: "floatlog",
          weight: 6,
          description: "Daily Scratch Log — April 16, 2025",
          tags: ["scratch", "workflow_refactor", "note_capture", "ambient_structure"],
          timestamp: "20250416T120000Z",
          metadata: {
            status: "drift",
            uid: "floatlog::20250416_scratch_notes",
          },
          connections: [
            {
              targetId: "note-root",
              targetLabel: "ritualAST::workflow_shift_log_20250416",
              type: "reference",
              strength: 0.9,
              context: "Source material",
            },
          ],
        })

        nodes.push({
          id: "concept1",
          label: "Friction Reduction",
          type: "concept",
          weight: 5,
          description: "Concept of reducing friction in note capture workflows",
          tags: ["concept", "workflow", "friction"],
          connections: [
            {
              targetId: "note-root",
              targetLabel: "ritualAST::workflow_shift_log_20250416",
              type: "contains",
              strength: 0.8,
              context: "Core theme",
            },
          ],
        })

        nodes.push({
          id: "floatctl1",
          label: "floatctl::toss_20250416_shift_capture",
          type: "floatlog",
          weight: 5,
          description: sampleFloatCtl.title,
          tags: sampleFloatCtl.tags,
          metadata: {
            status: sampleFloatCtl.status,
            uid: sampleFloatCtl.uid,
          },
          connections: [
            {
              targetId: "note-root",
              targetLabel: "ritualAST::workflow_shift_log_20250416",
              type: "reference",
              strength: 0.7,
              context: "Implementation tool",
            },
            {
              targetId: "concept1",
              targetLabel: "Friction Reduction",
              type: "contains",
              strength: 0.6,
              context: "Applied concept",
            },
          ],
        })
      }
      break

    case "chat-led":
      rootNode = {
        id: "chat-root",
        label: "Chat Fragment",
        type: "floatlog",
        weight: 7,
        description: "Source chat fragment for echo bloom",
        timestamp: new Date().toISOString(),
        metadata: {
          type: "chat_fragment",
          length: "Medium",
        },
        connections: [],
      }

      // Extract concepts from the chat fragment
      const chatConcepts = [
        {
          id: "concept1",
          label: "Float DIZ Convention",
          type: "concept" as const,
          weight: 6,
          description: "BBS-inspired metadata convention for files",
          tags: ["convention", "metadata", "bbs"],
          connections: [
            {
              targetId: "chat-root",
              targetLabel: "Chat Fragment",
              type: "contains" as const,
              strength: 0.9,
              context: "Primary theme",
            },
          ],
        },
        {
          id: "concept2",
          label: "Workflow Shift",
          type: "concept" as const,
          weight: 5,
          description: "Transition to lighter capture methods",
          tags: ["workflow", "capture", "friction"],
          connections: [
            {
              targetId: "chat-root",
              targetLabel: "Chat Fragment",
              type: "contains" as const,
              strength: 0.8,
              context: "Secondary theme",
            },
          ],
        },
      ]

      // Add related artifacts
      nodes.push({
        id: "floatlog1",
        label: "floatlog::20250416_float_diz_dryrun",
        type: "floatlog",
        weight: 5,
        description: sampleFloatLog.summary,
        tags: sampleFloatLog.tags,
        timestamp: sampleFloatLog.timestamp,
        metadata: {
          status: sampleFloatLog.status,
          uid: sampleFloatLog.uid,
        },
        connections: [
          {
            targetId: "concept1",
            targetLabel: "Float DIZ Convention",
            type: "reference",
            strength: 0.9,
            context: "Implementation example",
          },
        ],
      })

      nodes.push({
        id: "doctrine1",
        label: "doctrineFragment::float_diz_spec",
        type: "doctrine",
        weight: 6,
        description: sampleDoctrineFragment.summary,
        tags: sampleDoctrineFragment.tags,
        timestamp: sampleDoctrineFragment.timestamp,
        sigil: "ψ",
        metadata: {
          status: sampleDoctrineFragment.status,
          uid: sampleDoctrineFragment.uid,
        },
        connections: [
          {
            targetId: "concept1",
            targetLabel: "Float DIZ Convention",
            type: "contains",
            strength: 0.9,
            context: "Formal definition",
          },
          {
            targetId: "floatlog1",
            targetLabel: "floatlog::20250416_float_diz_dryrun",
            type: "reference",
            strength: 0.7,
            context: "Source reference",
          },
        ],
      })

      nodes.push({
        id: "ritual1",
        label: "ritualAST::workflow_shift_log_20250416",
        type: "ritual",
        weight: 5,
        description: sampleRitualAST.title,
        tags: sampleRitualAST.tags,
        sigil: "ψ",
        metadata: {
          status: sampleRitualAST.status,
          uid: sampleRitualAST.uid,
        },
        connections: [
          {
            targetId: "concept2",
            targetLabel: "Workflow Shift",
            type: "contains",
            strength: 0.8,
            context: "Formalized ritual",
          },
        ],
      })

      // Add connections to root node
      rootNode.connections = [
        {
          targetId: "concept1",
          targetLabel: "Float DIZ Convention",
          type: "contains",
          strength: 0.9,
          context: "Primary extraction",
        },
        {
          targetId: "concept2",
          targetLabel: "Workflow Shift",
          type: "contains",
          strength: 0.8,
          context: "Secondary extraction",
        },
      ]

      // Add concepts to nodes
      nodes.push(...chatConcepts)
      break

    case "sigil-seeding":
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

      const sigilInfo = sigilMap[sigil || "ψ"] || { name: "Unknown Sigil", description: "Undefined sigil pattern" }

      rootNode = {
        id: "sigil-root",
        label: `Sigil {${sigil}}`,
        type: "concept",
        weight: 8,
        description: `${sigilInfo.name}: ${sigilInfo.description}`,
        sigil: sigil,
        tags: ["sigil", "filter", "cosmology"],
        connections: [],
      }

      // Filter nodes by sigil
      if (sigil === "ψ") {
        nodes.push({
          id: "doctrine1",
          label: "doctrineFragment::float_diz_spec",
          type: "doctrine",
          weight: 7,
          description: sampleDoctrineFragment.summary,
          tags: sampleDoctrineFragment.tags,
          timestamp: sampleDoctrineFragment.timestamp,
          sigil: "ψ",
          metadata: {
            status: sampleDoctrineFragment.status,
            uid: sampleDoctrineFragment.uid,
          },
          connections: [
            {
              targetId: "sigil-root",
              targetLabel: `Sigil {${sigil}}`,
              type: "semantic",
              strength: 0.8,
              context: "Sigil alignment",
            },
          ],
        })

        nodes.push({
          id: "ritual1",
          label: "ritualAST::workflow_shift_log_20250416",
          type: "ritual",
          weight: 6,
          description: sampleRitualAST.title,
          tags: sampleRitualAST.tags,
          sigil: "ψ",
          metadata: {
            status: sampleRitualAST.status,
            uid: sampleRitualAST.uid,
          },
          connections: [
            {
              targetId: "sigil-root",
              targetLabel: `Sigil {${sigil}}`,
              type: "semantic",
              strength: 0.7,
              context: "Sigil alignment",
            },
            {
              targetId: "doctrine1",
              targetLabel: "doctrineFragment::float_diz_spec",
              type: "reference",
              strength: 0.6,
              context: "Related doctrine",
            },
          ],
        })

        nodes.push({
          id: "concept1",
          label: "Cognitive Friction",
          type: "concept",
          weight: 5,
          description: "Mental resistance to workflow complexity",
          tags: ["concept", "cognition", "friction"],
          sigil: "ψ",
          connections: [
            {
              targetId: "sigil-root",
              targetLabel: `Sigil {${sigil}}`,
              type: "semantic",
              strength: 0.8,
              context: "Psyche pattern",
            },
            {
              targetId: "ritual1",
              targetLabel: "ritualAST::workflow_shift_log_20250416",
              type: "contains",
              strength: 0.7,
              context: "Applied concept",
            },
          ],
        })
      } else if (sigil === "Ξ") {
        nodes.push({
          id: "floatctl1",
          label: "floatctl::toss_20250416_shift_capture",
          type: "floatlog",
          weight: 6,
          description: sampleFloatCtl.title,
          tags: sampleFloatCtl.tags,
          sigil: "Ξ",
          metadata: {
            status: sampleFloatCtl.status,
            uid: sampleFloatCtl.uid,
          },
          connections: [
            {
              targetId: "sigil-root",
              targetLabel: `Sigil {${sigil}}`,
              type: "semantic",
              strength: 0.9,
              context: "System structure",
            },
          ],
        })

        nodes.push({
          id: "concept1",
          label: "Transform Pipeline",
          type: "concept",
          weight: 5,
          description: "Structured data transformation system",
          tags: ["concept", "system", "pipeline"],
          sigil: "Ξ",
          connections: [
            {
              targetId: "sigil-root",
              targetLabel: `Sigil {${sigil}}`,
              type: "semantic",
              strength: 0.8,
              context: "System pattern",
            },
            {
              targetId: "floatctl1",
              targetLabel: "floatctl::toss_20250416_shift_capture",
              type: "contains",
              strength: 0.7,
              context: "Implementation concept",
            },
          ],
        })
      }
      break

    case "meta-path":
      if (seed.toLowerCase().includes("float_diz")) {
        rootNode = {
          id: "floatlog-root",
          label: "floatlog::20250416_float_diz_dryrun",
          type: "floatlog",
          weight: 7,
          description: sampleFloatLog.summary,
          tags: sampleFloatLog.tags,
          timestamp: sampleFloatLog.timestamp,
          metadata: {
            status: sampleFloatLog.status,
            uid: sampleFloatLog.uid,
          },
          connections: [],
        }

        // Add connected nodes
        nodes.push({
          id: "doctrine1",
          label: "doctrineFragment::float_diz_spec",
          type: "doctrine",
          weight: 6,
          description: sampleDoctrineFragment.summary,
          tags: sampleDoctrineFragment.tags,
          timestamp: sampleDoctrineFragment.timestamp,
          sigil: "ψ",
          metadata: {
            status: sampleDoctrineFragment.status,
            uid: sampleDoctrineFragment.uid,
          },
          connections: [
            {
              targetId: "floatlog-root",
              targetLabel: "floatlog::20250416_float_diz_dryrun",
              type: "reference",
              strength: 0.9,
              context: "Derived from",
            },
          ],
        })

        nodes.push({
          id: "floatlog2",
          label: "floatlog::20250416_scratch_notes",
          type: "floatlog",
          weight: 5,
          description: "Daily Scratch Log — April 16, 2025",
          tags: ["scratch", "workflow_refactor", "note_capture", "ambient_structure"],
          timestamp: "20250416T120000Z",
          metadata: {
            status: "drift",
            uid: "floatlog::20250416_scratch_notes",
          },
          connections: [
            {
              targetId: "floatlog-root",
              targetLabel: "floatlog::20250416_float_diz_dryrun",
              type: "reference",
              strength: 0.7,
              context: "Related log",
            },
          ],
        })

        nodes.push({
          id: "floatctl1",
          label: "floatctl::toss_20250416_shift_capture",
          type: "floatlog",
          weight: 5,
          description: sampleFloatCtl.title,
          tags: sampleFloatCtl.tags,
          metadata: {
            status: sampleFloatCtl.status,
            uid: sampleFloatCtl.uid,
          },
          connections: [
            {
              targetId: "floatlog-root",
              targetLabel: "floatlog::20250416_float_diz_dryrun",
              type: "reference",
              strength: 0.6,
              context: "Implementation tool",
            },
            {
              targetId: "doctrine1",
              targetLabel: "doctrineFragment::float_diz_spec",
              type: "reference",
              strength: 0.7,
              context: "Applies doctrine",
            },
          ],
        })
      }
      break
  }

  // Add connections to root node if not already added
  if (rootNode.connections?.length === 0 && nodes.length > 0) {
    rootNode.connections = nodes.map((node) => ({
      targetId: node.id,
      targetLabel: node.label,
      type: "reference",
      strength: 0.8,
      context: "Connected node",
    }))
  }

  // Add root node to the beginning of the array
  return [rootNode, ...nodes]
}
