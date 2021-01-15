import React from 'react';
import defaultTheme from '../defaultTheme';
import { Theme } from '../Theme';

const ThemeContext = React.createContext<Theme>(defaultTheme);

if (process.env.NODE_ENV !== 'production') {
  ThemeContext.displayName = 'ThemeContext';
}

export default ThemeContext;
