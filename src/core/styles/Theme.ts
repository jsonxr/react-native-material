import { Spacing } from './createSpacing';
import { Palette } from './Palette';
import { ShadowType } from './shadows';
import { ShapeType } from './shape';
import { TypographyType } from './typography/types';

export interface Theme {
  palette: Palette;
  shadows: ShadowType;
  shape: ShapeType;
  spacing: Spacing;
  typography: TypographyType;
}
