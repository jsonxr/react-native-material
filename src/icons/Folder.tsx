import React from 'react';
import { Icon, IconProps } from '../core/Icon';

const FolderIcon = (props?: Omit<IconProps, 'name'>) => (
  <Icon {...props} name="folder" />
);

export default FolderIcon;
