import { useInfiniteQuery } from "@tanstack/react-query";
import ProjectCard from "../Projects/ProjectCard";
import { fetchProjects } from "../../utils/queries/fetch";
import { useCallback, useRef } from "react";
import ProjectCardSkeleton from "../../lib/ProjectCardSkeleton";
import { FiPlus } from "react-icons/fi";
import empty from "/assets/Empty.svg";
import useDisplayPostProjectForm from "../../context/useDisplayPostProjectForm";
import SecondaryButton from "../Reuseables/SecondaryButton";
import { useSearchStore } from "../../store/useSearchStore";

const ProjectContainer = () => {
  const { setShow } = useDisplayPostProjectForm();
  const { searchQuery, clearSearch } = useSearchStore();

  const { 
    data, 
    fetchNextPage, 
    hasNextPage, 
    isFetchingNextPage,
    isLoading,
    isError,
    error
  } = useInfiniteQuery({
    queryKey: ['projects', searchQuery],
    queryFn: (context) => fetchProjects({ 
      pageParam: context.pageParam, 
      query: searchQuery 
    }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    staleTime: 1000 * 60 * 5,
  });

  const observer = useRef<IntersectionObserver>();
  const lastProjectRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading || isFetchingNextPage || searchQuery) return;
  
      if (observer.current) observer.current.disconnect();
  
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
  
      if (node) observer.current.observe(node);
    },
    [isLoading, isFetchingNextPage, hasNextPage, fetchNextPage, searchQuery]
  );

  if (isError) {
    return (
      <div className="h-full w-full flex justify-center items-center pt-5">
        <p className="text-red-500">Error: {error?.message}</p>
      </div>
    );
  }

  if (isLoading && !data) {
    return (
      <section className="md:px-8 px-4 md:py-6 pt-6 pb-20 md:w-full w-screen">
        <section className="grid md:grid-cols-3 min-h-full gap-8 md:max-w-full max-w-screen">
          {[...Array(6)].map((_, index) => (
            <ProjectCardSkeleton key={`skeleton-${index}`} />
          ))}
        </section>
      </section>
    );
  }

  // Get all projects from pages
  const allProjects = data?.pages.flatMap(page => page.data) || [];
  const totalProjects = allProjects.length;

  // Empty state conditions
  if (searchQuery && totalProjects === 0) {
    return (
      <section className="md:px-8 px-4 md:py-6 pt-6 pb-20 md:w-full w-screen">
        <div className="mx-auto w-[261px] flex flex-col gap-6">
          <img className="w-[124px] mx-auto" src={empty} alt="No results" />
          <div className="">
            <h2 className="text-gray950 font-medium text-lg text-center mb-2">
              No projects found
            </h2>
            <p className="text-gray700 text-base font-medium text-center">
              No projects match your search "{searchQuery}"
            </p>
          </div>
          <SecondaryButton
            onClick={clearSearch}
            classes="w-[177px] h-11 mx-auto"
          >
            Clear search
          </SecondaryButton>
        </div>
      </section>
    );
  }

  if (!searchQuery && totalProjects === 0) {
    return (
      <section className="md:px-8 px-4 md:py-6 pt-6 pb-20 md:w-full w-screen">
        <div className="mx-auto w-[261px] flex flex-col gap-6">
          <img className="w-[124px] mx-auto" src={empty} alt="Empty state" />
          <div className="">
            <h2 className="text-gray950 font-medium text-lg text-center mb-2">
              Psst! it&apos;s empty in here.
            </h2>
            <p className="text-gray700 text-base font-medium text-center">
              No projects found. Be the first to create one!
            </p>
          </div>
          <SecondaryButton
            onClick={() => setShow(true)}
            classes="w-[177px] h-11 mx-auto"
          >
            <FiPlus />
            New Project
          </SecondaryButton>
        </div>
      </section>
    );
  }

  return (
    <section className="md:px-8 px-4 md:py-6 pt-6 pb-20 md:w-full w-screen">
      {searchQuery && (
        <div className="mb-4 text-gray-700">
          Showing results for: "{searchQuery}"
          <button 
            onClick={clearSearch}
            className="ml-2 text-brand-600 hover:underline"
          >
            (Clear)
          </button>
        </div>
      )}
      
      <section className="grid md:grid-cols-3 min-h-full gap-8 md:max-w-full max-w-screen">
        {allProjects.map((project, index) => {
          const isLastItem = index === allProjects.length - 1 && !searchQuery;
          
          return (
            <ProjectCard
              key={`${project.id}-${index}`}
              data={project}
              ref={isLastItem ? lastProjectRef : null}
            />
          );
        })}
      </section>

      {isFetchingNextPage && (
        <div className="h-full w-full flex justify-center items-center pt-5">
          <div className="w-10 h-10 border-4 border-gray-800 border-solid border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </section>
  );
};

export default ProjectContainer;