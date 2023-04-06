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
  const onClick = () => {
    console.log('클릭');
  };
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
        <Button onClick={onClick}>
          <NotionLogo width={24} />
        </Button>
        <Button onClick={onClick}>
          <GithubLogo width={24} />
        </Button>
        <Button onClick={onClick}>
          <VelogLogo width={24} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
