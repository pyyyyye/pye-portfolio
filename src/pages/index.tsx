import React from 'react';
import Main from './main';
import AboutMe from './aboutMe';
import Works from './works';
import ContactMe from './contactMe';

import { HeadContainer, Header } from '@/src';

const Home = () => {
  return (
    <>
      <HeadContainer />
      <div className="flex flex-col bg-yellow-back">
        {/* <Header>2021 - 2023</Header> */}
        <Main />
        <AboutMe />
        <Works />
        <ContactMe />
      </div>
    </>
  );
};
export default Home;
