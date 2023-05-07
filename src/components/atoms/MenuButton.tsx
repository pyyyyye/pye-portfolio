import { CloseIcon } from '@/src/assets';
import React from 'react';

const MenuButton = ({
  onClickMenu,
  active,
}: {
  onClickMenu: funVoid;
  active: boolean;
}) => {
  return (
    <button
      onClick={onClickMenu}
      className="p-4 w-min rounded-lg  flex flex-col gap-1 hover:bg-yellow-light items-center">
      {active ? (
        <CloseIcon width={16} />
      ) : (
        <>
          <hr className="border border-black w-4" />
          <hr className="border border-black w-4" />
          <hr className="border border-black w-4" />
        </>
      )}
    </button>
  );
};

export default MenuButton;
