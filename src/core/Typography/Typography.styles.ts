import {
  FlexStyle,
  ShadowStyleIOS,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { Theme } from '../styles';

export interface TypographyStyles {
  root: ViewStyle & FlexStyle & ShadowStyleIOS;
  body2: TextStyle;
  body1: TextStyle;
  caption: TextStyle;
  button: TextStyle;
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  h5: TextStyle;
  h6: TextStyle;
  subtitle1: TextStyle;
  subtitle2: TextStyle;
  overline: TextStyle;
  alignLeft: TextStyle;
  alignCenter: TextStyle;
  alignRight: TextStyle;
  alignJustify: TextStyle;
  noWrap: TextStyle;
  gutterBottom: TextStyle;
  paragraph: TextStyle;
  colorPrimary: TextStyle;
  colorSecondary: TextStyle;
  colorTextPrimary: TextStyle;
  colorTextSecondary: TextStyle;
  colorError: TextStyle;
}

/**
 *
 * @param theme
 */
const createStyles = (theme: Theme) => {
  // Style has this order of precedence:
  // 1) Inline here (or theme variants h1,h2... defined in typography)
  // 2) theme.components.MuiTypography.styleOverrides
  const overrides = theme.components?.MuiTypography?.styleOverrides;
  const variants = theme.typography.variants;
  const styles: TypographyStyles = {
    ...theme.typography.variants,

    root: {
      ...overrides?.root,
    },
    body2: {
      ...variants.body2,
      ...overrides?.body2,
    },
    body1: {
      ...variants.body1,
      ...overrides?.body1,
    },
    caption: {
      ...variants.caption,
      ...overrides?.caption,
    },
    button: {
      ...variants.button,
      ...overrides?.button,
    },
    h1: {
      ...variants.h1,
      ...overrides?.h1,
    },
    h2: {
      ...variants.h2,
      ...overrides?.h2,
    },
    h3: {
      ...variants.h3,
      ...overrides?.h3,
    },
    h4: {
      ...variants.h4,
      ...overrides?.h4,
    },
    h5: {
      ...variants.h5,
      ...overrides?.h5,
    },
    h6: {
      ...variants.h6,
      ...overrides?.h6,
    },
    subtitle1: {
      ...variants.subtitle1,
      ...overrides?.subtitle1,
    },
    subtitle2: {
      ...variants.subtitle2,
      ...overrides?.subtitle2,
    },
    overline: {
      ...variants.overline,
      ...overrides?.overline,
    },
    alignLeft: {
      ...overrides?.alignLeft,
    },
    alignCenter: {
      ...overrides?.alignCenter,
    },
    alignRight: {
      ...overrides?.alignRight,
    },
    alignJustify: {
      ...overrides?.alignJustify,
    },
    noWrap: {
      ...overrides?.noWrap,
      overflow: 'hidden',

      //textOverflow: 'ellipsis',
      //whiteSpace: 'nowrap',
    },
    gutterBottom: {
      marginBottom: theme.typography.htmlFontSize * 0.35,
      ...overrides?.gutterBottom,
    },
    paragraph: { marginBottom: theme.spacing(2), ...overrides?.paragraph },
    colorPrimary: {
      color: theme.palette.primary.main,
      ...overrides?.colorPrimary,
    },
    colorSecondary: {
      color: theme.palette.secondary.main,
      ...overrides?.colorSecondary,
    },
    colorTextPrimary: {
      color: theme.palette.text.primary,
      ...overrides?.colorTextPrimary,
    },
    colorTextSecondary: {
      color: theme.palette.text.secondary,
      ...overrides?.colorTextSecondary,
    },
    colorError: {
      color: theme.palette.error.contrastText,
      ...overrides?.colorError,
    },
  };
  return StyleSheet.create(styles);
};

export default createStyles;
