import Body from "./components/Body";
import SideBar from "./components/SideBar";

const Home = () => {
  return (
    <main className="md:flex">
      <SideBar />
      <Body />
    </main>
  );
};

export default Home;
