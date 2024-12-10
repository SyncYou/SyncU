import logo from "/assets/logo.svg";
import logo2 from "/assets/logo-noname.svg";
import user from "/assets/avatar.svg";
import { NavLink } from "react-router-dom";
import {
  FaPlus,
  FaRegBell,
  FaRegFolder,
  FaRegHandshake,
  FaRegUser,
} from "react-icons/fa";
import { useSidebar } from "../../../context/useSidebar";

const SideBar = () => {
  const { isOpen } = useSidebar();

  return (
    <aside
      className={`md:h-screen h-16 w-screen fixed bottom-0 left-0 md:z-0 z-10 ${
        isOpen ? "md:w-[239px]" : "md:w-[96px] md:flex md:flex-col items-center"
      } md:pl-8 md:py-6 md:pr-4 px-6 py-4 md:bg-ash bg-white text-gray700 border-r border-gray200 font-medium text-base`}
    >
      <div className="md:block hidden">
        <img src={isOpen ? logo : logo2} alt="logo" />
      </div>

      <div className={`md:block ${isOpen ? "w-[191px]" : "w-12"} my-8 hidden`}>
        <NavLink
          to="/"
          className={`h-[40px] first ${
            !isOpen && "justify-center gap-0"
          } flex px-3 py-2 items-center gap-2 hover:bg-[#E6E6F0B2] rounded-sm`}
        >
          <FaRegHandshake />
          {isOpen && "Collaborate"}
        </NavLink>
        <NavLink
          to="/project"
          className={`h-[40px] second ${
            !isOpen && "justify-center gap-0"
          } flex px-3 py-2 items-center gap-2 hover:bg-[#E6E6F0B2] rounded-sm`}
        >
          <FaRegFolder />
          {isOpen && "My Projects"}
        </NavLink>
        <NavLink
          to="/alert"
          className={`h-[40px] third ${
            !isOpen && "justify-center gap-0"
          } flex px-3 py-2 items-center gap-2 hover:bg-[#E6E6F0B2] rounded-sm`}
        >
          <FaRegBell />
          {isOpen && "Alerts"}
        </NavLink>
      </div>
      <NavLink
        to="/profile"
        className={`md:flex ${
          isOpen ? "w-[191px]" : "w-12"
        } items-center rounded-sm hover:bg-[#E6E6F0B2] h-12 px-3 py-2 gap-2 hidden`}
      >
        <img src={user} alt="user-logo" />
        {isOpen && <span>Me</span>}
      </NavLink>
      <div className="w-full h-full md:hidden flex justify-between">
        <NavLink className="w-8 h-8 text-[24px] p-1 rounded" to="/">
          <FaRegHandshake />
        </NavLink>
        <NavLink className="w-8 h-8 text-[24px] p-1 rounded" to="/project">
          <FaRegFolder />
        </NavLink>
        <button className="w-8 h-8 text-[20px] p-[6px] rounded-full text-white bg-gray-950">
          <FaPlus />
        </button>
        <NavLink className="w-8 h-8 text-[24px] p-1 rounded" to="/alert">
          <FaRegBell />
        </NavLink>
        <NavLink className="w-8 h-8 text-[24px] p-1 rounded" to="/profile">
          <FaRegUser />
        </NavLink>
      </div>
    </aside>
  );
};

export default SideBar;
