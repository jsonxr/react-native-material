import React, { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';
import createStyles from './CardActions.styles';
import { useTheme } from '../styles/useTheme';

export interface CardActionsProps extends ViewProps {
  children?: ReactNode;
  disableSpacing?: boolean;
}
export const CardActions = ({ style, children }: CardActionsProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const computedStyle: any = [];
  if (style) {
    computedStyle.push(style);
  }
  computedStyle.push(styles.root);
  // const arr = React.Children.map(children, (child) =>
  //   console.log('Child: ', child)
  // );

  return <View style={computedStyle}>{children}</View>;
};
