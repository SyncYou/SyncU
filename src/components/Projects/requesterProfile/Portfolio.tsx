import React from "react";

type PortfolioProps = {
  img1: string;
  img2: string;
  social: string;
  link: string;
};
export function Portfolio({ img1, img2, social, link }: PortfolioProps) {
  return (
    <>
      <div className=" flex flex-col items-start gap-6 p-3 rounded-2xl shadow-subtle border  border-solid border-gray-200 ">
        <div className="flex flex-col items-start gap-3">
          <img src={img1} alt="" />
          <div className="text-sm flex flex-col gap-[2px] items-start">
            <span className="font-medium text-gray-900">{social}</span>
            <span className="text-gray-700 text-sm">{link}</span>
          </div>
        </div>
        <img src={img2} alt="" className="w-auto h-auto object-contain" />
      </div>
    </>
  );
}
