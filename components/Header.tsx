import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex flex-row items-center w-full h-[60px] border-b-2 max-w-[1000px] mx-auto justify-between">
      <div>Hello</div>
      <div>Jello</div>
    </header>
  );
};

export default Header;
