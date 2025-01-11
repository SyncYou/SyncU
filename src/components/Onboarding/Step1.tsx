import React, { useEffect, useState } from "react";
import onboarding from "/onboarding.svg";
import usercard from "/user-card.svg";
import arrowRight from "/arrow-right.svg";
import arrowLeft from "/arrow-left.svg";

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
    <section className="h-dvh w-full bg-[#8333D0] relative">
      <svg className="absolute top-[15rem] left-[4rem]" width="74" height="57" viewBox="0 0 74 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M56.4748 28.025C56.4748 43.5028 43.9276 56.05 28.4498 56.05C12.972 56.05 0.424805 43.5028 0.424805 28.025C0.424805 12.5472 12.972 0 28.4498 0C43.9276 0 56.4748 12.5472 56.4748 28.025ZM12.4848 28.025C12.4848 36.8423 19.6326 43.9901 28.4498 43.9901C37.2671 43.9901 44.4149 36.8423 44.4149 28.025C44.4149 19.2078 37.2671 12.06 28.4498 12.06C19.6326 12.06 12.4848 19.2078 12.4848 28.025Z" fill="#8F4BDD"/>
        <ellipse cx="66.45" cy="50.35" rx="7.12501" ry="6.65001" fill="#8F4BDD"/>
      </svg>

      <div className="pt-20 md:pt-[6.1rem] px-16 flex items-center justify-center w-full text-center ">
        <h1 className="font-inter font-semibold tracking-tight text-center text-[32px] leading-[40px] text-white w-[350px]">
          Collaborate & build with like-minded techies.
        </h1>
      </div>
      <div className="mt-24 md:mt-[4rem] relative w-full flex items-center justify-center">
        <img
          className="md:w-[600px] ml-10 md:ml-0"
          src={onboarding}
          alt="masked image"
        />
        <img
          className="h-[13.5rem] absolute md:-bottom-14 md:right-[5rem] md:w-[350px] w-[300px] -bottom-8 -right-10"
          src={usercard}
          alt="usercard"
        />
      </div>
      {isMobile ? (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-5 justify-center my-5">
            <div className="w-3 h-3 rounded-full bg-secondary" />
            <div className="w-3 h-3 rounded-full border-[1.5px] border-[#96969c]" />
          </div>
          <img onClick={handleNextStep} className="" src={arrowRight} alt="" />
        </div>
      ) : (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-5">
          <img onClick={handlePrevStep} className="cursor-pointer bg-transparent h-10 w-10" src={arrowLeft} alt="" />
          
          <div className="w-28 flex items-center gap-5 justify-center my-5">
            <div className="w-3 h-3 rounded-full bg-[#F5F5FA]" />
            <div className="w-3 h-3 rounded-full border-[1.5px] border-[#96969c]" />
          </div>
          <img onClick={handleNextStep} className="cursor-pointer h-10 w-10" src={arrowRight} alt="" />
        </div>
      )}
    </section>
  );
};

export default Step1;
