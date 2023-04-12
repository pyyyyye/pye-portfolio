import React from 'react';
import { Type } from './type';

const ArrowIcon = ({ width, height, fill }: Type) => (
  <svg
    width={width}
    height={height}
    fill={fill}
    viewBox="0 0 16 29"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7.29289 28.7071C7.68342 29.0976 8.31658 29.0976 8.70711 28.7071L15.0711 22.3431C15.4616 21.9526 15.4616 21.3195 15.0711 20.9289C14.6805 20.5384 14.0474 20.5384 13.6569 20.9289L8 26.5858L2.34315 20.9289C1.95262 20.5384 1.31946 20.5384 0.928933 20.9289C0.538409 21.3195 0.538409 21.9526 0.928933 22.3431L7.29289 28.7071ZM7 4.37114e-08L7 28L9 28L9 -4.37114e-08L7 4.37114e-08Z" fill="gray" fillOpacity='70%' />
  </svg>
);

export default ArrowIcon;
