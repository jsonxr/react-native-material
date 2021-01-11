import React, { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import createStyles from './RippleButton.styles';
import { useTheme } from '../core/styles/useTheme';

export interface RippleButtonProps {
  children?: ReactNode;
}
export const RippleButton = ({ children, ...props }: RippleButtonProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const rootStyles: ViewStyle[] = [styles.root];

  return <View style={rootStyles} {...props} />;
};
