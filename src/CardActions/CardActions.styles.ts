import { StyleSheet } from 'react-native';
import { Theme } from '../styles';

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    root: {
      alignItems: 'flex-start',
      padding: 8,
    },
  });
};

export default createStyles;
