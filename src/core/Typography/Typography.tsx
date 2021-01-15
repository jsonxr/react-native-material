import React, { ReactNode } from 'react';
import { Text, TextStyle } from 'react-native';
import createStyles from './Typography.styles';
import { useTheme } from '../styles/useTheme/useTheme';
import { TypographyVariant } from '../styles/typography';
import { Palette } from '../styles/Palette';

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

const getTextColor = (color: TypographyColor, palette: Palette): string => {
  switch (color) {
    case 'textPrimary':
      return palette.text.primary;
    case 'textSecondary':
      return palette.text.secondary;
  }
};

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

/**
 * Looks at variant
 */
export const Typography = ({
  text,
  gutterBottom,
  paragraph,
  children,
  style,
  color,
  variant,
  noWrap,
  ...variants
}: TypographyProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const computedStyles: any = [];

  // Variant
  let styleName = variant;
  if (!styleName) {
    styleName = getStylenameFromVariantBools(styles, variants);
  }
  if (!styleName) {
    styleName = 'body1';
  }
  computedStyles.push((styles as any)[styleName]);

  // color
  if (color) {
    const colorStyle = (styles as any)[`${color}Color`];
    computedStyles.push(colorStyle);
  }

  if (gutterBottom) {
    computedStyles.push(styles.textGutterBotton);
  }

  if (paragraph) {
    computedStyles.push(styles.paragraph);
  }

  if (noWrap) {
    computedStyles.push(styles.noWrap);
  }

  // style
  if (style) {
    computedStyles.push(style);
  }

  return <Text style={computedStyles}>{text ?? children}</Text>;
};
