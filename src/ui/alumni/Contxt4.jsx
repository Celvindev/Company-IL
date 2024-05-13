import React from 'react'
import "../../pages/alumni/Alumni.css";
import Content1 from '../../assets/alumni/content1.png';

const Contxt4 = () => {
    return (
        <>
        <div className="">
          <div className="relative card grid w-[597px] h-[718px] py-5 px-10 bgrd rounded-[33px]">
            <div className="w-full">
              <h1 className="self-stretch text-Tosca font-bold font-[Montserrat] text-[36px] ">Studi Independen Batch 5 Kampus Merdeka di Infinite Learning</h1>
              <p className="font-['Montserrat'] text-white text-[16px]">
              Mendukung program #kampusmerdeka, Infinite Learning terlibat sebagai salah satu mitra untuk Studi Independen Bersertifikat di batch ketiga.
              </p> <br/>
            </div> 
            <div className="">
              <img className='' src={Content1} alt="Content1" /> 
            </div> 
          </div>
          </div>
        </>
    )
}

export default Contxt4