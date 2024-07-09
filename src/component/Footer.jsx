import React, { useState } from 'react'
import SocialMediaIcons from './SocialMediaIcons';
import emailJS from 'emailjs-com';
import Swal from 'sweetalert2';

export default function Footer() {

    const [saran, setSaran] = useState ({
        saran: ''
    });

    const handleChange = (e) => {
        setSaran({
            ...saran,
            [e.target.id]: e.target.value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const{pesan} = FormData;

        if (!pesan){
            Swal.fire({
                icon: 'error',
                title: 'Form tidak lengkap!',
                text: 'Mohon lengkapi semua field sebelum mengirim.',
                confirmButtonText: 'OK'            
            });
            return;
        }




        emailJS.send(

            'service_2jujz6a', //Id service EmailJS
            'template_rl0iwgm', //ID Template EmailJS
            FormData,
            'k0o-jHyJeCIO_JSoO' //ID User EmailJS

        ).then((response) => {
            console.log('SECCESS!', response.status, response.text );
            Swal.fire({
                icon: 'success',
                title: 'Pesan berhasil dikirim!',
                text: 'Kami akan segera menghubungi Anda.',
                confirmButtonText: 'OK'
            });        
        }).catch((err) => {
            console.log('FAILED...', err);
            Swal.fire({
                icon: 'error',
                title: 'Pesan gagal dikirim!',
                text: 'Silakan coba lagi nanti.',
                confirmButtonText: 'OK'
            });
        });
    };


    return (
        <div className='mx-[-33px] lg:mx-[-70px] '>
            <div className='bg-Abu_Abu items-center justify-center w-full h-full flex flex-col pt-10'>

                <div className='lg:grid lg:grid-cols-3 lg:gap-10 justify-center items-center'>
                    <h1 className='text-black font-baloo text-[30px]'>Ginda Dwi </h1>
                    <p className='text-black font-poppins text-[18px] mt-2 lg:mr-4 lg:mt-0'>Indonesia, Jawa Tengah, Banyumas</p>
                    <div className='justify-center items-center mt-5 lg:ml-4 lg:mt-0'>
                        <form onSubmit={handleSubmit}>
                            <from className='gap-5 flex'>
                                <input type="text" htmlFor="saran" 
                                id='pesan'
                                className=' w-[200px] h-[40px] rounded-lg border border-black shadow-lg p-2' 
                                placeholder='Saran' 
                                onChange={handleChange}/>
                                <button type='submit' className='bg-gradient-to-r from-black via-blue-900 to-blue-600 text-white 
                            p-2 w-[100px] rounded-lg'>Kirim</button>
                            </from>
                        </form>
                    </div>                
                </div>

                <div className='mt-5  flex flex-col items-center bg-Card pt-5 pb-3 mx-[-33px] lg:mx-[-70px] 
                w-full '>
                    <SocialMediaIcons />
                    <p className='p-2 font-poppins mt-3' >
                       Copy Right © 2024 Ginda Dwi Pamungkas. All rights reserved.
                    </p>
                </div>
                
            </div>
        </div>
    )
}


