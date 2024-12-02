import ProjectCard from "../../../components/ProjectCard";

const ProjectContainer = () => {
  const collab: number[] = [2, 3, 4, 5, 6, 7];

  return (
    <section className="grid md:grid-cols-3 min-h-full gap-8 md:max-w-full max-w-screen">
      {collab.map((col) => {
        return <ProjectCard key={col} />;
      })}
    </section>
  );
};

export default ProjectContainer;
