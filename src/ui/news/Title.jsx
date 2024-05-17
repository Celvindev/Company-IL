import React, { useState } from 'react';
import "../../pages/news/News.css";

function Title() {
  const anaknya = {
    fontSize: 18,
    color: "#ffff",
    textAlign: "Left",
    paddingTop: "10px"
  }

  return (

    <div className="team-heading mt-20 w-[1280px] h-[32px]">
      <h1 className='txtabc'>Discover Nice Articles and News Here</h1>
      <p style={anaknya}>
        All The Aticles and News of The Site Have Been <b>Update Today</b> and You Can Find Your <b>Articles and News</b> Quickly and Without any Problems
      </p>
    </div>
  );
}

export default Title;
