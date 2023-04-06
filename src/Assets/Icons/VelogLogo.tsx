import React from 'react';
import { Type } from './type';

const VelogLogo = ({ width, height, fill }: Type) => (
  <svg
    width={width}
    height={height}
    fill={fill}
    viewBox="0 0 112 96"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M95.6703 0.75C93.8 0.75 91.9789 0.922265 90.3547 1.16836C85.6543 1.88203 69.3137 7.61602 63.875 24.375C65.2531 24.1289 66.5574 23.9812 67.7879 23.9812C74.5309 23.9812 78.7883 27.9187 78.0008 36.852C77.607 41.257 75.3676 46.0805 72.8574 50.707C70.6918 54.7184 67.0988 61.609 62.4477 61.609C60.8973 61.609 59.2484 60.8461 57.4766 58.9758C51.0781 52.1836 51.5703 39.1898 50.0938 30.5273C49.2816 25.6793 48.4203 19.6254 46.8207 14.6297C45.4426 10.3477 42.268 5.15508 38.4043 4.02305C37.4937 3.75234 36.534 3.6293 35.5496 3.6293C32.0797 3.6293 28.4621 5.08125 26.0996 6.45937C16.502 12.0703 9.16836 20.0437 0.875 26.6391C2.52383 28.2141 3.16367 31.8809 5.57539 32.25C5.91992 32.2992 6.26445 32.3238 6.60898 32.3238C10.0543 32.3238 13.3027 30.0352 16.1328 30.0352C17.6832 30.0352 19.1105 30.7242 20.3656 32.8406C22.6789 36.7535 23.3926 41.0109 24.8691 45.2191C26.8625 50.8055 28.3883 56.9086 29.9879 63.3562C32.7195 74.2582 36.091 90.5496 45.5656 94.5609C46.7715 95.0777 48.125 95.2746 49.5277 95.2746C53.7852 95.2746 58.584 93.3305 61.3648 91.6816C71.3316 85.8246 79.1082 77.3098 85.7527 68.6719C100.961 48.1969 109.353 24.9902 110.633 18.3703C111.445 13.793 111.445 9.06797 108.59 5.49961C105.736 1.85742 100.543 0.75 95.6703 0.75Z"
      fill="black"
    />
  </svg>
);

export default VelogLogo;