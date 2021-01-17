import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../styles/theme/Theme';

export interface AvatarStyles {
  root?: ViewStyle;
  image?: ImageStyle;
  text?: TextStyle;
}
const createStyles = (theme: Theme) => {
  const styles = theme.components?.MuiAvatar?.styleOverrides;

  // Default color of avatar
  const backgroundColor =
    theme.palette.type === 'light'
      ? theme.palette.grey[400]
      : theme.palette.grey[600];

  return StyleSheet.create({
    root: {
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor,
      ...styles?.root,
    },
    image: {
      resizeMode: 'contain',
      ...styles?.image,
    },
    text: {
      ...theme.typography.variants.body1,
      textTransform: 'capitalize',
      ...styles?.text,
    },
  });
};

export default createStyles;
