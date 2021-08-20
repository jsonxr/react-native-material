import { ElementType } from '../../../utils/typescript';
import {
  ColorHue,
  isColorHue,
  ColorSwatches,
  isColorSwatches,
  darken,
  getContrastRatio,
  lighten,
  ColorHueKey,
  ColorType,
  parse,
  colorToHexStr,
} from './Color';
import { dark as darkTheme } from './dark';
import { light as lightTheme } from './light';
import CSS_COLORS, { CssColor, isCssColor } from './CssColor';

export const paletteTypes = ['light', 'dark'] as const;
export type PaletteType = ElementType<typeof paletteTypes>;

export interface Palette {
  type: PaletteType;
  // Swatches
  primary: ColorSwatches;
  secondary: ColorSwatches;
  error: ColorSwatches;
  info: ColorSwatches;
  warning: ColorSwatches;
  success: ColorSwatches;
  background: Pick<ColorSwatches, 'main' | 'text'>;
  surface: Pick<ColorSwatches, 'main' | 'text'>;
  grey: ColorHue;
  // Values
  divider: ColorType;
  disabled: ColorType;
  contrastThreshold: number;
  tonalOffset: number;
  // Functions
  getContrastText(color: ColorType | keyof Palette): string;
  getColor(color: ColorType | keyof Palette): string;
}

export type PaletteColorSwatch =
  | 'primary'
  | 'secondary'
  | 'erro'
  | 'info'
  | 'warning'
  | 'success';

export type PaletteOptions = {
  type?: PaletteType;
  primary?: number | string | Partial<ColorSwatches> | Partial<ColorHue>;
  secondary?: number | string | Partial<ColorSwatches> | Partial<ColorHue>;
  error?: number | string | Partial<ColorSwatches> | Partial<ColorHue>;
  info?: number | string | Partial<ColorSwatches> | Partial<ColorHue>;
  warning?: number | string | Partial<ColorSwatches> | Partial<ColorHue>;
  success?: number | string | Partial<ColorSwatches> | Partial<ColorHue>;

  background?: number | string | Pick<ColorSwatches, 'main' | 'text'>;
  surface?: number | string | Pick<ColorSwatches, 'main' | 'text'>;
  // Values
  divider?: string;
  disabled?: string;
  contrastThreshold?: number;
  tonalOffset?: number;
};

// Use the same logic as
// Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
// and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
function _getContrastText(
  background: number,
  text: number,
  contrastThreshold: number,
  color: ColorType
) {
  const value = typeof color === 'number' ? color : parse(color);

  // In the default palette, we return either white or black
  const contrastText =
    getContrastRatio(value, text) >= contrastThreshold ? text : background;

  if (process.env.NODE_ENV !== 'production') {
    const contrast = getContrastRatio(value, contrastText);
    if (contrast < 3) {
      console.error(
        [
          `Material-UI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${value}`,
          'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.',
          'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast',
        ].join('\n')
      );
    }
  }

  return contrastText;
}

const _augmentColor = (
  color:
    | Partial<ColorSwatches>
    | Partial<ColorHue>
    | CssColor
    | string
    | number,
  tonalOffset: number,
  contrastThreshold: number,
  background: number,
  contrastText: number,
  main: ColorHueKey = '500',
  light: ColorHueKey = '300',
  dark: ColorHueKey = '700'
): ColorSwatches => {
  const swatch: Partial<ColorSwatches> = {};

  if (
    isCssColor(color) ||
    typeof color === 'string' ||
    typeof color === 'number'
  ) {
    // 'red', 'blue', 0xff000000, '#ff0000', rgb(255,0,0)
    swatch.main = parse(color) ?? 0;
  } else if ((color as any).main) {
    // { light'#990000', main: '#ee0000' }
    swatch.main = parse((color as any).main);
    swatch.light = parse((color as any).light);
    swatch.dark = parse((color as any).dark);
    swatch.text = parse((color as any).text);
  } else if (isColorHue(color)) {
    // { 300: '#990000', 500:'#ee0000', 700: '#ff0000', 100: '', ... }
    swatch.main = parse(color[main]);
    swatch.light = parse(color[light]);
    swatch.dark = parse(color[dark]);
  }

  if (!swatch.main) {
    throw new Error(`Material-UI: The color provided to augmentColor(color) is invalid.
The color object needs to have a 'main' property or a '${main}' property. received: ${JSON.stringify(
      swatch
    )}`);
  }

  if (swatch.light === undefined) {
    swatch.light = lighten(swatch.main, tonalOffset);
  }
  if (swatch.dark === undefined) {
    swatch.dark = darken(swatch.main, tonalOffset * 1.5);
  }
  if (swatch.text === undefined) {
    swatch.text = _getContrastText(
      background,
      contrastText,
      contrastThreshold,
      swatch.main
    );
  }

  return swatch as ColorSwatches;
};

export function createPalette<T extends object>(options?: T): Palette & T {
  const type: PaletteType = (options as any)?.type ?? 'light';

  if (process.env.NODE_ENV !== 'production') {
    if (!paletteTypes.includes(type)) {
      console.error(
        `Material-UI: The palette type \`${type}\` is not supported.`
      );
    }
  }

  const defaultTheme = type === 'light' ? lightTheme : darkTheme;
  const palette = { ...defaultTheme, ...options } as Palette;
  const { contrastThreshold, tonalOffset } = palette;

  const backgroundMain = parse(palette.background.main) ?? 0;
  const backgroundText = parse(palette.background.text) ?? 0;

  const augmentColor = (
    color:
      | Partial<ColorSwatches>
      | Partial<ColorHue>
      | CssColor
      | string
      | number,
    augOpts: { main: ColorHueKey; light: ColorHueKey; dark: ColorHueKey } = {
      main: '500',
      light: '300',
      dark: '700',
    }
  ) =>
    _augmentColor(
      color,
      tonalOffset,
      contrastThreshold,
      backgroundMain,
      backgroundText,
      augOpts.main,
      augOpts.light,
      augOpts.dark
    );

  // Augment colors
  palette.primary = augmentColor(palette.primary);
  palette.secondary = augmentColor(palette.secondary);
  palette.error = augmentColor(palette.error);
  palette.info = augmentColor(palette.info);
  palette.warning = augmentColor(palette.warning);
  palette.success = augmentColor(palette.success);

  // After we augment the colors, our color resolution will work
  const swatches = Object.keys(palette).filter((key) => {
    return isColorSwatches(palette[key as keyof Palette]);
  });

  const getColor = (color: ColorType): string => {
    // First see if it's a theme color
    if (typeof color === 'string' && swatches.includes(color)) {
      const swatch = palette[color as keyof Palette];
      if (isColorSwatches(swatch)) {
        return colorToHexStr(parse(swatch.main));
      }
    }

    // Attempt to parse a 'red', '#ff0000', etc
    try {
      return colorToHexStr(parse(color));
    } catch {}

    // Return black
    return colorToHexStr(CSS_COLORS.black);
  };

  const getContrastText = (color: ColorType) => {
    // First see if it's a theme color
    if (typeof color === 'string' && swatches.includes(color)) {
      const swatch = palette[color as keyof Palette];
      if (isColorSwatches(swatch)) {
        return colorToHexStr(parse(swatch.text));
      }
    }

    return _getContrastText(
      backgroundMain,
      backgroundText,
      contrastThreshold,
      color
    );
  };

  return {
    ...palette,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText,
    // Gets a string or number and returns a number int
    getColor,
  } as Palette & T;
}
