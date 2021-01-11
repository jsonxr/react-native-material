import React from 'react';
import { ThemeProvider } from '../../src/core/styles';

export const ThemeDecorator = (Story: any) => (
  <ThemeProvider theme={{}}>
    <Story />
  </ThemeProvider>
);
