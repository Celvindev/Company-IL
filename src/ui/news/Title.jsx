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
  const anaknya = {
    fontSize: 18,
    color: "#ffff",
    textAlign: "Left",
    paddingTop: "10px"
  }

  return (

    <div className="team-heading mt-10 w-[1280px] h-[32px]">
      <h1 className='txtabc'>Discover Nice Articles and News Here</h1>
      <p style={anaknya}>
        All The Aticles and News of The Site Have Been <b>Update Today</b> and You Can Find Your <b>Articles and News</b> Quickly and Without any Problems
      </p>
    </div>
  );
}

export default Title;
