import React, { useState } from 'react';
import "../../pages/news/News.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Pertama from '../../assets/news/Pertama.png';
import Ketiga from '../../assets/news/ketiga.png';
import Keempat from '../../assets/news/keempat.png';

function Content1() {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [rotatedIndexes, setRotatedIndexes] = useState([]);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
      setRotatedIndexes(rotatedIndexes.filter(i => i !== index));
    } else {
      setExpandedIndex(index);
      setRotatedIndexes([...rotatedIndexes, index]);
    }
  };

  const getMarginBottom = (index) => {
    return expandedIndex === index ? '200px' : '0';
  };

  const isRotated = (index) => {
    return rotatedIndexes.includes(index);
  };

  return (

    <div className="team-heading w-[1280px]">
      {/* Masuk Konten 1 */}
      <div className="flex mt-10 w-full ">
        <div className="card grid w-[597px] h-[680px]  bg-gray-925 rounded-box bgcard">
          <div className="card-body ">
            <h4 className="card-title ">Mar 13 • 2 min read
              <div className="card-actions flex justify-end" onClick={() => toggleExpand()}>
                <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg" className={` ${isRotated() ? 'rotate-180' : ''} ${isRotated() ? 'mirror' : ''}`} alt="">

                  <defs>
                    <clipPath id="clip0_3037_5343">
                      <rect width="47" height="47" rx="23.5" transform="matrix(1 0 0 -1 0 47)" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div> 
            </h4>
          <h1>RMIT University Visit to Infinite Learning</h1>
          <div className="relative lg:mt-20 w-full sm:w-[80%] lg:w-[100%] h-[auto] mt-6">
            <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-opacity-0 via-opacity-100 to-opacity-100"
              style={{ background: 'linear-gradient(119deg, rgba(24, 24, 35, 0.88) 11.46%, rgba(47, 31, 79, 0.76) 39.08%, rgba(138, 61, 255, 0.26) 92.98%);' }}></div>
              <img className="w-full h-full object-cover rounded-[20px] " src={Pertama} alt="Pertama" />
            </div>
          </div>
        </div>






        <div className="divider divider-horizontal"></div>





        {/* Masuk Konten 2 dan 3 */}
        <ul>
          <li>
            <div className="grid w-[570px] h-[290px] card bg-gray-925 rounded-box place-items-center relative overflow-hidden shadow-lg bgcard">
              <img src={Ketiga} alt="dwdw" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
                <h4 className="card-title " style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'flex-end', gap: '274px' }}>
                    Apr 1 • 1 min read
                    <div className="card-actions flex justify-end mt-5" onClick={() => toggleExpand()}>
                    <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg" className={` ${isRotated() ? 'rotate-180' : ''} ${isRotated() ? 'mirror' : ''}`} alt="">
                      <defs>
                        <clipPath id="clip0_3037_5343">
                          <rect width="47" height="47" rx="23.5" transform="matrix(1 0 0 -1 0 47)" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    </div> 
                </h4>
                <br />
                <a href='../newsafter' title="p">
                  <p style={{color: 'var(--white, #FFF)',fontFamily: 'Poppins',fontSize: '25px',fontStyle: 'normal',fontWeight: '600', lineHeight: '50px', letterSpacing: '0.3px'}}>
                    Inspiring! Infinite Learning Earns a Chance to Participate in the Pervasive AI Developer Contest
                  </p >
                </a>
                
                <div className="relative lg:mt-20 w-full sm:w-[80%] lg:w-[100%] h-[auto] mt-9">
                </div>
              </div>
            </div>


            <br /><br /><br />



            <div className="grid w-[570px] h-[290px] card bg-gray-925 rounded-box place-items-center relative overflow-hidden shadow-lg bgcard">
              <img src={Keempat} alt="dwdw" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
                <h4 className="card-title " style={{
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  gap: '274px'
                }}>Apr 1 • 1 min read
                  <div className="card-actions flex justify-end mt-5" onClick={() => toggleExpand()}>
                    <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg" className={` ${isRotated() ? 'rotate-180' : ''} ${isRotated() ? 'mirror' : ''}`} alt="">

                      <defs>
                        <clipPath id="clip0_3037_5343">
                          <rect width="47" height="47" rx="23.5" transform="matrix(1 0 0 -1 0 47)" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div> </h4>
                <br />
                <p style={{
                  color: 'var(--white, #FFF)',
                  fontFamily: 'Poppins',
                  fontSize: '25px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: '50px',
                  letterSpacing: '0.3px'
                }}>Infinite Learning Meraih Prestasi sebagai Unreal Engine Authorized Training Centre</p >
                <div className="relative lg:mt-20 w-full sm:w-[80%] lg:w-[100%] h-[auto] mt-9">
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Content1;
