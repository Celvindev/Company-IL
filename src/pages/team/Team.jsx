import React from 'react'
import Bgpattern from '../../ui/team/Bgpattern'
import Navbar from '../../components/header/Navbar'
import Contxtt1 from '../../ui/team/Contxtt1'
import Contxt2 from '../../ui/team/Contxt2'
import Contxt3 from '../../ui/team/Contxt3'

const Team = () => {
    return (
        <div className='relative w-full bg-NeonWhite'>
            <div className="absolute top-0 left-0 w-full z-0">
                <Bgpattern />
            </div>
            <div className="relative z-10">
                <Navbar />
            </div>
            <Contxtt1 />
            <Contxt2 />
            <Contxt3 />
            <Contxt3 />
            <Contxt3 />

            <div className="w-full h-[300px]" />
        </div>
    )
}

export default Team