import React from 'react';
import ThemeContext from './ThemeContext';
import { useTheme } from './useTheme';
//import nested from './nested';
import { deepmerge } from '../../../utils';
import { Theme, ThemeOptions, ThemeOptionFunction } from './Theme';

// To support composition of theme.
const mergeOuterLocalTheme = (
  outerTheme: Theme,
  localTheme: ThemeOptions | ThemeOptionFunction
): Theme => {
  if (typeof localTheme === 'function') {
    const mergedTheme = localTheme(outerTheme);

    if (process.env.NODE_ENV !== 'production') {
      if (!mergedTheme) {
        console.error(
          [
            'Material-UI: You should return an object from your theme function, i.e.',
            '<ThemeProvider theme={() => ({})} />',
          ].join('\n')
        );
      }
    }

    return mergedTheme;
  }

  return deepmerge(outerTheme, localTheme, { clone: false });
};

export interface ThemeProviderProps {
  children: any;
  theme: any;
}

/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */
export function ThemeProvider({ children, theme }: ThemeProviderProps) {
  const outerTheme = useTheme();

  const mergedtheme: Theme = theme
    ? mergeOuterLocalTheme(outerTheme, theme)
    : outerTheme;

  return (
    <ThemeContext.Provider value={mergedtheme}>
      {children}
    </ThemeContext.Provider>
  );
}
