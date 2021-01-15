import { TextStyle } from 'react-native';
import { FontWeight, FontVariantFunction } from './fonts/Font';
import { Palette } from '../Palette';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'buttonSmall'
  | 'button'
  | 'buttonLarge'
  | 'caption'
  | 'overline';

export type TypographyVariantStyle = TextStyle;
export type TypographyVariants = Record<
  TypographyVariant,
  TypographyVariantStyle
>;

export interface TypographyType {
  fontFamily: string;
  buildVariant?: FontVariantFunction;
  fontSize: number;
  fontWeightLight: FontWeight;
  fontWeightRegular: FontWeight;
  fontWeightMedium: FontWeight;
  fontWeightBold: FontWeight;
  htmlFontSize: number;
  variants: TypographyVariants;
}

export type TypographyOptions = Partial<TypographyType>;

export type TypographyTypeFunction = (palette: Palette) => TypographyOptions;
