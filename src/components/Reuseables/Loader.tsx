import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="h-dvh w-full flex justify-center items-center pt-5">
      <div className="w-10 h-10 border-4 border-gray-800 border-solid border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
