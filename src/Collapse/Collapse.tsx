import React, { ReactNode } from 'react';
import { View } from 'react-native';
import createStyles from './Collapse.styles';
import { useTheme } from '../styles/useTheme';

export interface CollapseProps {
  children?: ReactNode;
  in?: any;
  timeout?: any;
  unmountOnExit?: any;
}
export const Collapse = ({ ...props }: CollapseProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return <View style={styles.root} {...props} />;
};
