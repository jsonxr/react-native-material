import React, { ReactNode, useMemo } from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import createStyles from './Typography.styles';
import { useTheme } from '../styles/theme/useTheme';
import { TypographyVariant } from '../styles/typography';
import useThemeProps from '../styles/theme/useThemeProps';
import { capitalize } from '../../utils/capitalize';
import { Theme } from '../styles/theme/Theme';
import { decomposeColor } from '../styles/colors/colorManipulator';
//import { Palette } from '../styles/Palette';

export type TypographyColor =
  | 'initial'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'error';

export interface TypographyProps {
  text?: string;
  children?: ReactNode;
  style?: TextStyle;
  color?: TypographyColor;
  variant?: TypographyVariant;
  gutterBottom?: boolean;
  noWrap?: boolean;
  paragraph?: boolean;

  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  body1?: boolean;
  body2?: boolean;
  subtitle1?: boolean;
  subtitle2?: boolean;
  button?: boolean;
  buttonSmall?: boolean;
  buttonLarge?: boolean;
  caption?: boolean;
  overline?: boolean;
}

const getStylenameFromVariantBools = (
  styles: Record<string, any>,
  variants: any
): TypographyVariant | undefined => {
  // Get the filtered style
  const filteredStyles = Object.keys(variants).filter(
    (key: string) =>
      typeof variants[key] === 'boolean' && variants[key] && styles[key]
  );
  switch (filteredStyles.length) {
    case 0:
      return;
    case 1:
      return filteredStyles[0] as TypographyVariant;
  }

  // Error! <Typography h1 h2 /> is invalid
  if (process.env.NODE_ENV !== 'production') {
    throw new Error(
      `Typography: <Typography ${filteredStyles.join(' ')} />\n\n` +
        `You may only specify one of ${filteredStyles.join(',')}`
    );
  }

  return filteredStyles[0] as TypographyVariant;
};

const calculate = (theme: Theme, props: TypographyProps) => {
  const styles = createStyles(theme);
  const computedStyles: TextStyle[] = [styles.root];

  const {
    gutterBottom,
    paragraph,
    style,
    color,
    variant,
    noWrap,
    ...variants
  } = props;

  // variant
  const styleName =
    variant ?? getStylenameFromVariantBools(styles, variants) ?? 'body1';
  const textStyle = (styles as any)[styleName];
  textStyle && computedStyles.push(textStyle);

  // Variant

  // color
  if (color) {
    const colorStyle = (styles as any)[`color${capitalize(color)}`];
    if (colorStyle) {
      computedStyles.push(colorStyle);
    }
  }

  gutterBottom && computedStyles.push(styles.gutterBottom);
  paragraph && computedStyles.push(styles.paragraph);
  noWrap && computedStyles.push(styles.noWrap);
  style && computedStyles.push(style);

  return StyleSheet.flatten(computedStyles);
};

/**
 * Looks at variant
 */
export const Typography = (props: TypographyProps) => {
  const { text, children } = useThemeProps({ props, name: 'MuiTypography' });
  const theme = useTheme();
  const style = useMemo(() => {
    return calculate(theme, props);
  }, [theme, props]);

  return <Text style={style}>{text ?? children}</Text>;
};
