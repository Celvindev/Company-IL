import React from 'react';
import "../../pages/career/Career.css";

const Contxt2 = () => {
  return (
    <>
      <div className='relative'>
        <div> <br/><br/>
          <hr/>
          <img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mt-7 mr-2" />
          <h2 className="text-NeonWhite text-[28px] font-['Montserrat'] mt-7 relative">Technical Mentor 
              <span className='absolute right-20'>Apply</span>
          </h2>
          <p className='text-NeonWhite text-[20px]'>We are looking for a Technical Mentor to join our team.</p>
          <ul className="hidden lg:flex mt-8 gap-2">
            <li ><summary className="m-1 btn btcat btn-outline w-[180px] rounded-full ">Remote</summary></li>
            <li ><summary className="m-1 btn btcat btn-outline w-[180px] rounded-full ">Full-time</summary></li>
          </ul>
      </div> <br/>
      <div className='relative'>
          <hr/>
          <img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mt-7 mr-2" />
          <h2 className="text-NeonWhite text-[28px] font-['Montserrat'] mt-7 relative">Product Designer
          <span className='absolute right-20 h-full'> Apply </span>
          </h2>
          <p className='text-NeonWhite text-[20px]'>We are looking for a mid-level product designer to join our team.</p>
          <ul className="hidden lg:flex mt-8 gap-2">
            <li ><summary className="m-1 btn btcat btn-outline w-[180px] rounded-full ">Remote</summary></li>
            <li ><summary className="m-1 btn btcat btn-outline w-[180px] rounded-full ">Full-time</summary></li>
          </ul>
      </div> <br/>
      <div className='relative'>
          <hr/>
          <img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mt-7 mr-2" />
          <h2 className="text-NeonWhite text-[28px] font-['Montserrat'] mt-7 relative">Product Designer
            <span className='absolute right-20 h-full'> Apply </span>
          </h2>
          <p className='text-NeonWhite text-[20px]'>We are looking for a mid-level product designer to join our team.</p>
          <ul className="hidden lg:flex mt-8 gap-2">
            <li ><summary className="m-1 btn btcat btn-outline w-[180px] rounded-full ">On-site</summary></li>
            <li ><summary className="m-1 btn btcat btn-outline w-[180px] rounded-full ">Full-time</summary></li>
          </ul>
      </div> <br/>
      <div className='relative'>
          <hr/>
          <img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mt-7 mr-2" />
          <h2 className="text-NeonWhite text-[28px] font-['Montserrat'] mt-7 relative">Product Designer
            <span className='absolute right-20 h-full'> Apply </span>
          </h2>
          <p className='text-NeonWhite text-[20px]'>We are looking for a mid-level product designer to join our team.</p>
          <ul className="hidden lg:flex mt-8 gap-2">
            <li ><summary className="m-1 btn btcat btn-outline w-[180px] rounded-full ">Intership</summary></li>
            <li ><summary className="m-1 btn btcat btn-outline w-[180px] rounded-full ">Full-time</summary></li>
          </ul> <br/>
          <hr/>
      </div>
      
        {/* <div className="grid grid-cols-3  items-start mx-auto md:items-center py-10">
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
        </div> */}
      </div> 
      
    </>
  );
}

export default Contxt2;
