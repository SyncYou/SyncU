import Body from "./components/Body";
// import ProfileProgress from "./components/ProfileProgress";
import SideBar from "./components/SideBar";

const Home = () => {
  return (
    <main className="md:flex">
      <SideBar />
      <Body />
      {/* <ProfileProgress /> */}
    </main>
  );
};

export default Home;
