import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import {
  ThemeDecorator,
  DefaultDecorator,
} from '../../../storybook/decorators';

import { Paper, elevations, ElevationType } from '../..';

export const CardsView = ({ children }: any) => <View>{children}</View>;

storiesOf('Paper', module)
  .addDecorator(ThemeDecorator)
  .addDecorator(DefaultDecorator)
  .add('Elevations', () => (
    <View style={styles.view}>
      {elevations.map((n: ElevationType, i: number) => (
        <Paper key={i} elevation={n} style={styles.paper}>
          <Text>{n}</Text>
        </Paper>
      ))}
    </View>
  ))
  .add('Square', () => (
    <View style={styles.view}>
      {elevations.map((n: ElevationType, i: number) => (
        <Paper key={i} elevation={n} square style={styles.paper}>
          <Text>{n}</Text>
        </Paper>
      ))}
    </View>
  ))
  .add('Outlined', () => (
    <View style={styles.view}>
      <Paper variant="outlined" square style={styles.paperLarge}>
        <Text>Outlined</Text>
      </Paper>
      <Paper variant="outlined" style={styles.paperLarge}>
        <Text>Rounded</Text>
      </Paper>
    </View>
  ));

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  paperLarge: {
    margin: 10,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    margin: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    margin: 10,
    width: '100%',
    justifyContent: 'space-around',
  },
});
