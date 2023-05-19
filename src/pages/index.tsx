import React, { useState } from 'react';
import Main from './main';
import AboutMe from './aboutMe';
import Works from './works';
import ContactMe from './contactMe';

import { Button, HeadContainer, Menu, MenuButton, Text } from '@/src';
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
      <div className="z-50 fixed right-6 top-6 flex flex-col gap-2 items-end">
        <MenuButton onClickMenu={() => setMenu(!menu)} active={menu} />
        {menu && (
          <Menu>
            {Array.from(MenuDummy).map((ele, index) => {
              return (
                <Button key={index} onClick={ele.onMoveToElement}>
                  <Text>{ele.listName}</Text>
                </Button>
              );
            })}
          </Menu>
        )}
      </div>

      <div onClick={() => menu === true && setMenu(false)}>
        <HeadContainer />
        <div className="flex flex-col bg-yellow-back relative snap-y">
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
