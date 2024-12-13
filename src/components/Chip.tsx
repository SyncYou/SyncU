import { ReactNode } from "react";

type PropsType = {
  children?: ReactNode;
};

const Chip = ({ children }: PropsType) => {
  return (
    <span className="h-7 px-2 max-w-[131px] rounded-3xl border border-gray300">
      {children}
    </span>
  );
};

export default Chip;
