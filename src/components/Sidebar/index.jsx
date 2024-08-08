import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "/src/assets/Logo.svg";
import Agreement from "/src/assets/img/sidebar/agreement.svg";
import AgreementBlack from "/src/assets/img/sidebar/agreement-black.svg";
import Showcase from "/src/assets/img/sidebar/projector.svg";
import Pencil from "/src/assets/img/sidebar/pencil-edit.svg";
import UserSearch from "/src/assets/img/sidebar/user-search.svg";
import Syncoins from "/src/assets/img/sidebar/energy-ellipse.svg"
import Profile from "/src/assets/img/sidebar/Profile.svg"
import arrowDown from "/src/assets/img/sidebar/arrow-down.svg"
import arrowLeft from "/src/assets/img/sidebar/arrow-left.svg"
import searchCircle from "/src/assets/img/sidebar/search-circle.svg"
import popUp from "/src/assets/img/sidebar/Pop-up.svg"

export default function Sidebar() {
  const [showProjects, setShowProjects] = useState(false);
  const [active, setActive] = useState(true);
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
      title: "post",
      icon_active: Pencil,
      icon: Pencil,
      notification: true,
      route: "/post",
    },
    {
      title: "connect",
      icon_active: UserSearch,
      icon: UserSearch,
      notification: false,
      route: "/connect",
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
                onClick={() => {
                  setActive((prev) => !prev);
                }}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <div className="relative">
                  <img
                    src={`${active ? item.icon_active : item.icon}`}
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
              <p className="text-[#6B7280] font-medium text-[14px]">
                My projects
              </p>
              <img
                onClick={() => {
                  setShowProjects((prev) => !prev);
                }}
                src={
                  showProjects
                    ? arrowDown
                    : arrowLeft
                }
                alt=""
                className="cursor-pointer w-[24px] h-[24px]"
              />
            </div>
            {showProjects && (
              <div className="my-5">
                <div className="flex gap-3 cursor-pointer">
                  <img src={searchCircle} alt="" />
                  <p className="text-[16px] font-normal text-[#6B7280]">
                    Browse projects
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="space-y-1 my-2">
            {nav_base.map((item, i) => (
              <NavLink
                to={`${item.route}`}
                key={i}
                onClick={() => {
                  setActive((prev) => !prev);
                }}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <img src={item.icon} alt={item.title} />
                <p
                  className={`${
                    active ? "text-white" : "text-[#6B7280]"
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
