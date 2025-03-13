import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
  blur: string;
};

const Overlay = ({ children, blur }: PropsType) => {
  return (
    <section
      className={`fixed top-0 left-0 w-screen z-40 flex justify-center items-center h-screen backdrop-blur-[${blur}]  bg-[#12121266]`}
    >
      {children}
    </section>
  );
};

export default Overlay;
