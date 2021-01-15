import { StyleSheet } from 'react-native';
import { Theme } from '../styles';

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    root: {
      padding: theme.spacing(2),
    },
  });
};

export default createStyles;
