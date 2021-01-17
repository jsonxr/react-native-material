import React, { ReactNode, useMemo } from 'react';
import {
  FlexStyle,
  Image,
  ImageSourcePropType,
  ImageStyle,
  ShadowStyleIOS,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import createStyles from './Avatar.styles';
import { useTheme } from '../styles/theme/useTheme';
import { Theme } from '../styles/theme/Theme';
import useThemeProps from '../styles/theme/useThemeProps';
import { IconName } from '../Icon/IconName';
import { Icon } from '../Icon/Icon';

export type AvatarSize = number | 'small' | 'medium' | 'large';
export type AvatarVariant = 'rounded' | 'square' | 'circular';

export interface AvatarProps {
  children?: ReactNode;
  color?: string;
  icon?: IconName;
  image?: ImageSourcePropType;
  size?: AvatarSize;
  //style: ViewStyle;
  style?: ViewStyle & FlexStyle & ShadowStyleIOS;
  textStyle?: TextStyle;
  imageStyle?: ImageStyle;
  text?: string;
  variant?: AvatarVariant;
}

const calculateSize = (theme: Theme, size: AvatarSize | undefined): number => {
  if (typeof size === 'number') {
    return size;
  }
  switch (size) {
    case 'small':
      return theme.spacing(5);
    case 'large':
      return theme.spacing(9);
    default:
      return theme.spacing(7);
  }
};

const rootStyle = (
  theme: Theme,
  defaultStyle?: ViewStyle,
  props?: AvatarProps
) => {
  // defaults
  const styles: ViewStyle[] = defaultStyle ? [defaultStyle] : [];

  // size
  const width = calculateSize(theme, props?.size);
  styles.push({ width: width, height: width });

  // variant
  switch (props?.variant) {
    case 'rounded':
      styles.push({ borderRadius: theme.shape.borderRadius });
      break;
    case 'square':
      styles.push({ borderRadius: 0 });
      break;
    default:
      styles.push({ borderRadius: width / 2 });
  }

  // color
  if (props?.color) {
    styles.push({ backgroundColor: props?.color });
  }

  // styles
  if (props?.style) {
    styles.push(props.style);
  }

  return StyleSheet.flatten(styles);
};

const textStyle = (
  theme: Theme,
  defaultStyle?: TextStyle,
  props?: AvatarProps
): TextStyle => {
  // default
  const styles: TextStyle[] = defaultStyle ? [defaultStyle] : [];

  // size
  const width = calculateSize(theme, props?.size);
  styles.push({ fontSize: width / 2 });

  // color
  if (props?.color) {
    const contrastColor = theme.palette.getContrastText(props.color);
    styles.push({ color: contrastColor }); // 'black' });
  }

  // styles
  if (props?.textStyle) {
    styles.push(props.textStyle);
  }

  return StyleSheet.flatten(styles);
};

const imageStyle = (
  theme: Theme,
  defaultStyle: ImageStyle,
  props?: AvatarProps
) => {
  // default
  const styles: ImageStyle[] = [defaultStyle];

  // size
  const width = calculateSize(theme, props?.size);
  styles.push({ width: width, height: width });

  // styles
  if (props?.imageStyle) {
    styles.push(props.imageStyle);
  }

  return StyleSheet.flatten(styles);
};

export const Avatar = (props: AvatarProps = {}) => {
  const {
    children,
    color,
    size = 'medium',
    image,
    icon,
    ...rest
  } = useThemeProps({
    props,
    name: 'MuiAvatar',
  });
  const theme = useTheme();
  // Calculate the styles
  const { styles, contrastColor, width, text } = useMemo(() => {
    const defaultStyles = createStyles(theme);
    const cStyles = {
      root: rootStyle(theme, defaultStyles.root, props),
      text: textStyle(theme, defaultStyles.text, props),
      image: imageStyle(theme, defaultStyles.image, props),
    };

    const backgroundColor =
      theme.palette.type === 'light'
        ? theme.palette.grey[400]
        : theme.palette.grey[600];
    const cContrastColor = color
      ? theme.palette.getContrastText(color)
      : theme.palette.getContrastText(backgroundColor);

    const cWidth = calculateSize(theme, size);
    const cText =
      props.text ||
      (children && typeof children === 'string' ? children : null);

    return {
      styles: cStyles,
      contrastColor: cContrastColor,
      width: cWidth,
      text: cText,
    };
  }, [theme, props, children, color, size]);

  return (
    <View {...rest} style={styles.root}>
      {text && <Text style={styles.text}>{`${text}`}</Text>}
      {icon && <Icon color={contrastColor} name={icon} />}
      {typeof children !== 'string' && children}
      {image && (
        <Image
          style={styles.image}
          width={width}
          height={width}
          source={image}
        />
      )}
    </View>
  );
};
