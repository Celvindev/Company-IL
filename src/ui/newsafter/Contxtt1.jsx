import React, { useState } from 'react';
import "../../pages/news/News.css";
import "@fortawesome/fontawesome-free/css/all.css";
// import { FaChevronDown } from 'react-icons/fa';
// import Content1 from '../../assets/news/12.png';
import Berita from '../../assets/news/ketiga.png'

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

  const judul = {
    fontSize: 64,
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
      <p >News / Cybersecurity: Securing the Virtual World in the Digital Era</p>
      <h1 className='txtafter mt-10 w-[600] text-justify' style={judul}>Cybersecurity: Securing the Virtual World in the Digital Era</h1>
      <p style={anaknya}> 
        Infinite Learning <br /> Batam, Indonesia 31 Oktober 2023
      </p><br /><br />
      <img className="w-full h-128 object-cover rounded-[20px] " src={Berita} alt="Berita" />
    









</div>




  );
}

export default Contxtt1;
