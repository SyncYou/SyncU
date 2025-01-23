import React from "react";
import profile from "/signUp-imgs/profile.svg";
import Send from "/signUp-imgs/Send.svg";
import whiteSent from "/signUp-imgs/Send1.svg";
import whiteShade from "/signUp-imgs/whiteShade.svg";
import target from "/target.svg";
import stack from "/stack-star.svg";
import { IoLocationOutline } from "react-icons/io5";
import { Loading } from "../Reuseables/Loading";
import Button from "../Reuseables/Button";
import { useLocation } from "react-router-dom";
import { useUserStore } from "../../store/UseUserStore";
import { useProfilePreview } from "../../hooks/useProfilePreview";

const ProfilePreview: React.FC = () => {
  const { userDetails } = useUserStore();
  const location = useLocation();
  const isOnboardingFinishing = location.pathname === "/onboarding/finishing";

  const { isLoading, startCollaborationHandler } = useProfilePreview(
    isOnboardingFinishing
  );

  return (
    <section className="bg-[#ffffff] border border-[#E6E6F0] shadow-xl shadow-[#69696917] p-[30px] rounded-[24px] flex flex-col items-center justify-between w-[450px] h-[35rem] mx-auto mt-16">
      <div className="flex flex-col items-center justify-between">
        <div
          className={`flex-col gap-1 ${
            userDetails.photoUrl
              ? "rounded-full  border-4 border-[#E5E5E9]"
              : ""
          }`}
        >
          <img
            src={userDetails.photoUrl || profile}
            alt="User Profile Image"
            className={`rounded-full object-cover border border-[#E5E5E9] w-[108px] h-[108px]`}
          />
        </div>
        <div className=" my-4 font-semibold flex items-center flex-col justify-center gap-2">
          <h2 className=" text-secondary leading-[32px] text-[24px] text-center">
            {" "}
            {
              userDetails.firstName || userDetails.lastName ?
              `${userDetails.firstName} ${userDetails.lastName}` :
              'Your name'
            }
            
          </h2>
          <small className="font-medium text-[#5C5C66] text-center text-[16px] leading-6 mb-3">
            {userDetails.username || '@username'}
          </small>

          {isOnboardingFinishing ? (
            <span className="w-[284px] flex items-center justify-center bg-gradient-to-r from-[#F77FED] to-[#8D83F9] font-semibold rounded-full opacity-100 p-1">
              <Button
                style="text-[16px] w-full relative border-none bg-gray-950 text-white"
                onClick={startCollaborationHandler}
              >
                <>
                  <span>Start collaborating</span>
                  <img src={whiteSent} alt="send Icon" />
                  <img src={whiteShade} alt="send Icon" className="absolute" />
                </>
              </Button>
            </span>
          ) : (
            <Button style="text-[16px] w-full text-opacity-40 w-[284px] [&_img]:opacity-40 bg-white cursor-not-allowed">
              <span>Start collaborating</span>
              <img src={Send} alt="send Icon" />
            </Button>
          )}
        </div>
      </div>
      <hr  className="w-full" />
      <div className="w-full space-y-5">
        <div className="flex items-center justify-between gap-2 w-full">
          <div className="flex items-center flex-1 gap-2">
            <IoLocationOutline />
            <p className="text-[#5C5C66] font-inter font-medium leading-6 text-[14px]">
              Location
            </p>
          </div>
          <small className="text-secondary leading-4 font-medium">
            {userDetails.countryOfResidence}
          </small>
        </div>

        <div className="flex items-center justify-between gap-2 w-full">
          <div className="flex items-center flex-1 gap-2">
            <img src={target} alt="location icon" />
            <p className="text-[#5C5C66] font-inter font-medium leading-6 text-[14px]">
              Area of expertise
            </p>
          </div>
          <small className="text-secondary leading-4 font-medium">
            {userDetails.areaOfExpertise || "N/A"}
          </small>
        </div>

        <div className="flex justify-between gap-4 w-full flex-col">
          <div className="flex items-center flex-1 gap-2">
            <img src={stack} alt="location icon" />
            <p className="text-[#5C5C66] font-medium font-inter leading-6 text-[14px]">
              Skills/stacks
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {userDetails.stacks.map((skill, index) => (
              <p
                key={index}
                className={`${
                  skill === "N/A" ? "border-dashed " : "border-solid shadow-xs"
                } border rounded-full border-[#D6D6E0] text-[0.875rem] font-inter py-1 px-5 text-[#2A2A33] leading-4 font-medium`}
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>

      {isLoading && <Loading />}
    </section>
  );
};

export default ProfilePreview;
