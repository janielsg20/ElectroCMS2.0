import { toReteJSON, fromReteJSON } from './rete-adapter';
import { ElectroActionGraph } from '../models/action-model';

describe('Rete Adapter POC (Action Flow)', () => {
  const mockGraph: ElectroActionGraph = {
    id: 'g1',
    name: 'Welcome Flow',
    nodes: [
      { id: 'n1', type: 'Trigger', data: { event: 'onUserRegister' } },
      { id: 'n2', type: 'Action', data: { type: 'toast', message: 'Welcome!' } }
    ],
    connections: [
      { id: 'c1', source: 'n1', sourceOutput: 'out', target: 'n2', targetInput: 'in' }
    ]
  };

  it('should map ElectroActionGraph to Rete JSON', () => {
    const reteJson = toReteJSON(mockGraph);
    expect(reteJson.nodes[0].id).toBe('n1');
    expect(reteJson.nodes[0].label).toBe('Trigger');
    expect(reteJson.connections[0].source).toBe('n1');
    expect(reteJson.connections[0].target).toBe('n2');
  });

  it('should map Rete JSON back to ElectroActionGraph (Round-trip)', () => {
    const reteJson = toReteJSON(mockGraph);
    const resultGraph = fromReteJSON(reteJson, 'g1', 'Welcome Flow');

    expect(resultGraph.id).toBe('g1');
    expect(resultGraph.nodes[1].type).toBe('Action');
    expect(resultGraph.connections[0].id).toBe('c1');
    expect(resultGraph.connections[0].sourceOutput).toBe('out');
  });

  it('should maintain isolation from Rete runtime classes', () => {
    const reteJson = toReteJSON(mockGraph);
    const resultGraph = fromReteJSON(reteJson, 'g1', 'Welcome Flow');

    // Check that we're only dealing with plain objects
    expect(resultGraph.constructor.name).toBe('Object');
    expect(resultGraph.nodes[0].constructor.name).toBe('Object');
  });
});
