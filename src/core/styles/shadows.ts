import { ViewStyle, Platform } from 'react-native';
import { ElevationType } from '../Paper/Paper';

const createShadowAndroid = (elevation: ElevationType): ViewStyle => ({
  elevation,
});

const createShadowIos = (elevation: ElevationType): ViewStyle => {
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

const createShadow = (elevation: ElevationType): ViewStyle => {
  switch (Platform.OS) {
    case 'android':
      return createShadowAndroid(elevation);
    case 'ios':
      return createShadowIos(elevation);
  }
  return {};
};

export const shadows = [
  createShadow(0),
  createShadow(1),
  createShadow(2),
  createShadow(3),
  createShadow(4),
  createShadow(5),
  createShadow(6),
  createShadow(7),
  createShadow(8),
  createShadow(9),
  createShadow(10),
  createShadow(11),
  createShadow(12),
  createShadow(13),
  createShadow(14),
  createShadow(15),
  createShadow(16),
  createShadow(17),
  createShadow(18),
  createShadow(19),
  createShadow(20),
  createShadow(21),
  createShadow(22),
  createShadow(23),
  createShadow(24),
  createShadow(25),
];

export type Shadows = typeof shadows;
