import React, { ReactNode } from 'react';
import { View } from 'react-native';
import createStyles from './CardHeader.styles';

export interface CardHeaderProps {
  avatar?: any;
  action?: any;
  title?: string;
  subheader?: string;
  children?: ReactNode;
}
export const CardHeader = ({ children }: CardHeaderProps) => {
  return <View>{children}</View>;
};
