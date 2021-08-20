import React from 'react';
import renderer from 'react-test-renderer';
import createMuiTheme from '../styles/createMuiTheme';
import { ThemeProvider } from '../styles/theme/ThemeProvider';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('should render', async () => {
    await renderer.create(<Avatar>A</Avatar>);
  });

  it('should render with theme override', async () => {
    const theme = createMuiTheme();
    await renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar>A</Avatar>
      </ThemeProvider>
    );
  });
});
