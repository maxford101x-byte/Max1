import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
// import Editor from '../components/Editor'; // to be implemented

export default function EditorScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Media Editor (trim, merge, effects...)</Text>
      {/* <Editor /> */}
    </View>
  );
}