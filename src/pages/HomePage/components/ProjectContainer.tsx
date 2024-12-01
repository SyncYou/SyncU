const ProjectContainer = () => {
  const collab: number[] = [2, 3, 4, 5, 6, 7];

  return (
    <section className="grid md:grid-cols-3 items-center min-h-screen gap-8 md:max-w-full max-w-screen">
      {collab.map((col) => {
        return (
          <div
            key={col}
            className="h-[302px] md:max-w-[304px] max-w-[358px] flex flex-col items-end"
          >
            <div className="w-full">
              <div className="w-[112.72px] h-[17.41px] border-r-[19px] border-b-[17.41px] border-r-transparent border-b-ash"></div>
              <div className="rounder h-[28.59px] w-full border-r border-l border-[#d9d9d9] bg-ash"></div>
            </div>
            <div className="w-full h-[256px] relative bg-ash rounded-b-md border border-solid border-[#d9d9d9]"></div>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectContainer;
