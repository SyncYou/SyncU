import { ComponentPropsWithoutRef, ReactNode, MouseEvent } from "react";

type PropsType = {
  children?: ReactNode;
  className?: ComponentPropsWithoutRef<"span">["className"];
  onClick?: (e: MouseEvent<HTMLSpanElement>) => void;
  active?: boolean;
};

const Chip = ({ children, className, onClick, active = false }: PropsType) => {
  return (
    <span
      onClick={onClick}
      className={`flex items-center justify-center text-sm px-2 min-w-[70px] text-center rounded-3xl border-[1.5px] ${
        active ? "border-brand600 text-brand600" : "border-gray300"
      } py-1 ${className}`}
    >
      {children}
    </span>
  );
};

export default Chip;