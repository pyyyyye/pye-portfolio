import React from 'react';
import { BasicContent } from '../../molecules';
import classNames from 'classnames';

const SkillWrap = ({
  children,
  title,
  width,
  flexCol,
}: {
  children: Children;
  title: string;
  width?: string;
  flexCol?: boolean;
}) => (
  <div className={width}>
    <BasicContent title={title}>
      <div className={classNames(flexCol ? 'flex-col' : 'flex', 'gap-4')}>
        {children}
      </div>
    </BasicContent>
  </div>
);
export default SkillWrap;
