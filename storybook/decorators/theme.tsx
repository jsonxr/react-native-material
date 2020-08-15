import React from 'react';
import { ThemeProvider, ThemeOptions } from '../../src/styles';

export const Theme = (Story: any) => (
  <ThemeProvider theme={{}}>
    <Story />
  </ThemeProvider>
);
