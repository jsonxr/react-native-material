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
import { ThemeOptions, ThemeProvider } from '../styles';
import { blue, green, orange, purple, red, yellow } from '../../core/colors';

const avatar1 = require('../../../assets/images/avatars/1.jpg');
const avatar2 = require('../../../assets/images/avatars/2.jpg');
const avatar3 = require('../../../assets/images/avatars/3.jpg');
const avatar4 = require('../../../assets/images/avatars/4.jpg');
const avatar5 = require('../../../assets/images/avatars/5.jpg');
const avatar6 = require('../../../assets/images/avatars/6.jpg');

const styles = StyleSheet.create({
  root: {},
  avatarRow: {
    justifyContent: 'space-evenly',
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
      // prettier-ignore
      <View>
        <AvatarRow>
          <Avatar size="small" text="r" />
          <Avatar size="small" variant="rounded" text="o" />
          <Avatar size="small" variant="square" text="y" />
        </AvatarRow>
        <AvatarRow>
          <Avatar size="medium" text="r" />
          <Avatar size="medium" variant="rounded" text="o" />
          <Avatar size="medium" variant="square" text="y" />
        </AvatarRow>
        <AvatarRow>
          <Avatar size="large" text="r" />
          <Avatar size="large" variant="rounded" text="o" />
          <Avatar size="large" variant="square" text="y" />
        </AvatarRow>

        <AvatarRow>
          <Avatar size="small" color={red[500]} text="r" />
          <Avatar size="small" color={orange[500]} text="o" />
          <Avatar size="small" color={yellow[500]} text="y" />
          <Avatar size="small" color={green[500]} text="g" />
          <Avatar size="small" color={blue[500]} text="b" />
          <Avatar size="small" color={purple[500]} text="p" />
        </AvatarRow>

        <AvatarRow>
          <Avatar size="medium" color={red[500]} text="r" />
          <Avatar size="medium" color={orange[500]} text="o" />
          <Avatar size="medium" color={yellow[500]} text="y" />
          <Avatar size="medium" color={green[500]} text="g" />
          <Avatar size="medium" color={blue[500]} text="b" />
          <Avatar size="medium" color={purple[500]} text="p" />
        </AvatarRow>
        <AvatarRow>
          <Avatar size="large" color={red[500]} text="r" />
          <Avatar size="large" color={orange[500]} text="o" />
          <Avatar size="large" color={yellow[500]} text="y" />
          <Avatar size="large" color={green[500]} text="g" />
          <Avatar size="large" color={blue[500]} text="b" />
          <Avatar size="large" color={purple[500]} text="p" />
        </AvatarRow>

        <AvatarRow>
          <Avatar size="small" variant="rounded" color={red[500]} text="r" />
          <Avatar size="small" variant="rounded" color={orange[500]} text="o" />
          <Avatar size="small" variant="rounded" color={yellow[500]} text="y" />
          <Avatar size="small" variant="rounded" color={green[500]} text="g" />
          <Avatar size="small" variant="rounded" color={blue[500]} text="b" />
          <Avatar size="small" variant="rounded" color={purple[500]} text="p" />
        </AvatarRow>
        <AvatarRow>
          <Avatar size="medium" variant="rounded" color={red[500]} text="r" />
          <Avatar size="medium" variant="rounded" color={orange[500]} text="o" />
          <Avatar size="medium" variant="rounded" color={yellow[500]} text="y" />
          <Avatar size="medium" variant="rounded" color={green[500]} text="g" />
          <Avatar size="medium" variant="rounded" color={blue[500]} text="b" />
          <Avatar size="medium" variant="rounded" color={purple[500]} text="p" />
        </AvatarRow>
        <AvatarRow>
          <Avatar size="large" variant="rounded" color={red[500]} text="r" />
          <Avatar size="large" variant="rounded" color={orange[500]} text="o" />
          <Avatar size="large" variant="rounded" color={yellow[500]} text="y" />
          <Avatar size="large" variant="rounded" color={green[500]} text="g" />
          <Avatar size="large" variant="rounded" color={blue[500]} text="b" />
          <Avatar size="large" variant="rounded" color={purple[500]} text="p" />
        </AvatarRow>

        <AvatarRow>
          <Avatar size="small" variant="square" color={red[500]} text="r" />
          <Avatar size="small" variant="square" color={orange[500]} text="o" />
          <Avatar size="small" variant="square" color={yellow[500]} text="y" />
          <Avatar size="small" variant="square" color={green[500]} text="g" />
          <Avatar size="small" variant="square" color={blue[500]} text="b" />
          <Avatar size="small" variant="square" color={purple[500]} text="p" />
        </AvatarRow>
        <AvatarRow>
          <Avatar size="medium" variant="square" color={red[500]} text="r" />
          <Avatar size="medium" variant="square" color={orange[500]} text="o" />
          <Avatar size="medium" variant="square" color={yellow[500]} text="y" />
          <Avatar size="medium" variant="square" color={green[500]} text="g" />
          <Avatar size="medium" variant="square" color={blue[500]} text="b" />
          <Avatar size="medium" variant="square" color={purple[500]} text="p" />
        </AvatarRow>
        <AvatarRow>
          <Avatar size="large" variant="square" color={red[500]} text="r" />
          <Avatar size="large" variant="square" color={orange[500]} text="o" />
          <Avatar size="large" variant="square" color={yellow[500]} text="y" />
          <Avatar size="large" variant="square" color={green[500]} text="g" />
          <Avatar size="large" variant="square" color={blue[500]} text="b" />
          <Avatar size="large" variant="square" color={purple[500]} text="p" />
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
        <Avatar>O</Avatar>
      </ThemeProvider>
    );
  })
  .add('Images', () => (
    <View style={styles.root}>
      <AvatarRow>
        <Avatar image={avatar1} size="small" />
        <Avatar image={avatar2} size="medium" />
        <Avatar image={avatar3} size="large" />
        <Avatar image={avatar4} size="large" />
        <Avatar image={avatar5} size="large" />
        <Avatar image={avatar6} size="large" />
      </AvatarRow>
      <AvatarRow>
        <Avatar variant="rounded" image={avatar1} size="small" />
        <Avatar variant="rounded" image={avatar2} size="medium" />
        <Avatar variant="rounded" image={avatar3} size="large" />
      </AvatarRow>
      <AvatarRow>
        <Avatar variant="square" image={avatar1} size="small" />
        <Avatar variant="square" image={avatar2} size="medium" />
        <Avatar variant="square" image={avatar3} size="large" />
      </AvatarRow>
    </View>
  ))
  .add('Icons', () => {
    return (
      <View>
        <Avatar>
          <FolderIcon />
        </Avatar>
        <Avatar>
          <PageviewIcon />
        </Avatar>
        <Avatar>
          <AssignmentIcon />
        </Avatar>
      </View>
    );
  });
