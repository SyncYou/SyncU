import { MdClose } from "react-icons/md";
import check from "/signUp-imgs/check.svg";
import { IoCloseCircleSharp } from "react-icons/io5";
import { IoIosWarning } from "react-icons/io";

interface ToastProps {
  type: "success" | "error" | "warning";
  message: string;
  description: string;
}

const Toast: React.FC<ToastProps> = ({ type, message, description }) => {
  const checkType = () => {
    switch (type) {
      case "success":
        return <img src={check} alt="check" />;
      case "error":
        return <IoCloseCircleSharp size={25} color="#ff0000" />;
      case "warning":
        return <IoIosWarning size={25} color="#FFEB3B" />;
      default:
        return <img src={check} alt="check" />;
    }
  };

  return (
    <div className="w-[358px] md:w-[452px] h-[90px] rounded-lg bg-white p-5 my-3 mx-auto border border-[#E4E4E4] shadow shadow-[#0000001A] flex items-center gap-5">
      {checkType()}
      <div className="flex-1 flex flex-col items-start gap-1">
        <h2 className="text-nowrap font-semibold text-gray-950 leading-5 text-[14px]">
          {message}
        </h2>
        <p className="font-normal leading-4 text-[12px] text-nowrap text-gray-700">
          {description}
        </p>
      </div>
      <MdClose size={25} color="#73737F" />
    </div>
  );
};

export default Toast;
