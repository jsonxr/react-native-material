import React, { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import createStyles from './IconButton.styles';
import { useTheme } from '../styles/Theme/useTheme';

export type IconButtonEdge = 'end' | 'start';
export type IconButtonSize = 'small' | 'medium';
export type IconButtonColor = 'default' | 'primary' | 'secondary';

export interface IconButtonProps {
  children?: ReactNode;
  color?: IconButtonColor;
  disabled?: boolean;
  disableFocusRipple?: boolean;
  edge?: IconButtonEdge;
  size?: IconButtonSize;
  style?: ViewStyle;
}
export const IconButton = ({
  size = 'medium',
  color = 'default',
  ...props
}: IconButtonProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const rootStyles: ViewStyle[] = [styles.root];
  if (size) {
    const sizeStyle = styles[size];
    rootStyles.push(sizeStyle);
  }
  if (color) {
    const colorStyle = styles[color];
    rootStyles.push(colorStyle);
  }

  return <View style={rootStyles} {...props} />;
};
