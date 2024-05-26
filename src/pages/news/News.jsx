import React from 'react'
import Navbar from '../../components/header/Navbar'
import Content2 from '../../ui/news/Content2'
import Title from '../../ui/news/Title'
import Content1 from '../../ui/news/Content1'


const News = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-6 mx-auto max-w-screen-xl'>
        <Title />
        <Content1 />
        {/* <Content2 /> */}
      </div>
    </>
  )
}

export default News