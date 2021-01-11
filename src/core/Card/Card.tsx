import React, { ReactNode } from 'react';
import { Animated, ViewStyle } from 'react-native';
import createStyles from './Card.styles';
import { useTheme } from '../styles/useTheme';
import { Paper, PaperVariant } from '../Paper/Paper';

export interface CardProps {
  children?: ReactNode;
  raised?: boolean;
  style?: ViewStyle;
  variant?: PaperVariant;
}
export const Card = ({
  children,
  raised,
  variant = 'elevation',
  ...props
}: CardProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  //
  return (
    <Paper
      variant={variant}
      style={styles.root}
      elevation={raised ? 8 : 2}
      {...props}
    >
      {children}
    </Paper>
  );
};
