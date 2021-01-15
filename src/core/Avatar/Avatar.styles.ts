import { StyleSheet } from 'react-native';

const createStyles = (size: number) => {
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
  });
};

export default createStyles;
