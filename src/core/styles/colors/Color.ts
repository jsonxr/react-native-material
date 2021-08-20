import { ElementType } from '../../../utils/typescript';
import { CSS_COLORS, CssColor, isCssColor } from './CssColor';

export interface ColorHue {
  '50': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}
export type ColorHueKey = keyof ColorHue;

export function isColorHueKey(key: any): key is ColorHueKey {
  return [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    'A100',
    'A200',
    'A400',
    'A700',
  ].includes(key);
}

export function isColorHue(color: any): color is ColorHue {
  const shades = color as ColorHue;
  return (
    shades['50'] !== undefined &&
    shades['100'] !== undefined &&
    shades['200'] !== undefined &&
    shades['300'] !== undefined &&
    shades['400'] !== undefined &&
    shades['500'] !== undefined &&
    shades['600'] !== undefined &&
    shades['700'] !== undefined &&
    shades['800'] !== undefined &&
    shades['900'] !== undefined &&
    shades.A100 !== undefined &&
    shades.A200 !== undefined &&
    shades.A400 !== undefined &&
    shades.A700 !== undefined
  );
}

export type ColorType = CssColor | string | number;
export interface ColorSwatches {
  dark: ColorType;
  light: ColorType;
  main: ColorType;
  text: ColorType;
}
export type ColorSwatchKey = keyof ColorSwatches;

export function isColorSwatches(color: any): color is ColorSwatches {
  const c = color as ColorSwatches;
  return (
    c.dark !== undefined &&
    c.light !== undefined &&
    c.main !== undefined &&
    c.text !== undefined
  );
}

/**
 * Valid color formats
 */
export const COLOR_FORMATS = [
  'rgb',
  'rgba',
  'hsl',
  'hsla',
  '#',
  'name',
  'number',
] as const;
export type ColorFormat = ElementType<typeof COLOR_FORMATS>;

/**
 * True if the object is a Color
 *
 * @param {any} color - Any object to test if it's a color object
 * @returns {boolean} true if it is a valid Color
 */
export function isColorFormat(color: any): color is ColorFormat {
  if (typeof color === 'number') {
    return true;
  }
  const c = color as ColorFormat;
  return COLOR_FORMATS.includes(c);
}

/**
 * Returns the ColorFormat if it's a valid color string
 * @param {string} s - Color string
 */
export const getColorFormat = (s: string | number): ColorFormat | undefined => {
  if (typeof s === 'number') {
    return 'number';
  }
  if (s.charAt(0) === '#') {
    return '#';
  }

  const type = s.substring(0, s.indexOf('('));
  if (isColorFormat(type)) {
    return type;
  }

  if (isCssColor(s)) {
    return 'name';
  }

  return undefined;
};

export interface Color {
  type: ColorFormat;
  value: number;
}

/**
 * Converts a string #f00, #f00f, #ff0000ff to a number that represents
 * the rgba value
 * @param {string} s
 * @returns {number} An unsigned integer that represents the color
 */
export const hexToInt = (s: string): number => {
  if (!s.startsWith('#')) {
    throw new Error(`${s} is not a hex`);
  }
  let c = s.substr(1);
  if (c.length === 3) {
    c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2] + 'ff';
  } else if (c.length === 4) {
    c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2] + c[3] + c[3];
  } else if (c.length === 6) {
    c = c + 'ff';
  }
  c = '0x' + c;
  const result = parseInt(c, 16);
  if (!result) {
    throw Error(`${s} is not a hex`);
  }
  return result;
};

/**
 * Converts a number to a string
 * @param {number} n
 * @returns {string} A hex string "ff" "0f"
 */
export const intToHexStr = (n: number): string => {
  if (!Number.isInteger(n)) {
    throw new Error(`${n} is not an int`);
  }
  return n.toString(16).padStart(2, '0');
};

/**
 * converts values of the form of "rgb(r,g,b)" or "rgba(r,g,b,a)"
 *
 * Examples: rgb(255,0,0)
 *           rgba(255,0,0,1.0)
 * @param {string} s - Color string rgb() or rgba()
 * @returns {number} An unsigned integer that represents the color
 */
export const rgbToNumber = (s: string): number => {
  const marker = s.indexOf('(');
  const type = s.substring(0, marker);
  const values = s.substring(marker + 1, s.length - 1).split(',');
  const alpha = values.length === 4 ? parseFloat(values[3]) * 255 : 255;
  if (
    (type !== 'rgb' && type !== 'rgba') ||
    values.length < 3 ||
    values.length > 4
  ) {
    throw new Error(`Unsupported ${s}, Supported: rgba(r,g,b,a) or rgb(r,g,b)`);
  }

  const color =
    '0x' +
    intToHexStr(parseInt(values[0], 10)) +
    intToHexStr(parseInt(values[1], 10)) +
    intToHexStr(parseInt(values[2], 10)) +
    intToHexStr(alpha);

  return parseInt(color, 16);
};

