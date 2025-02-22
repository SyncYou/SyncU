import { useEffect, useState } from "react";

export default function SkeletonLoader() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full animate-pulse">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="h-8 w-24 bg-gray-200 rounded-md"></div>
        <div className="flex-1 mx-4 max-w-xl">
          <div className="h-10 bg-gray-200 rounded-full hidden md:block"></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-10 w-28 bg-gray-200 rounded-full hidden md:block"></div>
          <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4 border-b">
        <div className="flex justify-center gap-8 mb-6">
          <div className="h-6 w-20 bg-gray-200 rounded"></div>
          <div className="h-6 w-20 bg-gray-200 rounded"></div>
        </div>

        {/* Category filters */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-6 overflow-x-auto pb-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-5 w-20 bg-gray-200 rounded flex-shrink-0"
              ></div>
            ))}
          </div>
          <div className="h-8 w-20 bg-gray-200 rounded ml-4 flex-shrink-0"></div>
        </div>
      </div>

      {/* Project Grid */}
      <div className={`p-4 grid gap-4 ${isMobile ? "" : "md:grid-cols-3"}`}>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="border rounded-lg p-4 space-y-4">
            {/* Project Title */}
            <div className="h-6 w-1/3 bg-gray-200 rounded"></div>

            {/* Category */}
            <div className="h-4 w-1/4 bg-gray-200 rounded"></div>

            {/* Required Roles */}
            <div className="space-y-2">
              <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
              <div className="flex flex-wrap gap-2">
                {[...Array(3)].map((_, j) => (
                  <div
                    key={j}
                    className="h-8 w-28 bg-gray-200 rounded-full"
                  ></div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center gap-2 pt-2">
              <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-between items-center md:hidden">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-6 w-6 bg-gray-200 rounded"></div>
        ))}
      </div>
    </div>
  );
}
