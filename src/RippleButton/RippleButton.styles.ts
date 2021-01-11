import { StyleSheet } from 'react-native';
import { Theme, fade } from '../core/styles';

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    root: {},

    small: {
      fontSize: 18,
      padding: 3,
      borderRadius: 12,
    },
    medium: {
      fontSize: 24,
      padding: 12,
      borderRadius: 24,
    },

    default: {
      //backgroundColor: theme.palette.action.active,
      backgroundColor: fade(
        theme.palette.action.active,
        theme.palette.action.hoverOpacity
      ),
    },
    primary: {
      backgroundColor: fade(
        theme.palette.primary.main,
        theme.palette.action.hoverOpacity
      ),
    },
    secondary: {
      backgroundColor: fade(
        theme.palette.secondary.main,
        theme.palette.action.hoverOpacity
      ),
    },
  });
};

export default createStyles;
