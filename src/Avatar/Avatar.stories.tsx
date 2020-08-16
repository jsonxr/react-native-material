import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from './Avatar';
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
      <Avatar />
    </View>
  ));

const styles = StyleSheet.create({
  root: {},
});
