import React from 'react';
import PropTypes from 'prop-types';

const Contxt3 = ({ programType }) => {
    return (
        <>
            {/* Tampilkan card sesuai dengan jenis program yang dipilih */}
            {programType === 'independent' && (
                <>
                    <div className="flex w-full justify-center mt-10">
                        <div className="mr-5 w-[100%]">
                            <div className="card cardhome w-[100%] h-[357px]  rounded-[44px] image-full">
                                <figure><img src="/assets/msib/amd.png" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h4 className="card-title text-white ml-5 mt-5">STUDI INDEPENDENT<img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mr-5" /></h4>
                                    <h1 className="text-left ml-5 mt-10 text-white text-[30px] font-bold font-['Montserrat']">Android Mobile Development & UIUX Designer</h1>
                                    <button className="w-[130px] h-[50px] rounded-[44px] items-center mt-60 right-0 absolute mr-10 m-1 btn btcat btn-outline">
                                        <a href="https://bit.ly/stupenIL7">
                                            <p className="msibtxtcont">Apply Now</p>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mr-5 w-[100%]">
                            <div className="card cardhome w-[100%] h-[357px]  rounded-[44px] image-full">
                                <figure><img src="/assets/msib/Game Dev Magang.JPG" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h4 className="card-title text-white ml-5 mt-5">STUDI INDEPENDENT<img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mr-5" /></h4>
                                    <h1 className="text-left ml-5 mt-10 text-white text-[30px] font-bold font-['Montserrat']">Game Development</h1>
                                    <button className="w-[130px] h-[50px] rounded-[44px] items-center mt-60 right-0 absolute mr-10 m-1 btn btcat btn-outline">
                                        <a href="https://bit.ly/stupenIL7">
                                            <p className="msibtxtcont">Apply Now</p>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full justify-center mt-10">
                        <div className="mr-5 w-[100%]">
                            <div className="card cardhome w-[100%] h-[357px]  rounded-[44px] image-full">
                                <figure><img src="/assets/msib/Full-Stack Web Development.JPG" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h4 className="card-title text-white ml-5 mt-5">STUDI INDEPENDENT<img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mr-5" /></h4>
                                    <h1 className="text-left ml-5 mt-10 text-white text-[30px] font-bold font-['Montserrat']">Web Development & UIUX Design</h1>
                                    <button className="w-[130px] h-[50px] rounded-[44px] items-center mt-60 right-0 absolute mr-10 m-1 btn btcat btn-outline">
                                        <a href="https://bit.ly/stupenIL7">
                                            <p className="msibtxtcont">Apply Now</p>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mr-5 w-[100%]">
                            <div className="card cardhome w-[100%] h-[357px]  rounded-[44px] image-full">
                                <figure><img src="public/assets/msib/DSC03056.JPG" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h4 className="card-title text-white ml-5 mt-5">STUDI INDEPENDENT<img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mr-5" /></h4>
                                    <h1 className="text-left ml-5 mt-10 text-white text-[30px] font-bold font-['Montserrat']">IBM Academy : Hybrid Cloud & Red Hat</h1>
                                    <button className="w-[130px] h-[50px] rounded-[44px] items-center mt-60 right-0 absolute mr-10 m-1 btn btcat btn-outline">
                                        <a href="https://bit.ly/stupenIL7">
                                            <p className="msibtxtcont">Apply Now</p>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full justify-center mt-10">
                        <div className="mr-5 w-[100%]">
                            <div className="card cardhome w-[600px] h-[357px]  rounded-[44px] image-full">
                                <figure><img src="public/assets/msib/DSC03030.png" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h4 className="card-title text-white ml-5 mt-5">STUDI INDEPENDENT<img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mr-5" /></h4>
                                    <h1 className="text-left ml-5 mt-10 text-white text-[30px] font-bold font-['Montserrat']">IBM Academy : Advanced AI</h1>
                                    <button className="w-[130px] h-[50px] rounded-[44px] items-center mt-60 right-0 absolute mr-10 m-1 btn btcat btn-outline">
                                        <a href="https://bit.ly/stupenIL7">
                                            <p className="msibtxtcont">Apply Now</p>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {programType === 'internship' && (
                <>
                    <div className="flex w-full justify-center mt-10">
                        <div className="mr-5 w-[100%]">
                            <div className="card cardhome w-[100%] h-[357px]  rounded-[44px] image-full">
                                <figure><img src="/assets/msib/Developer.png" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h4 className="card-title text-white ml-5 mt-5">MAGANG<img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mr-5" /></h4>
                                    <h1 className="text-left ml-5 mt-10 text-white text-[30px] font-bold font-['Montserrat']">Web Developer</h1>
                                    <button className="w-[130px] h-[50px] rounded-[44px] items-center mt-60 right-0 absolute mr-10 m-1 btn btcat btn-outline">
                                        <a href="https://bit.ly/prereg_internIL7">
                                            <p className="msibtxtcont">Apply Now</p>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mr-5 w-[100%]">
                            <div className="card cardhome w-[100%] h-[357px]  rounded-[44px] image-full">
                                <figure><img src="/assets/msib/UI UX Designer Magang.JPG" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h4 className="card-title text-white ml-5 mt-5">MAGANG<img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mr-5" /></h4>
                                    <h1 className="text-left ml-5 mt-10 text-white text-[30px] font-bold font-['Montserrat']">UI UX Designer</h1>
                                    <button className="w-[130px] h-[50px] rounded-[44px] items-center mt-60 right-0 absolute mr-10 m-1 btn btcat btn-outline">
                                        <a href="https://bit.ly/prereg_internIL7">
                                            <p className="msibtxtcont">Apply Now</p>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full justify-center mt-10">
                        <div className="mr-5 w-[100%]">
                            <div className="card cardhome w-[100%] h-[357px]  rounded-[44px] image-full">
                                <figure><img src="public/assets/msib/Project Manager.png" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h4 className="card-title text-white ml-5 mt-5">MAGANG<img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mr-5" /></h4>
                                    <h1 className="text-left ml-5 mt-10 text-white text-[30px] font-bold font-['Montserrat']">Project Manager</h1>
                                    <button className="w-[130px] h-[50px] rounded-[44px] items-center mt-60 right-0 absolute mr-10 m-1 btn btcat btn-outline">
                                        <a href="https://bit.ly/prereg_internIL7">
                                            <p className="msibtxtcont">Apply Now</p>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mr-5 w-[100%]">
                            <div className="card cardhome w-[100%] h-[357px]  rounded-[44px] image-full">
                                <figure><img src="public/assets/msib/Marcom.JPG" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h4 className="card-title text-white ml-5 mt-5">MAGANG<img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mr-5" /></h4>
                                    <h1 className="text-left ml-5 mt-10 text-white text-[30px] font-bold font-['Montserrat']">Marketing Communication</h1>
                                    <button className="w-[130px] h-[50px] rounded-[44px] items-center mt-60 right-0 absolute mr-10 m-1 btn btcat btn-outline">
                                        <a href="https://bit.ly/prereg_internIL7">
                                            <p className="msibtxtcont">Apply Now</p>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full justify-center mt-10">
                        <div className="mr-5 w-[100%]">
                            <div className="card cardhome w-[100%] h-[357px]  rounded-[44px] image-full">
                                <figure><img src="public/assets/msib/SRA.png" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h4 className="card-title text-white ml-5 mt-5">MAGANG<img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mr-5" /></h4>
                                    <h1 className="text-left ml-5 mt-10 text-white text-[30px] font-bold font-['Montserrat']">Mobile Developer</h1>
                                    <button className="w-[130px] h-[50px] rounded-[44px] items-center mt-60 right-0 absolute mr-10 m-1 btn btcat btn-outline">
                                        <a href="https://bit.ly/prereg_internIL7">
                                            <p className="msibtxtcont">Apply Now</p>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mr-5 w-[100%]">
                            <div className="card cardhome w-[100%] h-[357px]  rounded-[44px] image-full">
                                <figure><img src="public/assets/msib/Sosmed.JPG" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h4 className="card-title text-white ml-5 mt-5">MAGANG<img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mr-5" /></h4>
                                    <h1 className="text-left ml-5 mt-10 text-white text-[30px] font-bold font-['Montserrat']">Social Media Specialist</h1>
                                    <button className="w-[130px] h-[50px] rounded-[44px] items-center mt-60 right-0 absolute mr-10 m-1 btn btcat btn-outline">
                                        <a href="https://bit.ly/prereg_internIL7">
                                            <p className="msibtxtcont">Apply Now</p>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="flex w-full justify-center mt-10">
                        <div className="mr-5 w-[100%]">
                            <div className="card cardhome w-[100%] h-[357px]  rounded-[44px] image-full">
                                <figure><img src="public/assets/msib/Public Relation.JPG" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h4 className="card-title text-white ml-5 mt-5">MAGANG<img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mr-5" /></h4>
                                    <h1 className="text-left ml-5 mt-10 text-white text-[30px] font-bold font-['Montserrat']">Public Relation</h1>
                                    <button className="w-[130px] h-[50px] rounded-[44px] items-center mt-60 right-0 absolute mr-10 m-1 btn btcat btn-outline">
                                        <a href="https://bit.ly/prereg_internIL7">
                                            <p className="msibtxtcont">Apply Now</p>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mr-5 w-[100%]">
                            <div className="card cardhome w-[100%] h-[357px]  rounded-[44px] image-full">
                                <figure><img src="public/assets/msib/SRA.png" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h4 className="card-title text-white ml-5 mt-5">MAGANG<img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mr-5" /></h4>
                                    <h1 className="text-left ml-5 mt-10 text-white text-[30px] font-bold font-['Montserrat']">Student Relation & Administration</h1>
                                    <button className="w-[130px] h-[50px] rounded-[44px] items-center mt-60 right-0 absolute mr-10 m-1 btn btcat btn-outline">
                                        <a href="https://bit.ly/prereg_internIL7">
                                            <p className="msibtxtcont">Apply Now</p>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full justify-center mt-10">
                        <div className="mr-5 w-[100%]">
                            <div className="card cardhome w-[100%] h-[357px]  rounded-[44px] image-full">
                                <figure><img src="public/assets/msib/Visual Designer.JPG" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h4 className="card-title text-white ml-5 mt-5">MAGANG<img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mr-5" /></h4>
                                    <h1 className="text-left ml-5 mt-10 text-white text-[30px] font-bold font-['Montserrat']">Visual Designer</h1>
                                    <button className="w-[130px] h-[50px] rounded-[44px] items-center mt-60 right-0 absolute mr-10 m-1 btn btcat btn-outline">
                                        <a href="https://bit.ly/prereg_internIL7">
                                            <p className="msibtxtcont">Apply Now</p>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mr-5 w-[100%]">
                            <div className="card cardhome w-[100%] h-[357px]  rounded-[44px] image-full">
                                <figure><img src="public/assets/msib/Game Dev Magang.JPG" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h4 className="card-title text-white ml-5 mt-5">MAGANG<img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mr-5" /></h4>
                                    <h1 className="text-left ml-5 mt-10 text-white text-[30px] font-bold font-['Montserrat']">Game Developer</h1>
                                    <button className="w-[130px] h-[50px] rounded-[44px] items-center mt-60 right-0 absolute mr-10 m-1 btn btcat btn-outline">
                                        <a href="https://bit.ly/prereg_internIL7">
                                            <p className="msibtxtcont">Apply Now</p>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full justify-center mt-10">
                        <div className="mr-5 w-[100%]">
                            <div className="card cardhome w-[600px] h-[357px]  rounded-[44px] image-full">
                                <figure><img src="public/assets/msib/Event & Community.JPG" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h4 className="card-title text-white ml-5 mt-5">MAGANG<img src='/assets/home/iconarrowup.svg' alt="" className="absolute right-0 mr-5" /></h4>
                                    <h1 className="text-left ml-5 mt-10 text-white text-[30px] font-bold font-['Montserrat']">Event & Community</h1>
                                    <button className="w-[130px] h-[50px] rounded-[44px] items-center mt-60 right-0 absolute mr-10 m-1 btn btcat btn-outline">
                                        <a href="https://bit.ly/prereg_internIL7">
                                            <p className="msibtxtcont">Apply Now</p>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
            }
        </>
    )
}
Contxt3.propTypes = {
    programType: PropTypes.oneOf(['independent', 'internship']).isRequired
}


export default Contxt3;