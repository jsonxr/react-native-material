import { Palette } from './Palette';
import { indigo, pink, red, orange, blue, green, grey } from './hues';

export const light: Omit<
  Palette,
  'getContrastText' | 'getColor' | 'getSwatches'
> = {
  type: 'light',
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
    text: '#ffffff',
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

  divider: 'rgba(0, 0, 0, 0.12)',
  disabled: 'rgba(0, 0, 0, 0.3)',

  background: {
    main: '#ffffff',
    text: '#000000',
  },
  surface: {
    main: '#ffffff',
    text: '#000000',
  },

  contrastThreshold: 3,
  tonalOffset: 0.2,
};
