import React, { ReactNode } from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import createStyles, { AvatarStyles } from './Avatar.styles';
import { useTheme } from '../styles/theme/useTheme';
import { Theme } from '../styles/theme/Theme';
import useThemeProps from '../styles/theme/useThemeProps';

export type AvatarSize = number | 'small' | 'medium' | 'large';

export interface AvatarProps {
  size?: AvatarSize;
  color?: string;
  textColor?: string;
  styles?: AvatarStyles;
  source?: ImageSourcePropType;
  children?: ReactNode;
  variant?: 'rounded' | 'square' | 'circular';
}

const calculateSize = (theme: Theme, size: AvatarSize | undefined): number => {
  if (typeof size === 'number') {
    return size;
  }
  switch (size) {
    case 'small':
      return theme.spacing(3);
    case 'medium':
      return theme.spacing(5);
    case 'large':
      return theme.spacing(7);
    default:
      return theme.spacing(5);
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

  // styles
  if (props?.styles?.root) {
    styles.push(props.styles?.root);
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
    styles.push({ color: props?.color });
  }

  // styles
  if (props?.styles?.text) {
    styles.push(props.styles?.text);
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
  if (props?.styles?.image) {
    styles.push(props.styles.image);
  }

  return StyleSheet.flatten(styles);
};

export const Avatar = (props: AvatarProps = {}) => {
  const { children, size = 'medium', source, ...rest } = useThemeProps({
    props,
    name: 'MuiAvatar',
  });
  const theme = useTheme();
  const defaultStyles = createStyles(theme);
  const styles = {
    root: rootStyle(theme, defaultStyles.root, props),
    text: textStyle(theme, defaultStyles.text, props),
    image: imageStyle(theme, defaultStyles.image, props),
  };
  const width = calculateSize(theme, size);

  return (
    <View {...rest} style={styles.root}>
      {typeof children === 'string' ? (
        <>
          <Text style={styles.text}>{`${children}`}</Text>
        </>
      ) : (
        // Icons
        React.Children.map(children as any, (child) => {
          return React.cloneElement<ReactNode>(child, {
            style: {
              color: styles.text.color,
              ...child.props?.style,
            },
          } as any);
        })
      )}
      {source && (
        <Image
          style={styles.image}
          width={width}
          height={width}
          source={source}
        />
      )}
    </View>
  );
};
