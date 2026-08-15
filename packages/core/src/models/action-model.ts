/**
 * ElectroCMS Canonical Action Flow Model
 */

export interface ElectroActionNode {
  id: string;
  type: string; // e.g., 'Trigger', 'Condition', 'Action'
  data: Record<string, any>;
}

export interface ElectroActionConnection {
  id: string;
  source: string;
  sourceOutput: string;
  target: string;
  targetInput: string;
}

export interface ElectroActionGraph {
  id: string;
  name: string;
  nodes: ElectroActionNode[];
  connections: ElectroActionConnection[];
}
