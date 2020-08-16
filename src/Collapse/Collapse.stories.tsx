import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Collapse } from './Collapse';
import { storiesOf } from '@storybook/react-native';

import {
  Theme,
  BufferView,
  DefaultBackground,
} from '../../storybook/decorators';

storiesOf('Collapse', module)
  .addDecorator(Theme)
  .addDecorator(BufferView)
  .addDecorator(DefaultBackground)
  .add('Default', () => (
    <View style={styles.root}>
      <Collapse></Collapse>
    </View>
  ));

const styles = StyleSheet.create({
  root: {},
});
