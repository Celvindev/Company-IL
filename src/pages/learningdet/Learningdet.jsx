import React from 'react';
import "../../pages/learningdet/Learningdet.css";
import Navbar from '../../components/header/Navbar'
import Contxt1 from '../../ui/learningdet/Contxt1';
import Contxt2 from '../../ui/learningdet/Contxt2';

const Learningdet = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center py-6 mx-auto max-w-screen-xl'>
        <div className="flex w-full justify-center mt-20">
          <div className="mr-5 w-[100%]">
            <Contxt1 />
          </div>
          <Contxt2 />
        </div>
      </div >
    </>
  )
}

export default Learningdet