import React from 'react';

const Button = ({ children }: { children: Children }) => {
  return <button onClick={() => console.log('온클릭')}>{children}</button>;
};

export default Button;
