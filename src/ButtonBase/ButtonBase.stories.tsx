import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { ThemeDecorator, DefaultDecorator } from '../../storybook/decorators';

import { ButtonBase } from '..';

storiesOf('ButtonBase', module)
  .addDecorator(ThemeDecorator)
  .addDecorator(DefaultDecorator)
  .add('Default', () => (
    <View>
      <ButtonBase onPress={action('onPress')} />
    </View>
  ));
