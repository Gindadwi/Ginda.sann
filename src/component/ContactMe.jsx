import React, { useState } from 'react';

import Swal from 'sweetalert2';

export default function ContactMe() {

    

    // Mendefinisikan state untuk form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
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
        const { name, message, email } = formData; // Mendestrukturisasi form data

        // Menampilkan pesan error jika form tidak lengkap
        if (!name || !email || !message) {
            Swal.fire({
                icon: 'error',
                title: 'Form tidak lengkap!',
                text: 'Mohon lengkapi semua field sebelum mengirim.',
                confirmButtonText: 'OK'
            });
            return; // Menghentikan eksekusi jika form tidak lengkap
        }

        // Menghubungkan ke WhatsApp
        const phoneNumber = '+6281228900185'; // Ganti dengan nomor WhatsApp Anda
        const whatsappMessage = `Nama: ${name}%0AEmail: ${email}%0APesan: ${message}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
        window.location.href = whatsappUrl; // Redirect ke WhatsApp dengan pesan

        // Mengosongkan form setelah berhasil mengirim
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };


    return (
        <div className='mx-[-33px] lg:mx-[-70px]'>
            <div className="h-full mt-[-20px] py-10 pb-12 bg-gradient-to-r from-black via-blue-900 to-blue-600 flex flex-col justify-center items-center">
                <div className='text-center mb-6'>
                    <h2 className='text-white font-baloo text-[30px]'>Contact Me</h2>
                    <p className='text-white font-poppins lg:text-[20px]'>Isikan form dibawah ini dengan lengkap</p>
                </div>
                <div className='w-full max-w-[300px] lg:max-w-[720px] bg-gray-200 p-6 rounded-lg shadow-lg'>
                    <form className='space-y-4 text-left' onSubmit={handleSubmit}>
                        <div className='lg:grid lg:grid-cols-2 gap-10'>
                            <div>
                                <label htmlFor="name" className='block text-black font-poppins mb-2'>Nama</label>
                                <input
                                    type="text"
                                    id="name"
                                    className='w-full p-2 border border-black rounded'
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className='block text-black font-poppins mb-2'>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className='w-full p-2 border border-black rounded'
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className='block text-black font-poppins mb-2'>Pesan</label>
                            <textarea
                                id="message"
                                className='w-full p-2 border border-black rounded h-[100px]'
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className='text-center'>
                            <button type="submit" className='bg-gradient-to-r from-black via-blue-900 to-blue-600 text-white font-poppins p-3 rounded w-full mt-4 lg:text-[18px]'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
