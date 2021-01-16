import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { Avatar } from '../Avatar/Avatar';
import { useTheme } from '../styles';
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

export interface AvatarGroupProps {
  max?: number;
  spacing?: 'medium' | 'small' | number;
  variant?: 'circular' | 'rounded' | 'square';
  children: ReactNode;
}
export const AvatarGroup = (inProps: AvatarGroupProps) => {
  const props = useThemeProps({ props: inProps, name: 'MuiAvatar' });
  const {
    max = 5,
    spacing = 'medium',
    variant = 'circular',
    children: childrenProp,
    ...rest
  } = props;
  const theme = useTheme();

  const styles = createStyles(
    theme.components?.MuiAvatarGroup?.styleOverrides,
    theme,
    spacing
  );
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

  return (
    <View style={styles.root} {...rest}>
      {extraAvatars ? (
        <Avatar style={styles.avatar}>{`+${extraAvatars}`}</Avatar>
      ) : null}

      {children
        .slice(0, children.length - extraAvatars)
        .reverse()
        .map((child: any) => {
          return React.cloneElement(child, {
            style: styles.avatar,
            variant: child.props.variant || variant,
          } as any);
        })}
    </View>
  );
};
