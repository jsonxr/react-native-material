import React, { ReactElement, ReactNode } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import createStyles from './Avatar.styles';
import { useTheme } from '../styles/useTheme';
import { Theme } from '../styles/Theme';
import { Typography } from '../Typography/Typography';
import { Icon } from '../Icon/Icon';

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

  const viewStyles: ViewStyle[] = [];
  const defaultStyle = createStyles(theme, width);
  viewStyles.push(defaultStyle.root);

  // Default color of avatar
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[400]
      : theme.palette.grey[600];
  viewStyles.push({
    backgroundColor,
  });

  // circle, rounded, or square
  switch (variant) {
    case 'rounded':
      viewStyles.push({ borderRadius: theme.shape.borderRadius });
      break;
    case 'square':
      viewStyles.push({ borderRadius: 0 });
      break;
    default:
      viewStyles.push(defaultStyle.circle);
  }

  // Text Color
  const textStyles: TextStyle[] = [defaultStyle.text];
  let textColor: any = theme.palette.background.default;
  if (style) {
    viewStyles.push(style);
    if (style.color) {
      textColor = style.color;
    }
  }
  textStyles.push({ color: textColor });

  console.log('textColor: ', textStyles);

  return (
    <View style={StyleSheet.flatten(viewStyles)}>
      {typeof children === 'string' ? (
        <Typography style={StyleSheet.flatten(textStyles)}>
          {`${children}`}
        </Typography>
      ) : (
        // Icons
        React.Children.map(children as any, (child) => {
          return React.cloneElement<ReactNode>(child!, {
            style: {
              color: textColor,
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
