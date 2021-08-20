import React from 'react';
import renderer from 'react-test-renderer';
import createMuiTheme from '../createMuiTheme';
import { ThemeProvider } from './ThemeProvider';
import { Theme } from './Theme';
import { green } from '../colors/hues/green';
import { red } from '../colors/hues/red';
import { useTheme } from './useTheme';
import defaultTheme from './defaultTheme';

describe('ThemeProvider', () => {
  it('should provide a default theme', async () => {
    const Child = () => {
      const theme = useTheme();
      expect(theme.palette.primary.main).toEqual(
        defaultTheme.palette.primary.main
      );
      expect(theme.palette.primary.dark).toEqual(
        defaultTheme.palette.primary.dark
      );
      return null;
    };

    expect.assertions(2);
    await renderer.create(<Child />);
  });

  it('should accept a function for a value', async () => {
    const Child = () => {
      const theme = useTheme();
      expect(theme.palette.primary.dark).toEqual(green[200]);
      expect(theme.palette.primary.main).toEqual(green[500]);
      return null;
    };

    const muiTheme = (theme: Theme) => ({
      ...theme,
      palette: {
        ...theme.palette,
        primary: {
          ...theme.palette.primary,
          dark: green[200],
          main: green[500],
        },
      },
    });

    expect.assertions(2);
    await renderer.create(
      <ThemeProvider theme={muiTheme}>
        <Child />
      </ThemeProvider>
    );
  });

  it('should accept an object for a value', async () => {
    const Child = () => {
      const theme = useTheme();
      expect(theme.palette.primary.dark).toEqual(green[200]);
      expect(theme.palette.primary.main).toEqual(green[500]);
      return null;
    };

    const muiTheme = {
      palette: {
        primary: {
          dark: green[200],
          main: green[500],
        },
      },
    };

    expect.assertions(2);
    await renderer.create(
      <ThemeProvider theme={muiTheme}>
        <Child />
      </ThemeProvider>
    );
  });

  it('should allow for additional properties', async () => {
    const mytheme = createMuiTheme({ overrides: true });
    type MyTheme = typeof mytheme;

    const Child = () => {
      const theme = useTheme<MyTheme>();
      expect(theme.overrides).toBeTruthy();
      return null;
    };

    await renderer.create(
      <ThemeProvider theme={mytheme}>
        <Child />
      </ThemeProvider>
    );
  });

  it.skip('should allow nested themes', async () => {
    const Child1 = () => {
      const theme = useTheme();
      expect(theme.palette.primary.dark).toEqual(red[200]);
      expect(theme.palette.primary.main).toEqual(red[500]);
      return null;
    };

    const Child2 = () => {
      const theme = useTheme();
      expect(theme.palette.primary.dark).toEqual(green[200]);
      expect(theme.palette.primary.main).toEqual(green[500]);
      return null;
    };

    const Child3 = () => {
      const theme = useTheme();
      expect(theme.palette.primary.dark).toEqual(red[200]);
      expect(theme.palette.primary.main).toEqual(red[500]);
      return null;
    };

    const redTheme = {
      palette: {
        primary: {
          dark: red[200],
          main: red[500],
        },
      },
    };
    const greenTheme = {
      palette: {
        primary: {
          dark: green[200],
          main: green[500],
        },
      },
    };

    await renderer.create(
      <ThemeProvider theme={redTheme}>
        <Child1 />
        <ThemeProvider theme={greenTheme}>
          <Child2 />
        </ThemeProvider>
        <Child3 />
      </ThemeProvider>
    );
  });
});
