import { StyleSheet } from 'react-native';
import { Theme } from '../styles';

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    root: {
      alignItems: 'flex-start',
      padding: theme.spacing(1),
    },
  });
};

export default createStyles;
