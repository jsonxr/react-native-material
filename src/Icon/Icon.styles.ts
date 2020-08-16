import { StyleSheet } from 'react-native';
import { Theme } from '../styles';
import { IconColor, IconSize } from './types';

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    root: {
      width: theme.typography.htmlFontSize,
      height: theme.typography.htmlFontSize,
      overflow: 'hidden',
      flexShrink: 0,
    },

    primary: {
      color: theme.palette.primary.main,
    },
    secondary: {
      color: theme.palette.secondary.main,
    },
    action: {
      color: theme.palette.action.active,
    },
    error: {
      color: theme.palette.error.main,
    },
    disabled: {
      color: theme.palette.action.disabled,
    },

    small: {
      fontSize: 20,
    },
    default: {
      fontSize: 24,
    },
    large: {
      fontSize: 36,
    },
  });
};

export default createStyles;
