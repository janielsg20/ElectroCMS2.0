import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { ElectroNode } from '@electrocms/core';

export const NativeRenderer: React.FC<{ node: ElectroNode }> = ({ node }) => {
  const { componentRef, props, slots } = node;

  switch (componentRef) {
    case 'Container':
      return (
        <View style={[styles.container, props.style]}>
          {slots?.children?.map((child) => (
            <NativeRenderer key={child.id} node={child} />
          ))}
        </View>
      );
    case 'Text':
      return <Text style={[styles.text, props.style]}>{props.text}</Text>;
    case 'Button':
      return (
        <Pressable style={[styles.button, props.style]} onPress={props.onPress}>
          <Text style={styles.buttonText}>{props.label}</Text>
        </Pressable>
      );
    default:
      return (
        <View style={styles.unknown}>
          <Text>Unknown component: {componentRef}</Text>
        </View>
      );
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  unknown: {
    padding: 10,
    backgroundColor: '#FFCCCC',
    borderWidth: 1,
    borderColor: '#FF0000',
  },
});
