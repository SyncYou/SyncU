import React from "react";
import cancel from "/icons/cancel-dark.svg";
import connectionSkeleton from "/profile/connections-skeleton.svg";

const ConnectionsModal = ({ handleShowConnections }) => {
  return (
    <div className="bg-white py-3 max-w-[960px] min-h-[560px] mx-auto rounded-lg shadow-lg shadow-[#00000029]">
      <div className="flex items-center justify-between p-3">
        <h2 className="text-[#1F2937] font-bold text-[24px] leading-[28.8px] mb-3">
          Manage connections
        </h2>
        <img
          onClick={handleShowConnections}
          className="cursor-pointer"
          src={cancel}
          alt=""
        />
      </div>
      <div className="flex flex-1 items-center gap-5 border-b border-[#E5E7EB] px-2">
        <h3 className="text-[#1F2937] font-semibold leading-6 border-b-4 border-[#8E3FDE] py-3 capitalize">
          Connections
        </h3>
        <h3 className="text-[#9CA3AF] font-medium leading-6 capitalize">
          Requests
        </h3>
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center mt-10">
          <img src={connectionSkeleton} alt="" />
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-[#1F2937] font-bold text-[20px]">
              Nothing to show
            </h3>
            <p className="text-[#6B7280] leading-6 w-[330px] my-3 text-center">
              You have no connections, start networking and connecting with
              others.
            </p>
            <button className="text-[#8333D0] font-medium leading-6 my-2">
              Find connections
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionsModal;
