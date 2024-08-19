import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import Main from "../Main";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import ProfileCompletion from "../ProfileCompletion";

function Layout() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check localStorage to see if the modal has already been shown
    const modalShown = localStorage.getItem("modalShown");

    if (location.pathname === "/") {
      if (!modalShown) {
        // If not, show the modal
        setTimeout(() => {
          setShowModal(true);
        }, 3000);

        // Set localStorage to prevent the modal from showing again
        localStorage.setItem("modalShown", "true");
      }
    }
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowModal(true);
  //   }, 3000);
  // }, []);
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

      {showModal && (
        <div className="bg_overlay">
          <ProfileCompletion setShowModal={setShowModal} />
        </div>
      )}
    </>
  );
}

export default Layout;
