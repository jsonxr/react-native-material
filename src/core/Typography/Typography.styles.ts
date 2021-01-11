import { StyleSheet } from 'react-native';
import { Theme } from '../styles';

/**
 *
 * @param theme
 */
const createStyles = (theme: Theme) =>
  StyleSheet.create({
    // StyleSheet.create({ h1: {}, h2: {}, ...});
    ...theme.typography.variants,
    errorColor: {
      color: theme.palette.error.contrastText,
    },
    primaryColor: {
      color: theme.palette.primary.main,
    },
    secondaryColor: {
      color: theme.palette.secondary.main,
    },
    textPrimaryColor: {
      color: theme.palette.text.primary,
    },
    textSecondaryColor: {
      color: theme.palette.text.secondary,
    },
    textGutterBotton: {
      marginBottom: theme.typography.htmlFontSize * 0.35,
    },
  });

export default createStyles;
