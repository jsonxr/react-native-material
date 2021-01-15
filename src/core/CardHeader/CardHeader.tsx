import React, { ReactNode } from 'react';
import { View } from 'react-native';

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
