import { StyleSheet } from 'react-native';
import { Theme } from '../styles/Theme';

const createStyles = (theme: Theme, spacing: 'medium' | 'small' | number) => {
  let marginLeft = -theme.spacing(1);
  if (typeof spacing === 'number') {
    marginLeft = -spacing;
  } else if (spacing === 'small') {
    marginLeft = -theme.spacing(2);
  }

  return StyleSheet.create({
    root: { flexDirection: 'row-reverse' },
    avatar: {
      marginLeft,
      borderWidth: 2,
      borderColor: theme.palette.background.default,
    },
  });
};

export default createStyles;
