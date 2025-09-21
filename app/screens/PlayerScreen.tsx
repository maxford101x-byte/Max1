import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
// import VideoPlayer from '../components/VideoPlayer'; // to be implemented

export default function PlayerScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Advanced Player (video/music)</Text>
      {/* <VideoPlayer /> */}
    </View>
  );
}