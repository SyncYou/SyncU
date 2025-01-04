import { MdClose } from "react-icons/md";
import check from "/signUp-imgs/check.svg";

interface ToastProps {
  type: 'success' | 'error' | 'warning';
  message: string;
  description: string;
}

const Toast: React.FC<ToastProps> = ({ type, message, description }) => {
  // This function determines what icon or style to use based on the toast type
  const checkType = () => {
    switch (type) {
      case "success":
        return <img src={check} alt="check" />;
      case "error":
        return <img src={check} alt="error" />;
      case "warning":
        return <img src={check} alt="warning" />;
      default:
        return <div className="bg-blue-400" />;
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
