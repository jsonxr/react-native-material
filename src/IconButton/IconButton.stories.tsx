import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton } from './IconButton';
import { storiesOf } from '@storybook/react-native';

import {
  Theme,
  BufferView,
  DefaultBackground,
} from '../../storybook/decorators';

storiesOf('Avatar', module)
  .addDecorator(Theme)
  .addDecorator(BufferView)
  .addDecorator(DefaultBackground)
  .add('Default', () => (
    <View style={styles.root}>
      <IconButton />
    </View>
  ));

const styles = StyleSheet.create({
  root: {},
});
