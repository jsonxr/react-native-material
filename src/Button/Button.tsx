import React from 'react';
import { Text, Pressable, StyleSheet, View } from 'react-native';
import createStyles from './Button.style';
import { useTheme, Theme } from '../styles';
import { capitalize } from '../utils';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'primary' | 'secondary' | 'default';
export type ButtonVariant = 'contained' | 'outlined' | 'text';

export interface ButtonProps {
  title: string;
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
  const viewStyles: any = [viewStyle];

  // Calculate Text styles
  const colorStyle = (styles as any)[`${variant}${capitalize(color)}Color`];
  const textStyles: any = [styles.text];
  textStyles.push(colorStyle);
  textStyles.push(styles[size]);

  //`view-${variant}-${color}`;

  return (
    <Pressable
      onPress={onPress}
      // style={({ pressed }) => {
      //   console.log('retrieve style...');
      //   return [
      //     {
      //       backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
      //     },
      //     //styles.wrapperCustom,
      //   ];
      // }}
    >
      <View style={viewStyles}>
        {startIcon && <Text>Start</Text>}
        {title ? <Text style={textStyles}>{title}</Text> : `Press Me`}
        {/* {({ pressed }) => (
        <Text style={styles.text}>
          {title ? <Text>{title}</Text> : `Press Me`}
        </Text>
      )} */}
        {endIcon && <Text>End</Text>}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});

export default Button;
