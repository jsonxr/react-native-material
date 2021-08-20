import { /*PixelRatio,*/ TextStyle } from 'react-native';
import { deepmerge } from '../../../utils';
import { Palette } from '../colors/Palette';
import {
  FontWeight,
  FontVariantFunction,
  FontTextTransform,
} from './fonts/Font';
import {
  TypographyVariants,
  TypographyOptions,
  TypographyTypeFunction,
  TypographyType,
} from './types';
import roboto from './fonts/roboto';

//TODO: Properly handle fonts.
// Understand em vs pt better
// Points - 1/72 of an inch based on the physical size of the screen, assuming a 72dpi density screen
// PixelRatio.get()
// https://stackoverflow.com/questions/56451288/get-screen-dpi-in-react-native
// https://developer.android.com/guide/topics/resources/more-resources#Dimension

/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */
export default function createTypography(
  palette: Palette,
  typography: TypographyOptions | TypographyTypeFunction
): TypographyType {
  const {
    fontFamily = 'Roboto',
    //buildVariant = defaultFontFn,
    // The default font size of the Material Specification.
    fontSize = 14, // px
    fontWeightLight = '300',
    fontWeightRegular = '400',
    fontWeightMedium = '500',
    fontWeightBold = '700',
    // Tell Material-UI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16,
    // Apply the CSS properties to all the variants.
    //allVariants,
    //pxToRem: pxToRem2,
    ...other
  } = typeof typography === 'function' ? typography(palette) : typography;

  const defaultFontFn: FontVariantFunction = (
    ahtmlFontSize: number,
    fontWeight: FontWeight,
    afontSize: number,
    lineHeight: number,
    letterSpacing: number,
    textTransform?: FontTextTransform
  ): TextStyle => ({
    fontFamily,
    fontWeight,
    fontSize: afontSize,
    lineHeight: lineHeight * ahtmlFontSize,
    letterSpacing,
    textTransform,
  });

  // Set the default function to just be a passthrough unless it's roboto
  let f: FontVariantFunction =
    (typography as any)?.buildVariant ?? defaultFontFn;
  if (fontFamily === 'Roboto') {
    f = roboto;
  }

  // prettier-ignore
  const variants: TypographyVariants = {
    h1: f(htmlFontSize, fontWeightLight, 96, 1.167, -1.5),
    h2: f(htmlFontSize, fontWeightLight, 60, 1.2, -0.5),
    h3: f(htmlFontSize, fontWeightRegular, 48, 1.167, 0),
    h4: f(htmlFontSize, fontWeightRegular, 34, 1.235, 0.25),
    h5: f(htmlFontSize, fontWeightRegular, 24, 1.334, 0),
    h6: f(htmlFontSize, fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: f(htmlFontSize, fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: f(htmlFontSize, fontWeightMedium, 14, 1.57, 0.1),
    body1: f(htmlFontSize, fontWeightRegular, 16, 1.5, 0.15),
    body2: f(htmlFontSize, fontWeightRegular, 14, 1.43, 0.15),
    button: f(htmlFontSize, fontWeightMedium, 14, 1.75, 0.4, 'uppercase'),
    buttonSmall: f(htmlFontSize, fontWeightMedium, 13, 1.75, 0.4, 'uppercase'),
    buttonLarge: f(htmlFontSize, fontWeightMedium, 15, 1.75, 0.4, 'uppercase'),
    caption: f(htmlFontSize, fontWeightRegular, 12, 1.66, 0.4),
    overline: f(htmlFontSize, fontWeightRegular, 12, 2.66, 1, 'uppercase'),
  };

  return deepmerge(
    {
      htmlFontSize,
      fontFamily,
      fontSize,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      fontWeightBold,
      variants,
    },
    other,
    {
      clone: false, // No need to clone deep
    }
  );
}
