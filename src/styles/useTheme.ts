import React from 'react';

import { Theme } from './Theme';
import ThemeContext from './ThemeContext';

export function useTheme() {
  const theme = React.useContext<Theme>(ThemeContext);

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useDebugValue(theme);
  }

  return theme;
}
