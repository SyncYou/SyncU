import { Outlet } from "react-router-dom";
import SideBar from "./Home/components/SideBar";
import Header from "./Home/components/Header";
import { useSidebar } from "../context/useSidebar";
import { useEffect } from "react";
import useFetchUserData from "../hooks/useFetchUserData";
import { useUserData } from "../context/useUserData";
<<<<<<< HEAD
import useProjectCardStore from "../store/useProjectCardStore";
import projectFile from "../pages/Home/utils/projectFile.json";
=======

>>>>>>> staging
const Layout = () => {
  const { isOpen } = useSidebar();
  const { setUser } = useUserData();

  const { data } = useFetchUserData();
<<<<<<< HEAD
  const setProjectFile = useProjectCardStore((state) => state.setProjectFile);
=======
>>>>>>> staging

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

<<<<<<< HEAD
  useEffect(() => {
    setProjectFile(projectFile);
  }, [setProjectFile]);

=======
>>>>>>> staging
  return (
    <main>
      <SideBar />
      <section
        className={`md:relative  ${
          isOpen ? "isOpen md:left-[239px]" : "isClosed md:left-[96px]"
        } text-gray950`}
      >
        <Header />
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
