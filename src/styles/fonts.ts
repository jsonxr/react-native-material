import { TextStyle } from 'react-native';

type FontStyle = 'normal' | 'italic';
type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

const getRobotoFontFamily = (
  fontWeight: FontWeight = 'normal',
  fontStyle: FontStyle = 'normal'
) => {
  const italics = fontStyle === 'normal' ? '' : 'Italic';
  if (fontWeight === 'bold') {
    return `Roboto-Bold${italics}`;
  }
  if (fontWeight === 'normal') {
    return fontStyle === 'normal' ? `Roboto-${italics}` : 'Roboto-Regular';
  }

  const fontWeightNum = parseInt(fontWeight, 10);
  if (fontWeightNum >= 900) {
    return `Roboto-Black${italics}`;
  }
  if (fontWeightNum >= 700) {
    return `Roboto-Bold${italics}`;
  }
  if (fontWeightNum >= 500) {
    return `Roboto-Medium${italics}`;
  }
  if (fontWeightNum >= 400) {
    return fontStyle === 'normal' ? `Roboto-${italics}` : 'Roboto-Regular';
  }
  if (fontWeightNum >= 300) {
    return `Roboto-Light${italics}`;
  }

  return `Roboto-Thin${italics}`;
};

export const getRobotoFontStyle = (
  fontWeight?: FontWeight,
  fontStyle?: FontStyle
): TextStyle => {
  const fontFamily = getRobotoFontFamily(fontWeight, fontStyle);
  return {
    fontFamily,
    fontStyle,
    fontWeight,
  };
};
