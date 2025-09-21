import React from 'react';
import { ScrollView } from 'react-native';
import { Searchbar, Title } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <ScrollView style={{ padding: 16 }}>
      <Searchbar placeholder="Search movies, music, videos..." style={{ marginBottom: 24 }} />
      <Title>Trending</Title>
      {/* TODO: List trending content */}
      <Title>Recommended</Title>
      {/* TODO: Personalized recommendations */}
    </ScrollView>
  );
}