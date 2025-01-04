import ProjectCard from "../../ProjectPage/components/ProjectCard";
import project from "../utils/projects.json";
// import HomeOnboardingTour from "./HomeOnboardingTour";
// import { useState } from "react";

const ProjectContainer = () => {
  // const [onboardingTour, setOnboardingTour] = useState(true);

  // const handleOnboarding = () => {
  //   setOnboardingTour((on) => !on);
  // };

  return (
    <section className="md:px-8 px-4 md:py-6 pt-6 pb-20 md:w-full w-screen">
      {/* {onboardingTour && <HomeOnboardingTour tourState={handleOnboarding} />} */}
      <section className="grid md:grid-cols-3 min-h-full gap-8 md:max-w-full max-w-screen">
        {project.map((col, index) => {
          return <ProjectCard key={index} data={col} />;
        })}
      </section>
    </section>
  );
};

export default ProjectContainer;
