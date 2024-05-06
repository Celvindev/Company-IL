import React, { useRef, useState } from 'react';
import "../../pages/home/Home.css";
import Navbar from '../../components/header/Navbar'

const Home = () => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState();
  const [scrollLeft, setScrollLeft] = useState();
  const sliderRef = useRef();

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-6 mx-auto max-w-screen-xl'>
        <div className="flex w-full justify-center">
          <div className="mr-5 w-[100%]">
            <div className="grid w-[615px] h-[511px] card bg-gray-925 rounded-[33px] px-10 py-8 shadow bgrd">
              <h1 className="w-[520px] h-[109px] text-white text-[28px] font-['SF Compact'] leading-[56px] txtab-c">Join Infinite Learning and Show Your Creativity!</h1>
              <p className="w-[450px]  text-white  font-['SF Compact'] -mt-2 leading-normal">Infinite Learning, a division of PT Kinema Systrans multimedia
                <br />(a subsidiary of Infinite Studios) under Citra Agramasinti Nusantara
                (Citramas Group).<br />...</p>
              <div className="w-[203px] h-[47px] justify-start items-start inline-flex">
                <div className="w-[203px] h-[47px] px-2 py-[18px] bg-sky-925 bg-opacity-0 rounded-[44px]  border-white justify-center items-center flex border border-gradient">
                  <div className=" text-white text-base font-['SF Pro']">MSIB<i className="fa-solid fa-arrow-right ml-2"></i> </div>
                </div>
              </div>
              <div className="w-[203px] h-[47px] justify-start items-start inline-flex">
                <div className="w-[203px] h-[47px] px-2 py-[18px] bg-sky-925  rounded-[44px] justify-center items-center flex border border-gradient">
                  <div className=" text-white text-base font-['SF Pro']">Regular Courses<i className="fa-solid fa-arrow-right ml-2"></i> </div>
                </div>
              </div>
            </div>
            <div className="grid w-[615px] h-[197px] mt-5 card bg-gray-925 rounded-[33px] place-items-center shadow">content2</div>
          </div>
          <div className="mr-5 w-[100%]">
            <div className="grid w-[100%] h-[723px] card bg-gray-925 rounded-[33px] place-items-center shadow">Content3</div>
          </div>
        </div>
        <div className="flex w-full justify-center mt-5">
          <div className="grid w-[100%] h-[248px] card bg-gray-925 rounded-[33px] place-items-center shadow">Content4</div>
        </div>
        <div className="flex w-full justify-center mt-5">
          <div className="grid w-[100%]  h-[517px] p-10 card bg-gray-925 rounded-[33px] place-items-center shadow"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ overflowY: 'auto', overflowX: 'hidden', display: 'grid', gridAutoFlow: 'column', gap: '1rem' }}
          >
            <div className="w-[401px] h-[357px] bg-NeonWhite rounded-[44px] p-10">Card 1</div>
            <div className="w-[401px] h-[357px] bg-NeonWhite rounded-[44px] p-10">Card 2</div>
            <div className="w-[401px] h-[357px] bg-NeonWhite rounded-[44px] p-10">Card 3</div>
            <div className="w-[401px] h-[357px] bg-NeonWhite rounded-[44px] p-10">Card 4</div>
            <div className="w-[401px] h-[357px] bg-NeonWhite rounded-[44px] p-10">Card 5</div>
            <div className="w-[401px] h-[357px] bg-NeonWhite rounded-[44px] p-10">Card 6</div>
            <div className="w-[401px] h-[357px] bg-NeonWhite rounded-[44px] p-10">Card 7</div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Home