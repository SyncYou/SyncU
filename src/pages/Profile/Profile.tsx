import SecondaryButton from "../../components/Reuseables/SecondaryButton";
import link from "/assets/link.svg";
import avatar from "/assets/Avatars.svg";
import { HiPencilSquare } from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";
import { GoShareAndroid } from "react-icons/go";
import { BiBriefcase, BiFolderPlus } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";
import { PiEyes, PiHandshake, PiCalendarPlus } from "react-icons/pi";
import Chip from "../../components/Reuseables/Chip";
import CircularProgess from "../../components/ProfileScreen/CircularProgess";
import { useState } from "react";
import ProfileUpdate from "../../components/ProfileScreen/ProfileUpdate";
import { useUserProgress } from "../../context/useUserProgress";
import AvailablitySwitcher from "../../components/ProfileScreen/AvailablitySwitcher";
import { useUserData } from "../../context/useUserData";

const Profile = () => {
  const [hover, setHover] = useState(false);
  const [progress, setProgress] = useState(false);
  const [showSwitcher, setShowSwitcher] = useState(false);
  const { status } = useUserProgress();

  // Custom Hooks
  const { user } = useUserData();
  const {
    firstName,
    lastName,
    username,
    stacks,
    areaOfExpertise,
    photoUrl,
    countryOfResidence,
  } = user;

  const handleClick = () => {
    setHover((h) => !h);
  };

  const handleProgressModal = () => {
    setProgress((p) => !p);
  };

  return (
    <section className="px-8 pt-6 pb-4 w-full grid grid-cols-[342px,_auto]  lg:grid-cols-[372px,_auto] gap-[10px] lg:gap-6 overflow-hidden h-[90vh]">
      <div className="w-full min-h-[528px] h-fit rounded-2xl flex flex-col gap-6 pb-8 px-4 shadow-rightShadow">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <div className="h-[96px] w-[96px] rounded-full border border-gray200">
              <img src={photoUrl} className="w-full rounded-full" alt="" />
            </div>
            <div className="flex gap-4">
              <SecondaryButton
                onClick={handleProgressModal}
                classes="h-10 py-1 text-sm px-1"
              >
                <HiPencilSquare className="text-base"/> Edit profile
              </SecondaryButton>
              <div className="h-10 w-10 cursor-pointer rounded-[100px] flex justify-center items-center border-[0.5px] border-gray300">
                <GoShareAndroid className="text-[22px]" />
              </div>
            </div>
          </div>
          <div className="">
            <p className="font-semibold text-2xl text-gray950 mb-1">
              {firstName} {lastName}
            </p>
            <p className="font-normal text-sm text-gray700">@{username}</p>
          </div>
          <div className="flex relative">
            <div
              onClick={() => setShowSwitcher(!showSwitcher)}
              className="py-[2px] px-2 border h-6 border-gray200 rounded-[100px] text-sm flex items-center gap-1 flex-nowrap cursor-pointer"
            >
              <span
                className={`w-2 h-2 rounded-full  ${
                  status === "Available" && "bg-success700"
                } ${status === "Occupied" && "bg-[#F7BA36]"}
                ${status === "Not available" && "bg-gray500"}
                `}
              ></span>
              <span className="text-[#40404D]">
              {status === "Available" ? "Available to collaborate" : status} 
              </span>
              <IoIosArrowDown />
            </div>
            {showSwitcher && <AvailablitySwitcher />}
          </div>
        </div>
        <hr />
        <div className="flex flex-col pr-4 gap-4 text-sm">
          <div className="flex gap-2 items-center">
            <BiBriefcase className="text-[0.95rem]" /> <span>{areaOfExpertise}</span>
          </div>
          <div className="flex gap-2 items-center">
            <SlLocationPin className="text-[0.95rem]" /> <span>{countryOfResidence}</span>
          </div>
          <div className="flex gap-2 items-center">
            <PiCalendarPlus className="text-[1rem]" /> <span>Joined 12 November, 2024</span>
          </div>
        </div>
        <hr />
        <div className="flex flex-col pr-4 gap-4 text-sm">
          <div className="flex justify-between items-center h-5">
            <div className="flex gap-2 items-center">
              <PiEyes className="text-base" /> <span>Profile views</span>
            </div>
            <span className="my-auto">0</span>
          </div>
          <div className="flex justify-between items-center h-5">
            <div className="flex gap-2 items-center">
              <PiHandshake className="text-base" /> <span>Project contributions</span>
            </div>
            <span className="my-auto">0</span>
          </div>
          <div className="flex justify-between items-center h-5">
            <div className="flex gap-2 items-center">
              <BiFolderPlus className="text-base" /> <span>Projects Created</span>
            </div>
            <span className="my-auto">0</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 overflow-y-scroll scrollbar-none max-w-[900px]">
        <div className="w-full border border-gray200 py-4 flex flex-col flex-wrap gap-2 rounded-2xl shadow">
          <p className="font-semibold text-base text-gray950 px-4">
            Skills or stacks
          </p>
          <div className="py-[10px] px-4 flex gap-3 flex-wrap">
            {stacks.map((stack, idx) => {
              return <div key={idx} className="flex justify-center items-center">
                <Chip>{stack}</Chip>
              </div>
            })}
          </div>
        </div>
        <div className="w-full border border-gray200 py-4 flex flex-col gap-2 rounded-2xl shadow">
          <p className="font-semibold text-base text-gray950 px-4">
            Portfolio or social links
          </p>
          <div className="h-72 w-full flex justify-center items-center">
            <div className="">
              <img className="mx-auto" src={link} alt="link-img" />
              <span>Nothing to show</span>
            </div>
          </div>
        </div>
      </div>
      {progress && <ProfileUpdate state={handleProgressModal} />}
      {hover ? (
        <div className="flex flex-col fixed bottom-16 right-14">
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
              classes="h-11 py-[10px] gap-0 w-fit text-sm font-medium px-2"
            >
              Complete profile <BsArrowRight />
            </SecondaryButton>
          </div>
          <div
            onClick={handleClick}
            className="w-8 h-8 flex justify-center items-center ml-auto mt-2 rounded-full bg-gray950 cursor-pointer"
          >
            <RxCross2 className="z-50 text-white text-base"/>
          </div>
        </div>
      ) : (
        <div
          onClick={handleClick}
          className="fixed bottom-8 right-10 flex justify-center items-center w-[7.5rem] h-[6.5rem] cursor-pointer"
        >
          <CircularProgess>
            <img className="h-20 w-20" src={avatar} alt="" />
          </CircularProgess>
        </div>
      )}
    </section>
  );
};

export default Profile;
