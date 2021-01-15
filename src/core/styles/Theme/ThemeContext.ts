import React from 'react';
import { Theme } from './Theme';

const ThemeContext = React.createContext<Theme | null>(null);

if (process.env.NODE_ENV !== 'production') {
  ThemeContext.displayName = 'ThemeContext';
}

export default ThemeContext;
