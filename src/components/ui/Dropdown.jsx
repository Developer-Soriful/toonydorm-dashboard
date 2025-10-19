// components/ui/Dropdown.js

import React from 'react';

const Dropdown = ({ label, options, selectedValue, onSelect }) => {
    return (
        // Outer wrapper matches the hardcoded styles for label and gap
        <div className="flex justify-center items-center gap-2 text-[#333] text-[11.9px]">
            <span>{label}:</span>
            <div className="relative w-[112px]">
                <select
                    id={`${label.toLowerCase()}-filter`}
                    value={selectedValue}
                    onChange={onSelect} // Use the passed onChange handler
                    // 💥 Updated classes to match your hardcoded design 💥
                    className="block h-[45px] w-full rounded-[6px] border border-gray-300 py-2 pl-3 pr-10 text-base text-gray-700 
                               focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 sm:text-sm 
                               appearance-none bg-white cursor-pointer" // Retain necessary utility classes
                >
                    {options.map(option => (
                        // Ensure key is unique
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                {/* Visual dropdown arrow using absolute positioning (retained) */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;