const REGEX_HSL = /hsl\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)\s*%\)/;
const REGEX_HSLA = /hsla\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*(.*)\s*\)/;
/**
 * Converts values in the form of hsl(h,s,l) or hsla(h,s,l,a)
 * https://en.wikipedia.org/wiki/HSL_and_HSV
 * Examples: hsl(0,100%,50%)
 *           hsla(0,100%,50%,1.0)
 * @param {string} str - Color string hsl() or hsla()
 * @returns {number} An unsigned integer that represents the color
 */
export const hslToNumber = (str: string): number => {
  const match = str.match(REGEX_HSL) || str.match(REGEX_HSLA);
  if (!match) {
    throw new Error(
      `Unsupported ${str}, Supported: hsl(h,s,l) or hsla(h,s,l,a)`
    );
  }

  const h = parseInt(match[1], 10);
  const s = parseInt(match[2], 10) / 100.0;
  const l = parseInt(match[3], 10) / 100.0;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number, k = (n + h / 30) % 12) =>
    l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

  const rgb = [
    Math.round(f(0) * 255),
    Math.round(f(8) * 255),
    Math.round(f(4) * 255),
  ];
  const alpha = match.length === 5 ? parseFloat(match[4]) * 255 : 255;
  const color =
    '0x' +
    intToHexStr(rgb[0]) +
    intToHexStr(rgb[1]) +
    intToHexStr(rgb[2]) +
    intToHexStr(alpha);

  return parseInt(color, 16);
};

/**
 * Parses a color in the form of:
 *   "red"
 *   "#rgb"
 *   "#rgba"
 *   "#rrggbb"
 *   "#rrggbbaa"
 *   "rgb(r,g,b)"
 *   "rgba(r,g,b,a)"
 *   "hsl(h,s,l)"
 *   "hsla(h,s,l,a)"
 * @param {string} s - String to parse into a color
 * @return {Color | undefined} undefined if invalid string
 */
export const parse = (s: ColorType): number => {
  // If it's a number, no need to parse further
  if (typeof s === 'number' && Number.isInteger(s)) {
    return s;
  }

  if (typeof s === 'string') {
    const type = getColorFormat(s);
    switch (type) {
      case '#':
        return hexToInt(s);
      case 'rgb':
        return rgbToNumber(s);
      case 'rgba':
        return rgbToNumber(s);
      case 'hsl':
        return hslToNumber(s);
      case 'hsla':
        return hslToNumber(s);
      case 'name':
        return CSS_COLORS[s as CssColor];
    }
  }

  throw new Error(`${s} is not a ColorType`);
};

/**
 * True if the object is a Color
 *
 * @param {any} color - Any object to test if it's a color object
 * @returns {boolean} true if it is a valid Color
 */
export function isColor(color: any): color is Color {
  const c = color as Color;
  return COLOR_FORMATS.includes(c.type) && typeof c.value === 'number';
}

/**
 * Converts a color value into an array of [r,g,b,a]
 *
 * @param {number} value - The color number to decompose
 * @returns {number[]} An array of r,g,b,a in range of 0-255
 */
export const colorToRgba = (
  value: number
): [number, number, number, number] => {
  return [
    (value >>> 24) & 0xff, // eslint-disable-line no-bitwise
    (value >>> 16) & 0xff, // eslint-disable-line no-bitwise
    (value >>> 8) & 0xff, // eslint-disable-line no-bitwise
    value & 0xff, // eslint-disable-line no-bitwise
  ];
};

/**
 * Converts an array of [r,g,b,a] to a color number
 *
 * @param {number[]} values - Array of [r,g,b,a] or [r,g,b]
 * @returns {number} An unsigned integer that represents the color
 */
export const rgbaToColor = (values: number[]) =>
  ((values[0] << 24) + //eslint-disable-line no-bitwise
    (values[1] << 16) + //eslint-disable-line no-bitwise
    (values[2] << 8) + //eslint-disable-line no-bitwise
    (values.length === 4 ? values[3] : 255)) >>>
  0; // We shift right 0 to turn the 2s complement back to an unsigned int

/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(),
 *                         hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
export function getLuminance(value: number): number {
  const rgb = colorToRgba(value).map((val) => {
    val /= 255; // normalized
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });

  // Truncate at 3 digits
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}

