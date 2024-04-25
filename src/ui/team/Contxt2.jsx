import React, { useState } from 'react';
import ari from '../../assets/Team/ari.png';
import buttoncard from '../../assets/Team/buttoncard.svg';

const Contxt2 = () => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const toggleExpand = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(index);
        }
    };

    const cards = [
        {
            name: "Mery Simanjutak",
            role: "Lead Operationalr",
            description: "Responsible for overseeing day-to-day operations and ensuring smooth functioning of the organization's processes."
        },
        {
            name: "Ari Nugrahanto",
            role: "Program Director",
            description: "The Captain of the team, an expert in sharing his knowledge with the public, and a seasoned mentor specializing in business education. With years of experience under his belt, he's the driving force behind Infinite Learning's success, inspiring others to learn and grow."
        },
        {
            name: "Indra Rukmana",
            role: "The Head of Digital Technology",
            description: "Leading the digital technology team, Indra brings innovative solutions to the table, leveraging cutting-edge technologies to drive the organization's digital transformation."
        }
    ];

    return (
        <>
            <div className='flex justify-center'>
                <div className="grid grid-cols-3 gap-20 ">
                    {cards.map((card, index) => (
                        <div key={index} className={`w-[385px] h-${expandedIndex === index ? '[516px]' : '[336px]'} bg-white crdart shadow-xl  mt-${index === 1 ? '0' : '20'} mt-${index === 2 ? '40' : '0'}`}>
                            <div className="card border-0">
                                <div className="card-body text-left">
                                    <div className="card-actions flex justify-end" onClick={() => toggleExpand(index)}>
                                        <img src={buttoncard} alt="" />
                                    </div>
                                    <h2 className="crdttl">{card.name}</h2>
                                    <p className='txtp'>{card.role}</p>
                                    {expandedIndex === index && (
                                        <p className='txtp'>{card.description}</p>
                                    )}
                                </div>
                                <figure className="px-10 -mt-3">
                                    <img src={ari} alt="Shoes" className=" w-[294.18px]" />
                                </figure>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Contxt2;
