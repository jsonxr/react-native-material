import { Spacing, SpacingOptions } from '../createSpacing';
import { Palette, PaletteOptions } from '../colors/Palette';
import { Shadows } from '../shadows';
import { Shape, ShapeOptions } from '../shape';
import { TypographyType } from '../typography/types';

import { ZIndexOptions } from '../zIndex';
import { TypographyOptions } from '../typography/types';
import { Components } from '../components';

//export interface BreakpointsOptions {}
export type Direction = 'ltr' | 'rtl';
//export interface MixinsOptions {}
//export interface TransitionsOptions {}

export interface Theme {
  shape: Shape;
  breakpoints: {};
  direction: Direction;
  mixins: {};
  components?: Components;
  palette: Palette;
  shadows: Shadows;
  spacing: Spacing;
  transitions: {};
  typography: TypographyType;
  zIndex: ZIndexOptions;
}

export interface ThemeOptions {
  shape?: ShapeOptions;
  breakpoints?: {};
  direction?: Direction;
  mixins?: {};
  components?: Components;
  palette?: PaletteOptions;
  shadows?: Shadows;
  spacing?: SpacingOptions;
  transitions?: {};
  typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
  zIndex?: ZIndexOptions;
}
export type ThemeOptionFunction = (theme: Theme) => Theme;
