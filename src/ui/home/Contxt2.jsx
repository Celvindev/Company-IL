import React from 'react'

const Contxt2 = () => {
    return (
        <div className="mr-5 w-[100%]">
            <div className="grid w-[100%] h-[723px] bg-gradient-to-r from-teal-400 to-violet-600 rounded-[33px] place-items-center shadow">
                <img className="w-[612px] h-[696px]" src='assets/home/visual.png' />
                <div className="card w-[360px] h-[393px] ml-40 crdhmnews">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See more <i className="fa-solid fa-arrow-right ml-2"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contxt2
