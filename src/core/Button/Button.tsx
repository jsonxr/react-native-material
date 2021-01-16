import React, { ReactNode } from 'react';
import { StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import { ButtonBase } from '../ButtonBase/ButtonBase';
import createStyles from './Button.styles';
import { useTheme, Theme } from '../styles/theme';
import useThemeProps from '../styles/theme/useThemeProps';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'primary' | 'secondary' | 'default';
export type ButtonVariant = 'contained' | 'outlined' | 'text';

/**
 * Properties for <Button ...>
 *
 *
 *
 *
 * @prvateRemarks
 * These don't show up in documentation
 */
export interface ButtonProps {
  // Properties
  children?: ReactNode;
  /** The color of the button, possibilities are "primary", "secondary", @lik ButtonColor */
  color?: ButtonColor;
  disabled?: boolean;
  disableElevation?: boolean;
  endIcon?: any;
  href?: string;
  size?: ButtonSize;
  startIcon?: any;
  style?: ViewStyle;
  textStyle?: TextStyle;
  title?: string;
  variant?: ButtonVariant;
  // Events
  onPress?: () => void;
}

const rootStyle = (
  theme: Theme,
  defaultStyle: ViewStyle,
  props: ButtonProps
): ViewStyle => {
  const styles: ViewStyle[] = [];
  // default
  if (defaultStyle) {
    styles.push(defaultStyle);
  }

  //style
  if (props.style) {
    styles.push(props.style);
  }
  return StyleSheet.flatten(styles);
};

const textStyle = (
  theme: Theme,
  defaultStyle: TextStyle,
  props: ButtonProps
): ViewStyle => {
  // default
  const styles: TextStyle[] = [];
  if (defaultStyle) {
    styles.push(defaultStyle);
  }

  // textStyle
  if (props.textStyle) {
    styles.push(props.textStyle);
  }

  return StyleSheet.flatten(styles);
};

export const Button = (props: ButtonProps) => {
  const theme = useTheme();
  const defaultStyles = createStyles(theme);
  const styles = {
    root: rootStyle(theme, defaultStyles.root, props),
    text: textStyle(theme, defaultStyles.text, props),
  };

  const {
    title,
    children,
    startIcon,
    endIcon,
    onPress,
    ...rest
  } = useThemeProps({ props, name: 'MuiButton' });

  // //const styles = createStyles(theme);

  // // Calculate Color style
  // const viewStyle = (styles as any)[`${variant}${capitalize(color)}View`];
  // const rootStyle: any = [viewStyle];
  // if (style) {
  //   rootStyle.push(style);
  // }

  // // Calculate Text styles
  // const colorStyle = (styles as any)[`${variant}${capitalize(color)}Color`];
  // const textStyles: any = [styles[size]];
  // textStyles.push(colorStyle);

  // //`view-${variant}-${color}`;
  // let typeVariant: TypographyVariant;
  // switch (size) {
  //   case 'small':
  //     typeVariant = 'buttonSmall';
  //     break;
  //   case 'medium':
  //     typeVariant = 'button';
  //     break;
  //   case 'large':
  //     typeVariant = 'buttonLarge';
  //     break;
  // }

  return (
    <ButtonBase style={styles.root} {...rest} onPress={onPress}>
      {startIcon && <Text>Start</Text>}
      {title !== undefined && <Text style={styles.text}>{title}</Text>}
      {children !== undefined && <Text style={styles.text}>{children}</Text>}
      {endIcon && <Text>End</Text>}
    </ButtonBase>
  );
};

export default Button;
