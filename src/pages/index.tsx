import React, { useRef } from 'react';
import Main from './main';
import AboutMe from './aboutMe';
import Works from './works';
import ContactMe from './contactMe';

import { Button, HeadContainer, Menu, Text } from '@/src';

const Home = () => {
  const useMoveScroll = () => {
    () => console.log('홈홈 무브스크롤');
    const element = useRef<HTMLDivElement>(null);
    const onMoveToElement = () => {
      element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // element.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };
    return { element, onMoveToElement };
  };

  return (
    <>
      <HeadContainer />
      <div className="flex flex-col bg-yellow-back relative snap-y">
        <Menu>
          <>
            <Button onClick={useMoveScroll}>
              <Text>Home</Text>
            </Button>
            <Button onClick={() => console.log('어바웃미')}>
              <Text>About me</Text>
            </Button>
            <Button onClick={() => console.log('작업들')}>
              <Text>Works</Text>
            </Button>
            <Button onClick={() => console.log('콘택미')}>
              <Text>Contact me</Text>
            </Button>
          </>
        </Menu>
        <Main />
        <AboutMe />
        <Works />
        <ContactMe />
      </div>
    </>
  );
};
export default Home;
