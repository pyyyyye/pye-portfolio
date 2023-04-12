import React, { useState } from 'react';
import { Button, Text } from '@/src';

const ContactActiveButton = ({
  children,
  content,
}: {
  children: Children;
  content: string;
}) => {
  const [click, setClick] = useState(false);
  const onClick = () => {
    setClick(!click);
  };
  return (
    <Button onClick={onClick}>
      <div className="flex gap-4 items-center">
        {children}
        {click && (
          <div>
            <Text>{content}</Text>
          </div>
        )}
      </div>
    </Button>
  );
};

export default ContactActiveButton;
