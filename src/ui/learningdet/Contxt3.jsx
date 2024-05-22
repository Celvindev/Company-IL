import React from 'react';
import "../../pages/learningdet/Learningdet.css";
import "@fortawesome/fontawesome-free/css/all.css";
import indra from '../../assets/Team/indra.png';
import sri from '../../assets/Team/sri.png';
import marsani from '../../assets/Team/marsani.png';
import malik from '../../assets/Team/malik.png';


function Contxt3() {
  return (
    <>
      <div className="team-heading text-center w-[1280px]">
        <h1 className="text-white text-3xl font-medium font-['Poppins']">Meet Our Mentors</h1>
      </div>
      <div className="flex -mt-20 w-[250px] ml-40 mb-64 ">
        <img className="mr-16" src={indra} alt="foto" />
        <img className="mr-16" src={sri} alt="foto" />
        <img className="mr-16" src={marsani} alt="foto" />
        <img className="mr-16" src={malik} alt="foto" />
      </div>
    </>
  );
}

export default Contxt3;
