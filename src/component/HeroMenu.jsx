import React from 'react';
import RoundedButton from '../component/common/Button';
import SocialMediaIcons from '../component/SocialMediaIcons';
// import Typewriter from 'react-typewriter-effect';
import Typewriter from 'typewriter-effect';
import FotoSaya from '../assets/FotoSaya.png'

export default function HeroMenu() {

    return (
        <div className='mx-[-33px] lg:mx-[-70px]'>

            <div
                className="h-full pt-5 pb-12 bg-gradient-to-r from-black via-blue-900 to-blue-600">
                {/* Hero Menu */}
                <div
                    className="text-left w-full mx-auto pt-[55px] px-5 box-sizing:border-box lg:grid lg:grid-cols-2 lg:pt-28 lg:w-[1080px]"
                >
                    <div>
                        <h3 className="font-baloo text-white text-[24px] lg:text-3xl ">
                            Hai, I'm
                        </h3>
                        <h1 className="flex pt-2 font-baloo text-white text-[30px] lg:text-4xl ">
                            Gi <Typewriter
                                options={{
                                    strings: ["nda Dwi Pamungkas"],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100,
                                    deleteSpeed: 50,
                                    cursor: "|",
                                    cursorClassName: "Typewriter__cursor",
                                }}
                            /> 
                        </h1>
                        <p className="pt-2 text-[12px] font-poppins text-base text-white">
                            Saya seorang wordpress Developer dan sedang menekuni profesi sebagai
                            front-end developer saya juga menyujai UI/UX Design
                        </p>
                        <RoundedButton
                            className="bg-Button1 border-Button1 mt-2 text-white font-poppins"
                            name="Contact Me"
                        />
                    </div>

                    <div className="items-center justify-center w-full flex flex-col lg:mt-[-50px] lg:ml-[50px]">
                        <img src={FotoSaya} alt="ginda dwi" className="w-[350px]" />
                        <div className="mt-4">
                            <SocialMediaIcons />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
