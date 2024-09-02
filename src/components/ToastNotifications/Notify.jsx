import React from "react";
import checkmark from "/icons/checkmark-circle.svg";
import cancel from "/icons/cancel.svg";

const Notify = ({
  message = "Your request has been sent",
  setShowNotifications,
}) => {
  return (
    <div className="bg-[#4B5563] p-2 rounded-md flex items-center gap-10">
      <div className="flex-1 flex  items-center gap-2">
        <img src={checkmark} alt="" />
        <p className="text-white leading-6 font-medium">{message}</p>
      </div>
      <img
        onClick={() => {
          setShowNotifications(false);
        }}
        className="border-l border-[#F9FAFB] pl-1 cursor-pointer"
        src={cancel}
        alt=""
      />
    </div>
  );
};

export default Notify;
