import {
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
  FlexStyle,
  ShadowStyleIOS,
} from 'react-native';
import { Theme } from '../styles/theme/Theme';

export interface AvatarStyles {
  root: ViewStyle & FlexStyle & ShadowStyleIOS;
  image: ImageStyle;
  text: TextStyle;
}
const createStyles = (theme: Theme, props: AvatarProps) => {
  const overrides = theme.components?.MuiAvatar?.styleOverrides;
  // Default color of avatar
  const backgroundColor =
    theme.palette.type === 'light'
      ? theme.palette.grey[400]
      : theme.palette.grey[600];
  const styles: AvatarStyles = {
    root: {
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor,
      ...overrides?.root,
    },
    image: {
      resizeMode: 'contain',
      ...overrides?.image,
    },
    text: {
      ...theme.typography.variants.body1,
      textTransform: 'capitalize',
      ...overrides?.text,
    },
  };

  return StyleSheet.create(styles);
};

export default createStyles;
