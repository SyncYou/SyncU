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
    <section className="h-[100vh] overflow-hidden w-full bg-gradient-to-b from-[#B179F90D] to-[#B179F954] relative">
      <div className="pt-20 md:pt-10 px-16 flex items-center justify-center w-full text-center ">
        <h1 className="font-semibold tracking-tight text-center text-[32px] leading-[40px] text-primary w-[350px]">
          Collaborate & build with like-minded techies.
        </h1>
      </div>
      <div className="mt-24 md:mt-8 relative w-full flex items-center justify-center">
        <img
          className="md:w-[550px] ml-10 md:ml-0"
          src={onboarding}
          alt="masked image"
        />
        <img
          className="absolute md:-bottom-16 md:right-0 md:w-[350px] w-[300px] -bottom-8 -right-10"
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
          <img onClick={handleNextStep} src={arrowRight} alt="" />
        </div>
      ) : (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-5">
          <img onClick={handlePrevStep} src={arrowLeft} alt="" />
          <div className="flex items-center gap-5 justify-center my-5">
            <div className="w-3 h-3 rounded-full bg-secondary" />
            <div className="w-3 h-3 rounded-full border-[1.5px] border-[#96969c]" />
          </div>
          <img onClick={handleNextStep} src={arrowRight} alt="" />
        </div>
      )}
    </section>
  );
};

export default Step1;
