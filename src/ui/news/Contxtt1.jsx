import React, { useState } from 'react';
import "../../pages/news/News.css";
import "@fortawesome/fontawesome-free/css/all.css";
// import { FaChevronDown } from 'react-icons/fa';
// import Content1 from '../../assets/news/12.png';
import Pertama from '../../assets/news/Pertama.png';

function Contxtt1() {
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
      {/* <details className="dropdown mt-8">
        <summary className="m-1 btn btcat btn-outline w-[150px] rounded-full font-normal">Category <i className="fas fa-chevron-down"></i></summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </details> */}
      
      <h1 className='txtabc'>Discover Nice Articles and News Here</h1>
      <p style={anaknya}> 
      All The Aticles and News of The Site Have Been <b>Update Today</b> and You Can Find Your <b>Articles and News</b> Quickly and Without any Problems
      </p>
    
    
<ul className="hidden lg:flex mt-8 gap-10">
  <li>
    <label className="input input-bordered m-1 btn btcat btn-outline w-[400px] rounded-full ">
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

<div className="flex mt-20 w-full ">
  <div className="card grid w-[597px] h-[680px] card bg-gray-925 rounded-box bgcard">
  <div className="card-body ">
    <h4 className="card-title ">Mar 13 • 2 min read </h4>
    <div className="card-actions flex justify-end" onClick={() => toggleExpand()}>
      <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg" className={` ${isRotated() ? 'rotate-180' : ''} ${isRotated() ? 'mirror' : ''}`} alt="">
        <g clipPath="url(#clip0_3037_5343)">
          <path className='btncardt' d="M23.1367 4.46094C20.5065 4.46094 18.0326 4.96224 15.7148 5.96484C13.4102 6.95443 11.3789 8.32812 9.62109 10.0859C7.86328 11.8438 6.48307 13.875 5.48047 16.1797C4.49089 18.4974 3.99609 20.9714 3.99609 23.6016C3.99609 26.2318 4.49089 28.6992 5.48047 31.0039C6.48307 33.3216 7.86328 35.3594 9.62109 37.1172C11.3789 38.875 13.4102 40.2487 15.7148 41.2383C18.0326 42.2409 20.5065 42.7422 23.1367 42.7422C25.7669 42.7422 28.2344 42.2409 30.5391 41.2383C32.8568 40.2487 34.8945 38.875 36.6523 37.1172C38.4102 35.3594 39.7904 33.3216 40.793 31.0039C41.7956 28.6992 42.2969 26.2318 42.2969 23.6016C42.2969 20.9714 41.7956 18.4974 40.793 16.1797C39.7904 13.875 38.4102 11.8438 36.6523 10.0859C34.8945 8.32812 32.8633 6.95443 30.5586 5.96484C28.2539 4.96224 25.7799 4.46094 23.1367 4.46094ZM23.1367 5.94531C25.5846 5.94531 27.8763 6.40104 30.0117 7.3125C32.1471 8.22396 34.0221 9.48698 35.6367 11.1016C37.2643 12.7292 38.5339 14.6107 39.4453 16.7461C40.3568 18.8815 40.8125 21.1667 40.8125 23.6016C40.8125 26.0365 40.3568 28.3216 39.4453 30.457C38.5339 32.5924 37.2643 34.474 35.6367 36.1016C34.0221 37.7292 32.1471 38.9987 30.0117 39.9102C27.8763 40.8216 25.5846 41.2773 23.1367 41.2773C20.7018 41.2773 18.4167 40.8216 16.2812 39.9102C14.1458 38.9987 12.2643 37.7292 10.6367 36.1016C9.02214 34.474 7.75911 32.5924 6.84766 30.457C5.9362 28.3216 5.48047 26.0365 5.48047 23.6016C5.48047 21.1667 5.9362 18.8815 6.84766 16.7461C7.75911 14.6107 9.02214 12.7292 10.6367 11.1016C12.2643 9.48698 14.1458 8.22396 16.2812 7.3125C18.4167 6.40104 20.7018 5.94531 23.1367 5.94531ZM29.7773 19.0312C29.569 19.0312 29.3997 19.0964 29.2695 19.2266C29.1523 19.3698 29.0938 19.5521 29.0938 19.7734V25.2812L29.1328 28.7383L27.1406 26.6289L17.043 16.5312C16.8997 16.388 16.7109 16.3164 16.4766 16.3164C16.2812 16.3164 16.1185 16.375 15.9883 16.4922C15.8581 16.6224 15.793 16.7917 15.793 17C15.793 17.1953 15.8711 17.3711 16.0273 17.5273L26.1445 27.6445L28.2539 29.6758L25.5195 29.6172H19.25C19.0286 29.6172 18.8529 29.6758 18.7227 29.793C18.5924 29.9232 18.5273 30.0924 18.5273 30.3008C18.5273 30.4961 18.5924 30.6523 18.7227 30.7695C18.8529 30.8867 19.0352 30.9453 19.2695 30.9453H29.7383C29.9466 30.9453 30.1159 30.8802 30.2461 30.75C30.3763 30.6328 30.4414 30.457 30.4414 30.2227V19.7734C30.4414 19.5521 30.3763 19.3698 30.2461 19.2266C30.1289 19.0964 29.9727 19.0312 29.7773 19.0312Z" />
        </g>
        <defs>
          <clipPath id="clip0_3037_5343">
            <rect width="47" height="47" rx="23.5" transform="matrix(1 0 0 -1 0 47)" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div> 
    <h1>RMIT University Visit to Infinite Learning</h1>
    <div className="relative lg:mt-20 w-full sm:w-[80%] lg:w-[100%] h-[auto] mt-6">
        <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-opacity-0 via-opacity-100 to-opacity-100" 
        style={{ background: 'linear-gradient(119deg, rgba(24, 24, 35, 0.88) 11.46%, rgba(47, 31, 79, 0.76) 39.08%, rgba(138, 61, 255, 0.26) 92.98%);'}}></div>
        <img className="w-full h-full object-cover rounded-[20px] " src={Pertama} alt="Pertama" />
      </div>
      </div>
  </div>
<div className="divider divider-horizontal"></div>
    <ul>
      <li>
        <div className="grid w-[570px] h-[290px] card bg-gray-925 rounded-box place-items-center bgcard"> content2
        <div className="card-body ">
      </div>
        </div>
          <div className="grid w-[570px] h-[290px] mt-5 card bg-gray-925 rounded-box place-items-center bgcard">content3</div>
      </li>
    </ul>
</div>

<div className="flex mt-20 w-full">
    <ul>
      <li>
        <div className="grid w-[570px] h-[290px] card bg-gray-925 rounded-box place-items-center bgcard">content2</div>
          <div className="grid w-[570px] h-[290px] mt-5 card bg-gray-925 rounded-box place-items-center bgcard">content3</div>
      </li>
    </ul>
    <div className="divider divider-horizontal"></div> 
  <div className="grid w-[590px] h-[600px] card bg-gray-925 rounded-box place-items-center bgcard">Content</div>
 
</div>

</div>



  );
}

export default Contxtt1;
