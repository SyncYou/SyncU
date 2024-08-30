import React from "react";
import cancel from "/icons/cancel-dark.svg";
import arrowLeft from "/icons/arrow-left.svg"
import refresh from '/icons/refresh.svg'
import arrowDown from '/icons/arrow-down.svg'
import vergil from '/collaborators/vergil.svg'
import addIcon from '/workspace/add-icon.svg'
import copy from '/workspace/copy.svg'
import { useAppContext } from "../../lib/Contexts/AppContext";

const InviteCollaborators = () => {
  const {setShowModal } = useAppContext()
  const handleCloseModal = () => {
      setShowModal(false)
  }
  return (
    <div className="bg__overlay flex items-center justify-center  overflow-y-scroll">
      <div className="bg-white w-[760px] rounded-lg">
        <div className="flex items-start justify-between p-3 border-b border-[#E5E7EB]">
          <div>
            <h1 className="text-[#1F2937] text-[24px] font-bold leading-[28px]">
              Invite collaborators to your project
            </h1>
            <p className="text-[#6B7280] leading-6 font-medium">
              Build your project idea faster by inviting people to work with
              you.
            </p>
          </div>
          <img onClick={handleCloseModal} className="cursor-pointer" src={cancel} alt="" />
        </div>

        <div className="my-3 mx-5">
          <div className="flex items-center gap-5 max-w-[80%] p-2">
            <input
              className="w-full border - border-[#E5E7EB] rounded-lg p-2 bg-[#F9FAFB] leading-6 text-[#9CA3AF]"
              type="text"
              placeholder="Enter username or email address..."
            />
            <button className="bg-[#672A9F] w-[150px] px-5 py-2 text-[#F9FAFB] rounded-md font-medium leading-6 drop-shadow-md shadow-inner shadow-[#EEF0F340] drop-shadow-[#8D59BC80] capitalize cursor-pointer">
              invite
            </button>
          </div>

          <div className="p-2">
            <div className="flex items-center justify-between">
              <p className="text-[#6B7280] leading-6 font-medium">
                People with access (<span className="font-bold">1</span> /11)
              </p>
              <img src={arrowLeft} alt="" />
            </div>

            <div className="my-3">
                <div className="flex items-center justify-between">
                    <h2 className="flex items-center gap-2">Recommended collaborators <img className="border border-[#D1D5DB] p-1 rounded-full" src={refresh} alt="" /></h2>
                    <img src={arrowDown} alt="" />
                </div>
                <div className="my-3 flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-2">
                        <img className="w-[50px]" src={vergil} alt="" />
                        <div className="flex-1 flex flex-col gap-0">
                            <h3 className="text-[#374151] font-semibold leading-6">Daniella Ademola</h3>
                            <small className="text-[#6B7280] leading-[21px] text-[14px]">@dadadesigner</small>
                        </div>
                        <img className="w-[30px]" src={addIcon} alt="" />
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <img className="w-[50px]" src={vergil} alt="" />
                        <div className="flex-1 flex flex-col gap-0">
                            <h3 className="text-[#374151] font-semibold leading-6">Daniella Ademola</h3>
                            <small className="text-[#6B7280] leading-[21px] text-[14px]">@dadadesigner</small>
                        </div>
                        <img className="w-[30px]" src={addIcon} alt="" />
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <img className="w-[50px]" src={vergil} alt="" />
                        <div className="flex-1 flex flex-col gap-0">
                            <h3 className="text-[#374151] font-semibold leading-6">Daniella Ademola</h3>
                            <small className="text-[#6B7280] leading-[21px] text-[14px]">@dadadesigner</small>
                        </div>
                        <img className="w-[30px]" src={addIcon} alt="" />
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <img className="w-[50px]" src={vergil} alt="" />
                        <div className="flex-1 flex flex-col gap-0">
                            <h3 className="text-[#374151] font-semibold leading-6">Daniella Ademola</h3>
                            <small className="text-[#6B7280] leading-[21px] text-[14px]">@dadadesigner</small>
                        </div>
                        <img className="w-[30px]" src={addIcon} alt="" />
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D1D5DB] p-2 flex items-center justify-end">
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 border-[1.5px] border-[#E5E7EB] py-2 px-5 bg-white rounded-lg text-[#374151] font-medium leading-6 w-[200px] text-nowrap cursor-pointer">
                    <img src={copy} alt="" />
                    Copy invite link
                </div>
                <button onClick={handleCloseModal} className="border-[1.5px] border-[#E5E7EB] py-2 px-5 bg-white rounded-lg text-[#374151] font-medium leading-6 w-[170px] text-nowrap cursor-pointer">close</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InviteCollaborators;
