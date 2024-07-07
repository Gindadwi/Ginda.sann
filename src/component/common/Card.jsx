import React from 'react';

const Card = ({ image, title, imgClass, titleClass, cardClass, onClick }) => {
    return (
        <div>
            <div onClick={onClick} className={`flex items-center justify-center bg-white rounded-lg lg:w-[300px] lg:h-[85px] shadow-md p-2 m-2 w-[150px] transform transition-transform duration-300 hover:scale-105 ${cardClass}`}>
                <img src={image} alt={title} className={`w-20 h-10 ${imgClass}`} />
                <span className={` text-[14px] font-poppins text-left text-blue-600 ${titleClass}`}>{title}</span>
            </div>
        </div>
    );
};

export default Card;
