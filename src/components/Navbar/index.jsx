import { useState } from "react";
import arrowDown from "/navbar/arrow-down.svg";
import search from "/navbar/search.svg";
import bellIcon from "/navbar/bell.svg";
import showcase from "/sidebar/projector.svg";
import folder from '/icons/folder-plus.svg'
import Profile from "/navbar/Profile.svg";
import NotificationsModal from "../NotificationsModal";

export default function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);

  const handleNotificationsToggle = () => {
    setShowNotifications((prev) => !prev);
  };

  const handleHideNotifications = () => {
    setShowNotifications(false);
  };
  return (
    <>
      <nav className="flex items-center justify-between gap-5 padding border-b border-[#E5E7EB]">
        <div className="flex flex-1 items-center gap-2 border border-[#E5E7EB] rounded-md px-3 py-[10px] bg-[#fdfcfe]">
          <img src={search} alt="" />
          <input
            className="bg-transparent w-full focus:outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="flex gap-3 items-center border border-[#E5E7EB] rounded-lg px-3 py-[10px] focus:outline-none font-semibold text-[14px] leading-5 text-[#374151]">
            <img src={showcase} alt="" />
            Showcase project
          </button>
          <button className="flex gap-3 items-center border border-[#E5E7EB] rounded-lg px-3 py-[10px] focus:outline-none font-semibold text-[14px] leading-5 text-[#374151]">
            <img src={folder} alt="" />
            New project
          </button>
         
          <span className="text-[#D1D5DB]">|</span>
          <div className="flex items-center gap-2">
            <div className="relative">
              <img
                onClick={handleNotificationsToggle}
                className="cursor-pointer"
                src={bellIcon}
                alt=""
              />
              <span className="absolute -right-1 -top-2 bg-[#DC2626] py-[2px] px-[6px] text-white text-[10px] font-semibold leading-[15px] rounded-full">
                1
              </span>
              {showNotifications && (
                <div className="absolute right-0 w-[460px] z-50">
                  <NotificationsModal
                    handleHideNotifications={handleHideNotifications}
                  />
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <img src={Profile} alt="" />
              <img src={arrowDown} alt="" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
