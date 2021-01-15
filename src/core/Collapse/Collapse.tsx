import React, { ReactNode } from 'react';
import { View } from 'react-native';

export interface CollapseProps {
  children?: ReactNode;
  in?: any;
  timeout?: any;
  unmountOnExit?: any;
}
export const Collapse = ({ ...props }: CollapseProps) => {
  return <View {...props} />;
};
