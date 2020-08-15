import { Palette, PaletteOptions } from './Palette';
import { ViewStyle } from 'react-native';

export interface Theme {
  palette: Palette;
  shadows: ViewStyle[];
}

export interface ThemeOptions {
  palette?: PaletteOptions;
  shadows?: ViewStyle[];
}
