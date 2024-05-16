import React, { useState } from 'react';
import "../../pages/msib/Msib.css";
import Navbar from '../../components/header/Navbar';
import Contxt1 from '../../ui/msib/Contxt1';
import Contxt2 from '../../ui/msib/Contxt2';
import Contxt3 from '../../ui/msib/Contxt3';
import Kampus from '../../assets/msib/yy3.png';

const Msib = () => {
    const [programType, setProgramType] = useState('independent'); // State untuk menyimpan jenis program yang dipilih

    return (
        <>
            <Navbar />
            <div className='flex flex-col items-center justify-center py-6 mx-auto max-w-screen-xl'>
                <div className="flex w-full justify-center mb-20">
                    <div className="mr-5 w-[100%]">
                        <div className="grid w-[599px] h-[287px] bg-gray-925 rounded-[33px] py-8 shadow ">
                            <h1 className="text-white text-2xl font-semibold font-['Montserrat'] leading-7">#Anyoneanything</h1>
                            <h1 className="text-white text-[64px] txtmsib-c">Start your <br /> journey with us</h1>
                            <label className="input input-bordered mt-10 h-[60px] btn btcat btn-outline w-[100%] rounded-full ">
                                <input type="text" className="grow font-normal font-['Montserrat'] text-[18px] " placeholder="Find the course you need " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            </label>
                            <h1 className="text-white text-2xl font-semibold font-['Montserrat'] leading-7 mt-20">Categories</h1>
                            <ul className="hidden lg:flex mt-1 gap-5">
                                <li>
                                    <button className="w-[320px] h-[90px] rounded-[44px] justify-center items-center flex border border-gradient mt-10" onClick={() => setProgramType('independent')}>
                                        <img src={Kampus} alt="km" />
                                        <p className="msibtext ml-5">Studi Independent</p>
                                    </button>
                                </li>
                                <li>
                                    <button className="w-[260px] h-[90px] rounded-[44px] justify-center items-center flex border border-gradient mt-10" onClick={() => setProgramType('internship')}>
                                        <img src={Kampus} alt="km" />
                                        <p className="msibtext ml-5">Magang</p>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Contxt2 />
                </div>
                <Contxt3 programType={programType} /> {/* Mengirimkan jenis program yang dipilih sebagai prop */}
            </div >
        </>
    )
}

export default Msib;
