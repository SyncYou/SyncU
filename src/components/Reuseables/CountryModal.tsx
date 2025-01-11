import React from "react";

interface CountryModalProps {
  onSelectCountry: (country: string) => void;
}

const CountryModal: React.FC<CountryModalProps> = ({ onSelectCountry }) => {
  const countries = [
    "Nigeria",
    "USA",
    "Canada",
    "UK",
    "Germany",
    "France",
    "India",
    "Australia",
  ];

  return (
    <div className="absolute bottom-24 left-0 p-2 h-[200px] w-full overflow-auto bg-[#ffffff] rounded-xl border border-[#E6E6F0] shadow-lg shadow-[#6969691A] mx-auto">
      <div>
        <ul>
          {countries.map((country) => (
            <li
              key={country}
              className="text-gray font-medium leading-6 text-[16px] p-2 cursor-pointer"
              onClick={() => onSelectCountry(country)}
            >
              {country}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CountryModal;
