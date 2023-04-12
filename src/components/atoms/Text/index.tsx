import React from 'react';
import classNames from 'classnames';
import { TextComponentProps } from './type';

const Text = ({
  children,
  color = 'text-black',
  size = 'text-base',
  center = false,
  truncate = false,
  bold = false,
  bg = false,
}: TextComponentProps) => {
  return (
    <span
      className={classNames(
        size,
        color,
        bold ? 'font-bold' : 'font-normal',
        bg && 'bg-yellow-bg',
        { 'text-center': center },
        { truncate: truncate },
      )}>
      {children}
    </span>
  );
};

export default Text;
