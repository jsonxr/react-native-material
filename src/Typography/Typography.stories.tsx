import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { Typography } from './Typography';

import {
  Theme,
  BufferView,
  DefaultBackground,
} from '../../storybook/decorators';

storiesOf('Typography', module)
  .addDecorator(Theme)
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
      <Typography h1 text="h1 - text" />
      <Typography h2 text="h2 - text" />
      <Typography h3 text="h3 - text" />
      <Typography h4 text="h4 - text" />
      <Typography h5 text="h5 - text" />
      <Typography h6 text="h6 - text" />
      <Typography body1 text="body1 - text" />
      <Typography body2 text="body2 - text" />
      <Typography buttonSmall text="buttonSmall - text" />
      <Typography button text="button - text" />
      <Typography buttonLarge text="buttonLarge - text" />
      <Typography subtitle1 text="subtitle1 - text" />
      <Typography subtitle2 text="subtitle2 - text" />
      <Typography caption text="caption - text" />
      <Typography overline text="overline - text" />
    </ScrollView>
  ))
  .add('Simplified Variants Exception', () => (
    <ScrollView style={styles.view} contentContainerStyle={{}}>
      <Typography h1 h2 h3 text="error" />
    </ScrollView>
  ));

const styles = StyleSheet.create({
  view: { borderWidth: 1, borderColor: 'red', width: '100%', height: '100%' },
});
