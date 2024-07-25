import React from "react";
import Sidebar from "../Sidebar";
import Main from "../Main";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

function Layout() {
  return (
    <>
      <div className="flex gap-3">
        <div className="min-w-[263px] sticky top-0 left-0 max-h-dvh">
          <Sidebar />
        </div>
        <div className="flex-1 border-l border-[#E5E7EB]">
          <div className="sticky top-0 right-0 bg-white z-10">
            <Navbar />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
