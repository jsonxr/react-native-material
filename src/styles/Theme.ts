import { Palette, PaletteOptions } from './Palette';
import { ShadowType } from './shadows';
import { ShapeType } from './shape';
import { TypographyOptions, TypographyType } from './typography/types';

export interface Theme {
  palette: Palette;
  shadows: ShadowType;
  shape: ShapeType;
  typography: TypographyType;
}

export interface ThemeOptions {
  palette?: PaletteOptions;
  typography?: TypographyOptions;
}
