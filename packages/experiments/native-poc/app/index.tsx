import React from 'react';
import { View, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { NativeRenderer } from '../src/renderers/native-renderer';
import { ElectroNode } from '@electrocms/core';

const mockNodes: ElectroNode[] = [
  {
    id: '1',
    componentRef: 'Container',
    props: { style: { backgroundColor: '#f0f0f0', margin: 10, borderRadius: 10 } },
    slots: {
      children: [
        {
          id: '2',
          componentRef: 'Text',
          props: { text: 'Welcome to ElectroCMS Native POC', style: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 } },
        },
        {
          id: '3',
          componentRef: 'Button',
          props: { label: 'Click Me!', onPress: () => alert('Native Button Pressed') },
        }
      ]
    }
  }
];

export default function Home() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Stack.Screen options={{ title: 'ElectroCMS Native' }} />
      <View style={{ padding: 10 }}>
        {mockNodes.map(node => (
          <NativeRenderer key={node.id} node={node} />
        ))}
      </View>
    </ScrollView>
  );
}
