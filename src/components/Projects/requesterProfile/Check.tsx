import React, { useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";

export function Check() {
  const [accept, setAccept] = useState<boolean>(true);
  return (
    <>
      <div className="flex items-center gap-4  [&_span]:w-full [&_span]:rounded-full text-[26px]">
        <span className="bg-success100 p-[8px] text-success800">
          {accept ? (
            <span onClick={() => setAccept(!accept)} className="cursor-pointer">
              <BsCheck2 />
            </span>
          ) : (
            <span className="flex items-center text-base font-medium gap-1 py-0 px-2">
              <BsCheck2 />
              Accepted
            </span>
          )}
        </span>
        {accept && (
          <span className="bg-alert-100 p-[8px] text-alert-600">
            <LiaTimesSolid />
          </span>
        )}
      </div>
    </>
  );
}
