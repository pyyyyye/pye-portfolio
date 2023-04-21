import React from 'react';
import { Text, Title } from '../../atoms';
import { ArrowRightUpIcon } from '@/src/assets';

const WorksLi = ({ children }: { children: Children }) => (
  <div className="group relative cursor-pointer w-full h-full border  bg-white overflow-hidden rounded-3xl ">
    <div className="p-10 items-center transition duration-300 ease-in-out hover:scale-110">
      <div className="flex justify-between pb-16">
        <div className="flex flex-col gap-2">
          <Title bold>Work Title</Title>
          <Text>Work에 대한 설명입니다.</Text>
        </div>
        <div className="rounded-full ">
          <div className="bg-gray-white group-hover:bg-gray-light ring-offset-2 p-4 rounded-full">
            <ArrowRightUpIcon width={20} />
          </div>
        </div>
      </div>
      {children}
    </div>
  </div>
);

export default WorksLi;
