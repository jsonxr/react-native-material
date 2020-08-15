import { StyleSheet } from 'react-native';
import { Theme } from '../styles';

/**
 *
 * @param theme
 */
const createStyles = (theme: Theme) =>
  StyleSheet.create(theme.typography.variants);
// StyleSheet.create({ h1: {}, h2: {}, ...});

export default createStyles;
