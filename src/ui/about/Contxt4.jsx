import React, { useState } from 'react';
// IMPORT CSS
import "../../pages/about/About.css";
// IMPORT IMG
import excellence from '../../assets/about/1.png';

const Contxt4 = () => {
    const [showImage, setShowImage] = useState(false);
  return (
    <>
    <div className="hover-zoom w-[1579px] h-[199px] mt-32 relative">
      <div className="w-[1579px] h-[199px] left-0 top-0 absolute border border-stone-200"></div>
      <div className="w-[463px] h-14 left-[127px] top-[33px] absolute text-NeonWhite text-[64px] font-semibold font-['Montserrat'] leading-[76px] text-excellence">Excellence</div>
      <div className="w-[52px] h-[47px] left-[1375px] top-[76px] absolute text-right text-stone-200 text-4xl font-semibold font-['Montserrat'] leading-[44px] text-01">01</div>
      <div className="w-[510px] h-14 left-[127px] top-[113px] absolute text-stone-200 text-base font-normal font-['Montserrat'] leading-normal">We are committed to deliver outstanding quality for long-term added value.</div>
      <img 
          className={`absolute top-[-60px] hover-img ${showImage ? 'active' : ''}`} 
          src={excellence} 
          alt="Image" 
        />
    </div>
    <div className="hover-zoom w-[1579px] h-[199px] relative">
      <div className="w-[1579px] h-[199px] left-0 top-0 absolute border border-stone-200"></div>
      <div className="w-[463px] h-14 left-[127px] top-[33px] absolute text-stone-200 text-[64px] font-semibold font-['Montserrat'] leading-[76px] text-excellence">Gratitude</div>
      <div className="w-[52px] h-[47px] left-[1375px] top-[76px] absolute text-right text-stone-200 text-4xl font-semibold font-['Montserrat'] leading-[44px] text-01">02</div>
      <div className="w-[510px] h-14 left-[127px] top-[113px] absolute text-stone-200 text-base font-normal font-['Montserrat'] leading-normal">We are always grateful and appreciate what we have. </div>
      <img 
          className={`absolute top-[-60px] hover-img ${showImage ? 'active' : ''}`} 
          src={excellence} 
          alt="Image" 
        />
    </div>
    <div className="hover-zoom w-[1579px] h-[199px] relative">
      <div className="w-[1579px] h-[199px] left-0 top-0 absolute border border-stone-200"></div>
      <div className="w-[463px] h-14 left-[127px] top-[33px] absolute text-stone-200 text-[64px] font-semibold font-['Montserrat'] leading-[76px] text-excellence">Balance</div>
      <div className="w-[52px] h-[47px] left-[1375px] top-[76px] absolute text-right text-stone-200 text-4xl font-semibold font-['Montserrat'] leading-[44px] text-01">03</div>
      <div className="w-[510px] h-14 left-[127px] top-[113px] absolute text-stone-200 text-base font-normal font-['Montserrat'] leading-normal">Balanced life, caring for the spiritual, social, physical, family, financial, and intellectual aspects.</div>
      <img 
          className={`absolute top-[-60px] hover-img ${showImage ? 'active' : ''}`} 
          src={excellence} 
          alt="Image" 
        />
    </div>
    <div className="hover-zoom w-[1579px] h-[199px] relative">
      <div className="w-[1579px] h-[199px] left-0 top-0 absolute border border-stone-200"></div>
      <div className="w-[463px] h-14 left-[127px] top-[33px] absolute text-stone-200 text-[64px] font-semibold font-['Montserrat'] leading-[76px] text-excellence">Education </div>
      <div className="w-[52px] h-[47px] left-[1375px] top-[76px] absolute text-right text-stone-200 text-4xl font-semibold font-['Montserrat'] leading-[44px] text-01">04</div>
      <div className="w-[510px] h-14 left-[127px] top-[113px] absolute text-stone-200 text-base font-normal font-['Montserrat'] leading-normal">Learn from mistakes, support growth, provide practical knowledge.</div>
      <img 
          className={`absolute top-[-60px] hover-img ${showImage ? 'active' : ''}`} 
          src={excellence} 
          alt="Image" 
        />
    </div>
    <div className="hover-zoom w-[1579px] h-[199px] relative">
      <div className="w-[1579px] h-[199px] left-0 top-0 absolute border border-stone-200"></div>
      <div className="w-[463px] h-14 left-[127px] top-[33px] absolute text-stone-200 text-[64px] font-semibold font-['Montserrat'] leading-[76px] text-excellence">Fun</div>
      <div className="w-[52px] h-[47px] left-[1375px] top-[76px] absolute text-right text-stone-200 text-4xl font-semibold font-['Montserrat'] leading-[44px] text-01">05</div>
      <div className="w-[510px] h-14 left-[127px] top-[113px] absolute text-stone-200 text-base font-normal font-['Montserrat'] leading-normal">Life is our journey to create happiness for all.</div>
      <img 
          className={`absolute top-[-60px] hover-img ${showImage ? 'active' : ''}`} 
          src={excellence} 
          alt="Image" 
        />
    </div>
    <div className="hover-zoom w-[1579px] h-[199px] relative">
      <div className="w-[1579px] h-[199px] left-0 top-0 absolute border border-stone-200"></div>
      <div className="w-[463px] h-14 left-[127px] top-[33px] absolute text-stone-200 text-[64px] font-semibold font-['Montserrat'] leading-[76px] text-excellence">Commitment</div>
      <div className="w-[52px] h-[47px] left-[1375px] top-[76px] absolute text-right text-stone-200 text-4xl font-semibold font-['Montserrat'] leading-[44px] text-01">06</div>
      <div className="w-[510px] h-14 left-[127px] top-[113px] absolute text-stone-200 text-base font-normal font-['Montserrat'] leading-normal">We are fully committed to Infinite Learning vision, mission, culture and success and recommend our products.</div>
      <img 
          className={`absolute top-[-60px] hover-img ${showImage ? 'active' : ''}`} 
          src={excellence} 
          alt="Image" 
        />
    </div>
    <div className="hover-zoom w-[1579px] h-[199px] relative">
      <div className="w-[1579px] h-[199px] left-0 top-0 absolute border border-stone-200"></div>
      <div className="w-[463px] h-14 left-[127px] top-[33px] absolute text-stone-200 text-[64px] font-semibold font-['Montserrat'] leading-[76px] text-excellence">Teamwork</div>
      <div className="w-[52px] h-[47px] left-[1375px] top-[76px] absolute text-right text-stone-200 text-4xl font-semibold font-['Montserrat'] leading-[44px] text-01">07</div>
      <div className="w-[510px] h-14 left-[127px] top-[113px] absolute text-stone-200 text-base font-normal font-['Montserrat'] leading-normal">Team player and leader who focuses on co-operation, flexibility and empathy to achieve a common goal.</div>
      <img 
          className={`absolute top-[-60px] hover-img ${showImage ? 'active' : ''}`} 
          src={excellence} 
          alt="Image" 
        />
    </div>
    <div className="hover-zoom w-[1579px] h-[199px] relative">
      <div className="w-[1579px] h-[199px] left-0 top-0 absolute border border-stone-200"></div>
      <div className="w-[463px] h-14 left-[127px] top-[33px] absolute text-stone-200 text-[64px] font-semibold font-['Montserrat'] leading-[76px] text-excellence">Consistency</div>
      <div className="w-[52px] h-[47px] left-[1375px] top-[76px] absolute text-right text-stone-200 text-4xl font-semibold font-['Montserrat'] leading-[44px] text-01">08</div>
      <div className="w-[510px] h-14 left-[127px] top-[113px] absolute text-stone-200 text-base font-normal font-['Montserrat'] leading-normal">Creating comfort for students & co-workers, encouraging optimal results and steady growth.</div>
      <img 
          className={`absolute top-[-60px] hover-img ${showImage ? 'active' : ''}`} 
          src={excellence} 
          alt="Image" 
        />
    </div>
    <div className="hover-zoom w-[1579px] h-[199px] relative">
      <div className="w-[1579px] h-[199px] left-0 top-0 absolute border border-stone-200"></div>
      <div className="w-[463px] h-14 left-[127px] top-[33px] absolute text-stone-200 text-[64px] font-semibold font-['Montserrat'] leading-[76px] text-excellence">Communication</div>
      <div className="w-[52px] h-[47px] left-[1375px] top-[76px] absolute text-right text-stone-200 text-4xl font-semibold font-['Montserrat'] leading-[44px] text-01">09</div>
      <div className="w-[510px] h-14 left-[127px] top-[113px] absolute text-stone-200 text-base font-normal font-['Montserrat'] leading-normal">Supporting teams, clients and students with positive words, encouraging personal growth and limitless learning</div>
      <img 
          className={`absolute top-[-60px] hover-img ${showImage ? 'active' : ''}`} 
          src={excellence} 
          alt="Image" 
        />
    </div>
    <div className="hover-zoom w-[1579px] h-[199px] relative">
      <div className="w-[1579px] h-[199px] left-0 top-0 absolute border border-stone-200"></div>
      <div className="w-[463px] h-14 left-[127px] top-[33px] absolute text-stone-200 text-[64px] font-semibold font-['Montserrat'] leading-[76px] text-excellence">Abundance</div>
      <div className="w-[52px] h-[47px] left-[1375px] top-[76px] absolute text-right text-stone-200 text-4xl font-semibold font-['Montserrat'] leading-[44px] text-01">10</div>
      <div className="w-[510px] h-14 left-[127px] top-[113px] absolute text-stone-200 text-base font-normal font-['Montserrat'] leading-normal">Give, receive, create. Honour yourself, others. Emerge abundance as you thrive</div>
      <img 
          className={`absolute top-[-60px] hover-img ${showImage ? 'active' : ''}`} 
          src={excellence} 
          alt="Image" 
        />
    </div>
    <div className="hover-zoom w-[1579px] h-[199px] relative">
      <div className="w-[1579px] h-[199px] left-0 top-0 absolute border border-stone-200"></div>
      <div className="w-[463px] h-14 left-[127px] top-[33px] absolute text-stone-200 text-[64px] font-semibold font-['Montserrat'] leading-[76px] text-excellence">Success</div>
      <div className="w-[52px] h-[47px] left-[1375px] top-[76px] absolute text-right text-stone-200 text-4xl font-semibold font-['Montserrat'] leading-[44px] text-01">11</div>
      <div className="w-[510px] h-14 left-[127px] top-[113px] absolute text-stone-200 text-base font-normal font-['Montserrat'] leading-normal">Focus on success, confidence and collaboration for optimal results together.</div>
      <img 
          className={`absolute top-[-60px] hover-img ${showImage ? 'active' : ''}`} 
          src={excellence} 
          alt="Image" 
        />
    </div>
    <div className="hover-zoom w-[1579px] h-[199px] relative">
      <div className="w-[1579px] h-[199px] left-0 top-0 absolute border border-stone-200"></div>
      <div className="w-[463px] h-14 left-[127px] top-[33px] absolute text-stone-200 text-[64px] font-semibold font-['Montserrat'] leading-[76px] text-excellence">Integerity</div>
      <div className="w-[52px] h-[47px] left-[1375px] top-[76px] absolute text-right text-stone-200 text-4xl font-semibold font-['Montserrat'] leading-[44px] text-01">12</div>
      <div className="w-[510px] h-14 left-[127px] top-[113px] absolute text-stone-200 text-base font-normal font-['Montserrat'] leading-normal">Promises are fulfilled, commitments are upheld, and mistakes are dealt with honestly and swiftly.</div>
      <img 
          className={`absolute top-[-60px] hover-img ${showImage ? 'active' : ''}`} 
          src={excellence} 
          alt="Image" 
        />
    </div>
    <div className="hover-zoom w-[1579px] h-[199px] relative">
      <div className="w-[1579px] h-[199px] left-0 top-0 absolute border border-stone-200"></div>
      <div className="w-[463px] h-14 left-[127px] top-[33px] absolute text-stone-200 text-[64px] font-semibold font-['Montserrat'] leading-[76px] text-excellence">Ownership</div>
      <div className="w-[52px] h-[47px] left-[1375px] top-[76px] absolute text-right text-stone-200 text-4xl font-semibold font-['Montserrat'] leading-[44px] text-01">13</div>
      <div className="w-[510px] h-14 left-[127px] top-[113px] absolute text-stone-200 text-base font-normal font-['Montserrat'] leading-normal">Placing full responsibility on oneself, changing lives with personal change.</div>
      <img 
          className={`absolute top-[-60px] hover-img ${showImage ? 'active' : ''}`} 
          src={excellence} 
          alt="Image" 
        />
    </div>
    
    </>
  )
}

export default Contxt4