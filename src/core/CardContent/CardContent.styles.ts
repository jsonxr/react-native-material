import { StyleSheet } from 'react-native';
import { Theme } from '../styles';

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    root: {
      padding: 16,
    },
  });
};

export default createStyles;
