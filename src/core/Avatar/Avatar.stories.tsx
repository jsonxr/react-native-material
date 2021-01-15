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
import { ThemeOptions, ThemeProvider, useTheme } from '../styles';
import {
  blue,
  green,
  orange,
  pink,
  purple,
  red,
  yellow,
} from '../../core/colors';

const avatar1 = require('../../../assets/images/avatars/1.jpg');
const avatar2 = require('../../../assets/images/avatars/2.jpg');
const avatar3 = require('../../../assets/images/avatars/3.jpg');
const avatar4 = require('../../../assets/images/avatars/4.jpg');

const styles = StyleSheet.create({
  root: {},
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  red: {
    color: '#fafafa',
    backgroundColor: red[500],
  },
  orange: {
    color: '#ffffff',
    backgroundColor: orange[500],
  },
  yellow: {
    color: '#ffffff',
    backgroundColor: yellow[500],
  },
  green: {
    color: '#ffffff',
    backgroundColor: green[500],
  },
  blue: {
    color: '#ffffff',
    backgroundColor: blue[500],
  },
  purple: {
    color: '#ffffff',
    backgroundColor: purple[500],
  },
});

const AvatarRow = ({ children }: { children: ReactNode }) => (
  <View style={styles.avatarRow}>{children}</View>
);

storiesOf('Avatar', module)
  .addDecorator(ThemeDecorator)
  .addDecorator(DefaultDecorator)
  .add('Default', () => {
    return (
      <View style={styles.root}>
        <AvatarRow>
          <Avatar size="small" style={styles.red}>
            S
          </Avatar>
          <Avatar style={styles.orange}>M</Avatar>
          <Avatar size="large" style={styles.yellow}>
            L
          </Avatar>
        </AvatarRow>

        <AvatarRow>
          <Avatar variant="rounded" size="small" style={styles.green}>
            R
          </Avatar>
          <Avatar variant="rounded" size="medium" style={styles.blue}>
            R
          </Avatar>
          <Avatar variant="rounded" size="large" style={styles.purple}>
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
  .add('Themed', () => {
    const theme: ThemeOptions = {
      components: {
        MuiAvatar: {
          defaultProps: {
            size: 200,
            variant: 'circular',
          },
          styleOverrides: {
            root: {
              borderWidth: 5,
              borderColor: 'black',
            },
            text: {
              textTransform: 'lowercase',
            },
          },
        },
      },
    };
    return (
      <ThemeProvider theme={theme}>
        <Avatar style={styles.red}>O</Avatar>
      </ThemeProvider>
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
