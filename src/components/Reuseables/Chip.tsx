import { ComponentPropsWithoutRef, ReactNode } from "react";

type PropsType = {
  children?: ReactNode;
  className?: ComponentPropsWithoutRef<"span">["className"];
};

const Chip = ({ children, className }: PropsType) => {
  return (
    <span
      className={`flex items-center justify-center min-h-7 text-sm px-2 min-w-[70px] text-center rounded-3xl border-[1.5px] border-gray300 ${className}`}
    >
      {children}
    </span>
  );
};

export default Chip;
