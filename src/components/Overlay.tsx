import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

const Overlay = ({ children }: PropsType) => {
  return (
    <section className="fixed top-0 left-0 w-screen z-20 flex justify-center items-center h-screen bg-[#12121266]">
      {children}
    </section>
  );
};

export default Overlay;
