import React, { useState } from 'react'
import CardProject from './common/CardProject'
import Ginda from '../assets/Ginda.jpg'
import BgFoto from '../assets/BgFoto.png'

export default function About() {

    const [modalContent, setModalContent] = useState(null);

    const handleClick = (content) => {
        setModalContent(content);
        const modal = new modal(document.getElementById('About-modal'));
        modal.show()
    };

    const closeModal = () => {
        setModalContent(null);
    }

    return (
        <div id='About' className='bg-Abu_Abu pt-5 py-14 mx-[-33px] lg:mx-[-70px] lg:py-[-10px] lg:pb-[5px] '>

            <div className=' w-full flex justify-center items-center h-[450px]  pt-5'>
                <div className='justify-center items-center w-full max-w-[360px] lg:max-w-[1080px] lg:flex'>
                    <img src={BgFoto} className='absolute w-[300px] h-[220px] left-14 
                    rounded-lg z-0 lg:left-52 lg:h-[280px] lg:w-[400px] lg:mt-[-50px] shadow' alt="" />
                    <CardProject
                        cardClass='lg:max-w-[1080px] lg:flex lg:justify-center lg:items-center lg:gap-10'

                        // Mengatur Image
                        imgCardClass=''
                        image={Ginda}
                        imgClass='lg:w-[400px] z-10 relative shadow-lg'


                        // Mengatur Text
                        textClass='lg:w-[450px] lg:mt-[-25px]'
                        title='About Me'
                        titleClass='pt-5 lg:text-[30px] '
                        deskripsi='Descripsi singkat mengenai diri saya sendiri meliputi  hobi, profesi sekarang,
                            hobi yang di sukai dan pendidikan yang sedang di jalankan dari sekarang'
                        deskripsiClass='lg:text-[20px] lg:pb-5'
                        button='Selengkapnya'
                        buttonClass='w-[200px] bg-gradient-to-r from-black via-blue-900 to-blue-600 text-white '
                        onClick={() => handleClick("Hallo Semua saya Ginda dwi pamungkas saya seorang mahasiswa semester akhir Universitas Amikom Purwokerto Jurusan Informatika saya sangat menggemari dengan yang namanya desain salah satunya desain website seperti UI/UX tidak hanya itu saja saya juga sedang mendalami dan belajar mengenai front-end Developer dengan menggunakan berbagai Tools dari Tailwind, HTML, Bootsrapp, CSS, JavaScript, React js dan Vue js untuk sekarang ini saya dengan mempelajari tentang React js. tidak hanya itu saja untuk sekarang ini saya juga sedang membidangi salah satu profesi mejadi seorang Wordpress Developer di salah satu instansi Lembaga Zakat Al - Irsyad."
                            
                        )}
                    />
                </div>
            </div>
            {modalContent && (
                <div id="About-modal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className="fixed bg-black bg-opacity-50 items-center justify-center flex flex-col top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto h-modal md:h-full">
                    <div className="relative w-full h-screen max-w-2xl md:h-auto ">
                        <div className="relative bg-white rounded-lg shadow">
                            <div className="flex items-start justify-between p-4 border-b rounded-t ">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Information
                                </h3>
                                <button onClick={closeModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="skill-modal">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="p-4 space-y-4">
                                <p className="text-[12px] leading-relaxed text-back font-poppins text-left dark:text-gray-400">
                                    {modalContent}
                                </p>
                            </div>
                            <div className="flex items-center p-4 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button onClick={closeModal} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

