import React, { ReactNode } from 'react';
import { Text, Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import { ButtonBase } from '../ButtonBase/ButtonBase';
import createStyles from './Button.styles';
import { useTheme, Theme } from '../styles';
import { capitalize } from '../utils';
import { Typography } from '../Typography';
import { TypographyVariant } from '../styles/typography';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'primary' | 'secondary' | 'default';
export type ButtonVariant = 'contained' | 'outlined' | 'text';

export interface ButtonProps {
  title?: string;
  style?: ViewStyle;
  children?: ReactNode;
  variant?: ButtonVariant;
  onPress?: () => void;
  color?: ButtonColor;
  disabled?: boolean;
  disableElevation?: boolean;
  href?: string;
  size?: ButtonSize;
  startIcon?: any;
  endIcon?: any;
}

export const Button = ({
  title,
  style,
  children,
  startIcon,
  endIcon,
  color = 'default',
  size = 'medium',
  variant = 'text',
  onPress,
}: ButtonProps) => {
  const theme: Theme = useTheme();
  const styles = createStyles(theme);

  // Calculate Color style
  const viewStyle = (styles as any)[`${variant}${capitalize(color)}View`];
  const rootStyle: any = [viewStyle];
  if (style) {
    rootStyle.push(style);
  }

  // Calculate Text styles
  const colorStyle = (styles as any)[`${variant}${capitalize(color)}Color`];
  const textStyles: any = [styles[size]];
  textStyles.push(colorStyle);

  //`view-${variant}-${color}`;
  let typeVariant: TypographyVariant;
  switch (size) {
    case 'small':
      typeVariant = 'buttonSmall';
      break;
    case 'medium':
      typeVariant = 'button';
      break;
    case 'large':
      typeVariant = 'buttonLarge';
      break;
  }
  return (
    <ButtonBase
      style={rootStyle}
      onPress={onPress}
      // style={({ pressed }) => {
      //   return [
      //     {
      //       backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
      //     },
      //     //styles.wrapperCustom,
      //   ];
      // }}
    >
      {startIcon && <Text>Start</Text>}
      {title && (
        <Typography style={textStyles} variant={typeVariant} text={title} />
      )}
      {children && (
        <Typography style={textStyles} variant={typeVariant}>
          {children}
        </Typography>
      )}
      {/* {({ pressed }) => (
        <Text style={styles.text}>
          {title ? <Text>{title}</Text> : `Press Me`}
        </Text>
      )} */}
      {endIcon && <Text>End</Text>}
    </ButtonBase>
  );
};

export default Button;
