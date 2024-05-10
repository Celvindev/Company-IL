import React from 'react'
import Navbar from '../../components/header/Navbar'
import Content2 from '../../ui/news/Content2'
import Title from '../../ui/news/Title'
import Content1 from '../../ui/news/Content1'


const News = () => {
  return (
    <>
      <div className='w-full'>
        <Navbar />
        <Title />
        <Content1/>
        <Content2/>
      </div>
    </>
  )
}

export default News