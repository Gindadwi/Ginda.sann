import React from 'react'


const CardProject = ({ image, title, deskripsi, button, imgClass, imgCardClass, titleClass, cardClass, buttonClass, textClass, deskripsiClass, onClick }) => {
  return (
    <div className={`bg-Abu_Abu  rounded-md p-4 m-2 text-left `} >
      <div className={`${cardClass}`}>
        <div className={`${imgCardClass}`}></div>
          <img src={image} className={`rounded-lg border border-black shadow shadow-lg shadow-black ${imgClass}`} alt="" />
        <div>
          <div className={`${textClass}`}>
            <h2 className={`text-black font-baloo text-[24px] pt-2 ${titleClass}`}>{title}</h2>
            <p className={`text-black font-poppins text-[14px] py-2 ${deskripsiClass}`}>{deskripsi}</p>
            <button onClick={onClick} className={`bg-blue-700 rounded-md w-[100px] p-2 mt-3 text-white font-poppins ${buttonClass}`} >{button}</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default CardProject;
