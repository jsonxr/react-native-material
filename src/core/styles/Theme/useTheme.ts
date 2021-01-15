import React from 'react';
import { Theme } from './Theme';
import ThemeContext from './ThemeContext';
import defaultTheme from './defaultTheme';

React.createContext<Theme | null>(null);

export function useTheme<T extends Theme>(): T {
  const theme = React.useContext<Theme | null>(ThemeContext) || defaultTheme;

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useDebugValue(theme);
  }

  return theme as Theme & T;
}
