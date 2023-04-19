import React from 'react';
import { Title } from '../../atoms';

const BasicContent = ({
  title,
  children,
  justify,
}: {
  title: string;
  children: Children;
  justify?: boolean;
}) => {
  return (
    <div className="flex flex-col gap-2 w-full divide-y divide-yellow-bg h-full">
      <Title bold>{title}</Title>
      <div
        className={justify ? 'flex justify-between pt-4' : 'flex pt-4 gap-16'}>
        {children}
      </div>
    </div>
  );
};

export default BasicContent;
