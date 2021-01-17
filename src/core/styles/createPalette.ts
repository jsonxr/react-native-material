import {
  PaletteColorShades,
  blue,
  green,
  grey,
  indigo,
  orange,
  pink,
  red,
} from '../colors';
import {
  ColorPartial,
  Palette,
  PaletteColorOptions,
  PaletteOptions,
  SimplePaletteColorOptions,
  dark,
  isColorPartial,
  isSimplePaletteColorOptions,
  light,
} from './Palette';
import { darken, getContrastRatio, lighten } from './colorManipulator';

import { deepmerge } from '../../utils';

export default function createPalette({
  primary = {
    light: indigo[300],
    main: indigo[500],
    dark: indigo[700],
  },
  secondary = {
    light: pink.A200,
    main: pink.A400,
    dark: pink.A700,
  },
  error = {
    light: red[300],
    main: red[500],
    dark: red[700],
  },
  warning = {
    light: orange[300],
    main: orange[500],
    dark: orange[700],
  },
  info = {
    light: blue[300],
    main: blue[500],
    dark: blue[700],
  },
  success = {
    light: green[300],
    main: green[500],
    dark: green[700],
  },
  type = 'light',
  contrastThreshold = 3,
  tonalOffset = 0.2,
  ...other
}: PaletteOptions): Palette {
  // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
  function getContrastText(background: any) {
    const contrastText =
      getContrastRatio(background, dark.text.primary) >= contrastThreshold
        ? dark.text.primary
        : light.text.primary;

    if (process.env.NODE_ENV !== 'production') {
      const contrast = getContrastRatio(background, contrastText);
      if (contrast < 3) {
        console.error(
          [
            `Material-UI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`,
            'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.',
            'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast',
          ].join('\n')
        );
      }
    }

    return contrastText;
  }

  const augmentColor = (
    color: PaletteColorOptions,
    mainShade: keyof PaletteColorShades = '500',
    lightShade: keyof PaletteColorShades = '300',
    darkShade: keyof PaletteColorShades = '700'
  ) => {
    const simpleColor = isSimplePaletteColorOptions(color)
      ? (color as SimplePaletteColorOptions)
      : null;
    const colorPartial = isColorPartial(color) ? (color as ColorPartial) : null;

    const mainColor = simpleColor?.main || colorPartial?.[mainShade];
    if (!mainColor) {
      throw new Error(`Material-UI: The color provided to augmentColor(color) is invalid.
The color object needs to have a 'main' property or a '${mainShade}' property.`);
    }

    const lightColor =
      simpleColor?.light ||
      colorPartial?.[lightShade] ||
      lighten(mainColor, (tonalOffset as any).light || (tonalOffset as number));

    const darkColor =
      simpleColor?.dark ||
      colorPartial?.[darkShade] ||
      darken(
        mainColor,
        (tonalOffset as any).dark || (tonalOffset as number) * 1.5
      );

    const contrastText = isSimplePaletteColorOptions(color)
      ? color.contrastText ?? getContrastText(mainColor)
      : getContrastText(mainColor);

    const result = {
      main: mainColor,
      light: lightColor,
      dark: darkColor,
      contrastText,
    };
    return result;
  };

  const types = { dark, light };

  if (process.env.NODE_ENV !== 'production') {
    if (!types[type]) {
      console.error(
        `Material-UI: The palette type \`${type}\` is not supported.`
      );
    }
  }

  const defaultPalette: Palette = {
    // The light and dark type object.
    ...types[type],
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor(primary),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor(error),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor(warning),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor(info),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor(success),
    // The grey colors.
    grey,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText,
    // Generate a rich color object.
    augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset,
  };

  const paletteOutput: Palette = deepmerge(defaultPalette, other);

  return paletteOutput;
}
