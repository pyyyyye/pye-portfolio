import { ReactNode } from 'react';
declare global {
  interface TitleList {
    id?: number;
    title: string;
    content?: ReactNode;
  }

  /** ETC */
  type Children = ReactNode;

  type funVoid = () => void;
  type funEventVoid = (e: React.ChangeEvent<HTMLInputElement>) => void;
}
