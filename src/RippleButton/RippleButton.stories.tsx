import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RippleButton } from './RippleButton';
import { storiesOf } from '@storybook/react-native';
import { ThemeDecorator, DefaultDecorator } from '../../storybook/decorators';

import { Icon } from '..';

storiesOf('IconButton', module)
  .addDecorator(ThemeDecorator)
  .addDecorator(DefaultDecorator)
  .add('Default', () => (
    <View style={styles.root}>
      <RippleButton>
        <Icon name="android" />
      </RippleButton>
    </View>
  ));

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
