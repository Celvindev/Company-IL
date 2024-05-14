import React from 'react'
import "../../pages/alumni/Alumni.css";
import Content1 from '../../assets/alumni/content1.png';
import Abang from '../../assets/alumni/abang.png';

const Contxt4 = () => {
    return (
        <>
        <div className="">
        <div className="flex w-full">
          <div className="relative card grid w-[597px] h-[718px] py-5 px-10 bgrd rounded-[33px]">
          <div className="w-full">
              <h1 className="self-stretch text-Tosca font-bold font-[Montserrat] text-[36px] ">Studi Independen Batch 5 Kampus Merdeka di Infinite Learning</h1>
              <p className="font-['Montserrat'] text-white text-[16px]">
              Mendukung program #kampusmerdeka, Infinite Learning terlibat sebagai salah satu mitra untuk Studi Independen Bersertifikat di batch ketiga.
              </p> <br/>
              <div className="">
              <img className='' src={Content1} alt="Content1" /> 
            </div> 
            </div> 
          </div>
          <div className="divider-horizontal"></div>
          <ul>
            <li>
              <div className="relative card grid w-[597px] h-[340px] py-5 px-10 bgrd rounded-[33px]">
                <div className="rating rating-s ">
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
              </div> 
              
              <p className="font-['Montserrat'] text-white text-[16px]">
              Berkat Infinite Learning saya tau apa itu bahasa pemrograman, cara ngoding, bagaimana cara mendesain UI/UX dan membuat tampilan aplikasi sesuai dengan kerentuan yang keren
              </p> <br/>
              <div className="w-[82px] h-[82px]">
              <img className='' src={Abang} alt="Abang" /> 
            </div> 
              </div>
              
            </li>
            <br />
            <li>
              <div className="relative card grid w-[597px] h-[345px] py-5 px-10 bgrd rounded-[33px]">
              <div className="rating rating-s">
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-white-800" />
              </div> 
              
              <p className="font-['Montserrat'] text-white text-[16px]">
              Berkat Infinite Learning saya tau apa itu bahasa pemrograman, cara ngoding, bagaimana cara mendesain UI/UX dan membuat tampilan aplikasi sesuai dengan kerentuan yang keren
              </p>
              <div className="w-[85px] h-[82px]">
              <img className='' src={Abang} alt="Abang" /> 
            </div> 
              </div>
            </li>
          </ul>
        </div>


          </div>
        </>
    )
}

export default Contxt4