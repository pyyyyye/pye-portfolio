import React from 'react';
import Map from '@/src/components/molecules/Map';

import { Button, Text, HeadContainer, Header } from '@/src';
import { ArrowIcon } from '@/src/assets/Icons';

const Home = () => {
  return (
    // <div className="border border-red">
    //   <Map />
    // </div>
    <>
      <HeadContainer />
      <div className="p-16 h-screen flex flex-col justify-between">
        <div className="flex flex-col text-center gap-[-20px]">
          <span className="text-xxxl font-Tommy pt-32">PORTFOLIO</span>
          <Text>
            안녕하세요. 성장해 나아가는 2년차 &nbsp;
            <Text bg bold>
              프론트엔드
            </Text>
            &nbsp; 개발자 &nbsp;
            <Text bg bold>
              박영은
            </Text>
            입니다.
          </Text>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-2">
          <div className="animate-bounce">
            <ArrowIcon width={10} fill="bg-green" />
          </div>
          <Text color="text-gray">
            Keep
            <br />
            scrolling
          </Text>
        </div>
      </div>
    </>
  );
};
export default Home;
