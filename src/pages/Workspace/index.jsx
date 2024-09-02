import React from "react";
import WorkspaceSidebar from "../../components/Workspace/WorkspaceSidebar";
import WorkspaceNavbar from "../../components/Workspace/WorkspaceNavbar";
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <>
      <div className="flex">
        <div className="min-w-[263px] sticky top-0 left-0 min-h-dvh bg-[#F9FAFB]">
          <WorkspaceSidebar />
        </div>
        <div className="flex-1 border-l border-[#E5E7EB]">
          <div className="sticky top-0 right-0 bg-white z-10">
            <WorkspaceNavbar />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
