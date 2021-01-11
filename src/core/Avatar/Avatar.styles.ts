import { StyleSheet } from 'react-native';
import { Theme } from '../styles/Theme';

const createStyles = (theme: Theme, size: number) => {
  return StyleSheet.create({
    root: {
      width: size,
      height: size,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    circle: {
      borderRadius: size / 2,
    },
    image: {
      width: size,
      height: size,
      resizeMode: 'contain',
    },
    text: {
      height: '100%',
      fontSize: size / 2,
      width: '100%',
      textAlign: 'center',
      textAlignVertical: 'center',
      color: theme.palette.text.primary,
    },
  });
};

export default createStyles;
