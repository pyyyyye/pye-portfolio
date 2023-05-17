import React, { useState } from 'react';
import Main from './main';
import AboutMe from './aboutMe';
import Works from './works';
import ContactMe from './contactMe';

import { Button, HeadContainer, Menu, Text } from '@/src';
import { useMoveHook } from '@/hooks';

const Home = () => {
  const [menu, setMenu] = useState(false);

  const MenuDummy = {
    0: useMoveHook('Home'),
    1: useMoveHook('About me'),
    2: useMoveHook('Works'),
    3: useMoveHook('Contact me'),
    length: 4,
  };

  return (
    <>
      <div onClick={() => menu === true && setMenu(false)}>
        <HeadContainer />
        <div className="flex flex-col bg-yellow-back relative snap-y">
          <Menu menu={menu} setMenu={setMenu}>
            {Array.from(MenuDummy).map((ele, index) => {
              return (
                <Button key={index} onClick={ele.onMoveToElement}>
                  <Text>{ele.listName}</Text>
                </Button>
              );
            })}
          </Menu>
          <div ref={MenuDummy[0].element}>
            <Main />
          </div>
          <div ref={MenuDummy[1].element}>
            <AboutMe />
          </div>
          <div ref={MenuDummy[2].element}>
            <Works />
          </div>
          <div ref={MenuDummy[3].element}>
            <ContactMe />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
