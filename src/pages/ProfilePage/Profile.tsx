import SecondaryButton from "../../components/SecondaryButton";
import link from "/assets/link.svg";
import avatar from "/assets/Avatars.svg";
import { HiPencilSquare } from "react-icons/hi2";
import { BsArrowRight, BsShare } from "react-icons/bs";
import { BiBriefcase, BiCalendarPlus, BiFolderPlus } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { PiEyes } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa";
import Chip from "../../components/Chip";
import CircularProgess from "./components/CircularProgess";
import { useState } from "react";
import ProfileUpdate from "./components/ProfileUpdate";
import { useUserProgress } from "../../context/useUserProgress";

const Profile = () => {
  const [hover, setHover] = useState(false);
  const [progress, setProgress] = useState(false);
  const { status } = useUserProgress();

  const handleClick = () => {
    setHover((h) => !h);
  };

  const handleProgressModal = () => {
    setProgress((p) => !p);
  };

  return (
    <section className="px-8 pt-6 pb-4 w-full h-[90vh] flex gap-[10px]">
      <div className="w-[362px] h-[528px] rounded-2xl flex flex-col gap-6 pb-8  pr-4">
        <div className="flex flex-col gap-3 pt-4">
          <div className="flex justify-between">
            <div className="h-[96px] w-[96px] bg-gray950 rounded-full"></div>
            <div className="flex gap-4">
              <SecondaryButton classes="h-10 min-w-[129px] px-4 py-2">
                Edit profile <HiPencilSquare />
              </SecondaryButton>
              <div className="h-10 w-10 cursor-pointer rounded-[100px] flex justify-center items-center border-[0.5px] border-gray300">
                <BsShare className="rotate-180 text-[24px]" />
              </div>
            </div>
          </div>
          <div className="">
            <p className="font-semibold text-2xl text-gray950 mb-1">
              Vergil Ebong
            </p>
            <p className="font-normal text-sm text-gray700">@ogvergil</p>
          </div>
          <div className="py-[2px] px-2 border h-6 border-gray200 max-w-[202px] rounded-[100px] flex gap-1 items-center">
            <span className="w-2 h-2 rounded-full bg-success700"></span>
            {status === "Available" ? "Available to collaborate" : status}
          </div>
          <div className="flex flex-col h-[124px] w-[239px] border border-gray200 rounded-xl">
            .
          </div>
        </div>
        <hr />
        <div className="flex flex-col pr-4 gap-4">
          <div className="flex gap-2 items-center">
            <BiBriefcase /> <span>Product Designer</span>
          </div>
          <div className="flex gap-2 items-center">
            <FaLocationDot /> <span>Nigeria</span>
          </div>
          <div className="flex gap-2 items-center">
            <BiCalendarPlus /> <span>Joined 12 November, 2024</span>
          </div>
        </div>
        <hr />
        <div className="flex flex-col pr-4 gap-4">
          <div className="flex justify-between items-center h-5">
            <div className="flex gap-2 items-center">
              <PiEyes /> <span>Profile views</span>
            </div>
            <span className="my-auto">0</span>
          </div>
          <div className="flex justify-between items-center h-5">
            <div className="flex gap-2 items-center">
              <FaHandshake /> <span>Project contributions</span>
            </div>
            <span className="my-auto">0</span>
          </div>
          <div className="flex justify-between items-center h-5">
            <div className="flex gap-2 items-center">
              <BiFolderPlus /> <span>Projects Created</span>
            </div>
            <span className="my-auto">0</span>
          </div>
        </div>
      </div>
      <div className="w-[599px] flex flex-col gap-4 overflow-y-scroll scrollbar-none">
        <div className="w-full border border-gray200 py-4 flex flex-col gap-2 rounded-2xl">
          <p className="font-semibold text-base text-gray950 px-4">
            Skills/stacks
          </p>
          <div className="py-[10px] px-4 flex gap-[10px]">
            <Chip>Ui Design</Chip>
            <Chip>User researcher</Chip>
            <Chip>UX Design</Chip>
          </div>
        </div>
        <div className="w-full border border-gray200 py-4 flex flex-col gap-2 rounded-2xl">
          <p className="font-semibold text-base text-gray950 px-4">
            Project/links
          </p>
          <div className="h-28 w-full flex justify-center items-center">
            <div className="">
              <img className="mx-auto" src={link} alt="link-img" />
              <span>Nothing to show</span>
            </div>
          </div>
        </div>
      </div>
      {progress && <ProfileUpdate state={handleProgressModal} />}
      {hover ? (
        <div className="flex flex-col absolute bottom-5 right-5">
          <div className="h-[250px] w-[346px] border border-gray200 bg-white rounded-2xl px-4 pb-4 pt-[10px] flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="">
                <p className="font-semibold text-gray950 text-sm mb-1">
                  Your profile is incomplete
                </p>
                <p className="font-normal text-sm text text-gray700">
                  Increase your chances of collaborating with others
                </p>
              </div>
              <div className="text-gray900 text-sm">
                <p className="mb-2 flex gap-1 items-center">
                  <div className="w-3 h-3 rounded-full border border-gray400"></div>
                  <span>Profile description</span>
                </p>
                <p className="flex gap-1 items-center">
                  <div className="w-3 h-3 rounded-full border border-gray400"></div>
                  <span>Portfolio/links</span>
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-full h-2 bg-[#E7F9EE] rounded-3xl block relative">
                  <div className="w-[80%] h-full rounded-3xl bg-[#16BA52]"></div>
                </div>
                <span className="text-sm text-gray900 font-normal">80%</span>
              </div>
            </div>
            <hr />
            <SecondaryButton
              onClick={handleProgressModal}
              classes="h-11 w-[196px] px-6 py-[10px] gap-0"
            >
              Complete profile <BsArrowRight />
            </SecondaryButton>
          </div>
          <div
            onClick={handleClick}
            className="w-5 h-5 ml-auto rounded-full bg-gray950 cursor-pointer"
          ></div>
        </div>
      ) : (
        <div
          onClick={handleClick}
          className="absolute bottom-5 right-5 flex justify-center items-center w-32 h-32 cursor-pointer"
        >
          <CircularProgess>
            <img src={avatar} alt="" />
          </CircularProgess>
        </div>
      )}
    </section>
  );
};

export default Profile;
