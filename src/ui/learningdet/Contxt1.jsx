import React from 'react'
import "../../pages/learning/Learning.css";
import "@fortawesome/fontawesome-free/css/all.css";

const Contxt1 = () => {
    return (
        <>
            <div className="grid  w-full lg:w-[640px] h-full bg-gray-925 rounded-[33px] px-5 lg:px-0 py-8 shadow ">
                <button className="w-[132px] h-[48px] rounded-[44px] justify-center items-center flex border border-gradient -mt-5">
                    <p className="msibtext text-[14px] sm:text-[16px]">Apply Now</p>
                </button>
                <h1 className=" text-white text-[28px] sm:text-[32px] txtmsib-c mt-10 ">Front-End Web Development</h1>
                <article className="text-white text-[12px] sm:text-[16px] font-['Poppins'] leading-7">
                    1. High Demand Skill <br />
                    The digital age has ushered in a high demand for skilled front-end developers.
                    Learning front-end development opens up numerous job opportunities across industries
                    <br /><br />
                    2. Flexible Work Opportunities <br />
                    The nature of front-end development work allows for remote opportunities, offering flexibility,
                    with the possibility of freelancing, contract work, or full-time positions
                    <br /><br />
                    3. Pathway to Full-Stack <br />
                    By mastering HTML, CSS, and JavaScript, you’re well on your way to understanding the bigger picture
                    of web and software development, making it easier to learn back-end technologies in the future
                    <br /><br />
                    4. Continuous Growth <br />
                    For those who love to learn and grow, front-end development provides an exciting career path where
                    continuous improvement and skill development are part and parcel of the job
                </article>









            </div>
        </>
    )
}

export default Contxt1