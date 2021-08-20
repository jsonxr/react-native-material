import { ReactNode } from 'react';
import { ColorType } from '../styles/colors/Color';
import { ButtonStyles } from './Button.styles';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'contained' | 'outlined' | 'text';

/**
 * Properties for <Button ...>
 *
 *
 *
 *
 * @privateRemarks
 * These don't show up in documentation
 */
export interface ButtonProps {
  // Properties
  children?: ReactNode;
  /** The color of the button, possibilities are "primary", "secondary", "default" */
  color?: ColorType;
  disabled?: boolean;
  disableElevation?: boolean;
  endIcon?: any;
  href?: string;
  size?: ButtonSize;
  startIcon?: any;
  styles?: ButtonStyles;
  title?: string;
  variant?: ButtonVariant;
  // Events
  onPress?: () => void;
}
