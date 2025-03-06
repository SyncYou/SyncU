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
  );
};

export default CountryModal;
