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
                                        <a href="https://kampusmerdeka.kemdikbud.go.id/program/magang/browse/863c3409-8b4e-4c96-9edd-71ee61e9fc41/553c989c-e0f6-11ee-83dc-4642b0dc758f">
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
                                        <a href="https://kampusmerdeka.kemdikbud.go.id/program/magang/browse/863c3409-8b4e-4c96-9edd-71ee61e9fc41/83f796f7-f1a0-11ee-9129-da28f9df4d8d">
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
                                        <a href="https://kampusmerdeka.kemdikbud.go.id/program/magang/browse/863c3409-8b4e-4c96-9edd-71ee61e9fc41/18f47ee7-efe0-11ee-92bb-b27cd062ba27">
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
                                        <a href="https://kampusmerdeka.kemdikbud.go.id/program/magang/browse/863c3409-8b4e-4c96-9edd-71ee61e9fc41/8c6c31e6-e0f4-11ee-8d6d-fe85c7b3fe0e">
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
                                        <a href="https://kampusmerdeka.kemdikbud.go.id/program/magang/browse/863c3409-8b4e-4c96-9edd-71ee61e9fc41/5df12d1a-e674-11ee-826e-82a549dac64f">
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
                                        <a href="https://kampusmerdeka.kemdikbud.go.id/program/magang/browse/863c3409-8b4e-4c96-9edd-71ee61e9fc41/7f7e4224-e685-11ee-9c02-02821e8cc76a">
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
                                        <a href="https://kampusmerdeka.kemdikbud.go.id/program/magang/browse/863c3409-8b4e-4c96-9edd-71ee61e9fc41/087012f1-e673-11ee-97b7-caa6484cdffa">
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
                                        <a href="https://kampusmerdeka.kemdikbud.go.id/program/magang/browse/863c3409-8b4e-4c96-9edd-71ee61e9fc41/f8d66a07-e0f5-11ee-83dc-4642b0dc758f">
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
                                    <h1 className="text-left ml-5 mt-10 text-white text-[30px] font-bold font-['Montserrat']">Graphic Designer</h1>
                                    <button className="w-[130px] h-[50px] rounded-[44px] items-center mt-60 right-0 absolute mr-10 m-1 btn btcat btn-outline">
                                        <a href="https://kampusmerdeka.kemdikbud.go.id/program/magang/browse/863c3409-8b4e-4c96-9edd-71ee61e9fc41/a72485d6-e686-11ee-b8d8-825b8ab1a372">
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
                                        <a href="https://kampusmerdeka.kemdikbud.go.id/program/magang/browse/863c3409-8b4e-4c96-9edd-71ee61e9fc41/2818062e-f1a0-11ee-af0a-42786e9b30fb">
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
                                    <h1 className="text-left ml-5 mt-10 text-white text-[30px] font-bold font-['Montserrat']">Mobile Development : Technical Writer</h1>
                                    <button className="w-[130px] h-[50px] rounded-[44px] items-center mt-60 right-0 absolute mr-10 m-1 btn btcat btn-outline">
                                        <a href="https://kampusmerdeka.kemdikbud.go.id/program/magang/browse/863c3409-8b4e-4c96-9edd-71ee61e9fc41/9f8574e2-e1be-11ee-8e49-cad5ce3670d2">
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
                                    <h1 className="text-left ml-5 mt-10 text-white text-[30px] font-bold font-['Montserrat']">Mobile Development : Assistant Mentoring Technical</h1>
                                    <button className="w-[130px] h-[50px] rounded-[44px] items-center mt-60 right-0 absolute mr-10 m-1 btn btcat btn-outline">
                                        <a href="https://kampusmerdeka.kemdikbud.go.id/program/magang/browse/863c3409-8b4e-4c96-9edd-71ee61e9fc41/16edb2a7-e5d0-11ee-826e-82a549dac64f">
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
                                    <h1 className="text-left ml-5 mt-10 text-white text-[30px] font-bold font-['Montserrat']">Strategic Project Officer</h1>
                                    <button className="w-[130px] h-[50px] rounded-[44px] items-center mt-60 right-0 absolute mr-10 m-1 btn btcat btn-outline">
                                        <a href="https://kampusmerdeka.kemdikbud.go.id/program/magang/browse/863c3409-8b4e-4c96-9edd-71ee61e9fc41/5e8b5a2f-e0f5-11ee-83dc-4642b0dc758f">
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
                                    <h1 className="text-left ml-5 mt-10 text-white text-[30px] font-bold font-['Montserrat']">Information System Management Service</h1>
                                    <button className="w-[130px] h-[50px] rounded-[44px] items-center mt-60 right-0 absolute mr-10 m-1 btn btcat btn-outline">
                                        <a href="https://kampusmerdeka.kemdikbud.go.id/program/magang/browse/863c3409-8b4e-4c96-9edd-71ee61e9fc41/efd49a48-e0f6-11ee-8d6d-fe85c7b3fe0e">
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
                                    <h1 className="text-left ml-5 mt-10 text-white text-[30px] font-bold font-['Montserrat']">Photo & Video Editor</h1>
                                    <button className="w-[130px] h-[50px] rounded-[44px] items-center mt-60 right-0 absolute mr-10 m-1 btn btcat btn-outline">
                                        <a href="https://kampusmerdeka.kemdikbud.go.id/program/magang/browse/863c3409-8b4e-4c96-9edd-71ee61e9fc41/823c61ad-e665-11ee-826e-82a549dac64f">
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
                                    <h1 className="text-left ml-5 mt-10 text-white text-[30px] font-bold font-['Montserrat']">Research and Development</h1>
                                    <button className="w-[130px] h-[50px] rounded-[44px] items-center mt-60 right-0 absolute mr-10 m-1 btn btcat btn-outline">
                                        <a href="https://kampusmerdeka.kemdikbud.go.id/program/magang/browse/863c3409-8b4e-4c96-9edd-71ee61e9fc41/3a468fcf-fbbc-11ee-ae59-1295b2c39143">
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