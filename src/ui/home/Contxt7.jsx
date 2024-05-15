import React, { useState } from 'react';

const Contxt7 = () => {
    const [showButton1, setShowButton1] = useState(false);
    const [showButton2, setShowButton2] = useState(false);
    const [showButton3, setShowButton3] = useState(false);
    const [showButton4, setShowButton4] = useState(false);

    return (
        <>
            <div className="flex w-full justify-center mt-10">
                <div className="mr-5 w-[100%]">
                    <div
                        className="card cardhome w-[100%] h-[357px] rounded-[44px] image-full"
                        onMouseEnter={() => setShowButton1(true)}
                        onMouseLeave={() => setShowButton1(false)}
                    >
                        <figure><img src="/assets/home/crd1.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h1 className={`text-center mt-32 text-white text-[28px] font-bold font-['Montserrat'] ${showButton1 ? 'slideUp' : ''}`}>IBM , Web & APP Collaboration</h1>
                            <div className={`button-container ${showButton1 ? 'slideIn' : ''}`}>
                                <button className="w-[140px] h-[20px] rounded-[44px]  mt-5 btn btcat btn-outline">
                                    <p className="msibtxtcont">See More <i className="fa-solid fa-arrow-right ml-2"></i></p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mr-5 w-[100%]">
                    <div
                        className="card cardhome w-[100%] h-[357px] rounded-[44px] image-full"
                        onMouseEnter={() => setShowButton2(true)}
                        onMouseLeave={() => setShowButton2(false)}
                    >
                        <figure><img src="/assets/home/crd1.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h1 className={`text-center mt-32 text-white text-[28px] font-bold font-['Montserrat'] ${showButton2 ? 'slideUp' : ''}`}>IBM , Web & APP Collaboration</h1>
                            <div className={`button-container ${showButton2 ? 'slideIn' : ''}`}>
                                <button className="w-[140px] h-[20px] rounded-[44px]  btn btcat btn-outline">
                                    <p className="msibtxtcont">See More <i className="fa-solid fa-arrow-right ml-2"></i></p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex w-full justify-center mt-10">
                <div className="mr-5 w-[100%]">
                    <div
                        className="card cardhome w-[100%] h-[357px] rounded-[44px] image-full"
                        onMouseEnter={() => setShowButton3(true)}
                        onMouseLeave={() => setShowButton3(false)}
                    >
                        <figure><img src="/assets/home/crd1.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h1 className={`text-center mt-32 text-white text-[28px] font-bold font-['Montserrat'] ${showButton3 ? 'slideUp' : ''}`}>IBM , Web & APP Collaboration</h1>
                            <div className={`button-container ${showButton3 ? 'slideIn' : ''}`}>
                                <button className="w-[140px] h-[20px] rounded-[44px] btn btcat btn-outline">
                                    <p className="msibtxtcont">See More <i className="fa-solid fa-arrow-right ml-2"></i></p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mr-5 w-[100%]">
                    <div
                        className="card cardhome w-[100%] h-[357px] rounded-[44px] image-full"
                        onMouseEnter={() => setShowButton4(true)}
                        onMouseLeave={() => setShowButton4(false)}
                    >
                        <figure><img src="/assets/home/crd1.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h1 className={`text-center mt-32 text-white text-[28px] font-bold font-['Montserrat'] ${showButton4 ? 'slideUp' : ''}`}>IBM , Web & APP Collaboration</h1>
                            <div className={`button-container ${showButton4 ? 'slideIn' : ''}`}>
                                <button className="w-[140px] h-[20px] rounded-[44px]  btn btcat btn-outline">
                                    <p className="msibtxtcont">See More <i className="fa-solid fa-arrow-right ml-2"></i></p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contxt7;
