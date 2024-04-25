import React from 'react'

import Contxt1 from '../../ui/career/Contxt1'
import HeadYour from '../../ui/career/HeadYour'
import Contxt2 from '../../ui/career/Contxt2'
import Contxt3 from '../../ui/career/Contxt3'
import Contxt4 from '../../ui/career/Contxt4'
import Navbar from '../../components/header/Navbar'

const Career = () => {
  return (
    <>
      <div className='w-full'>
        <Navbar />
        <Contxt1 />
        <HeadYour />
        <Contxt2 />
        <Contxt3 />
        <Contxt4 />
      </div>
    </>
  )
}

export default Career