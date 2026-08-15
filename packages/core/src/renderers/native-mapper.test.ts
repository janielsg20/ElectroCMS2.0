import { NativeMapper } from './native-mapper';
import { ElectroNode } from '../models/document-model';

describe('NativeMapper POC', () => {
  it('should map Container to View with styles', () => {
    const node: ElectroNode = {
      id: 'n1',
      componentRef: 'Container',
      props: { style: { backgroundColor: 'red' } }
    };

    const mapping = NativeMapper.mapNode(node);
    expect(mapping.type).toBe('View');
    expect(mapping.style.backgroundColor).toBe('red');
  });

  it('should map Button to Pressable and preserve onPress', () => {
    const mockPress = jest.fn();
    const node: ElectroNode = {
      id: 'n1',
      componentRef: 'Button',
      props: { label: 'Click', onPress: mockPress }
    };

    const mapping = NativeMapper.mapNode(node);
    expect(mapping.type).toBe('Pressable');
    expect(mapping.props.onPress).toBe(mockPress);
    expect(mapping.props.label).toBe('Click');
  });
});
