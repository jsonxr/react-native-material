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
import createStyles from './Avatar.styles';
import { useTheme } from '../styles/useTheme/useTheme';
import { Theme } from '../styles/Theme';
import useThemeProps from '../styles/useThemeProps';

type AvatarSize = number | 'small' | 'medium' | 'large';

const calculateSize = (theme: Theme, size: AvatarSize): number => {
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
  }
};

const calculateViewStyles = (
  theme: Theme,
  rootStyle: ViewStyle,
  variant: 'rounded' | 'square' | 'circular',
  width: number,
  style: (ViewStyle & TextStyle) | undefined
) => {
  const styles: ViewStyle[] = [];
  styles.push(rootStyle);

  // Default color of avatar
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[400]
      : theme.palette.grey[600];
  styles.push({
    backgroundColor,
  });

  // circle, rounded, or square
  switch (variant) {
    case 'rounded':
      styles.push({ borderRadius: theme.shape.borderRadius });
      break;
    case 'square':
      styles.push({ borderRadius: 0 });
      break;
    default:
      styles.push({ borderRadius: width / 2 });
  }

  styles.push({ width: width, height: width });

  if (style) {
    styles.push(style);
  }

  return StyleSheet.flatten(styles);
};

const calculateTextStyle = (
  theme: Theme,
  textStyle: TextStyle,
  style: (ViewStyle & TextStyle) | undefined,
  width: number
): TextStyle => {
  // Text Color
  const textStyles: TextStyle[] = [textStyle];

  textStyles.push({ fontSize: width / 2 });

  let textColor: any = theme.palette.background.default;
  textStyles.push({ color: textColor });
  if (style?.color) {
    textStyles.push({ color: style.color });
  }

  textStyles.push({
    fontFamily: theme.typography.variants.body1.fontFamily,
  });

  return StyleSheet.flatten(textStyles);
};

const calculateImageStyle = (imageStyle: ImageStyle, width: number) => {
  const imageStyles: ImageStyle[] = [imageStyle];
  imageStyles.push({ width: width, height: width });
  return StyleSheet.flatten(imageStyles);
};

export interface AvatarProps {
  size?: number | 'small' | 'medium' | 'large';
  style?: ViewStyle & TextStyle;
  source?: ImageSourcePropType;
  children?: ReactNode;
  variant?: 'rounded' | 'square' | 'circular';
}
export const Avatar = (inProps: AvatarProps) => {
  const props = useThemeProps({ props: inProps, name: 'MuiAvatar' });
  const {
    children,
    size = 'medium',
    style,
    source,
    variant = 'circular',
  } = props;

  const theme = useTheme();
  const width = calculateSize(theme, size);
  const defaultStyle = createStyles(
    theme.components?.MuiAvatar?.styleOverrides
  );

  const viewStyle = calculateViewStyles(
    theme,
    defaultStyle.root,
    variant,
    width,
    style
  );
  const textStyle = calculateTextStyle(theme, defaultStyle.text, style, width);
  const imageStyle = calculateImageStyle(defaultStyle.image, width);

  return (
    <View style={viewStyle}>
      {typeof children === 'string' ? (
        <>
          <Text style={textStyle}>{`${children}`}</Text>
        </>
      ) : (
        // Icons
        React.Children.map(children as any, (child) => {
          return React.cloneElement<ReactNode>(child!, {
            style: {
              color: textStyle.color,
              ...child.props?.style,
            },
          } as any);
        })
      )}
      {source && (
        <Image
          style={imageStyle}
          width={width}
          height={width}
          source={source}
        />
      )}
    </View>
  );
};
