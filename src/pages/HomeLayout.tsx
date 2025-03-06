import { Outlet } from "react-router-dom";
import SideBar from "../components/Home/SideBar";
import Header from "../components/Home/Header";
import { useSidebar } from "../context/useSidebar";
import { useEffect } from "react";
import useFetchQueries from "../hooks/useFetchQueries";
import { useAlerts, useUserData } from "../context/useUserData";
import PostProjectForm from "../components/Projects/PostProjectForm";

const Layout = () => {
  const { isOpen } = useSidebar();
  const { setUser } = useUserData();
  const { setAlerts } = useAlerts();
  // const {loading} = useAuth()

  const { userData, notifications } = useFetchQueries();

  useEffect(() => {
    if (userData.data) {
      setUser(userData.data);
    }
    if (notifications.data) {
      setAlerts(notifications.data);
    }
  }, [userData.data, notifications.data]);

  return (
    <main>
      <SideBar />
      <PostProjectForm />

      <section
        className={`md:relative  ${
          isOpen ? "md:w-[calc(100%_-_239px)]  md:left-[239px]" : "md:w-[calc(100%_-_96px)] md:left-[96px]"
        } text-gray950 w-full`}
      >
        <Header />
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
