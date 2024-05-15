import React from 'react'
import "../../pages/msib/Msib.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Kampus from '../../assets/msib/yy3.png';

const Contxt1 = () => {
    return (
        <>
            <div className="grid w-[599px] h-[287px] bg-gray-925 rounded-[33px] py-8 shadow ">
                <h1 className=" text-white text-2xl font-semibold font-['Montserrat'] leading-7">#Anyoneanything</h1>
                <h1 className=" text-white text-[64px] txtmsib-c">Start your <br /> Journey with us</h1>
                <label className="input input-bordered mt-10 h-[60px] btn btcat btn-outline w-[100%] rounded-full ">
                    <input type="text" className="grow font-normal font-['Montserrat'] text-[18px] " placeholder="Find the course you need " />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>

                <h1 className=" text-white text-2xl font-semibold font-['Montserrat'] leading-7 mt-20">Categories</h1>
                
                <ul className="hidden lg:flex mt-1 gap-5">
                    <li>
                        <button className="w-[320px] h-[90px] rounded-[44px] justify-center items-center flex border border-gradient mt-10">
                            <img src={Kampus} alt="km" />
                            <p className="msibtext ml-5">Studi Independent</p>
                        </button>
                    </li>
                
                    <li>
                        <button className="w-[260px] h-[90px] rounded-[44px] justify-center items-center flex border border-gradient mt-10">
                            <img src={Kampus} alt="km" />
                            <p className="msibtext ml-5">Magang</p>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Contxt1