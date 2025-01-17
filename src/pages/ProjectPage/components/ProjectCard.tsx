import { useEffect, useState } from "react";
import logo from "/assets/Union.svg";
import ProjectDetails from "./ProjectDetails";
import Chip from "../../../components/Chip";

type PropsType = {
  data: {
    created_at: string;
    created_by: string;
    description: string;
    id: string;
    industry: string;
    participants: string[];
    project_views: number;
    requests: object[];
    required_roles: string[];
    required_stacks: string[];
    title: string;
    updated_at?: string;
    username?: string;
  };
};



const ProjectCard = ({ data }) => {



  return (
    <div ey={data.title}
      className="h-[302px] md:max-w-[304px] max-w-[358px] text-gray950"
    >
      <div className="w-full h-[46px] relative">
        {/* <img
          src={newTag}
          alt=""
          className="absolute top-[5px] z-10 -left-[2px]"
        /> */}
        <img src={logo} alt="" className="absolute bottom-0 left-0" />
        {!loading && (
          <div className="max-w-[99%] h-5 relative">
            {viewDetails && (
              <ProjectDetails state={handleViewDetails} data={data} />
            )}
            <div
              onClick={handleViewDetails}
              className="h-5 w-full absolute left-[2px] -bottom-[42px] flex justify-center items-center rounded-t-lg hover:-bottom-[30px] -z-[0] bg-gray950"
            >
              <span className="text-gray100 font-medium text-xs">View</span>
            </div>
          </div>
        )}
      </div>
      <div className="w-full h-[256px] relative bg-ash rounded-b-md border border-t-0 border-solid border-gray200">
        {loading ? (
          <div className="h-full w-full flex justify-center items-center">
            <div className="w-10 h-10 border-4 border-gray-800 border-solid border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col z-10 bg-white py-4 px-[15px] rounded-b-md gap-4 border border-y-0 border-solid border-gray200">
            <div className="h-[168px] w-full flex flex-col gap-6">
              <div className="h-[46px] w-full flex flex-col gap-[2px]">
                <p className="text-base font-medium">{data.title}</p>
                <p className="text-sm font-normal text-gray700">
                  {data.industry}
                </p>
              </div>
              <div className="h-[95px] w-full flex flex-col gap-2">
                <p className="text-xs font-normal text-gray700">Required</p>
                <div className="h-[68px] grid grid-cols-3 gap-2">
                  {data.required_roles.slice(0, 4).map((skill, index) => {
                    return (
                      <Chip key={index}>
                        {skill.length > 7 ? `${skill.slice(0, 7)}...` : skill}
                      </Chip>
                    );
                  })}

                  {data.required_roles.length > 3 && (
                    <span className="h-7 w-[43px] max-w-[131px] rounded-3xl bg-gray100 flex justify-center items-center">{`+${num}`}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="h-[1px] w-full bg-gray200"></div>
            <div className="h-6 w-full">
              <div className="flex gap-2 items-center h-full">
                <div className="h-6 w-6 bg-black rounded-full"></div>
                <span className="text-gray950 font-normal text-xs">
                  @{data.username}
                </span>
                <span className="text-gray300">-</span>
                <span className="text-gray700 font-normal text-xs">
                  Yesterday
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
