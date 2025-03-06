import ProjectCardSkeleton from "./ProjectCardSkeleton";

const LayoutSkeleton = () => {
  return (
    <main className="flex h-screen w-screen bg-white">
      <section className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default LayoutSkeleton;
