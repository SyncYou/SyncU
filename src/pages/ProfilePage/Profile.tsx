import SecondaryButton from "../../components/SecondaryButton";
import link from "/assets/link.svg";
import avatar from "/assets/Avatars.svg";
import { HiPencilSquare } from "react-icons/hi2";
import { BsShare } from "react-icons/bs";
import { BiBriefcase, BiCalendarPlus, BiFolderPlus } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { PiEyes } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa";
import Chip from "../../components/Chip";
import CircularProgess from "./components/CircularProgess";

const Profile = () => {
  return (
    <section className="px-8 pt-6 pb-4 w-full flex gap-[10px]">
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
          <select
            name="availability-switcher"
            id="availability-switcher"
            className="w-[210px] h-6 border border-gray200 rounded-[100px] px-2 outline-none"
          >
            <option value="Available to collaborate">
              Available to collaborate
            </option>
          </select>
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
      <div className="w-[599px] flex flex-col gap-4">
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
      <div className="absolute bottom-0 right-5 flex justify-center items-center w-32 h-32">
        <CircularProgess percentage={80}>
          <img src={avatar} alt="" />
        </CircularProgess>
      </div>
    </section>
  );
};

export default Profile;
