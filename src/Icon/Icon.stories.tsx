import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { ThemeDecorator, DefaultDecorator } from '../../storybook/decorators';

import { Icon, IconName, IconColor, IconSize } from '..';
import materialIconMap from './MaterialIconMap';

storiesOf('Icon', module)
  .addDecorator(ThemeDecorator)
  .addDecorator(DefaultDecorator)
  .add('Default', () => {
    const sizes: IconSize[] = ['small', 'default', 'large'];
    const colors: IconColor[] = [
      'action',
      'primary',
      'secondary',
      'disabled',
      'error',
    ];
    return (
      <ScrollView style={styles.root} contentContainerStyle={{}}>
        <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
          {sizes.map((size) => (
            <Icon key={size} name="android" size={size} />
          ))}
          {colors.map((color) => (
            <Icon key={color} name="android" size="large" color={color} />
          ))}
        </View>
        <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
          {[...materialIconMap.keys()].map((name, i) => (
            <Icon
              style={{ padding: 6 }}
              key={`${i}-small-action`}
              name={name as IconName}
              size="large"
            />
          ))}
        </View>
      </ScrollView>
    );
  });

const styles = StyleSheet.create({
  root: {},
});
