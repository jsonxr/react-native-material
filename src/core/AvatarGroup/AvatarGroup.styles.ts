import { FlexStyle, ShadowStyleIOS, StyleSheet, ViewStyle } from 'react-native';
import { Theme } from '../styles/theme/Theme';

export interface AvatarGroupStyles {
  root: ViewStyle & FlexStyle & ShadowStyleIOS;
  avatar: ViewStyle;
}
const createStyles = (theme: Theme) => {
  const overrides = theme.components?.MuiAvatarGroup?.styleOverrides;

  const styles: AvatarGroupStyles = {
    root: { flexDirection: 'row-reverse', ...overrides?.root },
    avatar: {
      borderWidth: 2,
      borderColor: theme.palette.background.default,
      ...overrides?.avatar,
    },
  };

  return StyleSheet.create(styles);
};

export default createStyles;
