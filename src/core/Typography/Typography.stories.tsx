import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { ThemeDecorator } from '../../../storybook/decorators';

import { Typography } from '../..';
import { useTheme } from '../styles/theme/useTheme';

const styles = StyleSheet.create({
  view: { borderWidth: 1, borderColor: 'red', width: '100%', height: '100%' },
});

storiesOf('Typography', module)
  .addDecorator(ThemeDecorator)
  .add('Variants', () => (
    <ScrollView style={styles.view} contentContainerStyle={{}}>
      <Typography variant="h2" text="Roboto" />
      <Typography variant="h1" text="h1 - text" />
      <Typography variant="h2" text="h2 - text" />
      <Typography variant="h3" text="h3 - text" />
      <Typography variant="h4" text="h4 - text" />
      <Typography variant="h5" text="h5 - text" />
      <Typography variant="h6" text="h6 - text" />
      <Typography text="Default" />
      <Typography variant="body1" text="body1 - text" />
      <Typography variant="body2" text="body2 - text" />
      <Typography variant="buttonSmall" text="buttonSmall - text" />
      <Typography variant="button" text="button - text" />
      <Typography variant="buttonLarge" text="buttonLarge - text" />
      <Typography variant="subtitle1" text="subtitle1 - text" />
      <Typography variant="subtitle2" text="subtitle2 - text" />
      <Typography variant="caption" text="caption - text" />
      <Typography variant="overline" text="overline - text" />
    </ScrollView>
  ))
  .add('Simplified Variants', () => (
    <ScrollView style={styles.view} contentContainerStyle={{}}>
      <Typography h1>h1 - text</Typography>
      <Typography h2>h2 - text</Typography>
      <Typography h3>h3 -text</Typography>
      <Typography h4>h4 - text</Typography>
      <Typography h5>h5 - text</Typography>
      <Typography h6>h6 - text</Typography>
      <Typography body1>body1 - text</Typography>
      <Typography body2>body2 - text</Typography>
      <Typography buttonSmall>buttonSmall - text</Typography>
      <Typography button>button - text"</Typography>
      <Typography buttonLarge>buttonLarge - text</Typography>
      <Typography subtitle1>subtitle1 - text</Typography>
      <Typography subtitle2>subtitle2 - text</Typography>
      <Typography caption>caption - text</Typography>
      <Typography overline>overline - text"</Typography>
    </ScrollView>
  ))
  .add('Colors', () => {
    const theme = useTheme();
    return (
      <ScrollView style={styles.view} contentContainerStyle={{}}>
        <Typography
          style={{ backgroundColor: theme.palette.error.main }}
          h6
          color="error"
          text="error"
        />
        <Typography h6 color="primary" text="primary" />
        <Typography h6 color="secondary" text="secondary" />
        <Typography h6 color="textPrimary" text="textPrimary" />
        <Typography h6 color="textSecondary" text="textSecondary" />
      </ScrollView>
    );
  });
