import { ElectroDocument, ElectroNode } from '@electrocms/core';

/**
 * Maps ElectroCMS Canonical Model to Puck Data format
 */
export const toPuckData = (doc: ElectroDocument) => {
  return {
    content: doc.nodes.map(mapNodeToPuck),
    root: {
      props: {
        title: doc.name,
      }
    }
  };
};

/**
 * Maps Puck Data format back to ElectroCMS Canonical Model
 */
export const fromPuckData = (puckData: any, docId: string, kind: any): ElectroDocument => {
  return {
    id: docId,
    name: puckData.root?.props?.title || 'Untitled',
    kind: kind,
    nodes: puckData.content.map(mapPuckToNode),
  };
};

const mapNodeToPuck = (node: ElectroNode): any => {
  const puckNode: any = {
    type: node.componentRef,
    props: { ...node.props, id: node.id },
  };

  if (node.slots) {
    Object.keys(node.slots).forEach(slotName => {
      puckNode.props[slotName] = node.slots![slotName].map(mapNodeToPuck);
    });
  }

  return puckNode;
};

const mapPuckToNode = (puckNode: any): ElectroNode => {
  const node: ElectroNode = {
    id: puckNode.props.id || Math.random().toString(36).substr(2, 9),
    componentRef: puckNode.type,
    props: { ...puckNode.props },
  };

  // Remove Puck internal id from props to keep canonical model clean
  delete node.props.id;

  // Identify slots by checking for array props (Puck convention for slots)
  Object.keys(puckNode.props).forEach(key => {
    if (Array.isArray(puckNode.props[key]) && puckNode.props[key].length > 0 && puckNode.props[key][0].type) {
      if (!node.slots) node.slots = {};
      node.slots[key] = puckNode.props[key].map(mapPuckToNode);
      delete node.props[key];
    }
  });

  return node;
};
