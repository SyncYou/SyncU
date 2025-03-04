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
import { RiAddLargeFill } from "react-icons/ri";
import { useSidebar } from "../../context/useSidebar";
import { useUserProgress } from "../../context/useUserProgress";
import { useUserData } from "../../context/useUserData";
import useDisplayPostProjectForm from "../../context/useDisplayPostProjectForm";

const SideBar = () => {
  const { isOpen } = useSidebar();
  const { status } = useUserProgress();
  const { user: userData } = useUserData();
  const { setShow } = useDisplayPostProjectForm();

  return (
    <aside
      className={`md:h-screen h-20 right-0 fixed bottom-0 left-0 md:z-0 z-10 w-full overflow-hidden  ${
        isOpen ? "md:w-[239px]" : "md:w-[96px] md:flex md:flex-col items-center"
      } md:pl-8 md:py-6 md:pr-4 md:bg-ash bg-white text-gray700 border-r border-gray200 shadow-lg font-medium text-base`}
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
          {isOpen && <p>Collaborate</p>}
        </NavLink>
        <NavLink
          to="/project"
          className={`h-[40px] second ${
            !isOpen && "justify-center gap-0"
          } flex px-3 py-2 items-center gap-2 hover:bg-[#E6E6F0B2] rounded-sm`}
        >
          <FaRegFolder />
          {isOpen && <p>My Projects</p>}
        </NavLink>
        <NavLink
          to="/alert"
          className={`h-[40px] third ${
            !isOpen && "justify-center gap-0"
          } flex px-3 py-2 items-center gap-2 hover:bg-[#E6E6F0B2] rounded-sm`}
        >
          <FaRegBell />
          {isOpen && <p>Activity</p>}
        </NavLink>
      </div>
      <NavLink
        to="/profile"
        className={`md:flex mb-3 ${
          isOpen ? "w-[191px]" : "w-12"
        } items-center rounded-sm hover:bg-[#E6E6F0B2] h-12 px-3 py-2 gap-2 hidden`}
      >
        <img
          src={userData.photoUrl || user}
          className="w-8 h-8 rounded-full"
          alt="user-logo"
        />
        {isOpen && (
          <div className="flex flex-col">
            <span className="text-base text-gray950 font-normal">
              {userData.firstName}
            </span>
            <span className="text-gray700 font-normal text-xs flex items-center gap-1">
              <span
                className={`w-2 h-2 rounded-full ${
                  status === "Available" && "bg-success700"
                } ${status === "Occupied" && "bg-[#F7BA36]"}
                ${status === "Not available" && "bg-gray500"}
                `}
              ></span>
              {status}
            </span>
          </div>
        )}
      </NavLink>
      <hr/>
      {isOpen && 
        <p className="hidden mt-3 md:flex flex-col text-xs">
        <span>syncu ltd © 2025</span>
        <span>All rights reserved.</span>
      </p>
      }
      <div className="w-full h-full items-start pt-3 md:hidden px-5 flex justify-between overflow-hidden">
        <NavLink
            to="/"
            className="relative w-8 h-8 text-[24px] p-1 rounded 
              after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2
              after:w-1/4 after:h-[2px] after:bg-black after:opacity-[var(--active)] after:transition-opacity"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "white" : "",
              // Set the CSS variable to toggle the pseudo-element border's visibility
              "--active": isActive ? 1 : 0,
            })}
          >
          <FaRegHandshake />
        </NavLink>
        <NavLink 
          className="relative w-8 h-8 text-[24px] p-1 rounded 
          after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2
          after:w-1/4 after:h-[2px] after:bg-black after:opacity-[var(--active)] after:transition-opacity"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "white" : "",
            // Set the CSS variable to toggle the pseudo-element border's visibility
            "--active": isActive ? 1 : 0,
          })}
          to="/project">
          <FaRegFolder />
        </NavLink>
        <button
          onClick={() => setShow(true)}
          className="w-9 h-9 text-[20px] p-[6px] rounded-full flex justify-center items-center text-white bg-black shadow-lg"
        >
          <RiAddLargeFill className="text-2xl text-white" />
        </button>
        <NavLink 
          className="relative w-8 h-8 text-[24px] p-1 rounded 
          after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2
          after:w-1/4 after:h-[2px] after:bg-black after:opacity-[var(--active)] after:transition-opacity"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "white" : "",
            // Set the CSS variable to toggle the pseudo-element border's visibility
            "--active": isActive ? 1 : 0,
          })}
          to="/alert">
          <FaRegBell />
        </NavLink>
        <NavLink 
          className="relative w-8 h-8 text-[24px] p-1 rounded 
          after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2
          after:w-1/4 after:h-[2px] after:bg-black after:opacity-[var(--active)] after:transition-opacity"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "white" : "",
            // Set the CSS variable to toggle the pseudo-element border's visibility
            "--active": isActive ? 1 : 0,
          })}
          to="/profile">
          <FaRegUser />
        </NavLink>
      </div>
    </aside>
  );
};

export default SideBar;
