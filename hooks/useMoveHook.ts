import { useRef } from 'react';

const useMoveHook = (name: string) => {
  const element = useRef<HTMLDivElement>(null);
  const listName = name;
  const onMoveToElement = () => {
    element.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  return { element, onMoveToElement, listName };
};

export default useMoveHook;
