import React from 'react'
import "../../pages/home/Home.css";

const Contxt1 = () => {
    return (
        <>
            <div className="grid w-[615px] h-[511px] bgrd bg-gray-925 rounded-[33px] px-10 py-8 shadow ">
                <h1 className=" text-white text-[35px] txtab-c">Join Infinite Learning<br /> and Show Your Creativity!</h1>
                <p className=" text-white -mt-5 text-[14px] font-['Montserrat'] leading-normal">Infinite Learning, a division of PT Kinema Systrans multimedia
                    <br />(a subsidiary of Infinite Studios) under Citra Agramasinti Nusantara
                    (Citramas Group).<br />...</p>
                <button className="w-[260px] h-[90px] rounded-[44px] justify-center items-center flex border border-gradient">
                    <p className=" msbtext">MSIB<i className="fa-solid fa-arrow-right ml-2"></i></p>
                </button>
                <button className="w-[460px] h-[90px] rounded-[44px] justify-center items-center flex border border-gradient">
                    <p className=" msbtext">Regular Courses<i className="fa-solid fa-arrow-right ml-2"></i> </p>
                </button>
            </div>

        </>
    )
}

export default Contxt1
