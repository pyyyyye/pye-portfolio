import { ReactNode } from 'react';

export interface TextComponentProps {
  children: ReactNode;
  bold?: boolean;
  center?: boolean;
  truncate?: boolean;
  size?: string;
  color?: string;
}
