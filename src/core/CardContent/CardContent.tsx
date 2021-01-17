import React, { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import createStyles from './CardContent.styles';
import { useTheme } from '../styles/theme/useTheme';

export interface CardContentProps {
  children?: ReactNode;
  style?: ViewStyle;
}
export const CardContent = ({ children, ...props }: CardContentProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.root} {...props}>
      {children}
    </View>
  );
};
