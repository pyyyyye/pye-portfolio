import React from 'react';
import Head from 'next/head';

interface Type {
  title?: string;
  content?: string;
}

const HeadContainer = ({
  title = '프론트엔드 박영은입니다 ☺️',
  content = '박영은 포트폴리오 페이지',
}: Type) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default HeadContainer;
