import React, { useState } from "react";
import { PiDotOutlineFill } from "react-icons/pi";
import { TbArrowsUpDown } from "react-icons/tb";
import { People } from "./People";
import avatar1 from "/requestersImg/Avatar1.svg";
import avatar2 from "/requestersImg/Avatar2.svg";
import avatar3 from "/requestersImg/Avatar3.svg";
import avatar4 from "/requestersImg/Avatar4.svg";
import Button from "../../Reuseables/Button";
import { BsX } from "react-icons/bs";
import { PersonProfile } from "./PersonProfile";

type RequestProps = {
  handleModal: void;
};
export function RequestInvites({ handleModal }: RequestProps) {
  const [open, setOpen] = useState<boolean>(true);

  function handleClick() {
    setOpen(!open);
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center rounded-[20px] w-1/2 bg-white">
        <section className="flex flex-col ithandleClickems-start self-stretch">
          <div className="flex py-[10px] px-6 justify-between self-stretch items-center border-b border-b-gray-200 border-solid ">
            <p className="text-lg font-semibold text-gray-950">
              Requests & invites
            </p>
            <span
              className="text-gray-700 text-[40px] font-thin cursor-pointer opacity-60"
              onClick={handleModal}
            >
              <BsX />
            </span>
          </div>
          <div className="flex flex-col items-start gap-2 self-stretch">
            <div className="flex pl-6 items-center gap-6 border-b border-b-gray-200 border-solid w-full [&_div]:w-[125px] [&_div]:flex [&_div]:flex-col [&_div]:justify-center [&_div]:items-center [&_div]:gap-3  [&_div]:pt-4  [&_div]:text-center [&_div]:cursor-pointer [&_div]:text-sm [&_div]:font-medium [&_div]:leading-normal ">
              <div className="text-gray-950">
                Requests
                <span className="h-[3px] bg-brand600 w-full"></span>
              </div>
              <div className="text-gray-700 opacity-70">
                Invites
                <span className="h-[3px] bg-brand600 opacity-0 w-full"></span>
              </div>
            </div>

            <div className="w-full flex flex-col items-start gap-4 self-stretch">
              <div className="flex py-3 items-center justify-between w-full border-b-[0.5px] border-b-gray-200 px-6">
                <div className="flex items-center justify-center  gap-1 text-center text-gray-700 font-medium text-sm">
                  <span>Requests</span> <PiDotOutlineFill /> <span>5</span>
                </div>
                <div className="text-brand-500 text-sm flex items-center gap-1 font-medium">
                  <TbArrowsUpDown /> <span>All</span>
                </div>
              </div>

              <div className="flex items-start flex-col  gap-4 px-6 justify-between w-full overflow-y-scroll h-60 scrollbar-none my-5">
                <People
                  stack="Front-end developer"
                  name="@coderharry"
                  img={avatar1}
                />
                {open ? (
                  <People
                    img={avatar2}
                    name="@julianadesigns"
                    stack="Product esigner"
                    handleClick={handleClick}
                  />
                ) : (
                  <PersonProfile handleModal={handleModal} />
                )}
                <People
                  img={avatar3}
                  name="@lilythedesigner"
                  stack="Produc designer"
                />
                <People
                  img={avatar3}
                  name="@lilythedesigner"
                  stack="Produc designer"
                />
                <People
                  img={avatar3}
                  name="@lilythedesigner"
                  stack="Produc designer"
                />
                <People
                  name="@rickmolley"
                  stack="Back-end developer"
                  img={avatar4}
                />
                <People
                  name="@mattdexter"
                  stack="Fullstack developer"
                  img={avatar1}
                />
                <People
                  name="@mattdexter"
                  stack="Fullstack developer"
                  img={avatar1}
                />
                <People
                  name="@mattdexter"
                  stack="Fullstack developer"
                  img={avatar1}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-end items-center w-full self-stretch py-4 px-6 gap-4 border-t border-t-gray-200 border-solid">
          <Button onClick={handleModal} style="w-[120px]">
            Close
          </Button>
        </section>
      </div>
    </>
  );
}
