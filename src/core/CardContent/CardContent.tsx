import React from 'react';
import { View, ViewStyle } from 'react-native';
import createStyles from './CardContent.styles';
import { useTheme } from '../styles/theme/useTheme';

export interface CardContentProps {
  style?: ViewStyle;
}
export const CardContent = ({ ...props }: CardContentProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return <View style={styles.root} {...props} />;
};
