import React, { useEffect, useState } from "react";
import folder from "/project-folder.svg";
import usercard from "/user-card-2.svg";
import arrowRight from "/arrow-right.svg";
import arrowLeft from "/arrow-left.svg";
import zigzag from '/signUp-imgs/arrow.svg'

interface Props {
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const Step2: React.FC<Props> = ({ handlePrevStep, handleNextStep }) => {
  const [width, setWidth] = useState<number>();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <section className="h-[100vh] w-full bg-gradient-to-b from-[#B179F90D] to-[#B179F954] relative overflow-hidden">
      <div>
        <img className="absolute -z-50 top-1/2 -translate-y-1/2 md:scale-100 left-1/2 -translate-x-1/2" src={zigzag} alt="zigzag" />
      </div>
      <div className="pt-20 md:pt-10 px-16 flex items-center justify-center">
        <h1 className="font-semibold tracking-tight text-center text-[32px] leading-[40px] text-primary md:w-[400px]">
          Upskill by working on projects that interest you.
        </h1>
      </div>
      <div className="mt-28 md:mt-10 relative flex flex-col gap-20 items-center justify-center">
        <img className="w-[300px]" width={250} src={usercard} alt="masked image" />
        <img
          className="-z-10 scale-150 md:scale-90 md:absolute md:-bottom-80"
          src={folder}
          alt="usercard"
        />
      </div>
      {width && width < 768 ? (
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
            <div className="w-3 h-3 rounded-full border-[1.5px] border-[#96969c]" />
            <div className="w-3 h-3 rounded-full bg-secondary" />
          </div>
          <img onClick={handleNextStep} src={arrowRight} alt="" />
        </div>
      )}
    </section>
  );
};

export default Step2;
