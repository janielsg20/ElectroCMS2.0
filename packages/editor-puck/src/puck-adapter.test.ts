import { ElectroDocument } from '@electrocms/core';
import { toPuckData, fromPuckData } from './puck-adapter';

describe('PuckAdapter', () => {
  const mockDoc: ElectroDocument = {
    id: 'doc-1',
    name: 'Home Page',
    kind: 'page',
    nodes: [
      {
        id: 'node-1',
        componentRef: 'Container',
        props: { padding: '20px' },
        slots: {
          children: [
            {
              id: 'node-2',
              componentRef: 'Text',
              props: { text: 'Hello World' },
            }
          ]
        }
      }
    ]
  };

  it('should map ElectroDocument to Puck Data', () => {
    const puckData = toPuckData(mockDoc);
    expect(puckData.content[0].type).toBe('Container');
    expect(puckData.content[0].props.padding).toBe('20px');
    expect(puckData.content[0].props.children[0].type).toBe('Text');
    expect(puckData.root.props.title).toBe('Home Page');
  });

  it('should map Puck Data back to ElectroDocument (Round-trip)', () => {
    const puckData = toPuckData(mockDoc);
    const resultDoc = fromPuckData(puckData, 'doc-1', 'page');

    expect(resultDoc.id).toBe('doc-1');
    expect(resultDoc.name).toBe('Home Page');
    expect(resultDoc.nodes[0].componentRef).toBe('Container');
    expect(resultDoc.nodes[0].slots?.children[0].componentRef).toBe('Text');
    expect(resultDoc.nodes[0].slots?.children[0].props.text).toBe('Hello World');
  });

  it('should not leak Puck internal id into canonical props', () => {
    const puckData = toPuckData(mockDoc);
    const resultDoc = fromPuckData(puckData, 'doc-1', 'page');
    expect(resultDoc.nodes[0].props.id).toBeUndefined();
  });
});
