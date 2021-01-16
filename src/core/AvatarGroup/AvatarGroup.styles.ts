import { StyleSheet, ViewStyle } from 'react-native';
import { Theme } from '../styles/theme/Theme';

export interface AvatarGroupStyles {
  root?: ViewStyle;
  avatar?: ViewStyle;
}
const createStyles = (
  defaultStyle: AvatarGroupStyles | undefined,
  theme: Theme,
  spacing: 'medium' | 'small' | number
) => {
  let marginLeft = -theme.spacing(1);
  if (typeof spacing === 'number') {
    marginLeft = -spacing;
  } else if (spacing === 'small') {
    marginLeft = -theme.spacing(2);
  }

  return StyleSheet.create({
    root: { flexDirection: 'row-reverse', ...defaultStyle?.root },
    avatar: {
      marginLeft,
      borderWidth: 2,
      borderColor: theme.palette.background.default,
      ...defaultStyle?.avatar,
    },
  });
};

export default createStyles;
