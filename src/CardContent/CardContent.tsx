import React, { ReactNode } from 'react';
import { View } from 'react-native';
import createStyles from './CardContent.styles';

export interface CardContentProps {
  children?: ReactNode;
}
export const CardContent = ({ children }: CardContentProps) => {
  return <View>{children}</View>;
};
