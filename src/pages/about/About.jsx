import React from 'react'
// IMPORT CSS
import './About.css'
// INMPORT PART UI
import Navbar from '../../components/header/Navbar'
import HeadProfesional from '../../ui/about/HeadProfesional'
import Skor from '../../ui/about/Skor'
import Contxtt1 from '../../ui/about/Contxtt1'
import Contxt2 from '../../ui/about/Contxt2'
import Contxt3 from '../../ui/about/Contxt3'

/* import HeadCulture from '../../ui/about/HeadCulture' */
/* import Contxt4 from '../../ui/about/Contxt4' */



const About = () => {

  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-6 mx-auto max-w-screen-xl'>
        <Contxtt1 />
        {/* <HeadProfesional /> */}
        {/* <Skor /> */}
        <Contxt2 />
        <Contxt3 />
        {/* <HeadCulture /> */}
        {/* <Contxt4/> */}
      </div>
    </>
  );
}

export default About;
