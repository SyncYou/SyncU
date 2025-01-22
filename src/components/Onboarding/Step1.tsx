import React, { useEffect, useState } from "react";
import onboarding from "/onboarding.svg";
import usercard from "/user-card.svg";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

interface Props {
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const Step1: React.FC<Props> = ({ handlePrevStep, handleNextStep }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <section className="h-dvh w-full bg-[#F6F2FC] md:bg-[#8333D0] relative">
      <svg className="absolute top-[15rem] left-[4rem] hidden md:block" width="74" height="57" viewBox="0 0 74 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M56.4748 28.025C56.4748 43.5028 43.9276 56.05 28.4498 56.05C12.972 56.05 0.424805 43.5028 0.424805 28.025C0.424805 12.5472 12.972 0 28.4498 0C43.9276 0 56.4748 12.5472 56.4748 28.025ZM12.4848 28.025C12.4848 36.8423 19.6326 43.9901 28.4498 43.9901C37.2671 43.9901 44.4149 36.8423 44.4149 28.025C44.4149 19.2078 37.2671 12.06 28.4498 12.06C19.6326 12.06 12.4848 19.2078 12.4848 28.025Z" fill="#8F4BDD"/>
        <ellipse cx="66.45" cy="50.35" rx="7.12501" ry="6.65001" fill="#8F4BDD"/>
      </svg>

      <div className="pt-24 md:pt-[6.1rem] px-2 sm:px-16 sm:flex sm:items-center sm:justify-center w-full text-center ">
        <h1 className="font-inter font-semibold tracking-tight text-center text-[32px] leading-[40px] text-[#8333D0]  md:text-white md:w-[350px]">
          Collaborate & build with like-minded techies.
        </h1>
      </div>
      <div className="mt-0 md:mt-[4rem] relative w-full flex items-center justify-center overflow-hidden">
        <img
          className="md:w-[600px] h-[19rem] ml-3 md:ml-0"
          src={onboarding}
          alt="masked image"
        />
        <img
          className="h-[6.5rem] sm:h-[10rem] sm:right-16 sm:-bottom-[4.3rem] absolute md:-bottom-10 md:right-[0.2rem] md:w-[350px] w-[300px] bottom-8 -right-14"
          src={usercard}
          alt="usercard"
        />
      </div>
      {isMobile ? (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[138px]">
          
          <div className="flex items-center gap-5 justify-center my-5">
            <div className="w-3 h-3 rounded-full bg-secondary" />
            <div className="w-3 h-3 rounded-full border-[1.5px] border-[#96969c]" />
          </div>
          <div className="w-full flex justify-center items-center mt-10">
            {/* <IoArrowBackCircleOutline onClick={handlePrevStep} className="cursor-pointer h-10 w-10 text-black bg-white border-[#D6D6E0] outline-[#D6D6E0]" /> */}
            <IoArrowForwardCircleOutline onClick={handleNextStep} className="cursor-pointer h-10 w-10 text-black border-[#D6D6E0] outline-[#D6D6E0]" />
          </div>
        </div>
      ) : (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center gap-5">
          <IoArrowBackCircleOutline onClick={handlePrevStep} className="cursor-pointer h-10 w-10 text-white" />
          
          <div className="w-28 flex items-center gap-5 justify-center my-5">
            <div className="w-3 h-3 rounded-full bg-[#F5F5FA]" />
            <div className="w-3 h-3 rounded-full border-[1.5px] border-[#96969c]" />
          </div>
          <IoArrowForwardCircleOutline onClick={handleNextStep} className="cursor-pointer h-10 w-10 text-white" />
        </div>
      )}
    </section>
  );
};

export default Step1;
