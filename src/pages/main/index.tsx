import React from 'react';
import Map from '@/src/components/molecules/Map';

import {
  CloseIcon,
  VelogLogo,
  GithubLogo,
  NotionLogo,
  PhoneIcon,
} from '@/src/assets/Icons';
import { Button } from '@/src';

const Home = () => {
  return (
    // <div className="border border-red">
    //   <Map />
    // </div>
    <div>
      <button>
        <CloseIcon width={20} />
        <VelogLogo width={20} />
        <GithubLogo width={20} />
        <NotionLogo width={20} />
        <PhoneIcon width={20} />
      </button>
      <Button>버튼</Button>
    </div>
  );
};
export default Home;
