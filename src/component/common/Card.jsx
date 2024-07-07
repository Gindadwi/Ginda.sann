import React from 'react';

const Card = ({ image, title, imgClass, titleClass, cardClass, onClick }) => {
    return (
        <div>
            <div onClick={onClick} className={`flex items-center justify-center bg-white rounded-lg lg:w-[300px] lg:h-[85px] shadow-md p-2 m-2 w-[200px] transform transition-transform duration-300 hover:scale-105 ${cardClass}`}>
                <img src={image} alt={title} className={`w-30 h-12 ${imgClass}`} />
                <span className={`ml-4 text-md font-poppins text-left text-blue-600 ${titleClass}`}>{title}</span>
            </div>
        </div>
    );
};

export default Card;
