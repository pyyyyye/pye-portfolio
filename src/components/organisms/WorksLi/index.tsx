import React from 'react';
import { Text, Title } from '../../atoms';
import { ArrowRightUpIcon } from '@/src/assets';

const WorksLi = ({ children }: { children: Children }) => (
  <button
    onClick={() => window.open('https://velog.io/@park0eun')}
    className="group relative cursor-pointer w-full h-full border  bg-white overflow-hidden rounded-3xl ">
    <div className="p-10 items-center transition duration-300 ease-in-out hover:scale-110">
      <div className="flex justify-between pb-16">
        <div className="flex flex-col gap-2">
          <Title bold>Work Title</Title>
          <div className="flex flex-col">
            <Text>Work에 대한 설명입니다.</Text>
            <div className="flex gap-1">
              <Text size="text-sm" color="text-gray">
                Stack1 Stack2 Stack3 Stack4 Stack5 Stack6
              </Text>
            </div>
          </div>
        </div>
        <div className="rounded-full ">
          <div className="bg-gray-white group-hover:bg-gray-light ring-offset-2 p-4 rounded-full">
            <ArrowRightUpIcon width={20} />
          </div>
        </div>
      </div>
      {children}
    </div>
  </button>
);

export default WorksLi;
