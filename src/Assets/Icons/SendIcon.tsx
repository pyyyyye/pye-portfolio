import React from 'react';
import { Type } from './type';

const SendIcon = ({ width, height, fill }: Type) => (
  <svg
    width={width}
    height={height}
    fill={fill}
    viewBox="0 0 28 28"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22.984.638a.5.5,0,0,0-.718-.559L1.783,10.819a1.461,1.461,0,0,0-.1,2.527h0l4.56,2.882a.25.25,0,0,0,.3-.024L18.7,5.336a.249.249,0,0,1,.361.342L9.346,17.864a.25.25,0,0,0,.062.367L15.84,22.3a1.454,1.454,0,0,0,2.19-.895Z" />
    <path d="M7.885,19.182a.251.251,0,0,0-.385.211c0,1.056,0,3.585,0,3.585a1,1,0,0,0,1.707.707l2.018-2.017a.251.251,0,0,0-.043-.388Z" />
  </svg>
);

export default SendIcon;
