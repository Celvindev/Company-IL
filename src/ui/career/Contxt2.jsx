import React, { useState } from 'react';
import "../../pages/career/Career.css";
import { FaChevronDown } from 'react-icons/fa';

const Contxt2 = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(null);
  // const options = ['Full Time', 'Part Time', 'Freelancer', 'Internship'];

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleOptionClick = (option) => {
  //   setSelectedOption(option);
  //   setIsOpen(false);
  // };
  return (
    <>
      {/* <div className="container mx-auto">
        <div className="grid grid-cols-3  items-start mx-auto md:items-center py-10">
          <div className='col-span-2' >
            <div className="search-section">
              <div className="search-input-wrapper">
                <input type="text" placeholder="Search" className="input input-bordered text-2xl text-white md:w-auto lg:w-full bg-transparent py-9" />
                <button className="btn btn-ghost btn-circle text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1 relative md:mx-10">
            <button type="button" className="dropdown-toggle" onClick={toggleDropdown}>
              <span>{selectedOption || 'Type of Job'}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dropdown-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isOpen && (
              <ul className="dropdown-menu z-50 rounded-lg shadow border-2 flex-col justify-start items-start absolute mt-2 md:mt-4 w-[110%]">
                {options.map((option, index) => (
                  <li key={index} onClick={() => handleOptionClick(option)} className="dropdown-item cursor-pointer py-2 px-4 hover:bg-gray-100">
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Contxt2;
