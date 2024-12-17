import { ReactNode } from "react";

interface PropsType {
  children?: ReactNode;
  classes?: string;
  onClick?: () => void;
}

const SecondaryButton = ({ children, classes, onClick }: PropsType) => {
  return (
    <button
      onClick={onClick}
      className={`bg-white border outline-none border-gray300 hover:bg-gray100 py-4 px-6 flex items-center justify-center gap-2 rounded-full font-medium text-base ${classes}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
