const ProjectCardSkeleton = () => {
  return (
    <div className="h-[305px] w-full text-gray950">
      <div className="w-full h-[46px] relative">
        <div className="absolute bottom-0 left-0 w-12 h-12 bg-gray200 rounded-full animate-pulse"></div>
      </div>
      <div className="w-full h-[256px] relative bg-ash rounded-b-md border border-t-0 border-solid border-gray200">
        <div className="w-full h-full flex flex-col z-10 bg-white py-4 px-[15px] rounded-b-md gap-4 border border-y-0 border-solid border-gray200">
          <div className="h-[168px] w-full flex flex-col gap-6">
            <div className="h-[46px] w-full flex flex-col gap-[2px]">
              <div className="h-6 w-3/4 bg-gray200 animate-pulse"></div>
              <div className="h-4 w-1/2 bg-gray200 animate-pulse"></div>
            </div>
            <div className="h-[95px] w-full flex flex-col gap-2">
              <div className="h-4 w-1/4 bg-gray200 animate-pulse"></div>
              <div className="flex flex-wrap gap-[4.5px]">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-7 w-20 bg-gray200 animate-pulse rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-gray200"></div>
          <div className="h-6 w-full">
            <div className="flex gap-2 items-center h-full">
              <div className="h-6 w-6 bg-gray200 rounded-full animate-pulse"></div>
              <div className="h-4 w-20 bg-gray200 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;