import React from 'react'
import CardProject from './common/CardProject';
import Laznas from "../assets/Laznas.jpg"

export default function Project() {
    return (
        <div className='mx-[-33px] lg:mx-[-70px]'>

            <div className="h-full mt-[-20px] py-10 pb-12 bg-gradient-to-r from-black via-blue-900 to-blue-600">

                <div>
                    <h1 className='text-white font-baloo text-[30px] lg:text-[35px]'>My Project</h1>
                    <p className='text-white font-poppins'>Berikut di bawah ini adalah beberapa skill yang saya pelajari
                        dan skil yang saya kuasai</p>
                </div>

                <div className='flex w-full justify-center items-center '>
                    <div className='justify-center items-center w-full max-w-[360px] p-5 lg:grid lg:grid-cols-3 lg:max-w-[1080px]'>
                        <CardProject
                            image={Laznas}
                            title="LAZNAS Al Irsyad"
                            deskripsi="Website Lembaga Zakat yang berfungsi untuk mempublikasi dokumentasi dan informasi
                        terkait zakat dan infaq beserta fitur zakat dan infaq online  "
                            button='Lihat'
                        />
                        <CardProject
                            image={Laznas}
                            title="LAZNAS Al Irsyad"
                            deskripsi="Website Lembaga Zakat yang berfungsi untuk mempublikasi dokumentasi dan informasi
                        terkait zakat dan infaq beserta fitur zakat dan infaq online  "
                            button='Lihat'
                        />
                        <CardProject
                            image={Laznas}
                            title="LAZNAS Al Irsyad"
                            deskripsi="Website Lembaga Zakat yang berfungsi untuk mempublikasi dokumentasi dan informasi
                        terkait zakat dan infaq beserta fitur zakat dan infaq online  "
                            button='Lihat'
                        />
                    </div>
                </div>
                

            </div>
        </div>
    );
}

