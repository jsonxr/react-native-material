import React, { ReactNode } from 'react';
import { View } from 'react-native';
import createStyles from './CardMedia.styles';

export interface CardMediaProps {
  children?: ReactNode;
  image?: string;
  title?: string;
}
export const CardMedia = ({ children }: CardMediaProps) => {
  return <View>{children}</View>;
};
