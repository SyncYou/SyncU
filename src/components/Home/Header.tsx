import user from "/assets/avatar.svg";
import logo from "/assets/logo-noname.svg";
import { FaSearch } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import HomeTabs from "./HomeTabs";
import { useSidebar } from "../../context/useSidebar";
import usePageHeader from "../../hooks/usePageHeader";
import { useUserData } from "../../context/useUserData";
import PrimaryButton from "../Reuseables/PrimaryButton";
import ProjectTabs from "../Projects/ProjectTabs";
import useDisplayPostProjectForm from "../../context/useDisplayPostProjectForm";

const Header = () => {
  const location = useLocation();
  const { isOpen, change } = useSidebar();
  const { header, height } = usePageHeader();
  const { user: userData } = useUserData();
  const { setShow } = useDisplayPostProjectForm();

  return (
    <header
      className={`top-0 right-0 md:w-full w-screen ${height} h-[188px] sticky z-10`}
    >
      <div className="text-lg font-semibold z-10 bg-white relative h-[76px] w-full md:flex hidden justify-between items-center py-4 pr-14 pl-8 border-b border-solid border-gray200">
        <div
          onClick={change}
          className="bg-white absolute flex justify-center items-center top-6 -left-4 w-6 h-6 border border-gray300 z-[auto] text-gray950 rounded-[60px]"
        >
          {isOpen ? <MdKeyboardDoubleArrowLeft /> : <MdKeyboardDoubleArrowRight />}
        </div>
        <span>{header}</span>
        <div className="w-full max-w-[30rem]">
          <input
            type="text"
            className="w-full max-w-[30rem] h-11 outline-none rounded-full border py-[10px] px-4 placeholder:text-sm placeholder:font-medium placeholder:font-inter"
            placeholder="Search for people or projects..."
          />
        </div>
        <div className="flex gap-6 items-center">
          <PrimaryButton
            onClick={() => setShow(true)}
            classes="flex rounded-[32px] py-2 px-4 gap-2"
          >
            <MdAdd className="text-white text-2xl" /> <p className="text-sm">Post project</p>
          </PrimaryButton>
          <div className="flex justify-between items-center gap-2 border border-[#E6E6F0] rounded-2xl py-[0.15rem] px-1 pr-2">
            <NavLink to="/profile">
              <img
                src={userData.photoUrl || user}
                className="h-6 w-6 rounded-full"
                alt="user"
              />
            </NavLink>
            <FaBars />
          </div>
        </div>
      </div>
      <div className="text-lg font-semibold z-10 bg-white relative h-[48px] w-full flex md:hidden items-center px-4 py-2">
        <img src={logo} alt="logo" />
        <span className="mx-auto">{header}</span>
        <div className="w-20 h-8 flex gap-4">
          <button className="w-8 h-8 flex justify-center items-center rounded-full border border-gray200">
            <FaSearch />
          </button>
          <div>
            <NavLink to="/profile">
              <img
                src={userData.photoUrl || user}
                className="h-8 w-8 rounded-full"
                alt="user"
              />
            </NavLink>
            
          </div>
        </div>
      </div>

      {location.pathname == "/" && <HomeTabs />}
      {location.pathname == "/project" && <ProjectTabs />}
    </header>
  );
};

export default Header;
