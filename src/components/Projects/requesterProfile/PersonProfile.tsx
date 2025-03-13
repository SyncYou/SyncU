import React from "react";
import { BsX } from "react-icons/bs";
import { Check } from "./Check";
import { Left } from "./Left";
import { Right } from "./Right";

type PersonProps = {
  handleModal: void;
};
export function PersonProfile({ handleModal }: PersonProps) {
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-4  rounded-[20px] w-[90%] h-full top-[37px]  absolute left-[5rem] right-[5rem] bg-white z-10">
        <section className="flex py-4 px-6 justify-between self-stretch items-center border-b border-b-gray-200 border-solid ">
          <div className="gap-2 flex flex-col items-start justify-center">
            <span className="text-gray-950 text-base font-medium ">
              @julianadesigns
            </span>
            <span className="text-gray-700 text-xs ">
              Wants to collaborate with you
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Check />
            <span
              className="text-gray-700 text-[40px] border-l-2 pl-1 border-l-gray-200 font-thin cursor-pointer opacity-60"
              onClick={handleModal}
            >
              <BsX />
            </span>
          </div>
        </section>

        <section className="flex px-8 gap-8 justify-between items-start self-stretch">
          <Left />
          <Right />
        </section>
      </div>
    </>
  );
}
