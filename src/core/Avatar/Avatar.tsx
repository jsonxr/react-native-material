import React, { ReactNode } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import createStyles from './Avatar.styles';
import { useTheme } from '../styles/useTheme';
import { Theme } from '../styles/Theme';

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

  if (style) {
    styles.push(style);
  }

  return StyleSheet.flatten(styles);
};

const calculateTextStyle = (
  theme: Theme,
  style: (ViewStyle & TextStyle) | undefined,
  width: number
): TextStyle => {
  // Text Color
  const textStyles: TextStyle[] = [{ fontSize: width / 2 }];
  let textColor: any = theme.palette.background.default;
  if (style?.color) {
    textStyles.push({ color: textColor });
  }

  textStyles.push({
    fontFamily: theme.typography.variants.body1.fontFamily,
  });

  return StyleSheet.flatten(textStyles);
};

export interface AvatarProps {
  size?: number | 'small' | 'medium' | 'large';
  style?: ViewStyle & TextStyle;
  source?: ImageSourcePropType;
  children?: ReactNode;
  variant?: 'rounded' | 'square' | 'circular';
}
export const Avatar = ({
  children,
  size = 'medium',
  style,
  source,
  variant = 'circular',
}: AvatarProps) => {
  const theme = useTheme();
  const width = calculateSize(theme, size);
  const defaultStyle = createStyles(width);

  const viewStyle = calculateViewStyles(
    theme,
    defaultStyle.root,
    variant,
    width,
    style
  );
  const textStyle = calculateTextStyle(theme, style, width);

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
          style={defaultStyle.image}
          width={width}
          height={width}
          source={source}
        />
      )}
    </View>
  );
};
