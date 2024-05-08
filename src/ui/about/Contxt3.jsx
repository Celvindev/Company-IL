import React from 'react'

const Contxt3 = () => {
  return (
    <>
      <div className="flex w-full justify-center mt-5">
        <div className="grid w-[100%] h-[248px] bgrd bg-gray-925 rounded-[33px] px-10 place-items-center shadow relative">
          <div className="flex-col justify-start items-center inline-flex">
            <div role="tablist" className="tabs tabs-bordered ">
              <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="VISION" />
              <div role="tabpanel" className="tab-content p-10">To be a leading solution provider in technology, research and development, and innovation through training and education. We aim to increase the number of creative and innovative digital talents who are not only independent but also recognised by the industry both in Indonesia and the world.</div>

              <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="MISSION" checked />
              <div role="tabpanel" className="tab-content p-10">Cooperate with all government agencies, national research institutions, and education/training institutions both domestically and internationally to develop curriculum standards, collaborate in research and development, and provide innovative funding.</div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Contxt3