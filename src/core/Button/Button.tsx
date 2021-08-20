import React from 'react';
import { Text } from 'react-native';
import { ButtonBase } from '../ButtonBase/ButtonBase';
import createStyles from './Button.styles';
import { useTheme } from '../styles/theme';
import useThemeProps from '../styles/theme/useThemeProps';

import { ButtonProps } from './Button.types';

export const Button = (props: ButtonProps) => {
  const theme = useTheme();
  const {
    title,
    children,
    startIcon,
    endIcon,
    onPress,
    ...rest
  } = useThemeProps({
    props,
    name: 'MuiButton',
  });
  const styles = createStyles(theme, rest);
  const text =
    title || (children && typeof children === 'string' ? children : null);

  return (
    <ButtonBase style={styles.root} {...rest} onPress={onPress}>
      {startIcon && <Text>Start</Text>}
      {text !== undefined && <Text style={styles.text}>{text}</Text>}
      {typeof children !== 'string' && children}
      {endIcon && <Text>End</Text>}
    </ButtonBase>
  );
};

export default Button;
