import React from 'react'


const form = ({ label, input, button }) => {
    return (
        <div className={`bg-Abu_Abu  rounded-md p-4 m-2 text-left `} >
            <div className={`${cardClass}`}>
                <img src={image} className={`rounded-lg border border-black shadow shadow-lg shadow-black ${imgClass}`} alt="" />
                <div>
                    <div className={`${textClass}`}>
                        <h2 className={`text-black font-baloo text-[24px] pt-2 ${titleClass}`}>{title}</h2>
                        <button className={`bg-blue-700 rounded-md w-[100px] p-2 mt-3 text-white font-poppins ${buttonClass}`} >{button}</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default form;
