import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scroll: { flex: 1 },
  contentContainer: {
    padding: 10,
  },
});

export const DefaultDecorator = (Story: any) => (
  <ScrollView
    style={styles.scroll}
    contentContainerStyle={styles.contentContainer}
  >
    <Story />
  </ScrollView>
);
