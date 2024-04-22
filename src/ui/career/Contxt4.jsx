import React, { useState } from 'react';
import "../../pages/career/Career.css";
import Modal from './Modal';
import img1 from '../../assets/career/1.png';
import img2 from '../../assets/career/2.png';
import img3 from '../../assets/career/3.png';

const Contxt4 = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({
        jobType: '',
        title: '',
        description: '',
        responsibilities: '',
        qualification: '',
        img: ''
    });

    const toggleModal = (jobType, title, description, responsibilities, qualification, img) => {
        setModalContent({
            jobType,
            title,
            description,
            responsibilities,
            qualification,
            img
        });
        setShowModal(!showModal);
    };

    // Detail dari tiga card yang akan ditampilkan dalam modal
    const cards = [
        {
            jobType: "Full Time",
            title: "Technical Mentor",
            description: "About the job Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            responsibilities: "Communicate technical concepts clearly and effectively, also adapting the teaching style to the needs. Accurately and proactively evaluate track, and communicate technical progress. Providing mentorship support in career planning, and project development skills through virtual consultation sessions with industry professionals",
            qualification: "Communicate technical concepts clearly and effectively, also adapting the teaching style to the needs. Accurately and proactively evaluate track, and communicate technical progress. Providing mentorship support in career planning, and project development skills through virtual consultation sessions with industry professionals",
            img: img1
        },
        {
            jobType: "Part Time",
            title: "Software Engineer",
            description: "About the job Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            responsibilities: "Develop and maintain high-quality software code, Perform code reviews, Collaborate with cross-functional teams to define, design, and ship new features, Work on bug fixing and improving application performance",
            qualification: "Bachelor's or Master's degree in Computer Science, Engineering or a related subject, Proven software development experience in JavaScript, HTML, CSS, Experience with React.js or similar frameworks, Good understanding of RESTful APIs",
            img: img2
        },
        {
            jobType: "Contract",
            title: "Data Analyst",
            description: "About the job Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            responsibilities: "Gather and interpret data, Analyze results to provide insights, Develop and implement databases, data collection systems, data analytics and other strategies that optimize statistical efficiency and quality",
            qualification: "Bachelor's or Master's degree in Statistics, Mathematics, Economics, Computer Science or another quantitative field, Proven working experience as a data analyst or business data analyst, Strong knowledge of statistics and experience using statistical packages for analyzing datasets",
            img: img3
        }
    ];

    return (
        <>
            <div className="flex justify-center gap-12">
                {/* Mapping through cards array to render each card */}
                {cards.map((card, index) => (
                    <div key={index} className="w-[395px] h-[434px] mt-10 relative border border-black border-opacity-0">
                        <div className="w-[395px] h-[434px] left-0 top-0 absolute rounded-[20px]" />
                        <div className="left-0 top-0 absolute rounded-[20px] border border-white flex-col justify-start items-start inline-flex">
                            <img src={card.img} className="w-[395px] h-[238px] bg-black bg-opacity-40 rounded-tl-[20px] rounded-tr-[20px]" />
                            <div className="w-[395px] px-[23px] py-[15px] bg-neutral-800 rounded-bl-[20px] rounded-br-[20px] flex-col justify-start items-start gap-[5px] flex">
                                <div className="w-[85px] h-[17px] text-white text-opacity-50 text-xs font-normal font-['Montserrat']">{card.jobType}</div>
                                <div className="text-teal-400 text-[28px] font-semibold font-['Montserrat'] leading-9">{card.title}</div>
                                <div className="w-[349px] h-14 text-white text-base font-normal font-['Montserrat'] leading-normal">{card.description}</div>
                                <button
                                    className="w-[100px] h-[30px] text-white text-sm font-normal font-['Montserrat'] leading-none cursor-pointer gradient-outline"
                                    onClick={() => toggleModal(card.jobType, card.title, card.description, card.responsibilities, card.qualification, card.img)}
                                >
                                    <span className="gradient-text">See Detail</span>
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
                {/* End of mapping */}
            </div>
            {showModal && (
                <Modal
                    jobType={modalContent.jobType}
                    img={modalContent.img}
                    title={modalContent.title}
                    description={modalContent.description}
                    responsibilities={modalContent.responsibilities}
                    qualification={modalContent.qualification}
                    onClose={() => toggleModal("", "", "", "", "", "")}
                />
            )}
        </>
    );
};

export default Contxt4;
