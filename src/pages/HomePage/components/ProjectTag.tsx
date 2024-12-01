const ProjectTag = () => {
  return (
    <div className="md:h-[73px] h-[65px] md:py-4 py-3 md:px-8 font-medium border-b border-solid border-gray200">
      <div className="bg-gray100 w-80 h-[41px] p-1 relative md:m-0 mx-auto rounded-full flex text-sm gap-2 border border-solid border-gray200">
        <div className="h-6 w-[2px] absolute left-1/2 top-2 bg-gray200"></div>
        <div className="w-[148px] active-tab rounded-full py-2 px-4 h-full items-center justify-center flex">
          Projects
        </div>
        <div className="w-[148px] rounded-full py-2 px-4 h-full items-center justify-center flex">
          People
        </div>
      </div>
    </div>
  );
};

export default ProjectTag;
