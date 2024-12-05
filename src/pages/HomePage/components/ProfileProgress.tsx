import { NavLink } from "react-router-dom";
import red from "/assets/red.svg";
import blue from "/assets/blue.svg";
import purple from "/assets/purple.svg";
import avatar from "/assets/Avatars.svg";
import CircularProgess from "./CircularProgess";
import ProfileCards from "./ProfileCards";

const ProfileProgress = () => {
  return (
    <section className="fixed top-0 left-0 w-screen z-20 overflow-hidden flex justify-center items-center h-screen bg-[#12121266]">
      <div className="md:w-[824px] md:h-[674px] relative w-[358px] h-[458px] flex flex-col rounded-3xl gap-8 md:py-10 pt-6 pb-10 md:px-8 px-4 bg-white">
        <img src={blue} className="absolute top-0 left-0 rounded-3xl" alt="" />
        <img src={purple} className="absolute top-0" alt="" />
        <img src={red} className="absolute top-0 right-0 rounded-3xl" alt="" />
        <NavLink
          to="/"
          className="w-12 h-12 absolute z-20 top-6 md:right-10 right-5 p-[9.6px] text-[22px] text-gray500"
        >
          X
        </NavLink>
        <div className="md:h-[280px] flex flex-col gap-6 h-[224px] z-10 w-full md:w-[484px] mx-auto ">
          <div className="min-w-[118.9px] min-h-[134px] md:h-40 md:w-[153px] flex justify-center relative mx-auto">
            <div className="flex justify-center items-center md:w-32 md:h-32">
              <CircularProgess percentage={80} size={160}>
                <img src={avatar} alt="" />
              </CircularProgess>
            </div>
          </div>
          <div className="h-[76px] w-full flex flex-col gap-2 text-center">
            <h2 className="text-gray950 text-lg md:text-2xl font-semibold">
              Complete your profile
            </h2>
            <p className="text-gray700 text-sm md:text-lg font-normal  mx-auto">
              This will Increase your chances of getting accepted to work on
              projects.
            </p>
          </div>
        </div>
        <div className="md:h-[282px] h-[138px] z-10 md:w-full flex flex-col text-center gap-4">
          <h2 className="text-gray700">2/4 completed</h2>
          <ProfileCards />
        </div>
      </div>
    </section>
  );
};

export default ProfileProgress;
