import React from "react";
import { NavLink } from "react-router-dom";
import analytics from "/profile/analytics.svg";

const Activities = () => {
  const profileTab = [
    {
      name: "overview",
      route: "/profile",
      active: false,
    },
    {
      name: "showcased projects",
      route: "/profile/showcased-projects",
      active: false,
    },
    {
      name: "working on",
      route: "/profile/working-on",
      active: false,
    },
    {
      name: "activities",
      route: "/profile/activities",
      active: true,
    },
  ];
  return (
    <section>
      <div className="border-b pb-3">
        <div className="flex items-center justify-between  max-w-[500px] mx-auto">
          {profileTab.map((tab, i) => (
            <NavLink
              to={`${tab.route}`}
              key={i}
              className={`${
                tab.active
                  ? "bg-[#1F2937] shadow leading-5 font-semibold text-white py-2 px-5 rounded-lg capitalize text-nowrap"
                  : "bg-transparent text-[#6B7280] text-[14px] leading-5 font-medium py-2 px-5 capitalize text-nowrap"
              }`}
            >
              {tab.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="max-w-[500px] mx-auto">
        <div className="flex flex-col items-center justify-center w-full mt-10">
          <img src={analytics} alt="" />
          <p className="text-[#6B7280] leading-6 p-3 w-[347px] text-center">
            Your activities such as your comments and feedbacks will appear
            here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Activities;
