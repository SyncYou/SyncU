import { FiSend } from "react-icons/fi";
import x from "/assets/X.svg";
import slack from "/assets/slack.svg";
import { BsShare } from "react-icons/bs";
import { HiOutlineBriefcase, HiOutlineLockClosed } from "react-icons/hi";
import { PiTagChevron } from "react-icons/pi";
import { FaRegCalendarMinus } from "react-icons/fa";
import { useState } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import Overlay from "../../../components/Overlay";
import PrimaryButton from "../../../components/PrimaryButton";
import SecondaryButton from "../../../components/SecondaryButton";
import Chip from "../../../components/Chip";

interface PropsType {
  state: () => void;
  data: {
    projectName: string;
    projectCategory: string;
    requiredSkills: string[];
    projectDescription: string;
    projectFeatures: {
      name: string;
      details: string[];
    }[];
    authorName: string;
    authorUsername: string;
  };
}

const ProjectDetails = ({ state, data }: PropsType) => {
  const [isRequested, setIsRequested] = useState<boolean>(false);

  const handleRequest = async () => {
    setIsRequested((i) => !i);
  };

  return (
    <Overlay>
      {isRequested && (
        <div className="absolute z-20 h-screen w-screen flex justify-center items-center">
          <div className="h-10 w-[145px] rounded-lg bg-[#2A2A33CC] flex items-center justify-center gap-[10px]">
            <IoCheckmarkCircle className="text-success700" />
            <span className="font-normal text-base text-white">
              Request sent
            </span>
          </div>
        </div>
      )}
      <div className="md:w-[1060px] md:h-[758px] text-gray950 flex flex-col gap-4 relative w-[358px] h-[458px] rounded-3xl bg-white">
        <div className="w-full h-[76px] flex justify-between border-gray200 border-b py-4 px-6">
          <div className="flex gap-2">
            <div className="h-11 w-11 rounded-full bg-black"></div>
            <div className="">
              <p className="font-normal text-base">@ameenu</p>
              <p className="font-normal text-xs text-gray700">
                Posted yesterday
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            {isRequested ? (
              <SecondaryButton
                onClick={handleRequest}
                classes="h-10 min-w-[146px]"
              >
                Withdraw Request
              </SecondaryButton>
            ) : (
              <PrimaryButton
                onClick={handleRequest}
                classes="h-10 min-w-[146px]"
              >
                Send Request
                <FiSend />
              </PrimaryButton>
            )}

            <div className="w-20 h-[32px] flex gap-4 my-auto">
              <button className="w-[32px] h-[32px] rounded-[80px] border-[0.4px] border-gray200">
                {"<"}
              </button>
              <button className="w-[32px] h-[32px] rounded-[80px] border-[0.4px] border-gray200">
                {">"}
              </button>
            </div>
            <div className="w-4 h-0 border-[2px] border-gray200 my-auto -rotate-90"></div>
            <img
              onClick={state}
              className="my-auto cursor-pointer"
              src={x}
              alt=""
            />
          </div>
        </div>
        <div className="w-full h-full px-6 flex justify-between">
          <div className="w-[670px] max-h-[661px] pr-5 flex flex-col gap-8 overflow-y-scroll scrollbar-thin scrollbar-thumb-white scrollbar-track-gray100">
            <div className="h-16 flex justify-between">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-2xl">{data.projectName}</h3>
                <p className="font-normal text-base text-gray700">
                  {data.projectCategory}
                </p>
              </div>
              <div className="h-10 w-10 cursor-pointer rounded-[100px] flex justify-center items-center border-[0.5px] border-gray300 my-auto">
                <BsShare className="rotate-180 text-[24px]" />
              </div>
            </div>
            <div className="h-[99px] flex flex-col gap-3">
              <p className="font-medium text-sm">Required</p>
              <div className="flex gap-[11px]">
                {data.requiredSkills.map((skill) => {
                  return <Chip>{skill}</Chip>;
                })}
              </div>
            </div>
            <div className="w-full">
              <p className="mb-3 text-gray950 font-medium">Description</p>
              <div className="text-[#374151] font-normal">
                <p>{data.projectDescription}</p>
                <h2 className="mt-4">Core Features</h2>
                <ol className="list-decimal pl-4">
                  {data.projectFeatures.map((feature) => {
                    return (
                      <li>
                        {feature.name}
                        <ul className="list-disc pl-4  mb-5">
                          {feature.details.map((detail) => (
                            <li>{detail}</li>
                          ))}
                        </ul>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
          <div className="h-[280px] w-[323px] flex flex-col text-gray700 text-sm gap-4 rounded-lg py-4 border border-gray200">
            <div className="px-3">
              <p className="m-1 flex gap-2 h-5 items-center">
                <HiOutlineBriefcase />
                Workspace
              </p>
              <div className="w-full h-10 flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <img className="" src={slack} alt="" />
                  <span className="text-gray950 font-medium">Slack</span>
                </div>
                <button className="flex items-center gap-2 opacity-65 border border-gray200 py-2 px-4 rounded-full h-10 w-[84px]">
                  <HiOutlineLockClosed />
                  Join
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-20">
                <div className="flex justify-between h-10 px-3 py-2">
                  <div className="flex items-center gap-2 w-20">
                    <PiTagChevron /> Industry
                  </div>
                  <p className="text-gray950 font-medium">
                    {data.projectCategory}
                  </p>
                </div>
                <div className="flex justify-between h-10 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <FaRegCalendarMinus />
                    Date Posted
                  </div>
                  <p className="text-gray950 font-medium">30.11.2024</p>
                </div>
              </div>
              <div className="w-full h-0 border-t border-gray200"></div>
              <div className="h-20">
                <div className="flex justify-between h-10 px-3 py-2">
                  <div className="">Project views</div>
                  <p className="text-gray950 font-medium">108</p>
                </div>
                <div className="flex justify-between h-10 px-3 py-2">
                  <div>Requests</div>
                  <p className="text-gray950 font-medium">40</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default ProjectDetails;
