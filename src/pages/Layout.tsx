import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Header from "../components/Header";

const Layout = () => {
  return (
    <main>
      <SideBar />
      <section
        style={{ width: `calc(100% - 239px)` }}
        className="md:relative md:left-[239px] text-gray950"
      >
        <Header />
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
