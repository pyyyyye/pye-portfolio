import React from 'react';
import classNames from 'classnames';

const Button = ({
  children,
  onClick,
  hoverColor,
}: {
  children: Children;
  onClick: funVoid;
  hoverColor?: string;
}) => {
  return (
    <button
      className={classNames(
        hoverColor ? hoverColor : 'hover:bg-yellow-back',
        'p-4 rounded-lg ',
      )}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
