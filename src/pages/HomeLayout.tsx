import { Outlet } from "react-router-dom";
import SideBar from "../components/Home/SideBar";
import Header from "../components/Home/Header";
import { useSidebar } from "../context/useSidebar";
import { useEffect } from "react";
import useFetchQueries from "../hooks/useFetchQueries";
import { useAlerts, useUserData } from "../context/useUserData";
import { Loading } from "../components/Reuseables/Loading";
import PostProjectForm from "../components/Projects/PostProjectForm";

const Layout = () => {
  const { isOpen } = useSidebar();
  const { setUser } = useUserData();
  const { setAlerts } = useAlerts();

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
      {userData.isLoading && <Loading />}
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
