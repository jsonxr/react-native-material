import React, { ReactNode, ReactElement } from 'react';
import { View, ViewStyle } from 'react-native';
import createStyles from './IconButton.styles';
import { useTheme } from '../styles/useTheme';

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
export const IconButton = React.forwardRef(
  ({ ...props }: IconButtonProps, ref) => {
    const theme = useTheme();
    const styles = createStyles(theme);
    return <View style={styles.root} {...props} />;
  }
);
