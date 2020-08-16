import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import {
  Theme,
  BufferView,
  DefaultBackground,
} from '../../storybook/decorators';
import {
  Avatar,
  Button,
  Card,
  CardProps,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Icon,
  IconButton,
  Typography,
} from '..';

const SimpleCard = (props: CardProps) => (
  <Card style={{ margin: 10 }} {...props}>
    <CardContent>
      <Typography color="textSecondary" gutterBottom text="Word of the Day" />
      <Typography variant="h5" text={`be•nev•o•lent`}></Typography>
      <Typography
        //className={classes.pos}
        color="textSecondary"
        text="adjective"
        style={{ marginBottom: 12 }}
      />
      <Typography variant="body2">well meaning and kindly.</Typography>
      <Typography variant="body2">"a benevolent smile"</Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onPress={action('onPress')}>
        Learn More
      </Button>
    </CardActions>
  </Card>
);

const ComplexCard = () => (
  <Card>
    <CardHeader
      avatar={<Avatar>R</Avatar>}
      action={
        <IconButton aria-label="settings">
          <Icon name="moreVert" />
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia image="/static/images/cards/paella.jpg" title="Paella dish" />
    <CardContent>
      <Typography variant="body2" color="textSecondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <Icon name="favorite" />
      </IconButton>
      <IconButton aria-label="share">
        <Icon name="share" />
      </IconButton>
      <IconButton>
        <Icon name="expandMore" />
      </IconButton>
    </CardActions>
    <Collapse timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>Method:</Typography>
        <Typography paragraph>
          Heat 1/2 cup of the broth in a pot until simmering, add saffron and
          set aside for 10 minutes.
        </Typography>
        <Typography paragraph>
          Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
          over medium-high heat. Add chicken, shrimp and chorizo, and cook,
          stirring occasionally until lightly browned, 6 to 8 minutes. Transfer
          shrimp to a large plate and set aside, leaving chicken and chorizo in
          the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
          pepper, and cook, stirring often until thickened and fragrant, about
          10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth;
          bring to a boil.
        </Typography>
        <Typography paragraph>
          Add rice and stir very gently to distribute. Top with artichokes and
          peppers, and cook without stirring, until most of the liquid is
          absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
          shrimp and mussels, tucking them down into the rice, and cook again
          without stirring, until mussels have opened and rice is just tender, 5
          to 7 minutes more. (Discard any mussels that don’t open.)
        </Typography>
        <Typography>
          Set aside off of the heat to let rest for 10 minutes, and then serve.
        </Typography>
      </CardContent>
    </Collapse>
  </Card>
);

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
  .add('Simple Card', () => {
    return (
      <View>
        <SimpleCard variant="outlined" />
        <SimpleCard variant="elevation" />
        <SimpleCard variant="elevation" raised />
      </View>
    );
  })
  .add('Complex Interaction', () => {
    return (
      <View>
        <ComplexCard />
      </View>
    );
  });

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
