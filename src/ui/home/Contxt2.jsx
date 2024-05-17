import React, { useState } from 'react'

const Contxt2 = () => {
    const [isMouseInside, setIsMouseInside] = useState(false);

    return (
        <>
            <div className="hidden sm:block mr-5 w-[100%]">
                <div
                    className="grid w-[100%] h-[723px] bg-gradient-to-r from-teal-400 to-violet-600 mt-5 sm:mt-0 rounded-[33px] place-items-center shadow"
                    onMouseEnter={() => setIsMouseInside(true)}
                    onMouseLeave={() => setIsMouseInside(false)}
                >
                    <img className="w-[612px] h-[696px]" src='assets/home/visual.png' />
                    <div className={isMouseInside ? "card-container show" : "card-container"}>
                        <div className="card w-[370px] h-[393px] pr-2  ml-40 crdhmnews breadcrumbs">
                            <div className="artboard">
                                <ul>
                                    <li>
                                        <button className="w-[140px] h-[20px] rounded-[44px] items-center ml-5 mt-5 btn btcat btn-outline">
                                            <p className="msibtxtcont">They Say</p>
                                        </button>
                                    </li>

                                    <li>
                                        <button className="w-[326px] h-[180px] rounded-[20px] border-white items-center ml-5 mt-10 btn btn-outline ">
                                            <div className="msibcrdtxt text-left ">
                                                <b className="cardtitlems mr-30">M. Rofli Harahap
                                                </b>
                                                <div className="rating rating-xs ml-5">
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                </div> <br /> <br />
                                                <span className='leading-6'>Berkat Infinite Learning saya tau apa itu bahasa pemrograman, cara ngoding,
                                                    bagaimana cara mendesain UI/UX dan membuat tampilan aplikasi sesuai dengan kerentuan yang keren</span>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button className="w-[326px] h-[180px] rounded-[20px] border-white items-center ml-5 mt-2 btn btn-outline ">
                                            <div className="msibcrdtxt text-left ">
                                                <b className="cardtitlems mr-30">Adi Prasetyo
                                                </b>
                                                <div className="rating rating-xs ml-12">
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                </div> <br /> <br />
                                                <span className='leading-6'>Infinite Learning menyediakan kursus yang luar biasa! Materi pelajarannya sangat
                                                    terstruktur dengan baik dan disampaikan dengan jelas. Saya sangat terkesan dengan kualitas pembelajaran yang ditawarkan</span>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button className="w-[326px] h-[180px] rounded-[20px] border-white items-center ml-5 mt-2 btn btn-outline ">
                                            <div className="msibcrdtxt text-left ">
                                                <b className="cardtitlems mr-30">Ahmad Fauzi
                                                </b>
                                                <div className="rating rating-xs ml-12">
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                </div> <br /> <br />
                                                <span className='leading-6'>Pengalaman saya dengan Infinite Learning sungguh fantastis! Mereka memiliki
                                                    beragam kursus yang relevan dengan kebutuhan pasar saat ini. Instruktur nya sangat berpengetahuan dan responsif.</span>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button className="w-[326px] h-[180px] rounded-[20px] border-white items-center ml-5 mt-2 btn btn-outline ">
                                            <div className="msibcrdtxt text-left ">
                                                <b className="cardtitlems mr-30">Ahmad Fauzi
                                                </b>
                                                <div className="rating rating-xs ml-12">
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                </div> <br /> <br />
                                                <span className='leading-6'>Pengalaman saya dengan Infinite Learning sungguh fantastis! Mereka memiliki
                                                    beragam kursus yang relevan dengan kebutuhan pasar saat ini. Instruktur nya sangat berpengetahuan dan responsif.</span>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button className="w-[326px] h-[180px] rounded-[20px] border-white items-center ml-5 mt-2 btn btn-outline ">
                                            <div className="msibcrdtxt text-left ">
                                                <b className="cardtitlems mr-30">Ahmad Fauzi
                                                </b>
                                                <div className="rating rating-xs ml-12">
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                </div> <br /> <br />
                                                <span className='leading-6'>Pengalaman saya dengan Infinite Learning sungguh fantastis! Mereka memiliki
                                                    beragam kursus yang relevan dengan kebutuhan pasar saat ini. Instruktur nya sangat berpengetahuan dan responsif.</span>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button className="w-[326px] h-[180px] rounded-[20px] border-white items-center ml-5 mt-2 btn btn-outline ">
                                            <div className="msibcrdtxt text-left ">
                                                <b className="cardtitlems mr-30">Ahmad Fauzi
                                                </b>
                                                <div className="rating rating-xs ml-12">
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                </div> <br /> <br />
                                                <span className='leading-6'>Pengalaman saya dengan Infinite Learning sungguh fantastis! Mereka memiliki
                                                    beragam kursus yang relevan dengan kebutuhan pasar saat ini. Instruktur nya sangat berpengetahuan dan responsif.</span>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button className="w-[326px] h-[180px] rounded-[20px] border-white items-center ml-5 mt-2 btn btn-outline ">
                                            <div className="msibcrdtxt text-left ">
                                                <b className="cardtitlems mr-30">Ahmad Fauzi
                                                </b>
                                                <div className="rating rating-xs ml-12">
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                </div> <br /> <br />
                                                <span className='leading-6'>Pengalaman saya dengan Infinite Learning sungguh fantastis! Mereka memiliki
                                                    beragam kursus yang relevan dengan kebutuhan pasar saat ini. Instruktur nya sangat berpengetahuan dan responsif.</span>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button className="w-[326px] h-[180px] rounded-[20px] border-white items-center ml-5 mt-2 btn btn-outline ">
                                            <div className="msibcrdtxt text-left ">
                                                <b className="cardtitlems mr-30">Ahmad Fauzi
                                                </b>
                                                <div className="rating rating-xs ml-12">
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                </div> <br /> <br />
                                                <span className='leading-6'>Pengalaman saya dengan Infinite Learning sungguh fantastis! Mereka memiliki
                                                    beragam kursus yang relevan dengan kebutuhan pasar saat ini. Instruktur nya sangat berpengetahuan dan responsif.</span>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button className="w-[326px] h-[180px] rounded-[20px] border-white items-center ml-5 mt-2 btn btn-outline ">
                                            <div className="msibcrdtxt text-left ">
                                                <b className="cardtitlems mr-30">Ahmad Fauzi
                                                </b>
                                                <div className="rating rating-xs ml-12">
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                </div> <br /> <br />
                                                <span className='leading-6'>Pengalaman saya dengan Infinite Learning sungguh fantastis! Mereka memiliki
                                                    beragam kursus yang relevan dengan kebutuhan pasar saat ini. Instruktur nya sangat berpengetahuan dan responsif.</span>
                                            </div>
                                        </button>
                                    </li>

                                    <li>
                                        <button className="w-[326px] h-[180px] rounded-[20px] border-white items-center ml-5 mt-2 btn btn-outline ">
                                            <div className="msibcrdtxt text-left ">
                                                <b className="cardtitlems mr-30">Ahmad Fauzi
                                                </b>
                                                <div className="rating rating-xs ml-12">
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-white" />
                                                </div> <br /> <br />
                                                <span className='leading-6'>Pengalaman saya dengan Infinite Learning sungguh fantastis! Mereka memiliki beragam kursus yang relevan
                                                    dengan kebutuhan pasar saat ini. Instruktur nya sangat berpengetahuan dan responsif.</span>
                                            </div>
                                        </button>
                                    </li>
                                </ul>
                                <button className="w-[140px] h-[20px] rounded-[44px] items-right ml-52 mt-5 btn btcat btn-outline">
                                    <p className="msibtxtcont">See More <i className="fa-solid fa-arrow-right ml-2"></i></p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contxt2
