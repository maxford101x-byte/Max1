import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

export default function LibraryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Your Playlists, Favorites, History</Text>
      {/* List user's personal content */}
    </View>
  );
}