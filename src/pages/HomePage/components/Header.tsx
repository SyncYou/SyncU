import user from "/assets/avatar.svg";
import logo from "/assets/logo-noname.svg";
import { FaSearch } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import HomeTabs from "./HomeTabs";
import ProjectTabs from "./ProjectTabs";

const Header = () => {
  const location = useLocation();

  return (
    <header
      className={`top-0 right-0 md:w-full w-screen ${
        location.pathname == "/" ? "md:h-[226px]" : "md:h-[126px]"
      } h-[188px] sticky z-10`}
    >
      <div className="text-lg font-semibold z-10 bg-white relative h-[76px] w-full md:flex hidden justify-between items-center py-4 pr-14 pl-8 border-b border-solid border-gray200">
        <div className="bg-white absolute flex justify-center items-center top-6 -left-4 w-6 h-6 border border-gray300 z-[auto] text-gray950 rounded-[60px]">
          <FiArrowRight />
        </div>
        <span>
          {location.pathname == "/" && "Collaborate"}
          {location.pathname == "/project" && "My Projects"}
        </span>
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
          <NavLink to="/profile">
            <img src={user} alt="user" />
          </NavLink>
        </div>
      </div>
      <div className="text-lg font-semibold z-10 bg-white relative h-[48px] w-full flex md:hidden justify-between items-center px-4 py-2">
        <img src={logo} alt="logo" />
        <span>Collaborate</span>
        <div className="w-20 h-8 flex gap-4">
          <a className="w-8 h-8 flex justify-center items-center rounded-full border border-gray200">
            <FaSearch />
          </a>
          <NavLink to="/profile">
            <img src={user} alt="user" />
          </NavLink>
        </div>
      </div>

      {location.pathname == "/" && <HomeTabs />}
      {location.pathname == "/project" && <ProjectTabs />}
    </header>
  );
};

export default Header;
