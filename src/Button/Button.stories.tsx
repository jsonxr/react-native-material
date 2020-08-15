import React, { ReactNode, ReactElement } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
  Button,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
  ButtonColor,
} from './Button';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import {
  Theme,
  BufferView,
  DefaultBackground,
} from '../../storybook/decorators';

interface ButtonsRowProps extends ButtonProps {
  variants?: Partial<ButtonProps>[];
  children?: ReactNode;
}

export const ButtonsGrid = ({ ...props }: ButtonsRowProps) => {
  const sizes: ButtonSize[] = ['small', 'medium', 'large'];
  const variants: ButtonVariant[] = ['text', 'contained', 'outlined'];
  const colors: ButtonColor[] = ['primary', 'secondary', 'default'];

  return (
    <View>
      {variants.map((variant, i) => (
        <View>
          <Text>{variant.toString()}</Text>
          <View style={styles.buttonRow}>
            {sizes.map((size, j) => (
              <View>
                {colors.map((color, k) => (
                  <Button
                    {...props}
                    variant={variant}
                    size={size}
                    color={color}
                  />
                ))}
              </View>
            ))}
          </View>
        </View>
        // <View key={i}>
        //   <ButtonsRow
        //     {...props}
        //     variant={variant}
        //     variants={[{}, { color: 'primary' }, { color: 'secondary' }]}
        //   />
        //   <ButtonsRow
        //     {...props}
        //     size={size}
        //     variants={[
        //       { variant: 'contained' },
        //       { variant: 'contained', color: 'primary' },
        //       { variant: 'contained', color: 'secondary' },
        //     ]}
        //   />
        //   <ButtonsRow
        //     {...props}
        //     size={size}
        //     variants={[
        //       { variant: 'outlined' },
        //       { variant: 'outlined', color: 'primary' },
        //       { variant: 'outlined', color: 'secondary' },
        //     ]}
        //   />
        // </View>
      ))}
    </View>
  );
};

export const ButtonsRow = ({
  variants,
  children,
  ...props
}: ButtonsRowProps) => (
  <View style={styles.buttonRow}>
    {variants?.map((b, i) => (
      <Button key={i} {...props} {...b} />
    ))}
  </View>
);
export const ButtonSizes = () => null;

storiesOf('Buttons', module)
  .addDecorator(Theme)
  .addDecorator(BufferView)
  .addDecorator(DefaultBackground)
  .add('Contained Buttons', () => (
    <View>
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
    </View>
  ))
  .add('Text Buttons', () => (
    <View>
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
    </View>
  ))
  .add('Outlined Buttons', () => (
    <View>
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
    </View>
  ))
  .add('Sizes', () => (
    <ButtonsGrid title="Hello World" onPress={action('onPress')} />
  ))
  .add('Buttons with icons and label', () => (
    <View>
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
    </View>
  ));

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    margin: 10,
    width: '100%',
    justifyContent: 'space-around',
  },
});
