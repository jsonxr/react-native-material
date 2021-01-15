import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import createStyles from './Icon.styles';
import { useTheme } from '../styles/useTheme/useTheme';
import iconFontByName from './iconFontByName';
import { IconSize, IconColor, IconName } from './types';

/*
 * The map file can be re-generated from this file
 * https://github.com/google/material-design-icons/blob/master/iconfont/codepoints
 */

export interface IconProps {
  name: IconName;
  size?: IconSize;
  color?: IconColor;
  style?: TextStyle[] | TextStyle;
}
/**
 *
 *
 * https://material.io/resources/icons
 * @param param0
 */
export const Icon = ({
  name,
  size = 'medium',
  color = 'action',
  style,
}: IconProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const icon = iconFontByName(name);

  let textStyle: TextStyle[] = [];
  textStyle.push(styles.root);

  if (color) {
    let styleColor;
    switch (color) {
      case 'primary':
        styleColor = theme.palette.primary.main;
        break;
      case 'secondary':
        styleColor = theme.palette.secondary.main;
        break;
      case 'action':
        styleColor = theme.palette.action.active;
        break;
      case 'error':
        styleColor = theme.palette.error.main;
        break;
      case 'disabled':
        styleColor = theme.palette.action.disabled;
        break;
      default:
        styleColor = color;
    }
    textStyle.push({ color: styleColor });
  }

  if (size) {
    let fontSize;
    switch (size) {
      case 'small':
        fontSize = 20;
        break;
      case 'large':
        fontSize = 36;
        break;
      default:
        fontSize = 24;
    }
    textStyle.push({ fontSize });
  }

  if (style) {
    if (Array.isArray(style)) {
      textStyle = textStyle.concat(style);
    } else {
      textStyle.push(style);
    }
  }

  if (icon) {
    textStyle.push(icon.font);
    return <Text style={StyleSheet.flatten(textStyle)}>{icon.value}</Text>;
  }

  return null;
};
