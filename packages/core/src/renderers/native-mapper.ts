import { ElectroNode } from '../models/document-model';

export interface NativeStyle {
  [key: string]: any;
}

export interface NativeMapping {
  type: 'View' | 'Text' | 'Pressable' | 'Unknown';
  props: Record<string, any>;
  style: NativeStyle;
}

/**
 * Maps a canonical ElectroNode to its Native representation
 */
export class NativeMapper {
  static mapNode(node: ElectroNode): NativeMapping {
    const { componentRef, props } = node;

    let type: NativeMapping['type'] = 'Unknown';
    const nativeProps: Record<string, any> = { ...props };
    const style: NativeStyle = { ...props.style };

    switch (componentRef) {
      case 'Container':
        type = 'View';
        break;
      case 'Text':
        type = 'Text';
        break;
      case 'Button':
        type = 'Pressable';
        // Map canonical button props to native Pressable props
        nativeProps.onPress = props.onPress;
        break;
    }

    // Remove internal style from nativeProps as it goes into the style object
    delete nativeProps.style;

    return { type, props: nativeProps, style };
  }
}
