import ProjectCard from "./ProjectCard";

const ProjectContainer = () => {
  const collab = [
    {
      id: 2,
      name: "MealMind",
      industry: "Health",
    },
    {
      id: 3,
      name: "VirtuVoyage",
      industry: "Travel",
    },
    {
      id: 4,
      name: "EcoBuddy",
      industry: "Environment",
    },
    {
      id: 5,
      name: "Class Edge",
      industry: "Education",
    },
    {
      id: 6,
      name: "Meta Moda",
      industry: "Web3",
    },
    {
      id: 7,
      name: "Flow Minder",
      industry: "Transportation",
    },
    {
      id: 8,
      name: "Project Namee",
      industry: "Health",
    },
    {
      id: 9,
      name: "Project Namee",
      industry: "Health",
    },
    {
      id: 10,
      name: "Project Namee",
      industry: "Health",
    },
  ];

  return (
    <section className="md:px-8 px-4 md:py-6 pt-6 pb-20 md:w-full w-screen">
      <section className="grid md:grid-cols-3 min-h-full gap-8 md:max-w-full max-w-screen">
        {collab.map((col) => {
          return <ProjectCard data={col} />;
        })}
      </section>
    </section>
  );
};

export default ProjectContainer;
