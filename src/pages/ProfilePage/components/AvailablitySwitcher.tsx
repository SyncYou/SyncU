import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { useUserProgress } from "../../../context/useUserProgress";

const AvailablitySwitcher = () => {
  const { status, setStatus } = useUserProgress();

  return (
    <div className="flex flex-col absolute drop-shadow-xl top-7 gap-2 px-2 py-3 h-[124px] w-[239px] border border-gray200 rounded-xl bg-white">
      <div
        onClick={() => setStatus("Available")}
        className="flex cursor-pointer items-center text-sm text-gray800 font-normal gap-2 py-1 px-2 hover:bg-gray100"
      >
        <span className="w-2 h-2 rounded-full bg-success700"></span>
        <span>Available to collaborate</span>
        {status === "Available" && (
          <IoCheckmarkCircleOutline className="text-brand600 text-[20px] ml-auto" />
        )}
      </div>
      <div
        onClick={() => setStatus("Occupied")}
        className="flex cursor-pointer items-center text-sm text-gray800 font-normal gap-2 py-1 px-2 hover:bg-gray100"
      >
        <span className="w-2 h-2 rounded-full bg-[#F7BA36]"></span>
        <span>Occupied</span>
        {status === "Occupied" && (
          <IoCheckmarkCircleOutline className="text-brand600 text-[20px] ml-auto" />
        )}
      </div>
      <div
        onClick={() => setStatus("Not available")}
        className="flex cursor-pointer items-center text-sm text-gray800 font-normal gap-2 py-1 px-2 hover:bg-gray100"
      >
        <span className="w-2 h-2 rounded-full bg-gray500"></span>
        <span>Not available</span>
        {status === "Not available" && (
          <IoCheckmarkCircleOutline className="text-brand600 text-[20px] ml-auto" />
        )}
      </div>
    </div>
  );
};

export default AvailablitySwitcher;
