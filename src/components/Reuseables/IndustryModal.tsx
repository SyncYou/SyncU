import React from "react";

interface IndustryModalProps {
  onSelectIndustry: (industry: string) => void;
}

const IndustryModal: React.FC<IndustryModalProps> = ({ onSelectIndustry }) => {
  const industries = [
    "Tech",
  ];

  return (
      <div>
        <ul>
          {industries.map((industry) => (
            <li
              key={industry}
              className="text-gray font-medium leading-6 text-[16px] p-2 cursor-pointer"
              onClick={() => onSelectIndustry(industry)}
            >
              {industry}
            </li>
          ))}
        </ul>
      </div>
  );
};

export default IndustryModal;
