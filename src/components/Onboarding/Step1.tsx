import React, { useEffect, useState } from "react";
import onboarding from "/onboarding.svg";
import usercard from "/user-card.svg";
import arrowRight from "/arrow-right.svg";
import arrowLeft from "/arrow-left.svg";

interface Props {
    handlePrevStep: () => void;
    handleNextStep: () => void;
}

const Step1: React.FC<Props> = ({handlePrevStep, handleNextStep}) => {
  
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check initially
    checkMobile();
    
    // Add event listener
    window.addEventListener("resize", checkMobile);
    
    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <section className="h-dvh w-full bg-gradient-to-b from-[#B179F90D] to-[#B179F954] relative">
      <div className="pt-20 px-16">
        <h1 className="font-semibold tracking-tight text-center text-[32px] leading-[40px] text-primary md:text-left">
          Collaborate & build with like-minded techies.
        </h1>
      </div>
      <div className="mt-20 md:mt-10 relative">
        <img src={onboarding} alt="masked image" />
        <img
          className="absolute -bottom-12 right-0"
          src={usercard}
          alt="usercard"
        />
      </div>
      {isMobile ? (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-5 justify-center my-5">
            <div className="w-3 h-3 rounded-full bg-secondary">.</div>
            <div className="w-3 h-3 rounded-full border-[1.5px] border-[#96969c]">
              .
            </div>
          </div>
          <img onClick={handleNextStep} src={arrowRight} alt="" />
        </div>
      ) : (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center gap-5">
          <img onClick={handlePrevStep} src={arrowLeft} alt="" />
          <div className="flex items-center gap-5 justify-center my-5">
            <div className="w-3 h-3 rounded-full bg-secondary">.</div>
            <div className="w-3 h-3 rounded-full border-[1.5px] border-[#96969c]">
              .
            </div>
          </div>
          <img onClick={handleNextStep} src={arrowRight} alt="" />
        </div>
      )}
    </section>
  );
};

export default Step1;
