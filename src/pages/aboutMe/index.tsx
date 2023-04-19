import React from 'react';
import Image from 'next/image';
import {
  BasicContent,
  Text,
  MdText,
  InputWrap,
  ContactMe,
} from '@/src/components';
import profile from '../../Assets/profile.png';
import {
  ApolloClient,
  Css,
  Gql,
  Html,
  Js,
  Nextjs,
  Reactjs,
  Scss,
  Tailwind,
  Ts,
  Vue,
  RestAPI,
  StyledComponent,
  Emotion,
  Vercel,
  ReactNative,
  Electron,
  Recoil,
  FigmaLogo,
  AiLogo,
  PsLogo,
  Slack,
  Zeplin,
} from '@/src/assets';

const AboutMe = () => {
  return (
    <div className="flex h-screen  w-full">
      <div className="bg-yellow-bg px-28 pt-32 relative top-0">
        <Image src={profile} alt="Picture of me" width={264} />
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
      <div className="w-2/3 p-24 pt-36 flex flex-col gap-12">
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
        <div className="flex justifiy-between gap-10">
          <div className="w-3/4">
            <BasicContent title="Skills" justify>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <Image src={Html} alt="Html" width={14} />
                  <Text>Html</Text>
                </div>
                <div className="flex gap-2">
                  <Image src={Css} alt="Css" width={14} />
                  <Text>Css</Text>
                </div>
                <div className="flex gap-2">
                  <Image src={Reactjs} alt="React" width={14} />
                  <Text>React</Text>
                </div>
                <div className="flex gap-2 ">
                  <Image src={Vue} alt="Vue" width={14} />
                  <Text>Vue</Text>
                </div>
                <div className="flex gap-2">
                  <Image src={Nextjs} alt="Nextjs" width={14} />
                  <Text>Next.js</Text>
                </div>
                <div className="flex gap-2">
                  <Image src={Js} alt="Js" width={14} />
                  <Text>JavaScript</Text>
                </div>
                <div className="flex gap-2">
                  <Image src={Ts} alt="Ts" width={14} />
                  <Text>TypeScript</Text>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2  items-center">
                  <Image src={RestAPI} alt="RestfullAPI" width={14} />
                  <Text>RestAPI</Text>
                </div>
                <div className="flex gap-2">
                  <Image src={Gql} alt="Gql" width={14} />
                  <Text>GraphQL</Text>
                </div>
                <div className="flex gap-2">
                  <Image src={ApolloClient} alt="Apollo-client" width={14} />
                  <Text>Apollo-Client</Text>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    src={StyledComponent}
                    alt="Styled Component"
                    width={14}
                  />
                  <Text>Styled Component</Text>
                </div>
                <div className="flex gap-2">
                  <Image src={Tailwind} alt="Tailwindcss" width={14} />
                  <Text>Tailwind CSS</Text>
                </div>
                <div className="flex gap-2 items-center">
                  <Image src={Emotion} alt="Emotion" width={14} />
                  <Text>Emotion</Text>
                </div>
                <div className="flex gap-2">
                  <Image src={Scss} alt="Scss" width={14} />
                  <Text>Scss</Text>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-center">
                    <Image src={FigmaLogo} alt="Figma" width={14} />
                    <Text>Figma</Text>
                  </div>
                  <div className="flex gap-2">
                    <Image src={PsLogo} alt="Photoshop" width={14} />
                    <Text>Adobe Photoshop</Text>
                  </div>
                  <div className="flex gap-2">
                    <Image src={AiLogo} alt="Illustratoin" width={14} />
                    <Text>Adobe Illustratoin</Text>
                  </div>
                  <div className="flex gap-2">
                    <Image src={Slack} alt="Slack" width={14} />
                    <Text>Slack</Text>
                  </div>
                  <div className="flex gap-2">
                    <Image src={Vercel} alt="Vercel" width={14} />
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
                  <Image src={ReactNative} alt="React Native" width={14} />
                  <Text>React Native</Text>
                </div>
                <div className="flex gap-2">
                  <Image src={Electron} alt="Electron" width={14} />
                  <Text>Electron</Text>
                </div>
                <div className="flex gap-2  items-center">
                  <Image src={Recoil} alt="Recoil" width={14} />
                  <Text>Recoil</Text>
                </div>
                <div className="flex gap-2  items-center">
                  <Image src={Zeplin} alt="Zeplin" width={14} />
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

export default AboutMe;
