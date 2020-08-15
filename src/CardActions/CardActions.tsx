import React, { ReactNode } from 'react';
import { View } from 'react-native';
import createStyles from './CardActions.styles';

export interface CardActionsProps {
  children?: ReactNode;
}
export const CardActions = ({ children }: CardActionsProps) => {
  return <View>{children}</View>;
};
