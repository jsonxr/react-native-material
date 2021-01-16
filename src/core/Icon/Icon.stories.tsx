import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import {
  ThemeDecorator,
  DefaultDecorator,
} from '../../../storybook/decorators';
import { Icon, IconName, IconColor, IconSize } from '../..';
import materialIconMap from './MaterialIconMap';

const styles = StyleSheet.create({
  root: {},
  iconRow: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  icon: {
    padding: 6,
  },
});

storiesOf('Icon', module)
  .addDecorator(ThemeDecorator)
  .addDecorator(DefaultDecorator)
  .add('Default', () => {
    const sizes: IconSize[] = ['small', 'medium', 'large'];
    const colors: IconColor[] = [
      'action',
      'primary',
      'secondary',
      'disabled',
      'error',
    ];
    return (
      <ScrollView style={styles.root} contentContainerStyle={{}}>
        <View style={styles.iconRow}>
          {sizes.map((size) => (
            <Icon key={size} name="android" size={size} />
          ))}
          {colors.map((color) => (
            <Icon key={color} name="android" size="large" color={color} />
          ))}
        </View>
        <View style={styles.iconRow}>
          {[...materialIconMap.keys()].map((name, i) => (
            <Icon
              style={styles.icon}
              key={`${i}-small-action`}
              name={name as IconName}
              size="large"
            />
          ))}
        </View>
      </ScrollView>
    );
  });
