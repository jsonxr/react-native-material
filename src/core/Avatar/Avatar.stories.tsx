import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import {
  ThemeDecorator,
  DefaultDecorator,
} from '../../../storybook/decorators';

import { Avatar } from '../..';
import FolderIcon from '../../icons/Folder';
import PageviewIcon from '../../icons/Pageview';
import AssignmentIcon from '../../icons/Assignment';
import { useTheme } from '../styles';
import {
  blue,
  green,
  orange,
  pink,
  purple,
  red,
  yellow,
} from '../../core/colors';

const avatar1 = require('../../assets/images/avatars/1.jpg');
const avatar2 = require('../../assets/images/avatars/2.jpg');
const avatar3 = require('../../assets/images/avatars/3.jpg');
const avatar4 = require('../../assets/images/avatars/4.jpg');

const AvatarRow = ({ children }: { children: ReactNode }) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      margin: 5,
    }}
  >
    {children}
  </View>
);

storiesOf('Avatar', module)
  .addDecorator(ThemeDecorator)
  .addDecorator(DefaultDecorator)
  .add('Default', () => {
    const theme = useTheme();

    const avatarStyles = StyleSheet.create({
      red: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
      },
      orange: {
        color: theme.palette.getContrastText(orange[500]),
        backgroundColor: orange[500],
      },
      yellow: {
        color: theme.palette.getContrastText(yellow[500]),
        backgroundColor: yellow[500],
      },
      green: {
        color: theme.palette.getContrastText(green[500]),
        backgroundColor: green[500],
      },
      blue: {
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
      },
      purple: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
      },
    });

    return (
      <View style={styles.root}>
        <AvatarRow>
          <Avatar size="small" style={avatarStyles.red}>
            S
          </Avatar>
          <Avatar style={avatarStyles.orange}>M</Avatar>
          <Avatar size="large" style={avatarStyles.yellow}>
            L
          </Avatar>
        </AvatarRow>

        <AvatarRow>
          <Avatar variant="rounded" size="small" style={avatarStyles.green}>
            R
          </Avatar>
          <Avatar variant="rounded" size="medium" style={avatarStyles.blue}>
            R
          </Avatar>
          <Avatar variant="rounded" size="large" style={avatarStyles.purple}>
            R
          </Avatar>
        </AvatarRow>
        <AvatarRow>
          <Avatar variant="square" size="small">
            S
          </Avatar>
          <Avatar variant="square">S</Avatar>
          <Avatar variant="square" size="large">
            S
          </Avatar>
        </AvatarRow>
      </View>
    );
  })
  .add('Images', () => (
    <View style={styles.root}>
      <AvatarRow>
        <Avatar source={avatar1} size="small" />
        <Avatar source={avatar2} size="medium" />
        <Avatar source={avatar3} />
        <Avatar source={avatar4} size="large" />
      </AvatarRow>
      <AvatarRow>
        <Avatar variant="rounded" source={avatar1} size="small" />
        <Avatar variant="rounded" source={avatar2} size="medium" />
        <Avatar variant="rounded" source={avatar3} size="large" />
      </AvatarRow>
      <AvatarRow>
        <Avatar variant="square" source={avatar1} size="small" />
        <Avatar variant="square" source={avatar2} size="medium" />
        <Avatar variant="square" source={avatar3} size="large" />
      </AvatarRow>
    </View>
  ))
  .add('Icons', () => {
    const theme = useTheme();

    const avatarStyles = StyleSheet.create({
      pink: {
        color: theme.palette.getContrastText(pink[500]),
        backgroundColor: pink[500],
      },
      green: {
        color: '#fff',
        backgroundColor: green[500],
      },
    });

    return (
      <View style={styles.root}>
        <Avatar>Hi</Avatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
        <Avatar style={avatarStyles.pink}>
          <PageviewIcon />
        </Avatar>
        <Avatar style={avatarStyles.green}>
          <AssignmentIcon />
        </Avatar>
      </View>
    );
  });

const styles = StyleSheet.create({
  root: {},
});
