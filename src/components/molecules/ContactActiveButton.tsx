import React from 'react';
import { Button } from '@/src';

const ContactActiveButton = ({
  children,
  onClick,
  hoverColor,
}: {
  children: Children;
  onClick: funVoid;
  hoverColor?: string;
}) => {
  return (
    <Button hoverColor={hoverColor} onClick={onClick}>
      <div className="flex gap-4 items-center ">{children}</div>
    </Button>
  );
};

export default ContactActiveButton;
