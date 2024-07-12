import Post from "../Posts";
import Recommended from "../Recommended";

export default function ProjectCollab() {
  return (
    <>
      <section>
        <div className="bg_effect py-5">
          <h1 className="text-[36px] font-semibold text-[#030712] leading-[43.2px] w-[342px] h-[86px]">
            Discover projects to collaborate on.
          </h1>
        </div>
        <div className="flex gap-5 space-x-10">
          <div>
            <div className="flex items-center justify-between">
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
            <div className="py-2 space-y-5 ">
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
          </div>
          <div className="min-w-[318px]">
            <Recommended />
          </div>
        </div>
      </section>
    </>
  );
}
