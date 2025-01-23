import PeoplesContainer from "../../components/Home/PeoplesContainer";
import ProjectContainer from "../../components/Home/ProjectContainer";
import { useHomeTabs } from "../../context/useHomeTabs";

const Home = () => {
  const { view } = useHomeTabs();

  return (
    <main className="md:flex">
      {view === "Projects" ? <ProjectContainer /> : <PeoplesContainer />}
    </main>
  );
};

export default Home;
