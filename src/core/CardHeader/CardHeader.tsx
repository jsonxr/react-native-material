import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { Theme } from '../styles/Theme';
import { Typography } from '../Typography';
import createStyles from './CardHeader.styles';

export interface CardHeaderProps {
  avatar?: any;
  action?: any;
  title?: string;
  subheader?: string;
  children?: ReactNode;
  component?: any;
}
export const CardHeader = ({
  component: Component = View,
  children,
}: CardHeaderProps) => {
  return <Component>{children}</Component>;
};
