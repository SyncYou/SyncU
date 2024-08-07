import React from "react";
import { Link } from "react-router-dom";

const ProfileCompletion = ({ setShowModal }) => {
  const handleCloseModal = () => {
    setShowModal((prev) => !prev);
  }
  return (
    <section className="flex items-center justify-center h-full w-full">
      <div className="bg-white relative rounded-lg py-5 w-[772px] shadow-md shadow-[#00000029]">
        <div className="w-full border-b border-[#6B7280] py-2 px-4">
          {/* close button */}
          <div className="absolute top-5 right-5 cursor-pointer">
            <img
              onClick={handleCloseModal}
              className="cursor-pointer"
              src="/src/assets/cancel-dark.svg"
              alt=""
            />
          </div>
          <div className="flex-1 w-[576px]">
            <h1 className="font-semibold leading-[28.8px] text-[20px] text-[#1F2937]">
              Complete your profile
            </h1>
            <p className="leading-6 text-[14px] text-[#6B7280]">
              Complete your profile and recieve syncoins you can use to create
              and collaborate on projects
            </p>
          </div>
        </div>

        <div className="flex border-b border-[#D1D5DB]">
          <div className="py-2 min-w-[453px]">
            <div className="flex gap-3 items-start p-3 border-b border-[#D1D5DB]">
              <img src="/src/assets/progress.svg" alt="" />
              <div className="space-y-1">
                <h2 className="font-semibold text-[#1F2937] leading-6 text-[18px]">
                  Add a profile picture
                </h2>
                <p className="leading-6 text-[14px] text-[#6B7280]">
                  This will increase your chances of getting accepted to work on
                  a project and get discovered by recruiters.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start p-3 border-b border-[#D1D5DB]">
              <img src="/src/assets/progress.svg" alt="" />
              <div className="space-y-1">
                <h2 className="font-semibold text-[#1F2937] leading-6 text-[18px]">
                  Add a profile description
                </h2>
                <p className="leading-6 text-[14px] text-[#6B7280]">
                  This will help other users know and understand who you are.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start p-3">
              <img src="/src/assets/progress.svg" alt="" />
              <div className="space-y-1">
                <h2 className="font-semibold text-[#1F2937] leading-6 text-[18px]">
                  Add your social links (0/1)
                </h2>
                <p className="leading-6 text-[14px] text-[#6B7280]">
                  Add atleast 1 or more social links so people can easily reach
                  out to you
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center min-w-[319px] border-l border-[#D1D5DB] relative">
            <img className="w-[60px] h-[60px]" src="/src/assets/Profile.svg" alt="" />
            <small className="leading-6 text-center text-[14px] text-[#374151]">
              25% completed
            </small>
            <h2 className="text-[#1F2937] text-center leading-6 text-[18px] font-semibold">
              You’re almost done!
            </h2>
            <div className="py-[5px] px-[8px] my-2">
              <p className="text-[12px] text-[#6B7280] leading-5">
                Complete your profile now and recieve
              </p>
              <div className="flex items-center gap-2 w-full justify-center my-1">
                <img src="/src/assets/energy-ellipse.svg" alt="" />
                <small className="font-semibold text-[#374151] leading-6">
                  +50
                </small>
              </div>
            </div>
            {/* polygon */}
            <div className="absolute -left-[2.5px]">
              <img src="/src/assets/Polygon.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="p-2 flex items-center justify-end">
          <div className="space-x-3">
            <button
              className="bg-[#672A9F] w-[150px] px-5 py-2 text-[#F9FAFB] rounded-md font-medium leading-6 drop-shadow-md shadow-inner shadow-[#EEF0F340] drop-shadow-[#8D59BC80] capitalize cursor-pointer"
            >
              <Link onClick={handleCloseModal} to={'/profile'}>
              let's do it
              </Link>
            </button>
            <button
            onClick={handleCloseModal}
              className="bg-white w-[150px] px-5 py-2 text-[#374151] rounded-md font-medium leading-6 capitalize cursor-pointer border border-[#E5E7EB]"
            >
              I'll do it later
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCompletion;
