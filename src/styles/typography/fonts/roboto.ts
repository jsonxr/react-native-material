import {
  FontWeight,
  FontStyle,
  FontTextTransform,
  FontVariantFunction,
} from './Font';
import { TextStyle } from 'react-native';

const getFontName = (
  fontWeight: FontWeight = 'normal',
  fontStyle: FontStyle = 'normal'
): string => {
  const italics = fontStyle === 'normal' ? '' : 'Italic';
  switch (fontWeight) {
    case '100': // Fallthrough to 200
    case '200':
      return `Roboto-Thin${italics}`;

    case '300':
      return `Roboto-Light${italics}`;

    case '500':
      return `Roboto-Medium${italics}`;

    case '600': // Fallthrough to bold
    case '700': // Fallthrough to bold
    case 'bold':
      return `Roboto-Bold${italics}`;

    case '800': // Fallthrough to 800
    case '900':
      return `Roboto-Black${italics}`;

    case 'normal': // fallthrough to default
    case '400': // fallthrough to default
    default:
      return fontStyle === 'normal' ? 'Roboto-Regular' : `Roboto-${italics}`;
  }
};

function round(value: number) {
  return Math.round(value * 1e5) / 1e5;
}

const robotoVariant: FontVariantFunction = (
  htmlFontSize: number,
  fontWeight: FontWeight,
  fontSize: number,
  lineHeight: number,
  letterSpacing: number,
  textTransform: FontTextTransform
): TextStyle => ({
  fontFamily: getFontName(fontWeight, 'normal'),
  fontWeight,
  fontSize,
  lineHeight: lineHeight * fontSize,
  letterSpacing: round((htmlFontSize * letterSpacing) / fontSize),
  textTransform,
});

export default robotoVariant;
