import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { Avatar, AvatarSize, AvatarVariant } from '../Avatar/Avatar';
import { AvatarStyles } from '../Avatar/Avatar.styles';
import { Theme, useTheme } from '../styles';
import useThemeProps from '../styles/theme/useThemeProps';
import createStyles from './AvatarGroup.styles';

const REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
const REACT_ELEMENT_TYPE = Symbol.for('react.element');

const isFragment = (object: any) => {
  return (
    typeof object === 'object' &&
    object !== null &&
    object.$$Typeof === REACT_ELEMENT_TYPE &&
    object.type === REACT_FRAGMENT_TYPE
  );
};

export type AvatarGroupSpacing = 'medium' | 'small' | 'large' | number;

export interface AvatarGroupProps {
  avatarStyles?: AvatarStyles;
  max?: number;
  size?: AvatarSize;
  spacing?: AvatarGroupSpacing;
  variant?: AvatarVariant;
  children: ReactNode;
}

const getSpacing = (theme: Theme, spacing: AvatarGroupSpacing) => {
  if (spacing === 'medium') {
    return -theme.spacing(2);
  }
  if (typeof spacing === 'number') {
    return -spacing;
  }

  return -theme.spacing(1);
};

export const AvatarGroup = (inProps: AvatarGroupProps) => {
  const props = useThemeProps({ props: inProps, name: 'MuiAvatar' });
  const {
    max = 5,
    size = 'medium',
    spacing = 'medium',
    variant = 'circular',
    children: childrenProp,
    ...rest
  } = props;
  const theme = useTheme();

  const styles = createStyles(theme);
  const clampedMax = max < 2 ? 2 : max;

  const children = React.Children.toArray(childrenProp).filter((child) => {
    if (process.env.NODE_ENV !== 'production') {
      if (isFragment(child)) {
        console.error(
          [
            "Material-UI: The AvatarGroup component doesn't accept a Fragment as a child.",
            'Consider providing an array instead.',
          ].join('\n')
        );
      }
    }

    return React.isValidElement(child);
  });

  const extraAvatars =
    children.length > clampedMax ? children.length - clampedMax + 1 : 0;

  const marginLeft = getSpacing(theme, spacing);

  return (
    <View style={styles.root} {...rest}>
      {extraAvatars ? (
        <Avatar
          size={size}
          style={{ marginLeft, ...props.avatarStyles?.root }}
          textStyle={props.avatarStyles?.text}
        >{`+${extraAvatars}`}</Avatar>
      ) : null}

      {children
        .slice(0, children.length - extraAvatars)
        .reverse()
        .map((child: any) => {
          return React.cloneElement(child, {
            size,
            style: { marginLeft, ...props.avatarStyles?.root },
            variant: child.props.variant || variant,
          } as any);
        })}
    </View>
  );
};
