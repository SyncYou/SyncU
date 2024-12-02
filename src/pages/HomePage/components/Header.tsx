import { useEffect, useState } from "react";
import CategoriesTab from "./CategoriesTab";
import ProjectTag from "./ProjectTag";
import user from "/assets/avatar.svg";
import logo from "/assets/logo-noname.svg";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const handleScroll = () => {
    let currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`top-0 right-0 md:w-full w-screen md:h-[226px] h-[188px] sticky z-10`}
    >
      <div className="text-lg font-semibold z-10 bg-white relative h-[76px] w-full md:flex hidden justify-between items-center py-4 pr-14 pl-8 border-b border-solid border-gray200">
        <span>Collaborate</span>
        <div className="">
          <input
            type="text"
            className="w-[479px] h-11 outline-none rounded-full border py-[10px] px-4"
            placeholder="Search for people or projects..."
          />
        </div>
        <div className="w-48 flex gap-6">
          <button className="w-[139px] h-8 rounded-[32px] py-1 px-4 text-gray100 bg-gray950 text-sm">
            New Project
          </button>
          <img src={user} alt="user" />
        </div>
      </div>
      <div className="text-lg font-semibold z-10 bg-white relative h-[48px] w-full flex md:hidden justify-between items-center px-4 py-2">
        <img src={logo} alt="logo" />
        <span>Collaborate</span>
        <div className="w-20 h-8 flex gap-4">
          <a className="w-8 h-8 flex justify-center items-center rounded-full border border-gray200">
            <FaSearch />
          </a>
          <img src={user} alt="user" />
        </div>
      </div>
      <div
        className={`absolute w-full transition-transform duration-300 ${
          isVisible ? "md:top-[76px] top-[48px]" : "top-0"
        }`}
      >
        <ProjectTag />
      </div>
      <div
        className={`absolute w-full transition-transform duration-300 ${
          isVisible ? "md:top-[150px] top-[113px]" : "md:top-[76px] top-[48px]"
        }`}
      >
        <CategoriesTab />
      </div>
    </header>
  );
};

export default Header;
