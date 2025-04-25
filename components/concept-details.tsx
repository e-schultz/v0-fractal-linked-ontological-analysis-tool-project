import type { ConceptNode } from "@/types/concept-node"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { FileText, Hash, Link2, Calendar } from "lucide-react"

interface ConceptDetailsProps {
  node: ConceptNode
}

export function ConceptDetails({ node }: ConceptDetailsProps) {
  return (
    <div className="space-y-4 font-mono">
      <div>
        <h3 className="text-lg font-semibold text-purple-300">{node.label}</h3>
        <div className="flex items-center space-x-2 mt-1">
          <Badge variant="outline" className="text-xs border-purple-700 text-purple-400">
            {node.type}
          </Badge>
          {node.sigil && (
            <Badge variant="outline" className="text-xs border-purple-700 text-purple-400">
              {`{${node.sigil}}`}
            </Badge>
          )}
        </div>
      </div>

      <Separator className="bg-purple-800/50" />

      {node.description && (
        <div>
          <p className="text-sm text-purple-300">{node.description}</p>
        </div>
      )}

      {node.metadata && Object.keys(node.metadata).length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center">
            <FileText className="h-4 w-4 mr-1" /> Metadata
          </h4>
          <div className="space-y-1 text-xs">
            {Object.entries(node.metadata).map(([key, value]) => (
              <div key={key} className="flex">
                <span className="text-purple-500 w-24">{key}:</span>
                <span className="text-purple-300">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {node.tags && node.tags.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center">
            <Hash className="h-4 w-4 mr-1" /> Tags
          </h4>
          <div className="flex flex-wrap gap-2">
            {node.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-purple-900/30 text-purple-300 hover:bg-purple-800/50">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {node.connections && node.connections.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center">
            <Link2 className="h-4 w-4 mr-1" /> Connections
          </h4>
          <div className="space-y-2 text-xs">
            {node.connections.map((conn) => (
              <div key={conn.targetId} className="p-2 border border-purple-800 rounded-md">
                <div className="flex justify-between">
                  <span className="text-purple-300">{conn.targetLabel}</span>
                  <Badge variant="outline" className="text-[10px] border-purple-700 text-purple-400">
                    {conn.type}
                  </Badge>
                </div>
                {conn.context && <p className="text-purple-400 mt-1 text-[10px]">{conn.context}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {node.timestamp && (
        <div className="flex items-center text-xs text-purple-500">
          <Calendar className="h-3 w-3 mr-1" />
          <span>{node.timestamp}</span>
        </div>
      )}
    </div>
  )
}
