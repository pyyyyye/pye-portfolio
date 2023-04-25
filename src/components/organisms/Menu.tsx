import React, { useState } from 'react';
import { Button, ContactActiveButton, MenuButton, Text } from '@/src';
import {
  VelogLogo,
  GithubLogo,
  NotionLogo,
  EmailIcon,
  PhoneIcon,
} from '@/src/assets/Icons';

const Menu = ({ children }: { children: Children }) => {
  // const Menu = ({ onClickMenu }: { onClickMenu: MouseEvent }) => {
  const [menu, setMenu] = useState(false);
  const [phone, setPhone] = useState(false);
  const [email, setEmail] = useState(false);
  const phoneClick = () => {
    setPhone(!phone);
    setEmail(false);
  };
  const emailClick = () => {
    setEmail(!email);
    setPhone(false);
  };

  return (
    <div className="z-50 fixed right-6 top-6 flex flex-col gap-4 items-end">
      <MenuButton onClickMenu={() => setMenu(!menu)} active={menu} />
      {menu && (
        <div className="rounded-lg  bg-white w-min  p-4 flex flex-col shadow-lg">
          <div className="flex flex-col border-b border-gray-100 pb-2">
            {children}
            {/* <Button onClick={() => console.log('홈')}> */}
            {/* <Button onClick={onClickMenu}>
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
            </Button> */}
          </div>
          <div className="h-4 items-center align-middle text-center py-8">
            <Text
              leading="leading-3"
              border="border-b-2"
              borderColor="border-yellow-bg">
              {phone && '010-8033-9078'}
              {email && 'park000eun@gmail.com'}
            </Text>
          </div>
          <div className="flex justify-between">
            <ContactActiveButton
              onClick={phoneClick}
              hoverColor="hover:bg-blue-100">
              <PhoneIcon width={16} />
            </ContactActiveButton>
            <ContactActiveButton
              onClick={emailClick}
              hoverColor="hover:bg-red-100">
              <EmailIcon width={16} />
            </ContactActiveButton>
            <Button
              onClick={() =>
                window.open(
                  'https://www.notion.so/2-9f48dfda6a8c49c6a8a872340cdb98ae',
                )
              }>
              <NotionLogo width={16} />
            </Button>
            <Button
              hoverColor="hover:bg-gray-100"
              onClick={() => window.open('https://github.com/pyyyyye')}>
              <GithubLogo width={16} />
            </Button>
            <Button
              hoverColor="hover:bg-green-velogBg"
              onClick={() => window.open('https://velog.io/@park0eun')}>
              <VelogLogo width={16} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
