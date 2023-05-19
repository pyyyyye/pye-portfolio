import React from 'react';
import { Text } from '../../atoms';

const SkillBox = ({ children, name }: { children: Children; name: string }) => (
  <div className="flex gap-2 items-center">
    {children}
    <Text>{name}</Text>
  </div>
);

export default SkillBox;
