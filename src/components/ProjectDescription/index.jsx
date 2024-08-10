import React from "react";
import { useParams } from "react-router-dom";
import dot from "/Dot.svg";
import syncoins from "/sidebar/energy-ellipse.svg";
import more from "/more-horizontal.svg";
import cancel from "/cancel-dark.svg";
import arrowDown from "/chevron-down.svg";
import dropDown from "/arrow-down.svg";
import arrowUp from "/arrow-up.svg";
import vergil from "/vergil.svg";
import fader from "/Fader.svg";
import arrowUpBlack from "/arrow-up-black.svg";
import figma from '/profile/Figma.svg'
import collab1 from '/collab1.svg'
import collab2 from '/collab2.svg'
import collab3 from '/collab3.svg'
import collab4 from '/collab4.svg'
import collab5 from '/collab5.svg'
import collab6 from '/collab6.svg'
import collab7 from '/collab7.svg'

const ProjectDescription = () => {
  const collaborators = [
    collab1, collab2, collab3, collab4, collab5, collab6, collab7
  ]
  const { id } = useParams();
  console.log(id);
  return (
    <section className="bg_overlay flex items-center justify-center  overflow-y-scroll">
      <div className="h-fit w-4/5 mx-auto bg-white rounded-lg shadow-lg shadow-[#6464644D]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E5E7EB] p-4">
          <div>
            <h1 className="text-[#1F2937] text-[25px] font-semibold leading-8">
              Syncu
            </h1>
            <div className="flex items-center gap-2">
              <p className="leading-6 text-[#6B7280]">Collaboration</p>
              <img src={dot} alt="" />
              <small className="leading-6 text-[#6B7280]">
                posted 1 hr ago
              </small>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <button className="bg-[#672A9F] px-5 py-2 drop-shadow-md shadow-inner shadow-[#EEF0F340] drop-shadow-[#8D59BC80] rounded-md flex items-center gap-1">
              <span className="text-[#F9FAFB] font-medium leading-6">
                Join project
              </span>
              <img src={syncoins} alt="" />
              <small className="text-[#FFFFFF] font-semibold leading-6">
                -5
              </small>
            </button>
            <img src={more} alt="" />
            <img src={cancel} alt="" />
          </div>
        </div>

        <div className="flex overflow-auto">
          <div>
            <div className="px-10 py-3">
              <div className="relative w-full">
                <h2 className="text-[#1F2937] font-semibold leading-6">
                  Description
                </h2>
                <p className="text-[#374151] leading-6 line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur. Cras vel sed eleifend
                  semper. Velit at eu est sed vulputate tincidunt vitae est.
                  Ultricies consectetur lorem vitae velit felis et dolor.
                  Viverra non nibh viverra platea nisl. Ipsum suspendisse lectus
                  egestas ultrices rutrum pretium eget porta. Integer neque ut
                  quam feugiat habitant libero. Vel sed elit non sed.
                </p>
                <img
                  className="absolute top-0 w-full h-[100px]"
                  src={fader}
                  alt=""
                />
              </div>
              <div className="flex items-center justify-center">
                <button className="flex items-center justify-center w-[130px] gap-2 z-50 p-2 border-2 border-[#E5E7EB] rounded-lg">
                  <span className="z-50 text-[#374151] font-medium leading-5 text-nowrap">
                    Read more
                  </span>
                  <img className="z-50" src={arrowDown} alt="" />
                </button>
              </div>
            </div>
            <form className="border-b px-10 pb-5">
              <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] rounded-lg border-2 border-[#E5E7EB] p-2 my-2">
                <img src={vergil} alt="" />
                <input
                  className="flex-1 bg-transparent focus:outline-none"
                  type="text"
                  placeholder="Type a comment..."
                />
                <button className="bg-[#D1D5DB] rounded-full p-1" type="submit">
                  <img src={arrowUp} alt="" />
                </button>
              </div>
            </form>

            <div className="px-10">
              <div className="flex items-center justify-between p-2">
                <div className="flex-1">
                  <h2 className="font-semibold text-[#374151] text-[14px] flex items-center gap-1">
                    <span className="text-[#6B7280] text-[14px] leading-5 font-normal">
                      1
                    </span>
                    Comments
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="text-[#374151] leading-5 text-[14px] font-semibold">
                    Sort by:
                  </h2>
                  <p className="flex items-center gap-2 text-[#374151] leading-5 text-[14px]">
                    Latest
                    <img src={dropDown} alt="" />
                  </p>
                </div>
              </div>

              <div>
                {/* Comment */}
                <div className="flex items-start gap-3">
                  <div>
                    <img src={vergil} alt="" />
                  </div>
                  <div className="flex-1">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-[#374151] font-semibold leading-5 text-[14px]">
                          Karen Jimmy
                        </h3>
                        <small className="text-[12px] text-[#6B7280] leading-[18px]">
                          8 July, 2024
                        </small>
                      </div>
                      <div>
                        <p className="text-[#374151] leading-6 py-2">
                          This is a comment...
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <button className="flex items-center gap-1 text-[#6B7280] leading-5 text-[14px]">
                        <img src={arrowUpBlack} alt="" />
                        Upvote
                      </button>
                      <button className="text-[#6B7280] leading-5 text-[14px]">
                        Reply
                      </button>
                    </div>
                  </div>
                  <div>
                    <img src={more} alt="" />
                  </div>
                </div>
                {/* reply */}
                <div className="pl-10 my-3">
                  <div className="flex items-start gap-3">
                    <div>
                      <img src={vergil} alt="" />
                    </div>
                    <div className="flex-1">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-[#374151] font-semibold leading-5 text-[14px]">
                            Karen Jimmy
                          </h3>
                          <small className="text-[12px] text-[#6B7280] leading-[18px]">
                            8 July, 2024
                          </small>
                        </div>
                        <div>
                          <p className="text-[#374151] leading-6 py-2">
                            This is a reply...
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-5">
                        <button className="flex items-center gap-1 text-[#6B7280] leading-5 text-[14px]">
                          <img src={arrowUpBlack} alt="" />
                          Upvote
                        </button>
                        <button className="text-[#6B7280] leading-5 text-[14px]">
                          Reply
                        </button>
                      </div>
                    </div>
                    <div>
                      <img src={more} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[1000px] border-l border-[#E5E7EB] p-5">
            {/* Required toolstack */}
            <div className="border border-[#E5E7EB] rounded-lg p-5">
              <h2 className="text-[#1F2937] font-semibold leading-6 border-b border-[#E5E7EB] pb-2">Required skills/toolstacks</h2>

              <div className="relative flex items-center flex-wrap gap-3 w-full my-3 p-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-md">
               <div className='flex items-center gap-2 p-2 border border-[#D1D5DB] rounded-full'>
                <img src={figma} alt="" />
                <small className='text-[#1F2937] capitalize'>figma</small>
               </div>
               <div className='flex items-center gap-2 p-2 border border-[#D1D5DB] rounded-full'>
                {/* <img src={figma} alt="" /> */}
                <small className='text-[#1F2937] capitalize text-nowrap'>UI design</small>
               </div>
               <div className='flex items-center gap-2 p-2 border border-[#D1D5DB] rounded-full'>
                {/* <img src={figma} alt="" /> */}
                <small className='text-[#1F2937] capitalize text-nowrap'>User Experience design</small>
               </div>
               <div className='flex items-center gap-2 p-2 border border-[#D1D5DB] rounded-full'>
                {/* <img src={figma} alt="" /> */}
                <small className='text-[#1F2937] capitalize text-nowrap'>product design</small>
               </div>
               <div className='flex items-center gap-2 p-2 border border-[#D1D5DB] rounded-full'>
                {/* <img src={figma} alt="" /> */}
                <small className='text-[#1F2937] capitalize text-nowrap'>3D design</small>
               </div>
               {/* button */}
               <button className=" absolute bottom-1 left-2/4 -translate-x-1/2 bg-[#ffffffa6] flex items-center justify-center w-[130px] gap-2 z-50 p-2 border-2 border-[#E5E7EB] rounded-lg">
                  <span className="z-50 text-[#374151] font-medium leading-5 text-nowrap">
                    See 4 more
                  </span>
                  <img className="z-50" src={arrowDown} alt="" />
                </button>
                </div>
            </div>

{/* creator */}
            <div className="my-3">
              <h2 className="text-[#1F2937] leading-6 font-semibold my-3">Created by</h2>

              <div className="border border-[#D1D5DB] rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <img src={vergil} alt="" />
                    <button className="border border-[#E5E7EB] text-[#374151] text-[14px] font-medium leading-5 p-2 rounded-lg">View profile</button>
                  </div>
                  <div>
                    <h3 className="text-[#1F2937] font-medium leading-6">Vergil Ebong <span className="text-[#6B7280] text-[14px] leading-[16.8px]">@vergildesigns</span></h3>
                    <p className="text-[#374151] leading-5 text-[14px]">Co-founder @ Syncu || Product designer || Framer developer.</p>
                  </div>
              </div>
            </div>
            
            {/* collaborators */}
            <div>
              <div className="flex items-center gap-3">
              <h2 className="text-[#1F2937] leading-6 font-semibold">Collaborators</h2>
              <img src={dot} alt="" />
              <small className="text-[#6B7280] leading-6">8</small>
              </div>

              <div className="flex items-center gap-5 flex-wrap my-3">
                {collaborators.map((collab, i) => (
                  <img src={collab} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
