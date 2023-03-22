import React from "react";

interface IIcon {
  width: number;
  height?: number;
  fill?: string;
}
const CloseIcon = ({ width, height, fill }: IIcon) => (
  <svg
    width={width}
    height={height}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.9025 21.1783C8.6725 21.1783 8.4425 21.0883 8.2625 20.9183C7.9125 20.5683 7.9125 19.9983 8.2625 19.6483L15.9254 11.9854L8.2625 4.3325C7.9125 3.9825 7.9125 3.4125 8.2625 3.0625C8.6125 2.7125 9.1825 2.7125 9.5325 3.0625L17.8254 11.3554C18.1754 11.7054 18.1754 12.2754 17.8254 12.6254L9.5325 20.9183C9.3525 21.0983 9.1225 21.1783 8.8925 21.1783H8.9025Z" />
  </svg>
);

export default CloseIcon;
