import React from 'react';
import ThemeContext from '../useTheme/ThemeContext';
import { useTheme } from '../useTheme/useTheme';
//import nested from './nested';
import { deepmerge } from '../../../utils';
import { Theme, ThemeOptions } from '../Theme';

// To support composition of theme.
function mergeOuterLocalTheme(
  outerTheme: Theme,
  localTheme: ThemeOptions | undefined
): Theme {
  // if (typeof localTheme === 'function') {
  //   const mergedTheme = localTheme(outerTheme);

  //   if (process.env.NODE_ENV !== 'production') {
  //     if (!mergedTheme) {
  //       console.error(
  //         [
  //           'Material-UI: You should return an object from your theme function, i.e.',
  //           '<ThemeProvider theme={() => ({})} />',
  //         ].join('\n')
  //       );
  //     }
  //   }

  //   return mergedTheme;
  // }

  return deepmerge(outerTheme, localTheme, { clone: false }) as Theme;
}

export interface ThemeProviderProps {
  children: any;
  value: ThemeOptions;
}

/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */
export function ThemeProvider({ children, value }: ThemeProviderProps) {
  const outerTheme = useTheme();

  const mergedtheme = (outerTheme === null
    ? value
    : mergeOuterLocalTheme(outerTheme, value)) as Theme;

  return (
    <ThemeContext.Provider value={mergedtheme}>
      {children}
    </ThemeContext.Provider>
  );
}
