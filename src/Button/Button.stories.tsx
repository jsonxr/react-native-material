import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from './Button';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import {
  Theme,
  BufferView,
  DefaultBackground,
} from '../../storybook/decorators';

export const ButtonsView = ({ children }: any) => <View>{children}</View>;

storiesOf('Buttons', module)
  .addDecorator(Theme)
  .addDecorator(BufferView)
  .addDecorator(DefaultBackground)
  .add('Contained Buttons', () => (
    <ButtonsView>
      <Button title="Default" variant="contained" onPress={action('onPress')} />
      <Button
        title="Primary"
        variant="contained"
        color="primary"
        onPress={action('onPress')}
      />
      <Button
        title="Secondary"
        variant="contained"
        color="secondary"
        onPress={action('onPress')}
      />
      <Button
        title="Disabled"
        variant="contained"
        disabled
        onPress={action('onPress')}
      />
      <Button
        title="Link"
        variant="contained"
        color="primary"
        href="#contained-buttons"
        onPress={action('onPress')}
      />
      <Button
        title="Disable Elevation"
        variant="contained"
        color="primary"
        disableElevation
        onPress={action('onPress')}
      />
    </ButtonsView>
  ))
  .add('Text Buttons', () => (
    <ButtonsView>
      <Button title="Default" onPress={action('onPress')} />
      <Button title="Primary" color="primary" onPress={action('onPress')} />
      <Button title="Secondary" color="secondary" onPress={action('onPress')} />
      <Button title="Disabled" disabled onPress={action('onPress')} />
      <Button
        title="Link"
        color="primary"
        href="#contained-buttons"
        onPress={action('onPress')}
      />
    </ButtonsView>
  ))
  .add('Outlined Buttons', () => (
    <ButtonsView>
      <Button title="Default" variant="outlined" onPress={action('onPress')} />
      <Button
        title="Primary"
        variant="outlined"
        color="primary"
        onPress={action('onPress')}
      />
      <Button
        title="Secondary"
        variant="outlined"
        color="secondary"
        onPress={action('onPress')}
      />
      <Button
        title="Disabled"
        variant="outlined"
        disabled
        onPress={action('onPress')}
      />
      <Button
        title="Link"
        variant="outlined"
        color="primary"
        href="#contained-buttons"
        onPress={action('onPress')}
      />
    </ButtonsView>
  ))
  .add('Sizes', () => (
    <ButtonsView>
      <View style={styles.buttonRow}>
        <Button title="Hello World" onPress={action('onPress')} />
        <Button
          title="Hello World"
          color="primary"
          onPress={action('onPress')}
        />
        <Button
          title="Hello World"
          color="secondary"
          onPress={action('onPress')}
        />
      </View>

      <View style={styles.buttonRow}>
        <Button
          title="Hello World"
          variant="contained"
          onPress={action('onPress')}
        />
        <Button
          title="Hello World"
          variant="contained"
          color="primary"
          onPress={action('onPress')}
        />
        <Button
          title="Hello World"
          variant="contained"
          color="secondary"
          onPress={action('onPress')}
        />
      </View>

      <View style={styles.buttonRow}>
        <Button
          title="Hello World"
          variant="outlined"
          onPress={action('onPress')}
        />
        <Button
          title="Hello World"
          variant="outlined"
          color="primary"
          onPress={action('onPress')}
        />
        <Button
          title="Hello World"
          variant="outlined"
          color="secondary"
          onPress={action('onPress')}
        />
      </View>
    </ButtonsView>
  ))
  .add('Buttons with icons and label', () => (
    <ButtonsView>
      <Button
        title="Delete"
        variant="contained"
        color="secondary"
        startIcon="delete"
        onPress={action('onPress')}
      />
      <Button
        title="Send"
        variant="contained"
        color="primary"
        endIcon="send"
        onPress={action('onPress')}
      />
      <Button
        title="Upload"
        variant="contained"
        color="default"
        startIcon="upload"
        onPress={action('onPress')}
      />
      <Button
        title="Talk"
        variant="contained"
        disabled
        color="secondary"
        startIcon="voice"
        onPress={action('onPress')}
      />
      <Button
        title="Save"
        variant="contained"
        color="primary"
        size="small"
        startIcon="save"
        onPress={action('onPress')}
      />
      <Button
        title="Save"
        variant="contained"
        color="primary"
        size="large"
        startIcon="save"
        onPress={action('onPress')}
      />
    </ButtonsView>
  ));

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    margin: 10,
    width: '100%',
    justifyContent: 'space-around',
  },
});
