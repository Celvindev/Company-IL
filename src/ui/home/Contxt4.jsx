import React from 'react'
import buttoncard from '../../assets/home/iconarrowup.svg'
import "../../pages/home/Home.css";

const Contxt4 = () => {
    return (
        <>
            <div className="flex w-full justify-center mt-5">
                <div className="grid w-[100%] h-[248px] bgrd bg-gray-925 rounded-[33px] place-items-center shadow">
                    <img src={buttoncard} alt="" />
                </div>
            </div>
        </>
    )
}

export default Contxt4