import React from 'react';
import Image from 'next/image';
import { BasicContent, Text } from '@/src/components';
import {
  Emotion,
  LogoAi,
  LogoApolloClient,
  LogoCss,
  LogoElectron,
  LogoFigma,
  LogoGql,
  LogoHtml,
  LogoJs,
  LogoNextjs,
  LogoPs,
  LogoReactNative,
  LogoReactjs,
  LogoRecoil,
  LogoRestApi,
  LogoScss,
  LogoSlack,
  LogoTailwind,
  LogoTs,
  LogoVercel,
  LogoVue,
  LogoZeplin,
  StyledComponent,
  MyProfileImg,
} from '@/src/assets';

const AboutMeTemplate = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="bg-yellow-bg px-28 pt-32 relative top-0">
        <Image src={MyProfileImg} alt="Picture of me" width={264} />
        <div className="flex flex-col gap-2 absolute bottom-20 right-24 text-2xl font-SsuroundAir">
          <span className="font-Ssuround">&quot;</span>
          <span>
            안녕하세요.
            <br />
            성장해 나아가는
            <br />
            <span className="font-Ssuround bg-yellow-back">
              프론트엔드 개발자
              <br />
              박영은
            </span>
            입니다.
          </span>
          <span className="font-Ssuround">&quot;</span>
        </div>
      </div>
      <div className="w-2/3 p-28 pt-32 flex flex-col gap-12">
        <div className="flex flex-col">
          <div className="flex justify-end">
            <button
              onClick={() =>
                window.open(
                  'https://www.notion.so/2-9f48dfda6a8c49c6a8a872340cdb98ae',
                )
              }
              className="p-1 px-2  bg-yellow-100 hover:bg-yellow-bg border border-yellow-bg rounded-md">
              노션 이력서 보기
            </button>
          </div>
          <BasicContent title="About Me">
            <div className="flex flex-col gap-2 ">
              <Text>
                - 코드 한 줄 한 줄을 가지고 <Text bold>어떻게, 왜 </Text>기능이
                구현되었는지 이해하려고 노력합니다.
              </Text>
              <Text>
                - 가능한 한 쓸데없는 코드는 줄이고
                <Text bold> 간결하게 작성하려고 노력</Text>합니다.
              </Text>
              <Text>
                - 사소한 이야기, 깊고 의미있는 이야기 가리지 않고
                <Text bold>모든 대화를 중요하게 여기며 즐기는 편</Text>입니다.
              </Text>
              <Text>
                <Text bold>- 디자이너와 개발자 모두의 입장을 이해</Text>
                하여 팀원들과의 원활한 소통과 협업을 할 수 있습니다.
              </Text>
              <Text>
                - 유저의 사용성과 경험을 고려한
                <Text bold> UI/UX 디자인에 대한 이해도가 높아</Text>, 사용자
                친화적이고 세심한 UI를 제공하는 데 노력합니다.
              </Text>
            </div>
          </BasicContent>
        </div>
        <div className="flex justifiy-between gap-10">
          <div className="w-3/4">
            <BasicContent title="Skills" justify>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <LogoHtml width={14} />
                  <Text>Html</Text>
                </div>
                <div className="flex gap-2">
                  <LogoCss width={14} />
                  <Text>Css</Text>
                </div>
                <div className="flex gap-2">
                  <LogoReactjs width={14} />
                  <Text>React</Text>
                </div>
                <div className="flex gap-2 ">
                  <LogoVue width={14} />
                  <Text>Vue</Text>
                </div>
                <div className="flex gap-2">
                  <LogoNextjs width={14} />
                  <Text>Next.js</Text>
                </div>
                <div className="flex gap-2">
                  <LogoJs width={14} />
                  <Text>JavaScript</Text>
                </div>
                <div className="flex gap-2">
                  <LogoTs width={14} />
                  <Text>TypeScript</Text>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2  items-center">
                  <LogoRestApi width={14} />
                  <Text>RestAPI</Text>
                </div>
                <div className="flex gap-2">
                  <LogoGql width={14} />
                  <Text>GraphQL</Text>
                </div>
                <div className="flex gap-2">
                  <LogoApolloClient width={14} height={14} />
                  <Text>Apollo-Client</Text>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    src={StyledComponent}
                    alt="Styled Component"
                    width={14}
                  />
                  <Text>Styled-Component</Text>
                </div>
                <div className="flex gap-2">
                  <LogoTailwind width={14} />
                  <Text>Tailwind CSS</Text>
                </div>
                <div className="flex gap-2 items-center">
                  <Image src={Emotion} alt="Emotion" width={14} />
                  <Text>Emotion</Text>
                </div>
                <div className="flex gap-2 ">
                  <div className="pt-1">
                    <LogoScss width={14} />
                  </div>
                  <Text>Scss</Text>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-center">
                    <LogoFigma width={14} />
                    <Text>Figma</Text>
                  </div>
                  <div className="flex gap-2">
                    <LogoPs width={14} />
                    <Text>Adobe Photoshop</Text>
                  </div>
                  <div className="flex gap-2">
                    <LogoAi width={14} />
                    <Text>Adobe Illustratoin</Text>
                  </div>
                  <div className="flex gap-2">
                    <LogoSlack width={14} />
                    <Text>Slack</Text>
                  </div>
                  <div className="flex gap-2">
                    <LogoVercel width={14} />
                    <Text>Vercel</Text>
                  </div>
                </div>
                <div className="text-right">
                  <Text color="text-gray">..etc.</Text>
                </div>
              </div>
            </BasicContent>
          </div>
          <div className="w-1/4">
            <BasicContent title="Experienced">
              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <LogoReactNative width={14} />
                  <Text>React Native</Text>
                </div>
                <div className="flex gap-2">
                  <LogoElectron width={14} />
                  <Text>Electron</Text>
                </div>
                <div className="flex gap-2  items-center">
                  <LogoRecoil width={14} height={14} />
                  <Text>Recoil</Text>
                </div>
                <div className="flex gap-2  items-center">
                  <LogoZeplin width={14} />
                  <Text>Zeplin</Text>
                </div>
              </div>
            </BasicContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeTemplate;
