import React from 'react';
import { ThemeProvider } from '../../src/styles';

export const ThemeDecorator = (Story: any) => (
  <ThemeProvider theme={{}}>
    <Story />
  </ThemeProvider>
);
