import React, { ReactNode } from 'react';
import { Pressable, View, ViewStyle } from 'react-native';

export interface ButtonBaseProps {
  style?: ViewStyle;
  children?: ReactNode;
  onPress?: () => void;
  href?: string;
}

export const ButtonBase = ({ style, children, onPress }: ButtonBaseProps) => {
  // Calculate Color style
  const rootStyle: ViewStyle[] = [];
  if (style) {
    rootStyle.push(style);
  }

  return (
    <Pressable
      onPress={onPress}
      // style={({ pressed }) => {
      //   return [
      //     {
      //       backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
      //     },
      //     //styles.wrapperCustom,
      //   ];
      // }}
    >
      <View style={rootStyle}>
        {children}
        {/* {({ pressed }) => (
        <Text style={styles.text}>
          {title ? <Text>{title}</Text> : `Press Me`}
        </Text>
      )} */}
      </View>
    </Pressable>
  );
};

export default ButtonBase;
