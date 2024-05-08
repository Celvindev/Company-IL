import React from 'react'
import "../../pages/about/About.css";

// IMPORT IMG
import Headline from '../../assets/about/Headline.png';

const Contxtt1 = () => {
  return (
    <>
      <div className='text-left txt-cvr'>
        <h1 className='txtab' >
          Hi, we believe that <span>#anyoneanything.</span>
        </h1> <br/>
        <p className='text-lg sm:text-xl lg:text-2xl'>
          Providing solutions in technology, research and development and innovation through training and education.
        </p>
      </div>
      {/* <div className="relative lg:mt-20 w-full sm:w-[80%] lg:w-[100%] h-[auto] mt-6">
        <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-opacity-0 via-opacity-100 to-opacity-100" 
        style={{ background: 'linear-gradient(180deg, rgba(33, 76, 224, 0.25) 2.49%, rgba(25, 198, 194, 0.26) 102.49%)' }}></div>
        <img className="w-full h-full object-cover rounded-[20px]" src={Headline} alt="Headline" />
      </div> */}
    </>
  )
}

export default Contxtt1