import { deepmerge } from '../utils';
import grey from '../colors/grey';
import {
  Color,
  CommonColors,
  blue,
  common,
  green,
  indigo,
  orange,
  pink,
  red,
} from '../colors';

export type PaletteType = 'light' | 'dark';

export type PaletteTonalOffset =
  | number
  | {
      light: number;
      dark: number;
    };

export interface PaletteColor {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

export interface SimplePaletteColorOptions {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}
export type ColorPartial = Partial<Color>;
export type PaletteColorOptions = SimplePaletteColorOptions | ColorPartial;

export function isSimplePaletteColorOptions(
  color: PaletteColorOptions
): color is SimplePaletteColorOptions {
  return (color as SimplePaletteColorOptions).main !== undefined;
}

export function isColorPartial(
  color: PaletteColorOptions
): color is ColorPartial {
  const partial = color as ColorPartial;
  return (
    partial['50'] !== undefined ||
    partial['100'] !== undefined ||
    partial['200'] !== undefined ||
    partial['300'] !== undefined ||
    partial['400'] !== undefined ||
    partial['500'] !== undefined ||
    partial['600'] !== undefined ||
    partial['700'] !== undefined ||
    partial['800'] !== undefined ||
    partial['900'] !== undefined ||
    partial.A100 !== undefined ||
    partial.A200 !== undefined ||
    partial.A400 !== undefined ||
    partial.A700 !== undefined
  );
}

export interface TypeText {
  primary: string;
  secondary: string;
  disabled: string;
  hint: string;
}

export interface TypeAction {
  active: string;
  hover: string;
  hoverOpacity: number;
  selected: string;
  selectedOpacity: number;
  disabled: string;
  disabledOpacity: number;
  disabledBackground: string;
  focus: string;
  focusOpacity: number;
  activatedOpacity: number;
}

export interface TypeBackground {
  default: string;
  paper: string;
}

export interface PaletteOptions {
  primary?: PaletteColorOptions;
  secondary?: PaletteColorOptions;
  error?: PaletteColorOptions;
  warning?: PaletteColorOptions;
  info?: PaletteColorOptions;
  success?: PaletteColorOptions;
  type?: PaletteType;
  tonalOffset?: PaletteTonalOffset;
  contrastThreshold?: number;
  common?: Partial<CommonColors>;
  grey?: ColorPartial;
  text?: Partial<TypeText>;
  divider?: string;
  action?: Partial<TypeAction>;
  background?: Partial<TypeBackground>;
  getContrastText?: (background: string) => string;
}

export const commonColors = {
  common,
  primary: {
    light: indigo[300],
    main: indigo[500],
    dark: indigo[700],
    contrastText: common.white,
  },
  secondary: {
    light: pink.A200,
    main: pink.A400,
    dark: pink.A700,
    contrastText: common.white,
  },
  error: {
    light: red[300],
    main: red[500],
    dark: red[700],
    contrastText: common.white,
  },
  warning: {
    light: orange[300],
    main: orange[500],
    dark: orange[700],
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  info: {
    light: blue[300],
    main: blue[500],
    dark: blue[700],
    contrastText: common.white,
  },
  success: {
    light: green[300],
    main: green[500],
    dark: green[700],
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  grey,
  contrastThreshold: 3,
  tonalOffset: 0.2,
};

export type TypeDivider = string;

export interface Palette {
  common: CommonColors;
  type: PaletteType;
  contrastThreshold: number;
  tonalOffset: PaletteTonalOffset;
  primary: PaletteColor;
  secondary: PaletteColor;
  error: PaletteColor;
  warning: PaletteColor;
  info: PaletteColor;
  success: PaletteColor;
  grey: Color;
  text: TypeText;
  divider: TypeDivider;
  action: TypeAction;
  background: TypeBackground;
  getContrastText: (background: string) => string;
  augmentColor: {
    (
      color: ColorPartial,
      mainShade?: number | string,
      lightShade?: number | string,
      darkShade?: number | string
    ): PaletteColor;
    (color: PaletteColorOptions): PaletteColor;
  };
}

export const light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)',
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: common.white,
    default: grey[50],
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
};

export const dark = {
  text: {
    primary: common.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: grey[800],
    default: '#303030',
  },
  action: {
    active: common.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },
};
