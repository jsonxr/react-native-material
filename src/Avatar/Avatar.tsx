import React, { ReactNode } from 'react';
import { View } from 'react-native';
import createStyles from './Avatar.styles';
import { useTheme } from '../styles/useTheme';

export interface AvatarProps {
  children?: ReactNode;
}
export const Avatar = ({ ...props }: AvatarProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return <View style={styles.root} {...props} />;
};
