import React, { useRef, useState } from 'react'

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
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 3;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };
    return (
        <>
            <div className="flex w-full justify-center mt-5">
                <div className="grid w-[100%]  h-[517px] p-10 bgrd bg-gray-925 rounded-[33px] place-items-center shadow"
                    ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    style={{ overflowY: 'auto', overflowX: 'hidden', display: 'grid', gridAutoFlow: 'column', gap: '1rem' }}
                >
                    <div className="w-[401px] h-[357px] bg-NeonWhite rounded-[44px] p-10">Card 1</div>
                    <div className="w-[401px] h-[357px] bg-NeonWhite rounded-[44px] p-10">Card 2</div>
                    <div className="w-[401px] h-[357px] bg-NeonWhite rounded-[44px] p-10">Card 3</div>
                    <div className="w-[401px] h-[357px] bg-NeonWhite rounded-[44px] p-10">Card 4</div>
                    <div className="w-[401px] h-[357px] bg-NeonWhite rounded-[44px] p-10">Card 5</div>
                    <div className="w-[401px] h-[357px] bg-NeonWhite rounded-[44px] p-10">Card 6</div>
                    <div className="w-[401px] h-[357px] bg-NeonWhite rounded-[44px] p-10">Card 7</div>
                </div>
            </div>
        </>
    )
}

export default Contxt5