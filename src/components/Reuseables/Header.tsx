import React from "react";
import logo from "/Logo.svg";

const Header: React.FC = () => {
  return (
    <header className="w-full p-5 flex items-center gap-2 h-fit">
      <img src={logo} alt="syncu logo" />
      <h1 className="capitalize font-bold text-[#2A2A33] text-[21px]">Syncu</h1>
    </header>
  );
};

export default Header;
