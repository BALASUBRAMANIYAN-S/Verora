"use client"

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type CountryCode = string;

const CountryCodeDropdown: React.FC = () => {
  const [selectedCode, setSelectedCode] = useState<CountryCode>("+91");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const codes: CountryCode[] = ["+91", "+1", "+44", "+61", "+81"];

  const handleSelect = (code: CountryCode) => {
    setSelectedCode(code);
    setIsOpen(false);
  };

  return (
    <div className="relative w-24">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3 py-2 border rounded-lg text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
      >
        {selectedCode}
        <FaChevronDown className="ml-1 text-xs" />
        
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-md">
          {codes.map((code) => (
            <li
              key={code}
              onClick={() => handleSelect(code)}
              className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              {code}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryCodeDropdown;
