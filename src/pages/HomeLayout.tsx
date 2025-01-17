import { Outlet } from "react-router-dom";
import SideBar from "./HomePage/components/SideBar";
import Header from "./HomePage/components/Header";
import { useSidebar } from "../context/useSidebar";
import { useEffect } from "react";
import useAllFetch from "../hooks/useAllFetch";
import { useProjects, useUserData } from "../context/useUserData";

const Layout = () => {
  const { isOpen } = useSidebar();
  const { setUser } = useUserData();
  const { setProjects } = useProjects();

  const { data, projects } = useAllFetch();

  useEffect(() => {
    if (data) {
      setUser(data);
    }
    if (projects) {
      setProjects(projects.data);
    }
  }, [data]);

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
