import React, { useState } from 'react';
import "../../pages/news/News.css";
import "@fortawesome/fontawesome-free/css/all.css";

function Title() {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [rotatedIndexes, setRotatedIndexes] = useState([]);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
      setRotatedIndexes(rotatedIndexes.filter(i => i !== index));
    } else {
      setExpandedIndex(index);
      setRotatedIndexes([...rotatedIndexes, index]);
    }
  };

  const getMarginBottom = (index) => {
    return expandedIndex === index ? '200px' : '0';
  };

  const isRotated = (index) => {
    return rotatedIndexes.includes(index);
  };
  const styleObj = {
    fontSize: 47,
    textAlign: "Left",
    paddingTop: "10px"
  }
  const anaknya = {
    fontSize: 18,
    color: "#ffff",
    textAlign: "Left",
    paddingTop: "10px"
  }

  return (

    <div className="team-heading mt-10 w-[1280px]">
      <h1 className='txtabc'>Discover Nice Articles and News Here</h1>
      <p style={anaknya}>
        All The Aticles and News of The Site Have Been <b>Update Today</b> and You Can Find Your <b>Articles and News</b> Quickly and Without any Problems
      </p>


      <ul className="hidden lg:flex mt-1 gap-10">
        <li>
          <label className="input input-bordered m-1 btn btcat btn-outline w-[400px] rounded-full ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            <input type="text" className="grow " placeholder="Search " />
          </label>
        </li>
        <li ><summary className="m-1 btn btcat btn-outline w-[80px] rounded-full ">All</summary></li>
        <li ><summary className="m-1 btn btcat btn-outline w-[150px] rounded-full ">Technology</summary></li>
        <li ><summary className="m-1 btn btcat btn-outline w-[100px] rounded-full ">Mobile</summary></li>
        <li ><summary className="m-1 btn btcat btn-outline w-[100px] rounded-full ">Game</summary></li>
        <li ><summary className="m-1 btn btcat btn-outline w-[200px] rounded-full ">Hybrid Cloud and AI</summary></li>
      </ul>
    </div>
  );
}

export default Title;
