import React, { ReactNode } from 'react';
import { Text, TextStyle } from 'react-native';
import createStyles from './Typography.styles';
import { useTheme } from '../styles/useTheme';
import { TypographyVariant, TypographyVariants } from '../styles/typography';

export type TypographyColor =
  | 'error'
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary';

export interface TypographyProps {
  text?: string;
  children?: ReactNode;
  style?: TextStyle;
  color?: TypographyColor;
  variant?: TypographyVariant;
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
  variants: any
): TypographyVariant | undefined => {
  const styles = Object.keys(variants).filter(
    (key: string) => typeof variants[key] === 'boolean' && variants[key]
  );
  switch (styles.length) {
    case 0:
      return;
    case 1:
      return styles[0] as TypographyVariant;
  }
  // <Typography h1 h2 text="" /> is invalid
  throw new Error(
    `Typography: <Typography ${styles.join(' ')} />\n\n` +
      `You may only specify one of ${styles.join(',')}`
  );
};

/**
 * Looks at variant
 */
export const Typography = ({
  text,
  children,
  style,
  color,
  variant,
  ...variants
}: TypographyProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const computedStyles: any = [];

  // Variant
  let styleName = variant;
  if (!styleName) {
    styleName = getStylenameFromVariantBools(variants);
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

  // style
  if (style) {
    computedStyles.push(style);
  }

  if (text) {
    return <Text style={computedStyles}>{text}</Text>;
  }

  return <Text style={computedStyles}>{children}</Text>;
};
