import { ReactNode } from "react";

type PropsType = {
  children?: ReactNode;
};

const Chip = ({ children }: PropsType) => {
  return (
    <span className="h-7 px-2 min-w-[87px] max-w-[131px] text-center rounded-3xl border border-gray300">
      {children}
    </span>
  );
};

export default Chip;
