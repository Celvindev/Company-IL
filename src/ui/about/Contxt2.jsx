import React from 'react'
// IMPORT IMG
import dgtl from '../../assets/about/ngdtl.png';

const Contxt2 = () => {
  return (
    <>
    <div className="w-[1289px] h-[322px] mt-40 relative">
      <div className="w-[314px] h-[45px] left-0 top-[17px] absolute text-stone-200 text-4xl font-semibold font-['Montserrat'] leading-[44px]">Infinite Learning</div>
      <div className="w-[475px] h-[47px] left-[1px] top-[81px] absolute text-stone-200 text-xl font-semibold font-['Montserrat'] leading-7">
        Technology, Innovation, Research & Development Company.
      </div>
      <div className="w-[572px] h-[175px] left-0 top-[147px] absolute text-stone-200 text-lg font-normal font-['Montserrat'] leading-[30px]">
        Infinite Learning, one of the divisions of PT Kinema Systrans multimedia (a subsidiary of Infinite Studios), 
        centres on developing vocational training courses relevant to Infinite Studios activities and the growing 
        demand for skilled talent in the Nongsa Digital Park ecosystem.
      </div>
      <div className="w-[632px] h-[305px] left-[657px] top-0 relative">
        <img className="w-[632px] h-[305px] left-0 top-0 absolute rounded-[20px]" src={dgtl} />
      </div>
    </div> 
    </>
  )
}

export default Contxt2