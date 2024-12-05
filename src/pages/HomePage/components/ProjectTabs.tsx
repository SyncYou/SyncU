const ProjectTabs = () => {
  return (
    <section className="h-12 w-full bg-white">
      <div className="h-full w-full pl-8 pr-14 border-gray200 border-b">
        <div className="w-[266px] h-full project flex gap-4">
          <div className="w-[125px] h-12 flex active relative justify-center items-center">
            Created
          </div>
          <div className="w-[125px] h-12 flex relative justify-center items-center">
            Requested
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTabs;
