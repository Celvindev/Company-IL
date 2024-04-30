import React from 'react';
import "../../pages/news/News.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { FaChevronDown } from 'react-icons/fa';
import Content1 from '../../assets/news/12.png';



function fontjahanam() {
  
}
function Contxtt1() {
  const styleObj = {
    fontSize: 47,
    textAlign: "Left",
    paddingTop: "10px"
  }
  const anaknya = {
    fontSize: 18,
    color: "#181823",
    textAlign: "Left",
    paddingTop: "10px"
  }
  
  return (
    
    <div className="team-heading mt-10 w-[1280px]">
      <details className="dropdown mt-8">
        <summary className="m-1 btn btcat btn-outline w-[150px] rounded-full font-normal">Category <i className="fas fa-chevron-down"></i></summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </details>
      
      <h1 className='txtabc' >Discover Nice Articles and News Here</h1>
      <p style={anaknya}>
      All The Aticles and News of The Site Have Been <b>Update Today</b> and You Can Find Your <b>Articles and News</b> Quickly and Without any Problems
      </p>
    
    
<ul className="hidden lg:flex mt-8 gap-10 ">
  <li>
    <label className="input input-bordered m-1 btn btcat btn-outline w-[400px] rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
      <input type="text" className="grow "  placeholder="Search " />
    </label>
    </li>
  <li ><summary className="m-1 btn btcat btn-outline w-[80px] rounded-full ">All</summary></li>
  <li ><summary className="m-1 btn btcat btn-outline w-[150px] rounded-full ">Technology</summary></li>
  <li ><summary className="m-1 btn btcat btn-outline w-[100px] rounded-full ">Mobile</summary></li>
  <li ><summary className="m-1 btn btcat btn-outline w-[100px] rounded-full ">Game</summary></li>
  <li ><summary className="m-1 btn btcat btn-outline w-[200px] rounded-full ">Hybrid Cloud and AI</summary></li>
</ul>
    


    {/* masuk berita */}



<div className="flex mt-20 w-full">
  <div className="card grid w-[590px] h-[600px] card bg-white rounded-box ">
  <div className="card-body ">
    <h1 className="card-title ">RMIT University's Visit to Infinite Learning</h1>
    <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
  </div>
<div className="divider divider-horizontal"></div>
    <ul>
      <li>
        <div className="grid w-[570px] h-[290px] card bg-white rounded-box place-items-center">content2</div>
          <div className="grid w-[570px] h-[290px] mt-5 card bg-white rounded-box place-items-center">content3</div>
      </li>
    </ul>
</div>

<div className="flex mt-20 w-full">
    <ul>
      <li>
        <div className="grid w-[570px] h-[290px] card bg-white rounded-box place-items-center">content2</div>
          <div className="grid w-[570px] h-[290px] mt-5 card bg-white rounded-box place-items-center">content3</div>
      </li>
    </ul>
    <div className="divider divider-horizontal"></div> 
  <div className="grid w-[590px] h-[600px] card bg-white rounded-box place-items-center">Content</div>
 
</div>

</div>



  );
}

export default Contxtt1;
