import { Outlet } from "react-router-dom";
import SideBar from "./HomePage/components/SideBar";
import Header from "./HomePage/components/Header";
import { useSidebar } from "../context/useSidebar";

const Layout = () => {
  const { isOpen } = useSidebar();

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
