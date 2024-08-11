import React from "react";
import collabs from "/collaborators/two-collabs.svg";
import syncoins from "/navbar/energy-ellipse.svg";
import cancel from "/icons/cancel-dark.svg";

const Toast = ({ setShowModal, setShowNotifications }) => {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleJoinProject = () => {
    setShowModal(false)
    setShowNotifications(true)

    // Simulate a successful join project
    setTimeout(() => {
      setShowNotifications(false);
    }, 3000);
  }

  return (
    <article className="bg-white shadow-xl shadow-[#64646429] relative cursor-pointer z-50">
      {/* Close btn */}
      <div className="absolute right-4 top-4">
        <img onClick={handleCloseModal} src={cancel} alt="" />
      </div>
      <div className="border-b border-[#E5E7EB] p-5 ">
        <div className="flex items-center justify-center">
          <img src={collabs} alt="" />
        </div>
        <div className="flex gap-2 flex-wrap items-center justify-center">
          <h2 className="font-semibold text-[#1F2937] leading-7 text-[18px]">
            You will be charged
          </h2>
          <img src={syncoins} alt="" />
          <small className="font-semibold text-[#1F2937] leading-7 text-[18px]">
            -5{" "}
          </small>
          <span className="font-semibold text-[#1F2937] leading-7 text-[18px]">
            to join
          </span>
          <span className="font-semibold text-[#1F2937] leading-7 text-[18px]">
            this project.
          </span>
        </div>
        <div className="text-center my-3">
          <p className="font-semibold leading-6 text-[#374151] w-[350px]">
            {" "}
            Note:{" "}
            <span className="font-normal">
              {" "}
              Your syncoins will be deducted only If you are accepted into the
              project team.
            </span>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 p-3">
        <button onClick={handleCloseModal} className="px-8 py-2 capitalize border border-[#E5E7EB] rounded-lg text-[#374151] font-semibold leading-6">
            cancel
        </button>
        <button onClick={handleJoinProject} type="submit" className="bg-[#672A9F] w-[150px] px-5 py-2 text-[#F9FAFB] rounded-lg font-semibold leading-6 drop-shadow-md shadow-inner shadow-[#EEF0F340] drop-shadow-[#8D59BC80] capitalize cursor-pointer">Proceed</button>
      </div>
    </article>
  );
};

export default Toast;
