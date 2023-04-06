import React from 'react';
import Map from '@/src/components/molecules/Map';

import { Button, HeadContainer, Header } from '@/src';

const Home = () => {
  return (
    // <div className="border border-red">
    //   <Map />
    // </div>
    <>
      <HeadContainer />
      <div className="h-screen bg-green-100 p-16">
        <Header />
      </div>
    </>
  );
};
export default Home;
