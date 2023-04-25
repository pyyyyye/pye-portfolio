import React from 'react';
import classNames from 'classnames';
import { TextComponentProps } from './type';

const Text = ({
  children,
  fontType = '',
  color = 'text-black',
  size = 'text-base',
  center = false,
  truncate = false,
  bold = false,
  bg = false,
  leading = '',
  border = '',
  borderColor = '',
}: TextComponentProps) => {
  return (
    <span
      className={classNames(
        fontType,
        size,
        color,
        border && border,
        borderColor && borderColor,
        leading && leading,
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
