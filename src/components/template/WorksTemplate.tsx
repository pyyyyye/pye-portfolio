import React from 'react';
import { WorksLi } from '../organisms';
import Image from 'next/image';
import { MacbookMockup1, Mockup1 } from '@/src/assets';

interface Type {
  title?: string;
  content?: string;
}

const WorksTemplate = () => {
  return (
    <div className="w-full h-screen flex gap-12 p-28">
      <WorksLi>
        <Image src={Mockup1} alt="Mockup1" placeholder="blur" />
      </WorksLi>
      <WorksLi>
        <Image src={MacbookMockup1} alt="MacbookMockup1 " placeholder="blur" />
      </WorksLi>
    </div>
  );
};

export default WorksTemplate;
