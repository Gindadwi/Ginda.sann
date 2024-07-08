import React from 'react'
import CardProject from './common/CardProject';
import Laznas from "../assets/Laznas.jpg";
import kitchenapp from "../assets/kitchenapp.jpg";
import sedekahkurma from "../assets/sedekahkurma.jpg";
import nyahsiok from "../assets/nyahsiok.jpg";
import portoSaya from "../assets/portoSaya.jpg";

export default function Project() {
    return (
        <div className='mx-[-33px] lg:mx-[-70px]'>

            <div className="h-full mt-[-20px] py-10 pb-12 bg-gradient-to-r from-black via-blue-900 to-blue-600">

                <div>
                    <h1 className='text-white font-baloo text-[30px] lg:text-[35px]'>My Project</h1>
                    <p className='text-white font-poppins mx-2'>Berikut di bawah ini adalah beberapa skill yang saya pelajari
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
                            onClick={() => window.location.href = 'https://laznasalirsyad.org/'}
                        />
                        <CardProject
                            image={kitchenapp}
                            title="Kitchen Craft"
                            deskripsi="Kitchen Craft adalah sosial media berbasis website, yang dimana website ini berfungsi untuk
                            mempublikasikan masakan masakan dan resep yang di inputkan oleh user sendiri"
                            button='Lihat'
                            onClick={() => window.location.href = 'https://fe-msib-6-kitchen-app-04.educalab.id/'}
                        />
                        <CardProject
                            image={sedekahkurma}
                            title="Sedekah Kurma"
                            deskripsi="website sedekah kurma di buat dan di gunakan saat bulan ramadhan yang dimana untuk mencari donasi
                            zakat dan infaq dan lainya "
                            button='Lihat'
                            onClick={() => window.location.href = 'https://sedekahkurma.com/'}

                        />
                        <CardProject
                            image={nyahsiok}
                            title="UMKM Nyah Siok"
                            deskripsi="wesbite Nyah Siok merupakan website yang di buat untuk membantu umkm untuk website nyak siok ini 
                            merupakan umkm yang bergerak pada usaha kuliner seperti dimsum, lumpia, siomay dll "
                            button='Lihat'
                            onClick={() => window.location.href = 'https://gindadwi.github.io/Umkm/'}
                        />
                        <CardProject
                            image={portoSaya}
                            title="Portofolio Sederhana"
                            deskripsi="website portofolio sederhana ini menggunakan bootstrap dan java ini merupakan website pertama portofolio saya"
                            button='Lihat'
                            onClick={() => window.location.href = 'https://gindadwi-github-io.vercel.app/'}
                        />
                    </div>
                </div>
                

            </div>
        </div>
    );
}

