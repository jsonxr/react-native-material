import { ViewStyle, Platform, StyleSheet } from 'react-native';
import { Theme } from './Theme';
import { Palette } from './Palette';

const createShadowAndroid = (elevation: number): ViewStyle => ({
  elevation,
});

const createShadowIos = (elevation: number): ViewStyle => {
  if (elevation === 0) {
    return { shadowColor: 'transparent', zIndex: 0 };
  }

  return {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: elevation,
    },
    shadowOpacity: 0.24,
    shadowRadius: elevation / 2,
    zIndex: 1,
  };
};

const createShadow = (elevation: number): ViewStyle => {
  switch (Platform.OS) {
    case 'android':
      return createShadowAndroid(elevation);
    case 'ios':
      return createShadowIos(elevation);
  }
  return {};
};

const shadows = StyleSheet.create({
  0: createShadow(0),
  1: createShadow(1),
  2: createShadow(2),
  3: createShadow(3),
  4: createShadow(4),
  5: createShadow(5),
  6: createShadow(6),
  7: createShadow(7),
  8: createShadow(8),
  9: createShadow(9),
  10: createShadow(10),
  11: createShadow(11),
  12: createShadow(12),
  13: createShadow(13),
  14: createShadow(14),
  15: createShadow(15),
  16: createShadow(16),
  17: createShadow(17),
  18: createShadow(18),
  19: createShadow(19),
  20: createShadow(20),
  21: createShadow(21),
  22: createShadow(22),
  23: createShadow(23),
  24: createShadow(24),
  25: createShadow(25),
});

export type ShadowType = typeof shadows;

export default shadows;
