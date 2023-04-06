import React from 'react';
import Main from './main';
import AboutMe from './aboutMe';
import Works from './works';
import { ContactMe } from '../components';
import { HeadContainer } from '..';
const Home = () => {
  return (
    <>
      <HeadContainer />
      <div className="flex flex-col gap-4">
        <Main />
        <AboutMe />
        <Works />
        <ContactMe />
      </div>
    </>
  );
};
export default Home;
