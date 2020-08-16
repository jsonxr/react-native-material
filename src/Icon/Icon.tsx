import React, { ReactNode } from 'react';
import { View } from 'react-native';
import createStyles from './Icon.styles';
import { useTheme } from '../styles/useTheme';

export interface IconProps {
  name?: string;
}
export const Icon = ({ ...props }: IconProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return <View style={styles.root} {...props} />;
};
