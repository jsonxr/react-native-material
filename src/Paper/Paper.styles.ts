import { StyleSheet } from 'react-native';
import { Theme } from '../styles';

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    paper: {
      backgroundColor: theme.palette.background.paper,
    },
    rounded: {
      borderRadius: theme.shape.borderRadius,
    },
    outlined: {
      borderWidth: 1,
      borderColor: theme.palette.divider,
    },
  });
};

export default createStyles;
