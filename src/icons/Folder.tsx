import React from 'react';
import { Icon, IconProps } from '../core/Icon';

export default (props?: Omit<IconProps, 'name'>) => (
  <Icon {...props} name="folder" />
);
