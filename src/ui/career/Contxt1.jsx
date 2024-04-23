import React from 'react'
import video from '../../assets/career/career.mp4'
import "../../pages/career/Career.css";

const Contxt1 = () => {
  return (
    <>
        <div className="w-full h-[500px] relative  inset-0 overflow-hidden">
        {/* Video Background */}
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-indigo-800 opacity-50"></div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-center txtpla">
          <h1>
          <span className="text-white text-[64px] font-semibold font-['Montserrat'] leading-[76px]">Place to Grow Your Skill</span>
          </h1>
          <p className=" mt-4 text-center text-white text-[25px] font-semibold font-['Montserrat'] leading-9">
            Join us to find the ideal space that can enhance your skills
          </p>
        </div>
      </div>
    </>
  )
}

export default Contxt1