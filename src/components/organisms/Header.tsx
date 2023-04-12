import React from 'react';
import { Button, ContactActiveButton, Text } from '@/src';
import {
  VelogLogo,
  GithubLogo,
  NotionLogo,
  EmailIcon,
  PhoneIcon,
} from '@/src/assets/Icons';

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Text>2021 - 2023</Text>
      </div>
      <div className="flex gap-6">
        <ContactActiveButton content="010-8033-9078">
          <PhoneIcon width={24} />
        </ContactActiveButton>
        <ContactActiveButton content="par000eun@gmail.com">
          <EmailIcon width={24} />
        </ContactActiveButton>
        <Button onClick={()=>window.open('https://www.notion.so/2-9f48dfda6a8c49c6a8a872340cdb98ae')}>
          <NotionLogo width={24} />
        </Button>
        <Button onClick={()=>window.open('https://github.com/pyyyyye')}>
          <GithubLogo width={24} />
        </Button>
        <Button onClick={()=>window.open('https://velog.io/@park0eun')}>
          <VelogLogo width={24} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
