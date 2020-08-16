import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from './Icon';
import { storiesOf } from '@storybook/react-native';

import {
  Theme,
  BufferView,
  DefaultBackground,
} from '../../storybook/decorators';

storiesOf('Icon', module)
  .addDecorator(Theme)
  .addDecorator(BufferView)
  .addDecorator(DefaultBackground)
  .add('Default', () => (
    <View style={styles.root}>
      <Icon />
    </View>
  ));

const styles = StyleSheet.create({
  root: {},
});
