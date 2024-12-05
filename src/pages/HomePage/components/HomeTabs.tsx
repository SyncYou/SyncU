import { useEffect, useState } from "react";
import CategoriesTab from "./CategoriesTab";
import ProjectTag from "./ProjectTag";

const HomeTabs = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const handleScroll = () => {
    let currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <div>
      <div
        className={`absolute w-full transition-transform duration-300 ${
          isVisible ? "md:top-[76px] top-[48px]" : "top-0"
        }`}
      >
        <ProjectTag />
      </div>
      <div
        className={`absolute w-full transition-transform duration-300 ${
          isVisible ? "md:top-[149px] top-[112px]" : "md:top-[76px] top-[48px]"
        }`}
      >
        <CategoriesTab />
      </div>
    </div>
  );
};

export default HomeTabs;
