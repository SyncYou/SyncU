import { useInfiniteQuery } from "@tanstack/react-query";
import ProjectCard from "../Projects/ProjectCard";
import { fetchProjects } from "../../utils/queries/fetch";
import { useCallback, useRef } from "react";

const ProjectContainer = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["projects"],
      queryFn: fetchProjects,
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage.nextPage,
      staleTime: 1000 * 60 * 5,
      enabled: true,
    });

  const observer = useRef<IntersectionObserver | null>(null);
  const lastProjectRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingNextPage) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage]
  );

  return (
    <section className="md:px-8 px-4 md:py-6 pt-6 pb-20 md:w-full w-screen">
      <section className="grid md:grid-cols-3 min-h-full gap-8 md:max-w-full max-w-screen">
        {data?.pages.map((page, pageIndex) =>
          page.data.map((project, projectIndex) => {
            const isLastItem =
              pageIndex === data.pages.length - 1 &&
              projectIndex === page.data.length - 1;

            return (
              <ProjectCard
                key={project.id}
                data={project}
                fetching={isFetchingNextPage}
                ref={isLastItem ? lastProjectRef : null}
              />
            );
          })
        )}
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
