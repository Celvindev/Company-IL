import React, { useState } from 'react'
import "../../pages/career/Career.css";

const Contxtt1 = () => {
  return (
    <div className="team-heading mt-10 w-[1280px]">
      <summary className="m-1 btn btcat btn-outline w-[180px] rounded-full bg-teal-500 text-a"> <span>We’re Hiring!</span></summary>
    <div className="team-heading mt-5 w-[1500px]">
      <h1 className='txtabc'>Be part of our mission</h1>
      <p> Were looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility.</p>
  </div>
  <ul className="hidden lg:flex mt-8 gap-2">
  <li ><summary className="m-1 btn btcat btn-outline w-[180px] rounded-full ">View all</summary></li>
  <li ><summary className="m-1 btn btcat btn-outline w-[180px] rounded-full ">Development</summary></li>
  <li ><summary className="m-1 btn btcat btn-outline w-[180px] rounded-full ">Design</summary></li>
  <li ><summary className="m-1 btn btcat btn-outline w-[180px] rounded-full ">Marketing</summary></li>
  <li ><summary className="m-1 btn btcat btn-outline w-[180px] rounded-full ">Finance</summary></li>
  <li ><summary className="m-1 btn btcat btn-outline w-[180px] rounded-full ">Management</summary></li>
</ul>
  </div>
  );
}

export default Contxtt1;
