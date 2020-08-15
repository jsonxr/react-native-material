import { StyleSheet } from 'react-native';
import { Theme } from '../styles';

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    surface: {
      backgroundColor: theme.palette.background.paper,
    },
  });
};

export default createStyles;
