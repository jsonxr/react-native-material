// The breakpoint **start** at this value.
// For instance with the first breakpoint xs: [xs, sm).

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type BreakpointValues = { [key in Breakpoint]: number };
const breakpointDefaults: BreakpointValues = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};
export type BreakpointDefaults = typeof breakpointDefaults;

export interface Breakpoints {
  // keys: Breakpoint[];
  values: BreakpointValues;
  // up: (key: Breakpoint | number) => string;
  // down: (key: Breakpoint | number) => string;
  // between: (start: Breakpoint | number, end: Breakpoint | number) => string;
  // only: (key: Breakpoint) => string;
  //width: (key: Breakpoint) => number;
}

export type BreakpointsOptions = Partial<{ step: number } & Breakpoints>;

export default function createBreakpoints(
  options: BreakpointsOptions
): Breakpoints {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values = breakpointDefaults,
  } = options;

  //const width = (key: Breakpoint): number => values[key];

  return {
    values,
    //width,
  };
}
