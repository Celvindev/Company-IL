import React from 'react';
import "../../pages/learning/Learning.css";
import Navbar from '../../components/header/Navbar'
import Contxt1 from '../../ui/home/Contxt1';

const Learning = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-6 mx-auto max-w-screen-xl'>
        <div className="flex w-full justify-center">
          <div className="mr-5 w-[100%]">
          <Contxt1 />
          </div>
        </div>
      </div >
    </>
  )
}

export default Learning