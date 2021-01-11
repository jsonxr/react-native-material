import React, { ReactElement, ReactNode } from 'react';
import { View, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import {
  ThemeDecorator,
  DefaultDecorator,
} from '../../../storybook/decorators';

import { Avatar, AvatarGroup } from '../..';

const avatars = [
  require('../../assets/images/avatars/1.jpg'),
  require('../../assets/images/avatars/2.jpg'),
  require('../../assets/images/avatars/3.jpg'),
  require('../../assets/images/avatars/4.jpg'),
  require('../../assets/images/avatars/5.jpg'),
  require('../../assets/images/avatars/6.jpg'),
  require('../../assets/images/avatars/7.jpg'),
];

storiesOf('AvatarGroup', module)
  .addDecorator(ThemeDecorator)
  .addDecorator(DefaultDecorator)
  .add('Default', () => (
    <View>
      <AvatarGroup max={4}>
        <Avatar source={avatars[0]} />
        <Avatar source={avatars[1]} />
        <Avatar source={avatars[2]} />
        <Avatar source={avatars[3]} />
        <Avatar source={avatars[4]} />
        <Avatar source={avatars[5]} />
        <Avatar source={avatars[6]} />
      </AvatarGroup>
    </View>
  ));
