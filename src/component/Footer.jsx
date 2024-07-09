import React, { useState } from 'react';
import SocialMediaIcons from './SocialMediaIcons';
import emailJS from 'emailjs-com';
import Swal from 'sweetalert2';

export default function Footer() {

    // Mendefinisikan state untuk form data
    const [formData, setFormData] = useState({
        message: '' // Menggunakan 'message' sebagai kunci state
    });

    // Fungsi untuk menangani perubahan input pada form
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    // Fungsi untuk menangani submit form
    const handleSubmit = (e) => {
        e.preventDefault(); // Mencegah reload halaman

        const { message } = formData; // Mendestrukturisasi form data

        // Menampilkan pesan error jika inputan saran kosong
        if (!message) {
            Swal.fire({
                icon: 'error',
                title: 'Inputan Saran Kosong',
                text: 'Mohon isikan inputan saran terlebih dahulu',
                confirmButtonText: 'OK'
            });
            return; // Menghentikan eksekusi jika inputan saran kosong
        }

        // Log formData untuk verifikasi data
        console.log('Form Data:', formData);

        // Mengirim email menggunakan EmailJS
        emailJS.send(
            'service_2jujz6a', // Id service EmailJS
            'template_rl0iwgm', // ID Template EmailJS
            formData,
            'k0o-jHyJeCIO_JSoO' // ID User EmailJS
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            Swal.fire({
                icon: 'success',
                title: 'Pesan berhasil dikirim!',
                text: 'Kami akan segera menghubungi Anda.',
                confirmButtonText: 'OK'
            });
            // Mengosongkan inputan setelah sukses mengirim
            setFormData({ message: '' });
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
        <div className='mx-[-33px] lg:mx-[-70px]'>
            <div className='bg-Abu_Abu items-center justify-center w-full h-full flex flex-col pt-10'>
                <div className='lg:grid lg:grid-cols-3 lg:gap-10 justify-center items-center'>
                    <h1 className='text-black font-baloo text-[30px]'>Ginda Dwi</h1>
                    <p className='text-black font-poppins text-[18px] mt-2 lg:mr-4 lg:mt-0'>Indonesia, Jawa Tengah, Banyumas</p>
                    <div className='justify-center items-center mt-5 lg:ml-4 lg:mt-0'>
                        <form onSubmit={handleSubmit}>
                            <div className='gap-5 flex'>
                                <input
                                    type="text"
                                    id='message' 
                                    className='w-[200px] h-[40px] rounded-lg border border-black shadow-lg p-2'
                                    placeholder='Saran'
                                    value={formData.message} 
                                    onChange={handleChange}
                                />
                                <button type='submit' className='bg-gradient-to-r from-black via-blue-900 to-blue-600 text-white p-2 w-[100px] rounded-lg'>
                                    Kirim
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='mt-5 flex flex-col items-center bg-Card pt-5 pb-3 mx-[-33px] lg:mx-[-70px] w-full'>
                    <SocialMediaIcons />
                    <p className='p-2 font-poppins mt-3'>
                        Copy Right © 2024 Ginda Dwi Pamungkas. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
