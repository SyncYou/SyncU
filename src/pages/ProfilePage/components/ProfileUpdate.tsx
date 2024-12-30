import { BiLink, BiUser } from "react-icons/bi";
import Overlay from "../../../components/Overlay";
import { FaRegIdCard } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import SubSection from "../../../components/SubSection";
import { useUserProgress } from "../../../context/useUserProgress";
import { useState } from "react";
import AboutMe from "./ProfileUpdates/AboutMe";
import Username from "./ProfileUpdates/Username";
import Skills from "./ProfileUpdates/Skills";
import PortfolioLinks from "./ProfileUpdates/PortfolioLinks";

const ProfileUpdate = ({ state }: { state: () => void }) => {
  const { progress } = useUserProgress();

  const [currentView, setCurrentView] = useState("About Me");

  const toggleAboutMe = () => setCurrentView("About Me");
  const toggleUsername = () => setCurrentView("Username");
  const toggleSkills = () => setCurrentView("Skills/stacks");
  const toggleLinks = () => setCurrentView("Portfolio/links");

  return (
    <Overlay>
      <div className="w-[938px] h-[694px] bg-white rounded-3xl flex">
        <div className="w-[250px] h-full bg-[#F5F5FAB2] rounded-l-3xl flex flex-col gap-4 pt-4 pr-6 pb-10 pl-8">
          <h1 className="py-2 font-semibold text-gray950 text-lg">
            Edit profile
          </h1>
          <div className="flex flex-col gap-2 text-sm font-normal text-gray700">
            <div
              onClick={toggleAboutMe}
              className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer ${
                currentView === "About Me" && "profileActive"
              }`}
            >
              <BiUser />
              <span>About me</span>
            </div>
            <div
              onClick={toggleUsername}
              className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer ${
                currentView === "Username" && "profileActive"
              }`}
            >
              <FaRegIdCard />
              <span>Username</span>
            </div>
            <div
              onClick={toggleSkills}
              className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer ${
                currentView === "Skills/stacks" && "profileActive"
              }`}
            >
              <AiOutlineStar />
              <span>Skills/stacks</span>
            </div>
            <div
              onClick={toggleLinks}
              className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer ${
                currentView === "Portfolio/links" && "profileActive"
              }`}
            >
              <BiLink className="rotate-45" />
              <span>Portfolio/links</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[194px] px-3 pb-4 pt-[10px] rounded-lg border border-gray200">
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
            <hr />
            <div className="flex flex-col gap-2">
              <span className="text-xs text-gray900 font-normal">
                {progress}% completed
              </span>
              <div className="w-full h-2 bg-[#E7F9EE] rounded-3xl block relative">
                <div
                  className={`w-[${progress}%] h-full rounded-3xl bg-[#16BA52]`}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full rounded-r-3xl">
          <SubSection state={state} header={currentView} />
          {currentView === "About Me" && <AboutMe />}
          {currentView === "Username" && <Username />}
          {currentView === "Skills/stacks" && <Skills />}
          {currentView === "Portfolio/links" && <PortfolioLinks />}
        </div>
      </div>
    </Overlay>
  );
};

export default ProfileUpdate;
