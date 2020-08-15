import React from 'react';

import defaultTheme from './defaultTheme';

export function useTheme() {
  const theme = React.useContext(defaultTheme) || defaultTheme;

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useDebugValue(theme);
  }

  return theme;
}
