import { ElectroActionGraph, ElectroActionNode, ElectroActionConnection } from '../models/action-model';

/**
 * Maps ElectroCMS Canonical Action Graph to Rete.js JSON format
 */
export const toReteJSON = (graph: ElectroActionGraph) => {
  return {
    nodes: graph.nodes.map(node => ({
      id: node.id,
      label: node.type,
      data: node.data,
      inputs: {}, // Populated by connections
      outputs: {}, // Populated by connections
    })),
    connections: graph.connections.map(conn => ({
      id: conn.id,
      source: conn.source,
      sourceOutput: conn.sourceOutput,
      target: conn.target,
      targetInput: conn.targetInput,
    })),
  };
};

/**
 * Maps Rete.js JSON back to ElectroCMS Canonical Action Graph
 */
export const fromReteJSON = (reteJson: any, graphId: string, name: string): ElectroActionGraph => {
  const nodes: ElectroActionNode[] = (reteJson.nodes || []).map((node: any) => ({
    id: node.id,
    type: node.label || node.name || 'Unknown',
    data: node.data || {},
  }));

  const connections: ElectroActionConnection[] = (reteJson.connections || []).map((conn: any) => ({
    id: conn.id,
    source: conn.source,
    sourceOutput: conn.sourceOutput,
    target: conn.target,
    targetInput: conn.targetInput,
  }));

  return {
    id: graphId,
    name: name,
    nodes,
    connections,
  };
};
