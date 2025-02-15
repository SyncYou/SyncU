import { ComponentPropsWithoutRef, ReactNode } from "react";

interface PropsType {
  children?: ReactNode;
  classes?: ComponentPropsWithoutRef<"button">["className"];
  onClick?: ComponentPropsWithoutRef<"button">["onClick"];
}

const SecondaryButton = ({ children, classes, onClick }: PropsType) => {
  return (
    <button
      onClick={onClick}
      className={`bg-white border outline-none border-gray300 hover:bg-gray100 flex items-center justify-center gap-2 rounded-full font-medium text-base py-2 px-3 ${classes} `}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
