import { useEffect, useState } from "react";
import ProjectPost from "../ProjectPost";
import useFetch from "../../utils/hooks/useFetch";
import { Link, Outlet } from "react-router-dom";
// import Recommended from "../Recommended";

export default function ProjectCollab() {
  const [showDescription, setShowDescription] = useState(false)
  const {
    data: posts,
    isPending,
    error,
  } = useFetch("http://localhost:5000/posts");

  return (
    <>
      <section>
        <div className="bg_effect py-5 pl-[48px]">
          <h1 className="text-[36px] font-semibold text-[#030712] leading-[43.2px] w-[342px] h-[86px]">
            Discover projects to collaborate on.
          </h1>
        </div>

        <div className="flex items-center justify-between border-b border-[#E5E7EB] py-3 pl-[48px] pr-[56px] sticky top-[87px] bg-white z-10">
          <div>
            <small className="py-2 px-4 bg-[#1F2937] text-white text-[14px] leading-[16.8px] font-semibold w-[48px] h-[17px] rounded-md mx-2">
              For you
            </small>
            <small className="py-2 px-4 bg-[#f3f5f7] text-[#6B7280] text-[14px] leading-[16.8px] font-medium w-[98px] h-[17px] rounded-md mx-2">
              By connections
            </small>
          </div>
          <div className="px-3 flex items-center gap-3">
            <button className="flex items-center gap-2 border border-[#E5E7EB] rounded-lg capitalize py-2 px-3">
              <img src="/filter-vertical.svg" alt="" />
              <span>Filter</span>
            </button>
            <button className="flex items-center gap-2 border border-[#E5E7EB] rounded-lg py-2 px-3 bg-[#672A9F] text-[#F9FAFB]">
              <img src="/Vector.svg" alt="" />
              <span>Create project</span>
            </button>
          </div>
        </div>

        <div className="py-2 space-y-5 pl-[48px] w-full max-w-[564px] mx-auto">
          {posts &&
            posts.map((post) =>(
              <ProjectPost key={post.id} post={post} />
            )
               )}
               <div>
                <Outlet/>
               </div>
        </div>
      </section>
    </>
  );
}
