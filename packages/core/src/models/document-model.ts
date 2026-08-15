/**
 * ElectroCMS Canonical Document Model
 */

export type ElectroDocumentKind = 'page' | 'template' | 'form' | 'backend-screen' | 'reusable-component';

export interface ElectroNode {
  id: string;
  componentRef: string; // e.g., 'Container', 'Text', 'Button'
  props: Record<string, any>;
  slots?: Record<string, ElectroNode[]>;
}

export interface ElectroDocument {
  id: string;
  name: string;
  kind: ElectroDocumentKind;
  nodes: ElectroNode[];
  metadata?: Record<string, any>;
}
