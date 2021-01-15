import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface AvatarStyles {
  root?: ViewStyle;
  image?: ImageStyle;
  text?: TextStyle;
}
const createStyles = (styles?: AvatarStyles) => {
  return StyleSheet.create({
    root: {
      ...styles?.root,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      ...styles?.image,
      resizeMode: 'contain',
    },
    text: {
      ...styles?.text,
    },
  });
};

export default createStyles;
