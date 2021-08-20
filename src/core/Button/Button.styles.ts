import { FlexStyle, ShadowStyleIOS, TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../styles';
import { ButtonProps } from './Button.types';

export interface ButtonStyles {
  root: ViewStyle & FlexStyle & ShadowStyleIOS; // Applied to every Button
  text: TextStyle;
}

const createStyles = (
  theme: Theme,
  { size = 'medium', variant = 'text', color }: ButtonProps
): ButtonStyles => {
  const contained = (backgroundColor: string): ViewStyle => ({
    backgroundColor,
    ...theme.shadows[4],
  });
  const outlined = (borderColor: string): ViewStyle => ({
    borderWidth: 1,
    borderColor,
  });
  const small = (): ViewStyle => ({
    paddingVertical: 4,
    paddingHorizontal: 5,
  });
  const medium = (): ViewStyle => ({
    paddingVertical: 6,
    paddingHorizontal: 8,
  });
  const large = (): ViewStyle => ({
    paddingVertical: 8,
    paddingHorizontal: 11,
  });

  const backgroundColor = theme.palette.getColor(
    color ?? theme.palette.grey[300]
  );
  const textColor = theme.palette.getContrastText(
    color ?? theme.palette.grey[300]
  );

  return {
    root: {
      flexDirection: 'row',
      borderRadius: theme.shape.borderRadius,
      justifyContent: 'center',
      margin: theme.spacing(1),
      ...(variant === 'contained' && contained(backgroundColor)),
      ...(variant === 'outlined' && outlined(backgroundColor)),
    },
    text: {
      ...theme.typography.variants.button,
      ...(size === 'medium' && medium()),
      ...(size === 'small' && small()),
      ...(size === 'large' && large()),
      ...(variant === 'outlined' && { color: backgroundColor }),
      ...(variant !== 'outlined' && { color: textColor }),
    },
  };
};

//   //const color: string = props.color || 'primary';

//   // textDefaultColor: { color: greyContrast },
//   // textPrimaryColor: { color: primary },
//   // textSecondaryColor: { color: theme.palette.secondary.main },

//   const styles: ButtonStyles = {

//     //-------------------------------------
//     // icon
//     //-------------------------------------
//     startIcon: {},
//     endIcon: {},

//     //-------------------------------------
//     // variant="text"
//     //-------------------------------------
//     text: {
//       color,
//     },

//     size: {
//       default: {
//         ...theme.typography.variants.button,
//         paddingVertical: 6,
//         paddingHorizontal: 8,
//       },
//       small: {
//         paddingVertical: 4,
//         paddingHorizontal: 5,
//       },
//       medium: {
//         ...theme.typography.variants.button,
//         paddingVertical: 6,
//         paddingHorizontal: 8,
//       },
//       large: {
//         paddingVertical: 8,
//         paddingHorizontal: 11,
//       },
//     },
//   };

//   const grey = theme.palette.grey[300];
//   const greyContrast = theme.palette.getContrastText(grey);
//   const primary = theme.palette.primary.main;
//   const primaryContrast = theme.palette.primary.contrastText;
//   const secondary = theme.palette.secondary.main;
//   const secondaryContrast = theme.palette.secondary.contrastText;

//   return StyleSheet.create({
//     // contained
//     containedPrimaryColor: { color: primaryContrast },
//     containedSecondaryColor: { color: secondaryContrast },
//     containedDefaultColor: { color: greyContrast },
//     containedPrimaryView: contained(primary),
//     containedSecondaryView: contained(secondary),
//     containedDefaultView: contained(grey),

//     // outlined
//     outlinedPrimaryColor: { color: primary },
//     outlinedSecondaryColor: { color: secondary },
//     outlinedDefaultColor: { color: greyContrast },
//     outlinedPrimaryView: outlined(fade(primary, 0.5)),
//     outlinedSecondaryView: outlined(fade(secondary, 0.5)),
//     outlinedDefaultView: outlined(
//       theme.palette.type === 'light'
//         ? 'rgba(0, 0, 0, 0.23)'
//         : 'rgba(255, 255, 255, 0.23)'
//     ),

//     // text
//     textDefaultColor: { color: greyContrast },
//     textPrimaryColor: { color: primary },
//     textSecondaryColor: { color: theme.palette.secondary.main },

//     iconSizeSmall: { fontSize: 18 },
//     iconSizeMedium: { fontSize: 20 },
//     iconSizeLarge: { fontSize: 22 },
//   });
// };

export default createStyles;
