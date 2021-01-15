import { Spacing, SpacingOptions } from '../createSpacing';
import { Palette, PaletteOptions } from '../Palette';
import { Shadows } from '../shadows';
import { Shape, ShapeOptions } from '../shape';
import { TypographyType } from '../typography/types';

import { ZIndexOptions } from '../zIndex';
import { TypographyOptions } from '../typography/types';
import { Components } from '../components';

export interface BreakpointsOptions {}
export interface Direction {}
export interface MixinsOptions {}

export interface Shadows {}

export interface TransitionsOptions {}

export interface Theme {
  shape: Shape;
  breakpoints: BreakpointsOptions;
  direction: Direction;
  mixins: MixinsOptions;
  components?: Components;
  palette: Palette;
  shadows: Shadows;
  spacing: Spacing;
  transitions: TransitionsOptions;
  typography: TypographyType;
  zIndex: ZIndexOptions;
}

export interface ThemeOptions {
  shape?: ShapeOptions;
  breakpoints?: BreakpointsOptions;
  direction?: Direction;
  mixins?: MixinsOptions;
  components?: Components;
  palette?: PaletteOptions;
  shadows?: Shadows;
  spacing?: SpacingOptions;
  transitions?: TransitionsOptions;
  typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
  zIndex?: ZIndexOptions;
}
export type ThemeOptionFunction = (theme: Theme) => Theme;

// {
//   shape?: ShapeOptions;
//   breakpoints?: BreakpointsOptions;
//   direction?: Direction;
//   mixins?: MixinsOptions;
//   components?: Components;
//   palette?: PaletteOptions;
//   shadows?: Shadows;
//   spacing?: SpacingOptions;
//   transitions?: TransitionsOptions;
//   typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
//   zIndex?: ZIndexOptions;
// }
