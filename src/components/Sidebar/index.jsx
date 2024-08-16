import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "/sidebar/Logo.svg";
import Agreement from "/sidebar/agreement.svg";
import AgreementBlack from "/sidebar/agreement-black.svg";
import Showcase from "/sidebar/projector.svg";
import Pencil from "/sidebar/pencil-edit.svg";
import UserSearch from "/sidebar/user-search.svg";
import Syncoins from "/sidebar/energy-ellipse.svg";
import Profile from "/sidebar/Profile.svg";
import arrowDown from "/icons/arrow-down.svg";
import arrowLeft from "/icons/arrow-left.svg";
import layers from "/sidebar/layers.svg";
import layersLight from "/sidebar/layers-light.svg";
import popUp from "/sidebar/Pop-up.svg";
import folder from "/icons/folder-dark.svg";
import folderLight from "/icons/folder-light.svg";

export default function Sidebar() {
  const location = useLocation();
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    console.log(location);
  }, []);
  const nav_foundation = [
    {
      title: "collaborate",
      icon_active: Agreement,
      icon: AgreementBlack,
      notification: false,
      route: "/",
    },
    {
      title: "showcase",
      icon_active: Showcase,
      icon: Showcase,
      notification: true,
      route: "/showcase",
    },
    {
      title: "connect",
      icon_active: UserSearch,
      icon: UserSearch,
      notification: false,
      route: "/connect",
    },
  ];

  const projects = [
    {
      name: "Manage  projects",
      icon: layers,
      icon_active: layersLight,
      route: "/workspace/id",
      notification: false,
    },
    {
      name: "syncu",
      icon: folder,
      icon_active: folderLight,
      route: "/workspace/id",
      notification: true,
    },
  ];

  const nav_base = [
    {
      title: "Get syncoins",
      icon: Syncoins,
      notification: false,
      route: "/syncoins",
    },
    {
      title: "Profile",
      icon: Profile,
      notification: false,
      route: "/profile",
    },
  ];

  const activeLink =
    "flex p-2 gap-3 items-center rounded-md cursor-pointer bg-[#1F2937] text-[#D1D5DB] font-semibold";
  const normalLink =
    "flex p-2 gap-3 items-center rounded-md cursor-pointer bg-transparent hover:bg-[#e1e3e5]";

  return (
    <>
      <aside className="w-full pad">
        <div>
          <div className="flex items-center justify-center py-[12px]">
            <img src={Logo} alt="logo" />
          </div>
          <div className="flex flex-col gap-3 my-5">
            {nav_foundation.map((item, i) => (
              <NavLink
                to={`${item.route}`}
                key={i}
                // onClick={() => {
                //   setActive((prev) => !prev);
                // }}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <div className="relative">
                  <img
                    src={`${
                      location.pathname == item.route
                        ? item.icon_active
                        : item.icon
                    }`}
                    alt={item.title}
                  />
                  {item.notification && (
                    <img
                      src={popUp}
                      alt=""
                      className="absolute -right-1 top-0"
                    />
                  )}
                </div>
                <span className="capitalize">{item.title}</span>
              </NavLink>
            ))}
          </div>
          <div className="my-5">
            <div className="flex gap-2 items-center justify-between">
              <p className="text-[#6B7280] font-medium text-[16px] -tracking-tighter">
                My projects
              </p>
              <img
                onClick={() => {
                  setShowProjects((prev) => !prev);
                }}
                src={showProjects ? arrowDown : arrowLeft}
                alt=""
                className="cursor-pointer w-[24px] h-[24px]"
              />
            </div>
            {showProjects && (
              <div className="my-5 flex flex-col gap-5">
                {projects.map((project, idx) => (
                  <NavLink
                    to={project.route}
                    key={idx}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <div className="relative">
                      <img
                        src={`${
                          location.pathname == project.route
                            ? project.icon_active
                            : project.icon
                        }`}
                        alt=""
                      />
                      {project.notification && (
                        <img
                          src={popUp}
                          alt=""
                          className="absolute -right-1 top-0"
                        />
                      )}
                    </div>
                    <p className="text-[16px] font-medium text-[#6B7280] capitalize leading-6">
                      {project.name}
                    </p>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
          <div className="space-y-1 my-2">
            {nav_base.map((item, i) => (
              <NavLink
                to={`${item.route}`}
                key={i}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <img src={item.icon} alt={item.title} />
                <p
                  className={`${
                    location.pathname === item.route
                      ? "text-white"
                      : "text-[#6B7280]"
                  }leading-6`}
                >
                  {item.title}
                </p>
              </NavLink>
            ))}
          </div>
          <div>
            <p className="text-[12px] font-semibold leading-[18px] text-[#6B7280]">
              Terms and Conditions
            </p>
            <p className="text-[12px] font-semibold leading-[18px] text-[#6B7280]">
              Privacy policy
            </p>
            <small className="text-[10px] font-semibold leading-[15px] text-[#6B7280]">
              Syncu Ltd &copy; {new Date().getFullYear()} All rights reserved
            </small>
          </div>
        </div>
      </aside>
    </>
  );
}
