import Header from "./Header";
import ProjectContainer from "./ProjectContainer";

const Body = () => {
  return (
    <section className="sidebar md:relative md:left-[239px] text-gray950">
      <Header />
      <section className="md:px-8 px-4 py-6 md:w-full w-screen">
        <ProjectContainer />
      </section>
    </section>
  );
};

export default Body;
