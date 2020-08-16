import React from 'react';
import { Text, TextStyle } from 'react-native';
import createStyles from './Icon.styles';
import { useTheme } from '../styles/useTheme';
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
  size = 'default',
  color = 'action',
  style,
}: IconProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const icon = iconFontByName(name);

  let textStyle: TextStyle[] = [];
  if (style) {
    if (Array.isArray(style)) {
      textStyle = textStyle.concat(style);
    } else {
      textStyle.push(style);
    }
  }

  if (color) {
    const colorStyle = styles[color];
    textStyle.push(colorStyle);
  }

  if (size) {
    const sizeStyle = styles[size];
    textStyle.push(sizeStyle);
  }

  if (icon) {
    textStyle.push(icon.font);
    return <Text style={textStyle}>{icon.value}</Text>;
  }

  return null;
};
