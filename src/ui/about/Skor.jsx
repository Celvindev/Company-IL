import React from 'react'
import "../../pages/about/About.css";

const Skor = () => {
  return (
    <>
    <div className="w-[1400px] mt-20 h-40 px-6 py-1.5 bg-gradient-to-r from-teal-400 to-violet-600 rounded-[10px] flex justify-center items-center">
        <div className="w-full max-w-[967px] h-[118px] justify-between items-center flex flex-wrap">
            <div className="flex flex-col justify-center items-center">
                <div className="text-center text-stone-200 text-[64px] font-semibold font-Montserrat leading-[76px]">3500+</div>
                <div className="text-center text-stone-200 text-3xl font-normal font-Montserrat">Student</div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="text-center text-stone-200 text-[64px] font-semibold font-Montserrat leading-[76px]">100+</div>
                <div className="text-center text-stone-200 text-3xl font-normal font-Montserrat">Projects</div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="text-center text-stone-200 text-[64px] font-semibold font-Montserrat leading-[76px]">20+</div>
                <div className="text-center text-stone-200 text-3xl font-normal font-Montserrat">Mentor</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Skor