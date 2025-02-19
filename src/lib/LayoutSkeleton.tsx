
const LayoutSkeleton = () => {
  return (
    <main className="flex h-screen w-screen bg-white">
      {/* Sidebar Skeleton */}
      {/* <aside className="h-full w-24 bg-gray-100 p-4">
        <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="mt-8 space-y-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-10 w-10 bg-gray-200 rounded-lg animate-pulse"></div>
          ))}
        </div>
        <div className="mt-8 h-10 w-10 bg-gray-200 rounded-full animate-pulse"></div>
      </aside> */}

      {/* Main Content Area Skeleton */}
      <section className="flex-1 p-6">
        {/* Header Skeleton */}
        {/* <header className="h-16 bg-gray-100 rounded-lg animate-pulse mb-6"></header> */}

        {/* Project Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-100 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default LayoutSkeleton;