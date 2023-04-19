import React from 'react';
import classNames from 'classnames';
import { TextComponentProps } from './type';

const Title = ({
  children,
  color = 'text-black',
  size = 'text-xl',
  center = false,
  truncate = false,
  bold = false,
  bg = false,
  fontType = '',
}: TextComponentProps) => {
  return (
    <span
      className={classNames(
        fontType,
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

export default Title;
