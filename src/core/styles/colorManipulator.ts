export type ColorFormat = 'rgb' | 'rgba' | 'hsl' | 'hsla';
export type RGBA = [number, number, number] | [number, number, number, number];
export interface ColorObject {
  type: ColorFormat;
  values: RGBA;
}

import { CssColor, cssToRgb } from '../colors/cssColors';

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value: number, min = 0, max = 1) {
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
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} hex - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */
export function hexToRgb(hex: string): string {
  hex = hex.substr(1);

  const re = new RegExp(`.{1,${hex.length >= 6 ? 2 : 1}}`, 'g');
  let colors = hex.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map((n) => n + n);
  }

  return colors
    ? `rgb${colors.length === 4 ? 'a' : ''}(${colors
        .map((n, index) => {
          return index < 3
            ? parseInt(n, 16)
            : Math.round((parseInt(n, 16) / 255) * 1000) / 1000;
        })
        .join(', ')})`
    : '';
}

function intToHex(int: number) {
  const hex = int.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} cssColor - CSS color, i.e. named color or one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */
export function decomposeColor(cssColor: string | ColorObject): ColorObject {
  // Idempotent
  if ((cssColor as any).type) {
    return cssColor as ColorObject;
  }
  const cssColorArg = cssColor as string;

  if (cssColorArg.charAt(0) === '#') {
    return decomposeColor(hexToRgb(cssColorArg));
  }

  const marker = cssColorArg.indexOf('(');
  const type = cssColorArg.substring(0, marker);

  if (!type && typeof cssColorArg === 'string') {
    const rgba = cssToRgb(cssColorArg);
    if (rgba) {
      return decomposeColor(rgba);
    }
  }

  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
    throw new Error(
      `Material-UI: Unsupported "${cssColorArg}" color. We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().`
    );
  }

  const values = cssColorArg
    .substring(marker + 1, cssColorArg.length - 1)
    .split(',');
  if (values.length > 4) {
    throw new Error(
      `Material-UI: Unsupported "${cssColorArg}" color. We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().`
    );
  }
  const color = values.map((value) => parseFloat(value)) as RGBA;

  return { type: type as ColorFormat, values: color };
}

/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
export function recomposeColor(color: ColorObject): string {
  const { type } = color;
  const { values } = color;
  let strings: string[] = values as any;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    strings = values.map((n, i) => (i < 3 ? Math.trunc(n) : n)) as any[];
  } else if (type.indexOf('hsl') !== -1) {
    strings[1] = `${values[1]}%`;
    strings[2] = `${values[2]}%`;
  }
  return `${type}(${strings.join(', ')})`;
}

/**
 * Converts a color from CSS rgb format to CSS hex format.
 *
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */
export function rgbToHex(color: string): string {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }

  const { values } = decomposeColor(color);
  return `#${values.map((n) => intToHex(n)).join('')}`;
}

/**
 * Converts a color from hsl format to rgb format.
 *
 * @param {string} hslColor - HSL color values
 * @returns {string} rgb color values
 */
export function hslToRgb(hslColor: string): string {
  const color = decomposeColor(hslColor);
  const { values } = color;
  const h = values[0];
  const s = values[1] / 100;
  const l = values[2] / 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number, k = (n + h / 30) % 12) =>
    l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

  let type: ColorFormat = 'rgb';
  const rgb: RGBA = [
    Math.round(f(0) * 255),
    Math.round(f(8) * 255),
    Math.round(f(4) * 255),
  ];

  if (color.type === 'hsla' && values.length === 4) {
    type = 'rgba';
    rgb.push(values[3]);
  }

  return recomposeColor({ type, values: rgb });
}

/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
export function getLuminance(cssColor: string): number {
  const color = decomposeColor(cssColor);

  let rgb =
    color.type === 'hsl'
      ? decomposeColor(hslToRgb(cssColor)).values
      : color.values;
  rgb = rgb.map((val) => {
    val /= 255; // normalized
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  }) as RGBA;

  // Truncate at 3 digits
  return Number(
    (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)
  );
}

/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */
export function getContrastRatio(
  foreground: string,
  background: string
): number {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}

/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} cssColor - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
export function fade(cssColor: string, value: number): string {
  const color = decomposeColor(cssColor);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }
  color.values[3] = value;

  return recomposeColor(color);
}

/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
export function darken(cssColor: string, coefficient: number): string {
  const color = decomposeColor(cssColor);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }
  return recomposeColor(color);
}

/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
export function lighten(cssColor: string, coefficient: number): string {
  const color = decomposeColor(cssColor);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
export function emphasize(color: string, coefficient = 0.15): string {
  return getLuminance(color) > 0.5
    ? darken(color, coefficient)
    : lighten(color, coefficient);
}
