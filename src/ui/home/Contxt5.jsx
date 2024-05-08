import React, { useRef, useState } from 'react';

const Contxt5 = () => {
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState();
    const [scrollLeft, setScrollLeft] = useState();
    const sliderRef = useRef();

    const handleMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDown(false);
    };

    const handleMouseUp = () => {
        setIsDown(false);
    };

    const handleMouseMove = (e) => {
        if (!isDown) {
            return;
        }
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 3;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseScroll = (e) => {
        if (!isDown) {
            const delta = Math.max(-1, Math.min(1, (e.nativeEvent.wheelDelta || -e.nativeEvent.detail)));
            sliderRef.current.scrollLeft -= delta * 40;
        }
    };

    return (
        <>
            <div className="flex w-full justify-center mt-5">
                <div className="bgrd w-[100%]  h-[517px]  rounded-[33px]">
                    <h1 className="text-left p-10 text-white orpro">Our Program</h1>
                    <div
                        className="grid w-[100%] px-10 place-items-center shadow"
                        ref={sliderRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        onWheel={handleMouseScroll}
                        style={{
                            overflowY: 'auto',
                            overflowX: 'hidden',
                            display: 'grid',
                            gridAutoFlow: 'column',
                            gap: '1rem',
                        }}
                    >

                        <div className="card cardhome w-[401px] h-[357px]  rounded-[44px] image-full">
                            <figure><img src="/assets/home/card1.png" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="w-[401px] h-[357px] bg-NeonWhite rounded-[44px] p-10">
                            Card 2
                        </div>
                        <div className="w-[401px] h-[357px] bg-NeonWhite rounded-[44px] p-10">
                            Card 3
                        </div>
                        <div className="w-[401px] h-[357px] bg-NeonWhite rounded-[44px] p-10">
                            Card 4
                        </div>
                        <div className="w-[401px] h-[357px] bg-NeonWhite rounded-[44px] p-10">
                            Card 5
                        </div>
                        <div className="w-[401px] h-[357px] bg-NeonWhite rounded-[44px] p-10">
                            Card 6
                        </div>
                        <div className="w-[401px] h-[357px] bg-NeonWhite rounded-[44px] p-10">
                            Card 7
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contxt5;
