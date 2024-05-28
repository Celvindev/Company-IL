import React from 'react';
import "../../pages/career/Career.css";

const Contxt2 = () => {
  return (
    <>
      <div className='relative'>
      <div> <br /><br /><br /><br /><br />
          <hr />
          <img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mt-5 mr-2" onClick={()=>document.getElementById('my_modal_4').showModal()} />
          <h2 className="text-NeonWhite text-2xl lg:text-[28px] font-['Montserrat'] mt-7 relative">Bussiness Development
            <span className='absolute opacity-0 lg:opacity-100 right-20'>Apply</span>
          </h2>
          <p className='text-NeonWhite text-base w-[280px] sm:w-full lg:text-[20px]'>We are looking for a Bussiness Development to join our team.</p>
          <ul className="flex mt-5 lg:mt-8 lg:gap-2">
            <li ><summary className="m-1 btn btcat btn-outline w-[165px] lg:w-[180px] rounded-full ">Remote</summary></li>
            <li ><summary className="m-1 btn btcat btn-outline w-[165px] lg:w-[180px] rounded-full ">Full-time</summary></li>
          </ul>
        </div>

        <div> <br />
          <hr />
          <img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mt-7 mr-2" />
          <h2 className="text-NeonWhite text-2xl lg:text-[28px] font-['Montserrat'] mt-7 relative">Technical Mentor
            <span className='absolute opacity-0 lg:opacity-100 right-20'>Apply</span>
          </h2>
          <p className='text-NeonWhite text-base w-[280px] sm:w-full lg:text-[20px]'>We are looking for a Technical Mentor to join our team.</p>
          <ul className="flex mt-5 lg:mt-8 lg:gap-2">
            <li ><summary className="m-1 btn btcat btn-outline w-[165px] lg:w-[180px] rounded-full ">Remote</summary></li>
            <li ><summary className="m-1 btn btcat btn-outline w-[165px] lg:w-[180px] rounded-full ">Full-time</summary></li>
          </ul>
        </div> <br />

        <div className='relative'>
          <hr />
          <img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mt-7 mr-2" />
          <h2 className="text-NeonWhite text-2xl lg:text-[28px] font-['Montserrat'] mt-7 relative">Product Designer
            <span className='absolute opacity-0 lg:opacity-100 right-20'>Apply</span>
          </h2>
          <p className='text-NeonWhite text-base w-[280px] sm:w-full lg:text-[20px]'>We are looking for a mid-level product designer to join our team.</p>
          <ul className="flex mt-5 lg:mt-8 lg:gap-2">
            <li ><summary className="m-1 btn btcat btn-outline w-[165px] lg:w-[180px] rounded-full ">Remote</summary></li>
            <li ><summary className="m-1 btn btcat btn-outline w-[165px] lg:w-[180px] rounded-full ">Full-time</summary></li>
          </ul>
        </div> <br />
        <div className='relative'>
          <hr />
          <img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mt-7 mr-2" />
          <h2 className="text-NeonWhite text-2xl lg:text-[28px] font-['Montserrat'] mt-7 relative">Product Designer
            <span className='absolute opacity-0 lg:opacity-100 right-20'>Apply</span>
          </h2>
          <p className='text-NeonWhite text-base w-[280px] sm:w-full lg:text-[20px]'>We are looking for a mid-level product designer to join our team.</p>
          <ul className="flex mt-5 lg:mt-8 lg:gap-2">
            <li ><summary className="m-1 btn btcat btn-outline w-[165px] lg:w-[180px] rounded-full ">Remote</summary></li>
            <li ><summary className="m-1 btn btcat btn-outline w-[165px] lg:w-[180px] rounded-full ">Full-time</summary></li>
          </ul>
        </div> <br />
        <div className='relative'>
          <hr />
          <img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mt-7 mr-2" />
          <h2 className="text-NeonWhite text-2xl lg:text-[28px] font-['Montserrat'] mt-7 relative">Product Designer
            <span className='absolute opacity-0 lg:opacity-100 right-20'>Apply</span>
          </h2>
          <p className='text-NeonWhite text-base w-[280px] sm:w-full lg:text-[20px]'>We are looking for a mid-level product designer to join our team.</p>
          <ul className="flex mt-5 lg:mt-8 lg:gap-2">
            <li ><summary className="m-1 btn btcat btn-outline w-[165px] lg:w-[180px] rounded-full ">Remote</summary></li>
            <li ><summary className="m-1 btn btcat btn-outline w-[165px] lg:w-[180px] rounded-full ">Full-time</summary></li>
          </ul> <br />
          <hr />
        </div>
      </div>




{/* Ini untuk detail Job Description */}
                      <dialog id="my_modal_4" className="modal">
                          <div className="modal-box w-11/12 max-w-7xl">
                            <h3 className="hmodal ml-2">Bussiness Development</h3>
                              <ul className="flex mt-5 lg:mt-8 lg:gap-2">
                                <li ><summary className="m-1 btn btcat btn-outline w-[165px] lg:w-[180px] rounded-full ">Remote</summary></li>
                                <li ><summary className="m-1 btn btcat btn-outline w-[165px] lg:w-[180px] rounded-full ">Full-time</summary></li>
                              </ul>
                                      <div className="flex">
                                        <div>
                                            <h3 className='tmodal mt-10 mr-16'>Job Description</h3>
                                        </div>
                                      <div>
                                        <p className="desc mt-10">We are looking for business development to conduct market research, look for opportunities <br /> and maintain relationships between clients, collaborate with other divisions and <br /> prepare and present the company's business plan. The ideal candidate is as below:
                                              <ul>
                                                <li className="ml-10">1. Passionate and eager to connect with people</li>
                                                <li className="ml-10">2. Experience in handling international clients</li>
                                                <li className="ml-10">3. Fun, easy to adapt, fast learner</li>
                                                <li className="ml-10">4. Proficient in English language</li>
                                                <li className="ml-10">5. Strong negotiation and communication skills</li>
                                                <li className="ml-10">6. Minimum 3 years experience</li>
                                              </ul>  
                                        </p>
                                      </div>
                                        <hr /> 
                                      </div>
            
                                      <div className="flex">
                                        
                                        <div>
                                            <h3 className='tmodal mt-10 mr-20'>Responsibility</h3>
                                        </div>
                                      <div>
                                        <p className="desc mt-10">By partnering with cross-functional teams and customers, you'll turn your insights into compelling products in a creative environment that requires proven leadership skills and the ability to execute a creative vision
                                              
                                        </p>
                                      </div>
                                        <hr /> 
                                      </div>
                            <div className="modal-action">
                              <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn">Close</button>
                              </form>
                            </div>
                          </div>
                        </dialog>
{/* Ini untuk detail Job Description */}
    </>
  );
}

export default Contxt2;
