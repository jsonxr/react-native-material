import React from 'react';
import renderer from 'react-test-renderer';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('should render', async () => {
    await renderer.create(<Avatar>A</Avatar>);
  });
});
