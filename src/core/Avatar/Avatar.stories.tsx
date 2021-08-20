import React, { ReactNode } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import {
  ThemeDecorator,
  DefaultDecorator,
} from '../../../storybook/decorators';

import { Avatar } from '../..';
import FolderIcon from '../../icons/Folder';
import PageviewIcon from '../../icons/Pageview';
import AssignmentIcon from '../../icons/Assignment';
import {
  blue,
  green,
  orange,
  purple,
  red,
  yellow,
} from '../styles/colors/hues';

import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
} from '../../../storybook/avatars';

const styles = StyleSheet.create({
  root: {},
  avatarRow: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  margin: { margin: 10 },
});

const AvatarRow = ({ children }: { children: ReactNode }) => (
  <View style={styles.avatarRow}>{children}</View>
);

storiesOf('Avatar', module)
  .addDecorator(ThemeDecorator)
  .addDecorator(DefaultDecorator)
  .add('Default', () => {
    console.log('Avatar.Default');
    const size = 58;

    return (
      // prettier-ignore
      <View>
        <Text>text</Text>
        <View style={styles.row}>
          <Avatar style={styles.margin} size="large">
            d
          </Avatar>
          <Avatar style={styles.margin} size="large" text="s" />
          <Avatar style={styles.margin} size="large" variant="rounded" text="s" />
          <Avatar style={styles.margin} size="large" variant="square" text="s" />
        </View>

        <Text>image</Text>
        <View style={styles.row}>
          <Avatar style={styles.margin} size="large">
            <Image source={avatar2} />
          </Avatar>
          <Avatar style={styles.margin} size="large" image={avatar1} />
        </View>

        <Text>icon</Text>
        <View style={styles.row}>
          <Avatar>
            <FolderIcon color="white" />
          </Avatar>
          <Avatar color="red" icon="folder" />
        </View>
      </View>
    );
  })
  .add('Text', () => {
    const A = (rest: any) => (
      <AvatarRow>
        <Avatar {...rest} color={red[500]} text="r" />
        <Avatar {...rest} color={orange[500]} text="o" />
        <Avatar {...rest} color={yellow[500]} text="y" />
        <Avatar {...rest} color={green[500]} text="g" />
        <Avatar {...rest} color={blue[500]} text="b" />
        <Avatar {...rest} color={purple[500]} text="p" />
      </AvatarRow>
    );

    return (
      // prettier-ignore
      <View>

      <AvatarRow>
        <Avatar size="small">d</Avatar>
        <Avatar size="small" text="s" />
        <Avatar size="small" variant="rounded" text="s" />
        <Avatar size="small" variant="square" text="s" />
      </AvatarRow>
      <AvatarRow>
        <Avatar size="medium">d</Avatar>
        <Avatar size="medium" text="m" />
        <Avatar size="medium" variant="rounded" text="m" />
        <Avatar size="medium" variant="square" text="m" />
      </AvatarRow>
      <AvatarRow>
        <Avatar size="large">d</Avatar>
        <Avatar size="large" text="l" />
        <Avatar size="large" variant="rounded" text="l" />
        <Avatar size="large" variant="square" text="l" />
      </AvatarRow>

      <A size="small" />
      <A size="medium" />
      <A size="large" />
      <A size="small" variant="rounded" />
      <A size="medium" variant="rounded"/>
      <A size="large" variant="rounded"/>
      <A size="small" variant="square" />
      <A size="medium" variant="square"/>
      <A size="large" variant="square" />
    </View>
    );
  })
  // // .add('Themed', () => {
  // //   const theme: ThemeOptions = {
  // //     components: {
  // //       MuiAvatar: {
  // //         defaultProps: {
  // //           size: 200,
  // //           variant: 'circular',
  // //         },
  // //         styleOverrides: {
  // //           root: {
  // //             borderWidth: 5,
  // //             borderColor: 'black',
  // //           },
  // //           text: {
  // //             textTransform: 'lowercase',
  // //           },
  // //         },
  // //       },
  // //     },
  // //   };
  // //   return (
  // //     <ThemeProvider theme={theme}>
  // //       <Avatar>O</Avatar>
  // //     </ThemeProvider>
  // //   );
  // // })
  .add('Images', () => {
    const A = (rest: any) => (
      <AvatarRow>
        <Avatar {...rest} image={avatar1} />
        <Avatar {...rest} image={avatar2} />
        <Avatar {...rest} image={avatar3} />
        <Avatar {...rest} image={avatar4} />
        <Avatar {...rest} image={avatar5} />
        <Avatar {...rest} image={avatar6} />
      </AvatarRow>
    );

    return (
      <View style={styles.root}>
        <A size="small" />
        <A size="small" variant="rounded" />
        <A size="small" variant="square" />
        <A size="medium" />
        <A size="medium" variant="rounded" />
        <A size="medium" variant="square" />
        <A size="large" />
        <A size="large" variant="rounded" />
        <A size="large" variant="square" />
      </View>
    );
  })
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
