import React from 'react';
import renderer from 'react-test-renderer';
import createMuiTheme from '../createMuiTheme';
import { ThemeProvider } from './ThemeProvider';
import { useTheme } from '../useTheme/useTheme';

describe('ThemeProvider', () => {
  it('should provide a default theme', async () => {
    const Child = () => {
      const theme = useTheme();
      console.log('theme: ', theme);
      expect(theme).toBeTruthy();
      return null;
    };
    const theme = {
      background: 'red',
    };
    expect.assertions(1);
    await renderer.create(
      <ThemeProvider theme={theme}>
        <Child />
      </ThemeProvider>
    );
  });
  it('should provide global styles', () => {
    const theme = createMuiTheme({
      components: {
        MuiAvatar: {},
      },
    });

    await renderer.create(
      <ThemeProvider theme={theme}>
        <Child />
      </ThemeProvider>
    );
  });
});
