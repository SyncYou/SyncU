import React, { useEffect, useState } from "react";
import { CardsData } from "../../../utils/types/Types";
import ProjectCard from "../../ProjectPage/components/ProjectCard";
import useFetchProjectData from "../../../hooks/useFetchProjectData";

const ProjectContainer = () => {
  const [data, setData] = useState<CardsData[]>([]);

  useEffect(() => {
    useFetchProjectData().then((data) => setData(data));
  }, []);

  return (
    <section className="md:px-8 px-4 md:py-6 pt-6 pb-20 md:w-full w-screen">
      <section className="grid md:grid-cols-3 min-h-full gap-8 md:max-w-full max-w-screen">
        {data.map((data) => {
          return <ProjectCard key={data.id} data={data} />;
        })}
      </section>
    </section>
  );
};

export default ProjectContainer;
