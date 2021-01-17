import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import {
  ThemeDecorator,
  DefaultDecorator,
} from '../../../storybook/decorators';

import { Avatar, AvatarGroup } from '../..';

const a1 = require('../../../assets/images/avatars/1.jpg');
const a2 = require('../../../assets/images/avatars/2.jpg');
const a3 = require('../../../assets/images/avatars/3.jpg');
const a4 = require('../../../assets/images/avatars/4.jpg');
const a5 = require('../../../assets/images/avatars/5.jpg');
const a6 = require('../../../assets/images/avatars/6.jpg');
const a7 = require('../../../assets/images/avatars/7.jpg');

storiesOf('AvatarGroup', module)
  .addDecorator(ThemeDecorator)
  .addDecorator(DefaultDecorator)
  .add('Default', () => (
    <View>
      <AvatarGroup max={4} size="small" spacing="small">
        <Avatar image={a1} />
        <Avatar image={a2} />
        <Avatar image={a3} />
        <Avatar image={a4} />
        <Avatar image={a5} />
        <Avatar image={a6} />
        <Avatar image={a7} />
      </AvatarGroup>
      <AvatarGroup max={4} size="medium">
        <Avatar image={a1} />
        <Avatar image={a2} />
        <Avatar image={a3} />
        <Avatar image={a4} />
        <Avatar image={a5} />
        <Avatar image={a6} />
        <Avatar image={a7} />
      </AvatarGroup>
      <AvatarGroup max={4} size="large">
        <Avatar image={a1} />
        <Avatar image={a2} />
        <Avatar image={a3} />
        <Avatar image={a4} />
        <Avatar image={a5} />
        <Avatar image={a6} />
        <Avatar image={a7} />
      </AvatarGroup>
    </View>
  ));
