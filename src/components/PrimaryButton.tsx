import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
  classes: string;
  onClick?: () => void;
}

const PrimaryButton = ({ children, classes, onClick }: PropsType) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gray950 py-4 px-6 hover:text-gray500 flex items-center justify-center gap-2 rounded-full text-gray100 font-medium text-base ${classes}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
