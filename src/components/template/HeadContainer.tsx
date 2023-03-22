import React from "react";
import Head from "next/head";

interface Type {
  children: Children;
  title?: string;
  content?: string;
}

const HeadContainer = ({
  children,
  title = "FMS",
  content = "농장경영 시스템",
}: Type) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>{children}</>
    </>
  );
};

export default HeadContainer;
