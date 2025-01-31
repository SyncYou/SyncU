import caret from "/signUp-imgs/CaretUpDown.svg";
import { StackDropDown } from "../../Reuseables/StackDropDown";
import Nav_Btn from "../../Reuseables/Nav_Btn";
import { Stack } from "./Stack";
import { Niches } from "./Niches";
import Toast from "../../Reuseables/Toast";
import { useLeftFill1 } from "../../../hooks/useLeftFill1";

export default function User_LeftFill1() {
  const {
    checked,
    setChecked,
    isModalOpen,
    setIsModalOpen,
    showNotifications,
    toast,
    selectedStack,
    handleAreaClick,
    isValid,
    userDetails,
    handleRequest,
  } = useLeftFill1();

  return (
    <>
      {showNotifications && toast && (
        <div className="absolute top-0 flex items-center justify-center w-full z-50">
          <Toast
            type={toast.type}
            message={toast.message}
            description={toast.description}
          />
        </div>
      )}
      <section>
        <div className="p-5 flex flex-col w-full">
          <div className="gap-6 self-stretch flex-col ">
            <h3 className="text-gray-600 font-medium text-sm my-5">
              STEP 3 of 5
            </h3>
            <div className="gap-3 flex-col my-5">
              <h1 className="text-[32px] font-semibold text-gray-950">
                What are you into?
              </h1>
              <p className="text-[#5C5C66] pt-3 text-lg font-normal leading-7">
                This will enable us match you to projects that suit you.
              </p>
            </div>
          </div>

          <div className="gap-4 *:items-center flex-col ">
            <h3 className="text-gray-800 font-normal text-sm my-3">
              Choose one
            </h3>
            <div className="flex flex-row gap-4 ">
              {Niches.map((items) => (
                <Stack
                  key={items.id}
                  stack={items.stack}
                  id={items.id}
                  setChecked={setChecked}
                  checked={checked}
                  items={items}
                  setIsModalOpen={setIsModalOpen}
                />
              ))}
            </div>
          </div>

          <div className="gap-4 flex-col relative h-full w-full my-5">
            <h3 className="text-gray-800 font-normal text-sm my-3 mb-5">
              Pick any option above to enable.
            </h3>
            <span className="flex items-center justify-between py-2 px-3 border border-solid border-gray-200 bg-gray-100 w-[62%] rounded-lg [&_img]:hover:cursor-pointer">
              <span className="flex items-start flex-col gap-2">
                <p className="text-gray-950 text-xs font-medium ">
                  Area of expertise
                </p>
                <p
                  className={`text-gray-400 text-base font-medium ${
                    userDetails.areaOfExpertise ? "text-gray-800" : ""
                  }`}
                >
                  {userDetails.areaOfExpertise || (selectedStack ? selectedStack.stack : "Select one---")}
                </p>
              </span>
              <img src={caret} alt="caretUpDown" />
            </span>
            {isModalOpen && selectedStack && (
              <StackDropDown
                style="top-[17vh]"
                selectedStack={selectedStack}
                handleAreaClick={handleAreaClick}
              />
            )}
          </div>
          <div className="pt-6">
            <Nav_Btn
              disabled={!isValid}
              showPrevious={true}
              handleRequest={handleRequest}
              navTo="/onboarding/stack"
              btn_Style={`${
                isValid
                  ? "bg-gray-950 text-opacity-100 text-white"
                  : "text-opacity-40 cursor-not-allowed"
              }`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
