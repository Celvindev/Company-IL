import React from 'react'
import "../../pages/msib/Msib.css";
import Navbar from '../../components/header/Navbar'
import Contxt1 from '../../ui/msib/Contxt1'
import Contxt2 from '../../ui/msib/Contxt2'
import Contxt3 from '../../ui/msib/Contxt3'

const Msib = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col items-center justify-center py-6 mx-auto max-w-screen-xl'>
                <div className="flex w-full justify-center mb-20">
                    <div className="mr-5 w-[100%]">
                        <Contxt1 />

                    </div>
                    <Contxt2 />
                    
                </div>
                <Contxt3 />
            </div >
            
        </>
    )
}

export default Msib