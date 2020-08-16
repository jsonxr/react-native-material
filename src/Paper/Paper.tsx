import React, { ReactNode, useMemo } from 'react';
import { Animated, View, ViewStyle } from 'react-native';
import createStyles from './Paper.styles';
import { useTheme, Theme } from '../styles';

export type ElevationType =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25;

export const elevations: ElevationType[] = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
];

export type PaperVariant = 'elevation' | 'outlined';

const calculateStyle = (
  theme: Theme,
  square?: boolean,
  variant?: PaperVariant,
  style?: ViewStyle,
  elevation?: ElevationType
) => {
  const viewStyles: any = useMemo(() => {
    const styles = createStyles(theme);
    const viewStyles: any = [styles.paper];
    if (!square) {
      viewStyles.push(styles.rounded);
    }
    if (variant === 'outlined') {
      viewStyles.push(styles.outlined);
    } else if (elevation) {
      viewStyles.push(theme.shadows[elevation]);
    }
    if (style) {
      viewStyles.push(style);
    }
  }, [theme, square, variant, style, elevation]);
  return viewStyles;
};

export interface PaperProps {
  elevation?: ElevationType;
  square?: boolean;
  children?: ReactNode;
  style?: ViewStyle;
  variant?: PaperVariant;
}
export const Paper = ({
  elevation = 1,
  style,
  square,
  variant = 'elevation',
  children,
}: PaperProps) => {
  const theme = useTheme();

  const styles = createStyles(theme);
  const viewStyles: any = [styles.paper];
  if (style) {
    viewStyles.push(style);
  }
  if (!square) {
    viewStyles.push(styles.rounded);
  }
  if (variant === 'outlined') {
    viewStyles.push(styles.outlined);
  } else {
    viewStyles.push(theme.shadows[elevation]);
  }

  return <View style={viewStyles}>{children}</View>;
};
