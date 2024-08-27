import React from "react";
import cancel from "/icons/cancel-dark.svg";
import arrowDown from "/icons/arrow-down.svg";
import refresh from "/icons/refresh.svg";
import figma from "/tags/Figma.svg";
import sketch from "/tags/Sketch.svg";
import addCircle from "/icons/add-circle.svg";
import flutter from "/tags/Flutter.svg";
import react from "/tags/React.svg";
import adobeXd from "/tags/Adobe-xd.svg";
import afterEffect from "/tags/Ae.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const navigate = useNavigate()

  const handleCancelModal = () => {
    navigate(-1);
  }
  return (
    <div className="bg_overlay flex items-center justify-center  overflow-y-scroll">
      <div className="bg-white rounded-lg w-3/5 mt-48">
        <div className="flex items-center justify-between p-3 border-b border-[#E5E7EB]">
          <h1 className="text-[#1F2937] text-[24px] font-bold leading-[28px]">
            Create project
          </h1>
          <img className="cursor-pointer" onClick={handleCancelModal} src={cancel} alt="" />
        </div>

        <div className="p-10">
          <div className="flex items-start justify-between gap-10 my-5">
            <label
              className="text-[#1F2937] font-medium leading-6 w-[200px]"
              htmlFor="title"sketch
            >
              Project title<sup>*</sup>
            </label>
            <div className="flex-1 flex flex-col items-end">
              <input
                maxLength={50}
                className="border border-[#E8D8FC] focus:outline-none bg-[#F9FAFB] rounded p-2 w-full text-[#9CA3AF]"
                type="text"
                placeholder="Give your project a name..."
              />
              <small>0/50</small>
            </div>
          </div>

          <div className="flex items-start justify-between gap-10 my-5">
            <label
              className="text-[#1F2937] font-medium leading-6 w-[200px]"
              htmlFor="title"
            >
              Project category<sup>*</sup>
            </label>
            <div className="flex-1 flex items-center justify-between border border-[#E8D8FC] bg-[#F9FAFB] rounded p-2 w-full">
              <select
                className="appearance-none flex-1 bg-transparent focus:outline-none text-[#9CA3AF]"
                name="category"
              >
                <option value="">Select--</option>
              </select>
              <img src={arrowDown} alt="" />
            </div>
          </div>

          <div className="flex items-start justify-between gap-10 my-5">
            <label
              className="text-[#1F2937] font-medium leading-6 w-[200px]"
              htmlFor="title"
            >
              Project description<sup>*</sup>
            </label>
            <div className="flex-1 flex flex-col items-end">
              <textarea
                maxLength={1000}
                className="border border-[#E8D8FC] focus:outline-none bg-[#F9FAFB] rounded p-2 w-full text-[#9CA3AF]"
                rows={5}
                placeholder="Describe your project idea..."
              />
              <small>0/1000</small>
            </div>
          </div>

          <div className="flex items-start justify-between gap-10 my-5">
            <label
              className="text-[#1F2937] font-medium leading-6 w-[295px]"
              htmlFor="title"
            >
              Required skills, tools & stacks<sup>*</sup>
            </label>
            <div className="w-full">
              <div className="flex-1 flex items-center justify-between border border-[#E8D8FC] bg-[#F9FAFB] rounded p-2 w-full">
                <select
                  className="appearance-none flex-1 bg-transparent focus:outline-none text-[#9CA3AF]"
                  name="category"
                >
                  {/* <option value="">Select--</option> */}
                </select>
                <img src={arrowDown} alt="" />
              </div>
              <div>
                <p className="flex gap-2 items-center">
                  Suggested <img src={refresh} alt="" />
                </p>
                <small className="text-[#6B7280] text-[14px] leading-[21px]">
                  Select the skills and tools required for the project. (max 10
                  - Min 3)
                </small>
                <div>
                  <div className="flex items-center flex-wrap gap-3 w-full my-3 p-2">
                    <div className="flex items-center gap-2 text-nowrap border border-[#D1D5DB] p-2 rounded-full">
                      <img src={figma} alt="" />
                      <small className="text-[#1F2937] leading-5 text-[14px]">
                        Figma
                      </small>
                      <img className="cursor-pointer" src={addCircle} alt="" />
                    </div>
                    <div className="flex items-center gap-2 text-nowrap border border-[#D1D5DB] p-2 rounded-full">
                      <img src={adobeXd} alt="" />
                      <small className="text-[#1F2937] leading-5 text-[14px]">
                        Adobe XD
                      </small>
                      <img className="cursor-pointer" src={addCircle} alt="" />
                    </div>
                    <div className="flex items-center gap-2 text-nowrap border border-[#D1D5DB] p-2 rounded-full">
                      {/* <img src="/Adobe-xd.svg" alt="" /> */}
                      <small className="text-[#1F2937] leading-5 text-[14px]">
                        Prototyping
                      </small>
                      <img className="cursor-pointer" src={addCircle} alt="" />
                    </div>
                    <div className="flex items-center gap-2 text-nowrap border border-[#D1D5DB] p-2 rounded-full">
                      {/* <img src="/Adobe-xd.svg" alt="" /> */}
                      <small className="text-[#1F2937] leading-5 text-[14px]">
                        Graphics design
                      </small>
                      <img className="cursor-pointer" src={addCircle} alt="" />
                    </div>
                    <div className="flex items-center gap-2 text-nowrap border border-[#D1D5DB] p-2 rounded-full">
                      <img src={afterEffect} alt="" />
                      <small className="text-[#1F2937] leading-5 text-[14px]">
                        Adobe Ae
                      </small>
                      <img className="cursor-pointer" src={addCircle} alt="" />
                    </div>
                    <div className="flex items-center gap-2 text-nowrap border border-[#D1D5DB] p-2 rounded-full">
                      {/* <img src="/Adobe-xd.svg" alt="" /> */}
                      <small className="text-[#1F2937] leading-5 text-[14px]">
                        Product marketing
                      </small>
                      <img className="cursor-pointer" src={addCircle} alt="" />
                    </div>
                    <div className="flex items-center gap-2 text-nowrap border border-[#D1D5DB] p-2 rounded-full">
                      {/* <img src="/Adobe-xd.svg" alt="" /> */}
                      <small className="text-[#1F2937] leading-5 text-[14px]">
                        Product management
                      </small>
                      <img className="cursor-pointer" src={addCircle} alt="" />
                    </div>
                    <div className="flex items-center gap-2 text-nowrap border border-[#D1D5DB] p-2 rounded-full">
                      {/* <img src="/Adobe-xd.svg" alt="" /> */}
                      <small className="text-[#1F2937] leading-5 text-[14px]">
                        Front-end developement
                      </small>
                      <img className="cursor-pointer" src={addCircle} alt="" />
                    </div>
                    <div className="flex items-center gap-2 text-nowrap border border-[#D1D5DB] p-2 rounded-full">
                      <img src={react} alt="" />
                      <small className="text-[#1F2937] leading-5 text-[14px]">
                        React
                      </small>
                      <img className="cursor-pointer" src={addCircle} alt="" />
                    </div>
                    <div className="flex items-center gap-2 text-nowrap border border-[#D1D5DB] p-2 rounded-full">
                      <img src={flutter} alt="" />
                      <small className="text-[#1F2937] leading-5 text-[14px]">
                        Flutter
                      </small>
                      <img className="cursor-pointer" src={addCircle} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <div className="space-x-3">
              <button onClick={handleCancelModal} className="bg-white w-[150px] px-5 py-2 text-[#374151] rounded-md font-medium leading-6 capitalize cursor-pointer border border-[#E5E7EB]">
                cancel
              </button>
              <button className="bg-[#672A9F] w-[150px] px-5 py-2 text-[#F9FAFB] rounded-md font-medium leading-6 drop-shadow-md shadow-inner shadow-[#EEF0F340] drop-shadow-[#8D59BC80] capitalize cursor-pointer">
                <Link to={"/profile"}>create</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
