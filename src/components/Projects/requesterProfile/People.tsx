import React from "react";
import { Check } from "./Check";

type PeopleProps = {
  img: string;
  name: string;
  stack: string;
  handleClick?: () => void;
};
export function People({ img, name, stack, handleClick }: PeopleProps) {
  return (
    <>
      <div
        onClick={handleClick}
        className="hover:bg-gray-200 cursor-pointer items-center flex py-2 px-2  justify-between w-full rounded-lg relative"
      >
        <div className="flex items-start pr-[10px] gap-3 ">
          {img ? <img src={img} alt="avatar image" /> : ""}
          <div className="gap-[2px] flex  flex-col items-start justify-center">
            <span className="text-gray-950 text-sm">{name}</span>
            <span className="text-gray-700 text-xs">{stack}</span>
          </div>
        </div>
        <div className="absolute right-0">
          <Check />
        </div>
      </div>
    </>
  );
}
