import React from 'react'
import './Footer.css'
// IMPORT LOGO
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
// IMPORT IMG
import Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <>
    <div className="w-full h-[409px] mt-32 justify-center items-center inline-flex" id='shadow'>
        <div className="w-[1440px] h-[409px] relative">
            <div className="w-[1440px] h-[409px] left-0 top-0 absolute" />
            <div className="w-[245px] h-[70px] left-[100px] top-[50px] absolute justify-center items-center inline-flex">
                <img className="w-[245px] h-[70px]" src={Logo} />
            </div>
            <div className="left-[100px] top-[232px] absolute text-white text-base font-normal font-['Montserrat'] leading-normal">Digital Park, Sambau, Kecamatan<br/>Nongsa, Kota Batam, Kepulauan Riau<br/>29466</div>
            <div className="left-[1156px] top-[256px] absolute text-right text-white text-base font-normal font-['Montserrat'] leading-normal">0896387111079<br/>csc@infinitelearning.id</div>
            <div className="w-[587px] h-[223.90px] left-[488px] top-[68px] absolute justify-start items-start gap-[30px] inline-flex">
                <div className="flex-col justify-start items-start gap-8 inline-flex">
                    <div className="text-NeonWhite text-[28px] font-semibold font-['Montserrat'] leading-9">Program</div>
                    <div className="flex-col justify-start items-start gap-3 flex">
                        <div className="w-[58px] h-[21.58px] pr-0.5 justify-center items-center inline-flex">
                            <div className="text-NeonWhite text-base font-normal font-['Montserrat'] leading-normal">Course</div>
                        </div>
                        <div className="w-[58px] h-[21.58px] ">
                            <div className="text-NeonWhite text-base font-normal font-['Montserrat'] leading-normal">Bootcamp</div>
                        </div>
                        <div className="w-[58px] h-[21.58px] ">
                            <div className="text-NeonWhite text-base font-normal font-['Montserrat'] leading-normal">Event</div>
                        </div>
                        <div className="w-[58px] h-[21.58px] ">
                            <div className="text-NeonWhite text-base font-normal font-['Montserrat'] leading-normal">MSIB</div>
                        </div>
                        <div className="w-[58px] h-[21.58px] ">
                            <div className="text-NeonWhite text-base font-normal font-['Montserrat'] leading-normal">Internship</div>
                        </div>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-8 inline-flex">
                    <div className="text-NeonWhite text-[28px] font-semibold font-['Montserrat'] leading-9">Community</div>
                    <div className="flex-col justify-start items-start gap-3 flex">
                        <div className="w-[60px] h-[23.54px] justify-center items-center inline-flex">
                            <div className="w-[60px] h-[23.54px] text-NeonWhite text-base font-normal font-['Montserrat'] leading-normal">Blog</div>
                        </div>
                        <div className="w-[60px] h-[23.54px] justify-center items-center inline-flex">
                            <div className="w-[60px] h-[23.54px] text-NeonWhite text-base font-normal font-['Montserrat'] leading-normal">News</div>
                        </div>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-8 inline-flex">
                    <div className="text-white text-[28px] font-semibold font-['Montserrat'] leading-9">About</div>
                    <div className="flex-col justify-start items-start gap-3 flex">
                        <div className="w-[86px] h-[23.54px] justify-center items-center inline-flex">
                            <div className="w-[86px] h-[23.54px] text-NeonWhite text-base font-normal font-['Montserrat'] leading-normal">About Us</div>
                        </div>
                        <div className="w-[86px] h-[23.54px] justify-center items-center inline-flex">
                            <div className="w-[86px] h-[23.54px] text-NeonWhite text-base font-normal font-['Montserrat'] leading-normal">Career</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[1440px] h-[63px] left-0 top-[346px] absolute">
                <div className="w-[1440px] h-[63px] left-0 top-0 absolute bg-" />
                <div className="left-[508px] top-[21px] absolute text-center text-gray-100 text-lg font-normal font-['Montserrat'] leading-[30px]">Copyright © 2023 | Infinite Learning Indonesiaa</div>
            </div>
            <div className="w-[244px] h-[118px] left-[1096px] top-[68px] absolute flex-col justify-start items-center gap-8 inline-flex">
                <div className="text-NeonWhite text-[28px] font-semibold font-['Montserrat'] leading-9">Our Social Media</div>
                <div className="justify-start items-start gap-[20px] inline-flex"><BsInstagram className='ig' />
                    <div className="relative" /><FaLinkedin className='li' />
                    <div className="h-12 relative" /><FaTiktok className='tt' />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer