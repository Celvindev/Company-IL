import React, {useState} from 'react'

const Contxt2 = () => {
    
    const [programType, setProgramType] = useState('why');
    return (
        <>
           
            <div className="artboard hidden sm:block sm:h-[450px] mt-32">
            <div className="grid w-[100%] h-[400px] place-items-center ">
                <button className="w-[380px] h-[100px] rounded-[46px] justify-center items-center flex border border-gradient ml-10" onClick={() => setProgramType('why')}>
                    <p className="msibtext text-[22px]">Why You Should Learn</p>
                </button>

                <button className="mt-16 w-[380px] h-[100px] rounded-[46px] justify-center items-center flex border border-gradient ml-10" onClick={() => setProgramType('require')}>
                    <p className="msibtext text-[22px]">Requirement</p>
                </button>

                <button className="mt-16 w-[380px] h-[100px] rounded-[46px] justify-center items-center flex border border-gradient ml-10">
                    <p className="msibtext text-[22px]">Start Date - End Program</p>
                </button>
                </div>

                <div className="grid w-[100%] h-[380px] place-items-center mt-24">
                <button className="w-[380px] h-[100px] rounded-[46px] justify-center items-center flex border border-gradient ml-10">
                    <p className="msibtext text-[22px]">Syllabus</p>
                </button>

                <button className="mt-16 w-[380px] h-[100px] rounded-[46px] justify-center items-center flex border border-gradient ml-10">
                    <p className="msibtext text-[22px]">Benefit</p>
                </button>

                <button className="mt-16 w-[380px] h-[100px] rounded-[46px] justify-center items-center flex border border-gradient ml-10">
                    <p className="msibtext text-[22px]">Start Date - End Program</p>
                </button>
                </div>
            </div>
        </>
    )
}

export default Contxt2
