import React from 'react';

const Button = ({
  children,
  onClick,
}: {
  children: Children;
  onClick: funVoid;
}) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
