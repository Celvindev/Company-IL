import React, { useState } from 'react';
import "../../pages/career/Career.css";
import { FaChevronDown } from 'react-icons/fa';

const Contxt2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const options = ['Full Time', 'Part Time', 'Freelancer', 'Internship'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <div className="search-section">
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button type="button" className="search-icon">
            <svg width="60" height="40" viewBox="0 0 40 20">
              <path fillRule="" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule=""
              />
            </svg>
          </button>
          <div className="dropdown">
            <button type="button" className="dropdown-toggle" onClick={toggleDropdown}>
              <span>{selectedOption || 'Type of Job'}</span>
              <FaChevronDown className="dropdown-icon" />
            </button>
            {isOpen && (
              <ul className="dropdown-menu z-50 rounded-[20px] shadow border-2 flex-col justify-start items-start flex" >
                {options.map((option, index) => (
                  <li key={index} onClick={() => handleOptionClick(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contxt2;
