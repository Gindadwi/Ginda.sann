import React, { useState } from 'react'
import Card from './common/Card'
import ReactLogo from '../assets/ReactLogo.png'
import Bootstrapp from '../assets/Bootstrapp.png'
import HTML from '../assets/HTML.png'
import CSS from '../assets/CSS.png'
import Wordpress from '../assets/Wordpress.png'
import Tailwind from '../assets/Tailwind.png'
import { Modal } from 'flowbite';
export default function Skill() {

    const [modalContent, setModalContent] = useState(null);
    const [modalUrl, setModalUrl] = useState(null);

    const handleCardClick = (content, url) => {
        setModalContent(content);
        setModalUrl(url);
        const modal = new modal(document.getElementById('skill-modal'));
        modal.show();
    };

    const closeModal = () => {
        setModalContent(null);
        setModalUrl(null);
    };

    return (
        <div className='bg-Abu_Abu pt-5 mx-[-33px] lg:mx-[-70px] lg:justify-center lg:items-center'>

            <div className='text-left w-full mx-auto lg:w-[1080px] lg:text-center'>
                <div className=' pt-5 px-5'>
                    <h1 className='font-baloo text-black text-[30px] lg:text-[35px]'>My Exspertise</h1>
                    <p className='font-poppins text-[18px] pt-2 lg:text-[20px]'>Berikut di bawah ini adalah beberapa skill yang saya pelajari
                        dan skil yang saya kuasai</p>
                </div>

                <div>
                    <div className='grid grid-cols-2 m-5 justify-center lg:grid lg:grid-cols-3 lg:max-w-[1080px] pb-12'>
                        <Card
                            cardClass='border-t-2 border-l-2 border-black'
                            image={ReactLogo}
                            title="React JS"
                            titleClass="pl-[-10px] text-React font-semibold ml-[-10px] "
                            onClick={() => handleCardClick("React.js adalah pustaka JavaScript dari Facebook untuk membangun antarmuka pengguna (UI) yang interaktif. React memungkinkan pembuatan komponen UI yang dapat digunakan kembali, menggunakan Virtual DOM untuk performa cepat, dan JSX untuk mempermudah penulisan kode HTML di dalam JavaScript.", 
                                "https://reactjs.org/")}
                        />

                        <Card
                            cardClass='border-b-2 border-r-2 border-black'
                            image={Bootstrapp}
                            imgClass='w-[50px]'
                            title="Bootstrapp"
                            titleClass='font-semibold text-Bootstrapp '
                            onClick={() => handleCardClick("Bootstrap adalah kerangka kerja (framework) front-end open-source untuk membangun situs web responsif dan mobile-first. Ini menyediakan komponen UI siap pakai dan gaya CSS yang dapat disesuaikan.",
                                "https://getbootstrap.com/")}
                        />
                        <Card
                            cardClass='border-t-2 border-l-2 border-black'
                            image={Wordpress}
                            imgClass='w-[45px] h-[45px]'
                            title="Wordpress"
                            titleClass='font-semibold text-Wordpress '
                            onClick={() => handleCardClick(" WordPress adalah sistem manajemen konten (CMS) open-source yang digunakan untuk membuat dan mengelola situs web atau blog dengan antarmuka pengguna yang ramah dan berbagai plugin yang dapat diperluas.",
                                "https://wordpress.com/id/")}
                        />
                        <Card
                            cardClass='border-b-2 border-r-2 border-black'
                            image={Tailwind}
                            imgClass='w-[45px] h-[35px]'
                            title="Tailwind"
                            titleClass='font-semibold text-Tailwind '
                            onClick={() => handleCardClick(" Tailwind CSS adalah kerangka kerja CSS yang memungkinkan desainer dan pengembang untuk membangun UI kustom dengan menetapkan kelas-kelas langsung pada elemen HTML, daripada menulis gaya CSS terpisah.",
                                "https://tailwindcss.com/")}
                        />
                        <Card
                            cardClass='border-t-2 border-l-2 border-black'
                            image={HTML}
                            imgClass='w-[40px] h-[45px]'
                            title="HTML"
                            titleClass='font-semibold text-HTML '
                            onClick={() => handleCardClick("HTML adalah bahasa markup yang digunakan untuk membuat struktur halaman web. Ini terdiri dari serangkaian elemen (tags) yang menentukan bagaimana konten pada halaman web akan ditampilkan. Setiap elemen HTML mendefinisikan berbagai jenis konten seperti teks, gambar, video, link, dan lainnya. HTML menggunakan struktur berhierarki dengan elemen-elemen seperti <html>, <head>, <body>, dan berbagai tag seperti <div>, <p>, <img>, <a>, dan lain-lain.",
                                "https://www.w3schools.com/html/")}
                        />
                        <Card
                            cardClass='border-b-2 border-r-2 border-black'
                            image={CSS}
                            title="CSS"
                            titleClass='font-semibold text-CSS '
                            onClick={() => handleCardClick("CSS digunakan untuk mengatur tampilan dan tata letak elemen-elemen yang didefinisikan dalam HTML. Ini memungkinkan pengembang untuk mengontrol warna, ukuran teks, jarak antar elemen, serta tata letak seperti posisi, float, dan responsifitas halaman. CSS memanfaatkan aturan yang terdiri dari selector dan deklarasi. Selector mengidentifikasi elemen mana yang akan diberi gaya, sedangkan deklarasi berisi properti gaya seperti color, font-size, margin, padding, dan lainnya.",
                                "https://www.w3schools.com/css/")}
                       />


                    </div>
                </div>
            </div>
            {modalContent && (
                <div id="skill-modal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className="fixed bg-black bg-opacity-50 items-center justify-center flex top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto h-modal md:h-full">
                    <div className="relative w-full h-full max-w-2xl md:h-auto bg-slate-400">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Information
                                </h3>
                                <button onClick={closeModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="skill-modal">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="p-6 space-y-6">
                                <p className="text-base leading-relaxed text-back font-poppins text-left dark:text-gray-400">
                                    {modalContent}
                                </p>
                            </div>
                            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <a href={modalUrl} target="_blank" rel="noopener noreferrer">
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Learn More</button>
                                </a>                                
                                <button onClick={closeModal} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}


