import React from 'react';
import { View } from 'react-native';
import styles from './decorators.styles';

export const DefaultBackground = (fn: any) => (
  <View style={styles.defaultBackground}>{fn()}</View>
);

export const BufferView = (fn: any) => (
  <View style={styles.bufferView}>{fn()}</View>
);

export const TextView = (fn: any) => (
  <View style={styles.textView}>{fn()}</View>
);
