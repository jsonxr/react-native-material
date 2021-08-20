import { ViewStyle, Platform, ShadowStyleIOS } from 'react-native';
import { ElevationType } from '../Paper/Paper';

export type ShadowAndroid = { elevation: number | undefined };
const createShadowAndroid = (elevation: ElevationType): ShadowAndroid => ({
  elevation,
});

//export type ShadowStyleIOS

const createShadowIos = (
  elevation: ElevationType
): ShadowStyleIOS & { zIndex: number } => {
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
    zIndex: 1, // TODO: Is this a bug? why do we have a zIndex of 1 because it overrides
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

// TODO: Make shadows themable
const shadows = [
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

export default shadows;
export type Shadows = typeof shadows;
