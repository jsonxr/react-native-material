import { Palette } from './Palette';
import { indigo, pink, red, orange, blue, green, grey } from './hues';

export const dark: Omit<
  Palette,
  'getContrastText' | 'getColor' | 'getSwatches'
> = {
  type: 'dark',
  primary: {
    light: indigo[300],
    main: indigo[500],
    dark: indigo[700],
    text: '#ffffff',
  },
  secondary: {
    light: pink.A200,
    main: pink.A400,
    dark: pink.A700,
    text: '#000000',
  },
  error: {
    light: red[300],
    main: red[500],
    dark: red[700],
    text: '#ffffff',
  },
  warning: {
    light: orange[300],
    main: orange[500],
    dark: orange[700],
    text: '#000000',
  },
  info: {
    light: blue[300],
    main: blue[500],
    dark: blue[700],
    text: '#000000',
  },
  success: {
    light: green[300],
    main: green[500],
    dark: green[700],
    text: '#000000',
  },
  grey,

  // The color used to divide different elements.
  divider: 'rgba(255, 255, 255, 0.12)',
  disabled: 'rgba(255, 255, 255, 0.3)',

  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    main: '#000000',
    text: '#ffffff',
  },
  surface: {
    main: '#000000',
    text: '#ffffff',
  },

  contrastThreshold: 3,
  tonalOffset: 0.2,
};
