import React from 'react';
import {
  Emotion,
  LogoAi,
  LogoApolloClient,
  LogoCss,
  LogoFigma,
  LogoGql,
  LogoHtml,
  LogoJs,
  LogoNextjs,
  LogoPs,
  LogoReactjs,
  LogoRestApi,
  LogoScss,
  LogoSlack,
  LogoTailwind,
  LogoTs,
  LogoVercel,
  LogoVue,
  StyledComponent,
} from '@/src/assets';
import { SkillBox } from '../../molecules';
import Image from 'next/image';
import { Text } from '../../atoms';

const MainSkillList = () => (
  <div className="flex justify-between gap-10">
    <div className="flex flex-col gap-4">
      <SkillBox name="Html">
        <LogoHtml width={14} />
      </SkillBox>
      <SkillBox name="Css">
        <LogoCss width={14} />
      </SkillBox>
      <SkillBox name="React">
        <LogoReactjs width={14} />
      </SkillBox>
      <SkillBox name="Vue">
        <LogoVue width={14} />
      </SkillBox>
      <SkillBox name="Next.js">
        <LogoNextjs width={14} />
      </SkillBox>
      <SkillBox name="JavaScript">
        <LogoJs width={14} />
      </SkillBox>
      <SkillBox name="TypeScript">
        <LogoTs width={14} />
      </SkillBox>
    </div>
    <div className="flex flex-col gap-4">
      <SkillBox name="RestAPI">
        <LogoRestApi width={14} />
      </SkillBox>
      <SkillBox name="GraphQL">
        <LogoGql width={14} />
      </SkillBox>
      <SkillBox name="Apollo-Client">
        <LogoApolloClient width={14} />
      </SkillBox>
      <SkillBox name="Styled-Component">
        <Image src={StyledComponent} alt="Styled Component" width={14} />
      </SkillBox>
      <SkillBox name="Tailwind CSS">
        <LogoTailwind width={14} />
      </SkillBox>
      <SkillBox name="Emotion">
        <Image src={Emotion} alt="Emotion" width={14} />
      </SkillBox>
      <SkillBox name="Scss">
        <LogoScss width={14} />
      </SkillBox>
    </div>
    <div className="flex flex-col gap-4">
      <SkillBox name="Figma">
        <LogoFigma width={14} />
      </SkillBox>
      <SkillBox name="Adobe Photoshop">
        <LogoPs width={14} />
      </SkillBox>
      <SkillBox name="Adobe Illustratoin">
        <LogoAi width={14} />
      </SkillBox>
      <SkillBox name="Slack">
        <LogoSlack width={14} />
      </SkillBox>
      <SkillBox name="Vercel">
        <LogoVercel width={14} />
      </SkillBox>
      <div className="text-right">
        <Text color="text-gray">..etc.</Text>
      </div>
    </div>
  </div>
);
export default MainSkillList;
