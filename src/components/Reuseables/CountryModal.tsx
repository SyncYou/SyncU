import React from "react";

const CountryModal: React.FC = () => {
  return (
    <div className="absolute bottom-24 left-0 p-2 h-[200px] w-full overflow-auto bg-[#ffffff] rounded-xl border border-[#E6E6F0] shadow-lg shadow-[#6969691A] mx-auto">
      {/* list of countries */}
      <div>
        <ul>
          {Array.from({ length: 8 }).map((_, idx) => (
            <li
              key={idx}
              className="text-gray font-medium leading-6 text-[16px] p-2"
            >
              Nigeria
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CountryModal;
