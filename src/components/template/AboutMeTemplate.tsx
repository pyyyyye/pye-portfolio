import React from 'react';
import Image from 'next/image';
import {
  BasicContent,
  ExSkillList,
  MainSkillList,
  SkillWrap,
} from '@/src/components';
import { MyProfileImg } from '@/src/assets';

const AboutMeTemplate = () => {
  const boldStyle = 'font-bold mx-1 bg-yellow-100';
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
            <ul className="flex flex-col gap-2 ">
              <li>
                - 코드 한 줄 한 줄을 가지고
                <span className={boldStyle}>어떻게, 왜</span>기능이 구현되었는지
                이해하려고 노력합니다.
              </li>
              <li>
                - 가능한 한 쓸데없는 코드는 줄이고
                <span className={boldStyle}>간결하게 작성하려고 노력</span>
                합니다.
              </li>
              <li>
                - 사소한 이야기, 깊고 의미있는 이야기 가리지 않고
                <span className={boldStyle}>
                  모든 대화를 중요하게 여기며 즐기는 편
                </span>
                입니다.
              </li>
              <li>
                -
                <span className={boldStyle}>
                  디자이너와 개발자 모두의 입장을 이해
                </span>
                하여 팀원들과의 원활한 소통과 협업을 할 수 있습니다.
              </li>
              <li>
                - 유저의 사용성과 경험을 고려한
                <span className={boldStyle}>
                  UI/UX 디자인에 대한 이해도가 높아
                </span>
                사용자 친화적이고 세심한 UI를 제공하는 데 노력합니다.
              </li>
            </ul>
          </BasicContent>
        </div>
        <div className=" flex justifiy-between gap-10">
          <SkillWrap title="Skills" width="w-3/4">
            <MainSkillList />
          </SkillWrap>
          <SkillWrap title="Experienced" width="w-1/4" flexCol>
            <ExSkillList />
          </SkillWrap>
        </div>
      </div>
    </div>
  );
};

export default AboutMeTemplate;
