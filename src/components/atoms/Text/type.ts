import { ReactNode } from 'react';

export interface TextComponentProps {
  children: ReactNode;
  bold?: boolean;
  center?: boolean;
  truncate?: boolean;
  size?: string;
  color?: string;
  bg?: boolean;
  fontType?: string;
  leading?: string;
  border?: string;
  borderColor?: string;
}
