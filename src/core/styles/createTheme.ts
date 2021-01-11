import { deepmerge } from '../../utils';
// import createBreakpoints from './createBreakpoints';
// import createMixins from './createMixins';
import createPalette from './createPalette';
import { Theme } from './Theme';
import shadows from './shadows';
import shape from './shape';
import createTypography from './typography/createTypography';
import createSpacing from './createSpacing';
// import createSpacing from './createSpacing';
// import transitions from './transitions';
// import zIndex from './zIndex';

function createTheme(options: Partial<Theme> = {}, ...args: any[]): Theme {
  const {
    // breakpoints: breakpointsInput = {},
    // mixins: mixinsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    typography: typographyInput = {},
    ...other
  } = options;

  const palette = createPalette(paletteInput);
  // const breakpoints = createBreakpoints(breakpointsInput);
  // const spacing = createSpacing(spacingInput);

  let muiTheme = deepmerge(
    {
      //breakpoints,
      //direction: 'ltr',
      //mixins: createMixins(breakpoints, spacing, mixinsInput),
      //overrides: {}, // Inject custom styles
      palette,
      //props: {}, // Provide default props
      shadows: shadows,
      typography: createTypography(palette, typographyInput),
      spacing: createSpacing(spacingInput),
      shape,
      // transitions,
      // variants: {},
      // zIndex,
    },
    other
  );

  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  return muiTheme;
}

export default createTheme;
