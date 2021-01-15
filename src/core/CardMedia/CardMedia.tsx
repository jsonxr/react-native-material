import React, { ReactNode } from 'react';
import { View } from 'react-native';

export interface CardMediaProps {
  children?: ReactNode;
  image?: string;
  title?: string;
}
export const CardMedia = ({ children }: CardMediaProps) => {
  return <View>{children}</View>;
};
