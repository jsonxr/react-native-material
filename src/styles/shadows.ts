import { ViewStyle, Platform } from 'react-native';
import { Theme } from './Theme';
import { Palette } from './Palette';

const createShadowAndroid = (elevation: number) => ({
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
    shadowRadius: elevation,
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

// Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss
const createShadows = (): ViewStyle[] => {
  const shadows = [{}];
  for (let elevation = 1; elevation <= 25; elevation++) {
    shadows.push(createShadow(elevation));
  }
  return shadows;
};

export default createShadows;
