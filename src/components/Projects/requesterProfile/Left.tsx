import React from "react";
import { Detail } from "./Detail";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import Button from "../../Reuseables/Button";
import { GrShareOption } from "react-icons/gr";
import workBag from "/requestersImg/workBag.svg";
import calendar from "/requestersImg/calendar.svg";
import collab from "/requestersImg/collab.svg";
import folder from "/requestersImg/folder.svg";
import location from "/location.svg";
import avatar2 from "/requestersImg/Avatar2.svg";

export function Left() {
  return (
    <>
      <div className="flex flex-col items-start overflow-y-scroll scrollbar-none h-screen gap-6 pb-[15%] w-[30%] rounded-2xl bg-[#fff] shadow-subtle">
        <div className="flex flex-col w-full items-start gap-3 pr-4">
          <fieldset className="flex w-full justify-between items-start [&_img]:w-[96px] [&_img]:h-[96px] [&_img]:object-contain">
            <img src={avatar2} alt="" />
            <div className="flex justify-end items-center gap-4">
              <Button>
                <PiPaperPlaneTiltBold /> Invite
              </Button>
              <button className="rounded-full p-[14px] shadow-xs border border-gray-300 text-base font-medium text-gray-950">
                <GrShareOption />
              </button>
            </div>
          </fieldset>
        </div>

        <div className="flex flex-col items-start gap-4 gap">
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-start gap-1 flex-col">
              <h1 className="text-gray-950 font-semibold text-2xl">
                Juliana Federick
              </h1>
              <h4 className="text-sm text-gray-700">@julianadesigns</h4>
            </div>
            <p className="text-sm font-normal text-gray-900 flex items-center gap-[6px] rounded-[100px] border-solid border border-gray-200 px-2 py-[2px]">
              <span className="bg-success700 p-[6px] rounded-full"></span>
              Available to collaborate
            </p>
          </div>
          <article className="text-sm text-gray-900 font-normal">
            Passionate about crafting intuitive, functional, and visually
            compelling digital products, I bring ideas to life by blending
            design thinking, user research, and cutting-edge technology. With
            expertise in wireframing, prototyping, and interaction design, I
            create seamless user journeys that solve real-world problems
          </article>
        </div>

        <div className="flex flex-col items-start gap-4 border-y border-solid border-y-gray-200 py-6 pr-4 w-full">
          <Detail text="Product designer" img={workBag} />
          <Detail text="Minnesota, USA" img={location} />
          <Detail text="Joined 12 November, 2024" img={calendar} />
        </div>
        <div className="flex flex-col items-start gap-4 pb-8 pr-4 w-full">
          <Detail text="Project contributions" img={collab} num={24} />
          <Detail text="Projects created" img={folder} num={4} />
        </div>
      </div>
    </>
  );
}
