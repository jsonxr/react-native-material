import React from 'react';
import { View, StyleSheet } from 'react-native';

export const DefaultDecorator = (fn: any) => (
  <View style={styles.defaultBackground}>{fn()}</View>
);

const styles = StyleSheet.create({
  defaultBackground: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
  },
});
