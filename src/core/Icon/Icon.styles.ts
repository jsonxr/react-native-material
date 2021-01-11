import { StyleSheet } from 'react-native';
import { Theme } from '../styles';
import { IconColor, IconSize } from './types';

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    root: {
      overflow: 'hidden',
      flexShrink: 0,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
  });
};

export default createStyles;
