import { ComponentPropsWithoutRef, ReactNode } from "react";

interface PropsType {
  children?: ReactNode;
  disabled?: ComponentPropsWithoutRef<"button">["disabled"];
  classes?: ComponentPropsWithoutRef<"button">["className"];
  onClick?: ComponentPropsWithoutRef<"button">["onClick"];
}

const PrimaryButton = ({ children, classes, disabled, onClick }: PropsType) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`bg-gray950 py-4 px-6 hover:text-gray500 flex items-center justify-center gap-2 rounded-full text-gray100 font-medium text-base ${classes} disabled:bg-white disabled:border disabled:opacity-65 disabled:text-opacity-80 disabled:text-gray700 disabled:border-gray200`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
