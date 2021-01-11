import React from 'react';
import { View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import {
  ThemeDecorator,
  DefaultDecorator,
} from '../../../storybook/decorators';

import { Icon, IconButton } from '../..';

storiesOf('IconButton', module)
  .addDecorator(ThemeDecorator)
  .addDecorator(DefaultDecorator)
  .add('Default', () => (
    <View style={styles.root}>
      {/* <View style={{ backgroundColor: 'red' }}>
        <Text>Hi</Text>
      </View> */}
      <IconButton>
        <Icon name="android" />
      </IconButton>
      <IconButton color="primary">
        <Icon color="primary" name="battery_full" />
      </IconButton>
      <IconButton color="secondary">
        <Icon color="secondary" name="battery_full" />
      </IconButton>
    </View>
  ));

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
