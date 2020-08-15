import { TextStyle } from 'react-native';

const textStyle: TextStyle = {};
export type FontWeight = typeof textStyle.fontWeight;
export type FontStyle = typeof textStyle.fontStyle;
export type FontTextTransform = typeof textStyle.textTransform;

export interface FontTextStyle {
  fontFamily: string;
  fontStyle: FontStyle;
  fontWeight: FontWeight;
}

/**
 * Returns the font name given a weight and style. This allows for
 * Roboto-Regular, Rotobot-Italic, Roboto-Bold, Roboto-BoldItalic
 */
export type FontVariantFunction = (
  htmlFontSize: number,
  fontWeight: FontWeight,
  fontSize: number,
  lineHeight: number,
  letterSpacing: number,
  textTransform?: FontTextTransform
) => TextStyle;
