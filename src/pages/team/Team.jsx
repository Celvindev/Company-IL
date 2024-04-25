import React from 'react'
import Bgpattern from '../../ui/team/Bgpattern'
import Navbar from '../../components/header/Navbar'

const Team = () => {
    return (
        <div className='relative w-full bg-NeonWhite'>
            <div className="absolute top-0 left-0 w-full z-0">
                <Bgpattern />
            </div>
            <div className="relative z-10">
                <Navbar />
            </div>
            <div className="flex justify-center">
                <div className="col-span-2 ...">
                    <h1 className="text-Charcoal"><span className="text-violet-600">Team Members:</span> Technology, Innovation, Research & Development Company.</h1>
                </div>
            </div>
        </div>
    )
}

export default Team