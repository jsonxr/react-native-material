import React from 'react';
import { View } from 'react-native';
import createStyles from './CardContent.styles';
import { useTheme } from '../styles/Theme/useTheme';

export interface CardContentProps {}
export const CardContent = ({ ...props }: CardContentProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return <View style={styles.root} {...props} />;
};
