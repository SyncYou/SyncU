import React, { useEffect, useState } from "react";
import folder from "/project-folder.svg";
import usercard from "/user-card-2.svg";
import arrowRight from "/arrow-right.svg";
import arrowLeft from "/arrow-left.svg";

interface Props {
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const Step2: React.FC<Props> = ({handlePrevStep, handleNextStep}) => {
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
      <div className="pt-20 px-16">
        <h1 className="font-semibold tracking-tight text-center text-[32px] leading-[40px] text-primary">
          Upskill by working on projects that interest you.
        </h1>
      </div>
      <div className="mt-28 md:mt-10 relative flex flex-col gap-20 items-center justify-center">
        <img className="" width={250} src={usercard} alt="masked image" />
        <img className="absolute -z-10 -bottom-72 left-0 right-0 w-full"src={folder} alt="usercard" />
      </div>
      {width && width < 768 ? (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-5 justify-center my-5">
            <div className="w-3 h-3 rounded-full bg-secondary">.</div>
            <div className="w-3 h-3 rounded-full border-[1.5px] border-[#96969c]">
              .
            </div>
          </div>
          <img src={arrowRight} alt="" />
        </div>
      ) : (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center gap-5">
          <img onClick={handlePrevStep} src={arrowLeft} alt="" />
          <div className="flex items-center gap-5 justify-center my-5">
            <div className="w-3 h-3 rounded-full border-[1.5px] border-[#96969c]">
              .
            </div>
            <div className="w-3 h-3 rounded-full bg-secondary">.</div>
          </div>
          <img onClick={handleNextStep} src={arrowRight} alt="" />
        </div>
      )}
    </section>
  );
};

export default Step2;
