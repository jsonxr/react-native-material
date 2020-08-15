import React from 'react';
import ThemeContext from './ThemeContext';
import { useTheme } from './useTheme';
import nested from './nested';
import { deepmerge } from '../utils';
import { ThemeOptions } from './Theme';

// To support composition of theme.
function mergeOuterLocalTheme(outerTheme: any, localTheme: any) {
  return deepmerge(outerTheme, localTheme, { clone: false });
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

  // return { ...outerTheme, ...localTheme };
}

interface ThemeProviderProps {
  children: any;
  theme: ThemeOptions;
}

/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */
export function ThemeProvider({
  children,
  theme: localTheme,
}: ThemeProviderProps) {
  const outerTheme = useTheme();

  const theme = React.useMemo(() => {
    const output =
      outerTheme === null
        ? localTheme
        : mergeOuterLocalTheme(outerTheme, localTheme);

    if (output != null) {
      output[nested] = outerTheme !== null;
    }

    return output;
  }, [localTheme, outerTheme]);

  console.log('mergedTheme: ', theme);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
