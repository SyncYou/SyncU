import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import folder from "/workspace/folder.svg";
import arrowLeft from "/icons/arrow-left.svg";
import expand from "/workspace/expand.svg";
import broadcast from "/workspace/broadcast.svg";
import broadcastDark from "/workspace/broadcast-dark.svg";
import grid from "/workspace/grid.svg";
import task from "/workspace/check-circle.svg";
import idea from "/workspace/idea.svg";
import vergil from "/collaborators/vergil.svg";
import henrietta from "/collaborators/collab1.svg";
import aisha from "/collaborators/aisha.svg";
import michael from "/collaborators/michael.svg";
import addIcon from "/workspace/add-icon.svg";
import arrowDown from "/icons/arrow-down.svg";
import user from '/workspace/users.svg'
import cog from '/workspace/cog.svg';

const WorkspaceSidebar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(true)

  const channels = [
    {
      name: "announcements",
      icon: broadcastDark,
      icon_active: broadcast,
      route: "/workspace/id",
    },
    {
      name: "general",
      icon: grid,
      icon_active: grid,
      route: "/workspace/idx",
    },
  ];

  const planning = [
    {
      name: "My tasks",
      icon: task,
      icon_active: task,
      route: "/workspace/id1",
    },
    {
      name: "Brainstorm board",
      icon: idea,
      icon_active: idea,
      route: "/workspace/id2",
    },
  ];

  const messages = [
    {
      icon: vergil,
      name: 'vergil',
    },
    {
      icon: henrietta,
      name: 'henrietta',
    },
    {
      icon: michael,
      name: 'michael',
    },
    {
      icon: aisha,
      name: 'aisha',
    },
  ];


  const activeLink =
    "flex p-2 gap-3 items-center rounded-md cursor-pointer bg-[#1F2937] text-[#D1D5DB] font-semibold";
  const normalLink =
    "flex p-2 gap-3 items-center rounded-md cursor-pointer bg-transparent hover:bg-[#e1e3e5]";

  return (
    <aside className="w-full h-full flex flex-col items-end">
      <nav className="flex items-center pl-7 py-4 border-b border-[#E5E7EB] gap-5 pr-3 sticky top-0 left-0 z-10 bg-[#F9FAFB]">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="cursor-pointer p-[5px] border border-[#E5E7EB] rounded-full"
        >
          <img src={arrowLeft} alt="arrow-left" />
        </button>
        <div className="flex gap-3 items-center justify-between w-full border border-[#E5E7EB] rounded-lg bg-white drop-shadow-md drop-shadow-[#0000001F] py-[5px] px-5 w-[210px] cursor-pointer">
          <img
            className="bg-[#F2E9FE] p-1 rounded-md"
            src={folder}
            alt="folder"
          />
          <small className="flex-1 capitalize text-[#1F2937] leading-6 font-semibold">
            syncu
          </small>
          <img src={expand} alt="" />
        </div>
      </nav>

      <div className="w-full pl-7">
        <div className="w-full">
          <div className="flex items-center justify-between p-3">
            <h2 className="text-[#6B7280] font-medium leading-6 tracking-wider flex-1">
              Channels
            </h2>
            <div className="flex items-center justify-center gap-5">
              <img src={addIcon} alt="" />
              <img src={arrowDown} alt="" />
            </div>
          </div>
          <div className="flex flex-col items-stretch p-2 gap-3 w-full">
            {
              channels.map((channel, idx) => (
                <div key={idx}>
                   <NavLink
                to={`${channel.route}`}
                key={idx}
                onClick={() => {
                  setActive((prev) => !prev);
                }}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <div className="relative">
                  <img
                    src={`${active ? channel.icon_active : channel.icon}`}
                    alt={channel.title}
                  />
                 
                </div>
                <span className="capitalize">{channel.name}</span>
              </NavLink>
                </div>
              ))
            }
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center justify-between p-3">
            <h2 className="text-[#6B7280] font-medium leading-6 tracking-wider flex-1">
              Planning
            </h2>
            {/* <div className="flex items-center justify-center gap-5">
              <img src={addIcon} alt="" />
              <img src={arrowDown} alt="" />
            </div> */}
          </div>
          <div className="flex flex-col items-stretch p-2 gap-3 w-full">
            {
              planning.map((plan, idx) => (
                <div key={idx}>
                   <NavLink
                to={`${plan.route}`}
                key={idx}
                onClick={() => {
                  setActive((prev) => !prev);
                }}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <div className="relative">
                  <img
                    src={`${active ? plan.icon_active : plan.icon}`}
                    alt={plan.title}
                  />
                 
                </div>
                <span className="capitalize">{plan.name}</span>
              </NavLink>
                </div>
              ))
            }
          </div>
        </div>

        <div className="w-full mb-10">
          <div className="flex items-center justify-between p-3">
            <h2 className="text-[#6B7280] font-medium leading-6 tracking-wider flex-1">
              Direct messages
            </h2>
            <div className="flex items-center justify-center gap-5">
              <img src={addIcon} alt="" />
              <img src={arrowDown} alt="" />
            </div>
          </div>
          <div className="flex flex-col items-stretch py-2 gap-3 w-full">
            {
              messages.map((message, idx) => (
                <div key={idx}>
                   <NavLink
                to={`${message.route}`}
                key={idx}
                // onClick={() => {
                //   setActive((prev) => !prev);
                // }}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <div className="relative">
                  <img
                    src={message.icon}
                    alt={message.name}
                  />
                 
                </div>
                <span className="capitalize">{message.name}</span>
              </NavLink>
                </div>
              ))
            }
          </div>
        </div>

      </div>
        <div className="py-5 flex flex-col items-start pl-7 gap-3 border-t border-[#E5E7EB] w-full">
          <button className="flex items-center gap-3 text-[#6B7280] font-medium leading-6 capitalize">
            <img src={user} alt="" />
           collaborators
          </button>
          <button className="flex items-center gap-3 text-[#6B7280] font-medium leading-6 capitalize">
            <img src={cog} alt="" />
            Workspace settings
          </button>
        </div>
    </aside>
  );
};

export default WorkspaceSidebar;
