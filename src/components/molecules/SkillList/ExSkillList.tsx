import React from 'react';
import {
  LogoElectron,
  LogoReactNative,
  LogoRecoil,
  LogoZeplin,
} from '@/src/assets';
import { SkillBox } from '../../molecules';

const ExSkillList = () => (
  <>
    <SkillBox name="React Native">
      <LogoReactNative width={14} />
    </SkillBox>
    <SkillBox name="Electron">
      <LogoElectron width={14} />
    </SkillBox>
    <SkillBox name="Recoil">
      <LogoRecoil width={14} height={14} />
    </SkillBox>
    <SkillBox name="Zeplin">
      <LogoZeplin width={14} />
    </SkillBox>
  </>
);
export default ExSkillList;
