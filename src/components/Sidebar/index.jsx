import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [showProjects, setShowProjects] = useState(false);
  // const [activeLink, setActiveLink] = useState(undefined)
  const nav_foundation = [
    {
      title: "collaborate",
      icon: "/agreement.svg",
      notification: false,
      route: "/",
    },
    {
      title: "showcase",
      icon: "/projector.svg",
      notification: true,
      route: "/showcase",
    },
    {
      title: "post",
      icon: "/pencil-edit.svg",
      notification: true,
      route: "/post",
    },
    {
      title: "connect",
      icon: "/user-search.svg",
      notification: false,
      route: "/connect",
    },
  ];

  const nav_base = [
    {
      title: "Get syncoins",
      icon: "/energy-ellipse.svg",
      notification: false,
      route: "/syncoins",
    },
    {
      title: "Profile",
      icon: "/profile.svg",
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
            <img src="/Logo.svg" alt="logo" />
          </div>
          <div className="flex flex-col gap-3 my-5">
            {nav_foundation.map((item, i) => (
              <NavLink
                to={`${item.route}`}
                key={i}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <div className="relative">
                  <img src={item.icon} alt={item.title} />
                  {item.notification && (
                    <img
                      src="/Pop-up.svg"
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
              <p className="text-[#6B7280] font-medium text-[14px]">
                My projects
              </p>
              <img
                onClick={() => {
                  setShowProjects((prev) => !prev);
                }}
                src={showProjects ? '/arrow-down.svg' : '/arrow-left.svg'}
                alt=""
                className="cursor-pointer w-[24px] h-[24px]"
              />
            </div>
            {showProjects && (
              <div className="my-5">
                <div className="flex gap-3 cursor-pointer">
                  <img src="/search-circle.svg" alt="" />
                  <p className="text-[16px] font-normal text-[#6B7280]">
                    Browse projects
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="space-y-1 my-2">
          {nav_base.map((item, i) => (
            <NavLink to={`${item.route}`}  className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }>
              <img src={item.icon} alt={item.title} />
              <p className="text-[#6B7280] leading-6">{item.title}</p>
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
