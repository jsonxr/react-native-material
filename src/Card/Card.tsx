import React, { ReactNode } from 'react';
import { Animated, ViewStyle } from 'react-native';
import createStyles from './Card.styles';
import { useTheme } from '../styles/useTheme';
import { Paper } from '../Paper/Paper';

export interface CardProps {
  children?: ReactNode;
  raised?: boolean;
  style?: ViewStyle;
}
export const Card = ({ children, raised, ...props }: CardProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <Paper elevation={raised ? 8 : 1} {...props}>
      {children}
    </Paper>
  );
};
