'use client'

import React, { useState } from 'react';
import Navbar from '@/app/components/Navbar';

const Card = (props) => {
    return (
        <div className="card mx-20 my-1 flex bg-gray-50 border-none rounded-lg p-3 max-h-60">
            <div className="image">
                {props.img && (
                    <img className='w-[300px] h-[200px] p-2 border rounded-2xl' src={props.img} alt={props.name}/>
                )}
            </div>
            <div className="text-con flex justify-between w-[800px]">
                <div className="card20 flex ">
                    <div className="no p-2 mr-4 text-xl">
                        {props.serialNumber}
                    </div>
                    <div className="names">
                        <h1 className='text-[24px] font-bold'>{props.name}</h1>
                        <h4 className='text-gray-900 mb-2'>Udise No: {props.Uid}</h4>

                        <div className="gua h-36 w-36">
                            <Gauge pro={props.pro}/>
                        </div>
                    </div>
                </div>
                <div className="hello flex flex-col gap-6">
                    <h1 className='text-xl'>Score: {props.score}</h1>
                    <button
                        type="submit"
                        className="px-9 py-1 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                        Verify
                    </button>
                </div>
            </div>
        </div>
    );
};

const Govhome = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Sample card data
    const cardData = [
        { name: "Vishwakarma Institute Of Technology", Uid: "-19223484273522", score: "0.0001", pro: "75", img: "https://media.getmyuni.com/azure/college-image/big/vishwakarma-institute-of-information-technology-vit-pune.webp" },
        { name: "Pune Institute Of Technology", Uid: "-19223484273522", score: "0.0001", pro: "75", img: "https://media.getmyuni.com/azure/college-image/big/vishwakarma-institute-of-information-technology-vit-pune.webp" },
        { name: "COEP", Uid: "-19223484273522", score: "0.0001", pro: "75", img: "https://media.getmyuni.com/azure/college-image/big/vishwakarma-institute-of-information-technology-vit-pune.webp" },
        { name: "IIT Bibwewadi", Uid: "-19223484273522", score: "0.0001", pro: "75", img: "https://media.getmyuni.com/azure/college-image/big/vishwakarma-institute-of-information-technology-vit-pune.webp" },
        { name: "IIT Bombay", Uid: "-19223484273522", score: "0.0001", pro: "75", img: "https://media.getmyuni.com/azure/college-image/big/vishwakarma-institute-of-information-technology-vit-pune.webp" },
        { name: "Vishwakarma Institute Of Technology", Uid: "-19223484273522", score: "0.0001", pro: "75", img: "https://media.getmyuni.com/azure/college-image/big/vishwakarma-institute-of-information-technology-vit-pune.webp" },
        { name: "Vishwakarma Institute Of Technology", Uid: "-19223484273522", score: "0.0001", pro: "75", img: "https://media.getmyuni.com/azure/college-image/big/vishwakarma-institute-of-information-technology-vit-pune.webp" },
    ];

    // Filter card data based on search term
    const filteredCardData = cardData.filter(card =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Navbar />
            <div className="body bg-violet-200 text-slate-800 relative">
                <div className="hero mx-auto py-6 flex flex-col items-center ">
                    <span className='text-4xl text-bold'>School List</span>
                </div>
                <div className="searchbar flex justify-center mx-auto mb-4 gap-4 max-w-screen-lg">
                    <button
                        type="submit"
                        className="px-9 py-1 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                        Add School
                    </button>
                    <input
                        type="text"
                        placeholder="Search schools..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-1 border rounded-md text-black w-80"
                    />
                </div>
                <div className="cardcon flex flex-col">
                    {filteredCardData.map((card, index) => (
                        <Card
                            key={index}
                            name={card.name}
                            Uid={card.Uid}
                            score={card.score}
                            serialNumber={index + 1}
                            pro={card.pro}
                            img={card.img}  // Pass the img property here
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Gauge = (props) => {
    return (
        <div className="relative size-25">
            <svg className="rotate-[135deg] size-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-green-200" strokeWidth="1" strokeDasharray="75 100" strokeLinecap="round"></circle>
                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-green-500" strokeWidth="2" strokeDasharray="56.25 100" strokeLinecap="round"></circle>
            </svg>
            <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="text-4xl font-bold text-green-600">{props.pro}%</span>
                <span className="text-green-600 block">Progress</span>
            </div>
        </div>
    );
};

export default Govhome;