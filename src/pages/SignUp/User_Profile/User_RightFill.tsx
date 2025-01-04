import { useEffect, useState } from "react";
import Send from "/signUp-imgs/Send.svg";
import whiteSent from "/signUp-imgs/Send1.svg";
import whiteShade from "/signUp-imgs/whiteShade.svg";
import target from "/signUp-imgs/Target.svg";
import Stack from "/signUp-imgs/Stack-Star.svg";
import { IoLocationOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import profile from "/signUp-imgs/profile.svg";
import Button from "../../../components/styles/Reuse/Button";
import { useUserStore } from "../../../store/UseUserStore";
import { BsArrowLeft } from "react-icons/bs";
import { Loading } from "../../../components/styles/Reuse/Loading";

interface UserRightFillProps {
  rightStyle: string;
}

export function User_RightFill({ rightStyle }: UserRightFillProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { userDetails, setCurrentStep, currentStep } = useUserStore();
  const location = useLocation();
  const navigate = useNavigate();

  function handlePrev() {
    const prevStep = currentStep - 1;
    setCurrentStep(prevStep);
    navigate(-1);
  }

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLoading) {
      timer = setTimeout(() => {
        navigate("/");
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [isLoading, navigate]);

  return (
    <>
      <section className="flex flex-col justify-center items-center h-full gap-10 bg-gray-100 py-[100px] pl-[56px] pr-[41px]">
        <div
          className={`px-[31px] py-[39px] flex flex-col items-center gap-8 border border-gray-200 rounded-3xl bg-white shadow-rightShadow [&_div]:flex [&_div]:items-center w-full ${rightStyle}`}
        >
          <div className="gap-6 flex-col">
            <div className="gap-4 flex-col">
              <div
                className={`flex-col gap-1 ${
                  userDetails.photoUrl
                    ? "rounded-full  border-4 border-[#E5E5E9]"
                    : ""
                }`}
              >
                {
                  <img
                    src={userDetails.photoUrl || profile}
                    alt="User Profile Image "
                    className={`rounded-full object-cover ${
                      userDetails.photoUrl ? "w-[108px] h-[108px]" : ""
                    } `}
                  />
                }
              </div>
              <div className="flex-col gap-1 [&_span]:text-gray-800 [&_span]:font-medium [&_span]:text-base">
                <h2 className="text-2xl font-semibold text-gray-950">
                  {userDetails.firstName} {userDetails.lastName}
                </h2>
                <span>{userDetails.username}</span>
              </div>
            </div>

            {location.pathname === "/finishing" ? (
              <span className="w-[284px] flex items-center justify-center bg-gradient-to-r from-[#F77FED] to-[#8D83F9] font-semibold rounded-full opacity-100 p-1">
                <Button
                  style="text-[16px] w-full relative border-none bg-gray-950 text-white"
                  onClick={() => setIsLoading(!isLoading)}
                >
                  <>
                    <span>Start collaborating</span>
                    <img src={whiteSent} alt="send Icon" />
                    <img
                      src={whiteShade}
                      alt="send Icon"
                      className="absolute"
                    />
                  </>
                </Button>
              </span>
            ) : (
              <Button style="text-[16px] w-full text-opacity-40 w-[284px] [&_img]:opacity-40 bg-white cursor-not-allowed">
                <span>Start collaborating</span>{" "}
                <img src={Send} alt="send Icon" />
              </Button>
            )}
          </div>

          <hr className="border-gray-200 w-full" />

          <div className="gap-6 w-full flex-col">
            <div className="flex-row justify-between w-full [&_p]:text-gray-800 [&_p]:font-medium [&_p]:text-sm">
              <span className="flex items-center gap-2">
                <span className="*:w-[22px] *:h-[22px]">
                  <IoLocationOutline />
                </span>
                <p>Location</p>
              </span>
              <p className="text-gray-950">{userDetails.countryOfResidence}</p>
            </div>
            <div className="flex-row justify-between w-full [&_p]:text-gray-800 [&_p]:font-medium [&_p]:text-sm">
              <span className="flex items-center gap-2">
                <img
                  src={target}
                  alt="target_icon"
                  className="w-[22px] h-[22px]"
                />
                <p>Area of expertise</p>
              </span>
              <p className="text-gray-950">{userDetails.areaOfExpertise || "N/A"}</p>
            </div>
            <span className="flex-col flex gap-4 w-full items-start [&_p]:text-gray-800 [&_p]:font-medium [&_p]:text-sm">
              <span className="flex items-center gap-2">
                <img
                  src={Stack}
                  alt="Stack-Star"
                  className="*:w-[22px] *:h-[22px]"
                />
                <p>Skills/stacks</p>
              </span>
              <div className="gap-4 [&_p]:text-gray-950 [&_p]:rounded-3xl [&_p]:border-gray-300 [&_p]:border [&_p]:py-1 [&_p]:px-[20px] w-full">
                {userDetails.stacks.map((skill, index) => (
                  <p
                    key={index}
                    className={`${
                      skill === "N/A"
                        ? "border-dashed "
                        : "border-solid shadow-xs"
                    }`}
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </span>
          </div>
        </div>

        {location.pathname === "/finishing" && (
          <Button
            onClick={handlePrev}
            style="rounded-full py-[12px] px-[12px] bg-white shadow-xs"
          >
            <BsArrowLeft />
          </Button>
        )}

        {/* Loading component */}
        {isLoading && <Loading />}
      </section>
    </>
  );
}
