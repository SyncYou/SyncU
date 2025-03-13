import React from "react";

type DetailProps = {
  img: string;
  text: string;
  num?: number;
};
export function Detail({ img, text, num }: DetailProps) {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <img src={img} alt="work" className="h-5 w-5" />
          <small className="text-sm text-gray-900">{text}</small>
        </div>
        <b>{num}</b>
      </div>
    </>
  );
}