/**
 * Calculates the contrast ratio between two colors useful for determining
 * the accessability.  A contrast ratio should be a minimum of 7:1
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {ColorType} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(),
 *                              rgba(), hsl(), hsla()
 * @param {ColorType} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(),
 *                              rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */
export function getContrastRatio(
  foreground: ColorType,
  background: ColorType
): number {
  const fValue =
    typeof foreground === 'number' ? foreground : parse(foreground);
  const bValue =
    typeof background === 'number' ? background : parse(background);
  const lumA = getLuminance(fValue);
  const lumB = getLuminance(bValue);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
export function clamp(value: number, min = 0, max = 1) {
  if (process.env.NODE_ENV !== 'production') {
    if (value < min || value > max) {
      console.error(
        `Material-UI: The value provided ${value} is out of range [${min}, ${max}].`
      );
    }
  }

  return Math.min(Math.max(min, value), max);
}

/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {ColorType} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(),
 *                            rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {number} An unsigned integer that represents the color
 */
export function fade(color: ColorType, alpha: number): number {
  const value = typeof color === 'number' ? color : parse(color);
  const clampedValue = clamp(alpha, 0, 1) * 255;
  // (color & 0xff) extracts only alpha, then we subtract it, add back our own
  return value - (value & 0xff) + clampedValue; //eslint-disable-line no-bitwise
}

/**
 * Darkens a color.
 *
 * @param {ColorType} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(),
 *                         hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {number} An unsigned integer that represents the color
 */
export function darken(color: ColorType, coefficient = 0.15): number {
  const value = typeof color === 'number' ? color : parse(color);
  coefficient = clamp(coefficient, 0, 1);
  const values = colorToRgba(value);
  for (let i = 0; i < 3; i += 1) {
    values[i] = Math.round(values[i] * (1 - coefficient));
  }
  return rgbaToColor(values);
}

/**
 * Lightens a color.
 *
 * @param {ColorType} color - CSS color, i.e. one of: number, name, #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {number} An unsigned integer that represents the color
 */
export function lighten(color: ColorType, coefficient = 0.15): number {
  const value = typeof color === 'number' ? color : parse(color);
  coefficient = clamp(coefficient, 0, 1);
  const values = colorToRgba(value);
  for (let i = 0; i < 3; i += 1) {
    values[i] = Math.round(values[i] + (255 - values[i]) * coefficient);
  }
  return rgbaToColor(values);
}

/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {ColorType} color - Color number (int representation of an rgba)
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {number} An unsigned integer that represents the color
 */
export function emphasize(color: ColorType, coefficient = 0.15): number {
  const value = typeof color === 'number' ? color : parse(color);
  return getLuminance(value) > 0.5
    ? darken(value, coefficient)
    : lighten(value, coefficient);
}

/**
 * String format that looks like "#rrggbbaa"
 * @param color - Color number (int representation of an rgba)
 * @returns {string} A string representation of rgba number value
 */
export const colorToHexStr = (color: ColorType): string => {
  const value = typeof color === 'number' ? color : parse(color);
  return `#${value.toString(16).padStart(8, '0')}`;
};

/**
 * Returns a number in the hsla format
 * https://www.niwa.nu/2013/05/math-behind-colorspace-conversions-rgb-hsl/
 *
 * @param {ColorType} color - color int
 * @returns {string} hsla(h,s%,l%,a)
 */
export const colorToHsla = (
  color: ColorType
): [number, number, number, number] => {
  const value = typeof color === 'number' ? color : parse(color);

  const [r, g, b, a] = colorToRgba(value).map((n) => n / 255);
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const lum = (min + max) / 2;

  let sat = 0;
  let hue = 0;
  if (Math.abs(min - max) > 0.0005) {
    // Not a monochrome
    // Calculate Saturation
    if (lum < 0.5) {
      sat = (max - min) / (max + min);
    } else {
      sat = (max - min) / (2.0 - max - min);
    }
    // Calculate Hue
    if (r === max) {
      hue = (g - b) / (max - min);
    } else if (g === max) {
      hue = (2.0 + (b - r)) / (max - min);
    } else if (b === max) {
      hue = (4.0 + (r - g)) / (max - min);
    }
  }

  return [hue, sat, lum, a];
};

export const colorToHslaStr = (color: ColorType): string => {
  const value = typeof color === 'number' ? color : parse(color);
  const [h, s, l, a] = colorToHsla(value);
  return a === 1
    ? `hsl(${h},${Math.round(s * 100)}%,${Math.round(l * 100)}%)`
    : `hsla(${h},${Math.round(s * 100)}%,${Math.round(l * 100)}%,${a})`;
};
