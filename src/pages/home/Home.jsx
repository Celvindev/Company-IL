import React from 'react'
import Navbar from '../../components/header/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-6 mx-auto max-w-screen-xl'>
        <div className="flex w-full justify-center">
          <div className="mr-5 w-[100%]">
            <div className="grid w-[615px] h-[510px] card bg-white rounded-[33px] place-items-center shadow">content1</div>
            <div className="grid w-[615px] h-[197px] mt-5 card bg-white rounded-[33px] place-items-center shadow">content2</div>
          </div>
          <div className="mr-5 w-[100%]">
            <div className="grid w-[100%] h-[723px] card bg-white rounded-[33px] place-items-center shadow">Content3</div>
          </div>
        </div>
        <div className="flex w-full justify-center mt-5">
          <div className="grid w-[100%] h-[248px] card bg-white rounded-[33px] place-items-center shadow">Content4</div>
        </div>
        <div className="flex w-full justify-center mt-5">
          <div className="grid w-[100%]  h-[517px] card bg-white rounded-[33px] place-items-center shadow">Content5</div>
        </div>
      </div >
    </>
  )
}

export default Home