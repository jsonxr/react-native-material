import React from 'react';
import { View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import {
  ThemeDecorator,
  DefaultDecorator,
} from '../../../storybook/decorators';
import { Collapse } from '../..';

storiesOf('Collapse', module)
  .addDecorator(ThemeDecorator)
  .addDecorator(DefaultDecorator)
  .add('Default', () => (
    <View style={styles.root}>
      <Collapse />
    </View>
  ));

const styles = StyleSheet.create({
  root: {},
});
