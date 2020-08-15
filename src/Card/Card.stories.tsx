import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card } from './Card';
import { CardContent } from '../CardContent/CardContent';
import { CardActions } from '../CardActions/CardActions';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import {
  Theme,
  BufferView,
  DefaultBackground,
} from '../../storybook/decorators';

storiesOf('Card', module)
  .addDecorator(Theme)
  .addDecorator(BufferView)
  .addDecorator(DefaultBackground)
  .add('Default', () => (
    <View style={styles.view}>
      <Card style={styles.card}>
        <Text>Default</Text>
      </Card>
      <Card raised style={styles.card}>
        <Text>Raised</Text>
      </Card>
    </View>
  ))
  .add('Simple Card', () => (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  ));

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    flexDirection: 'row',
    margin: 10,
    width: '100%',
    justifyContent: 'space-around',
  },
});
