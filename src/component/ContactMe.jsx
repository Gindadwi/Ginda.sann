import React from 'react'

export default function ContactMe() {
    return (
        <div className='mx-[-33px] lg:mx-[-70px]'>
            <div className="h-full mt-[-20px] py-10 pb-12 bg-gradient-to-r from-black via-blue-900 to-blue-600 flex flex-col justify-center items-center">
                <div className='text-center mb-6'>
                    <h2 className='text-white font-baloo text-[30px]'>Contact Me</h2>
                    <p className='text-white font-poppins lg:text-[20px]'>Isikan form dibawah ini dengan lengkap</p>
                </div>
                <div className='w-full max-w-[400px] lg:max-w-[720px] bg-gray-200 p-6 rounded-lg shadow-lg'>
                    <form className='space-y-4 text-left'>
                        <div className='lg:grid lg:grid-cols-2 gap-10'>
                            <div>
                                <label htmlFor="name" className='block text-black font-poppins mb-2'>Nama</label>
                                <input type="text" id="name" className='w-full p-2 border border-black rounded' />
                            </div>
                            <div>
                                <label htmlFor="email" className='block text-black font-poppins mb-2'>Email</label>
                                <input type="email" id="email" className='w-full p-2 border border-black rounded' />
                            </div>                        </div>

                        <div>
                            <label htmlFor="message" className='block text-black font-poppins mb-2'>Pesan</label>
                            <textarea id="message" className='w-full p-2 border border-black rounded h-[100px]'></textarea>
                        </div>
                        <div className='text-center'>
                            <button type="submit" className='bg-gradient-to-r from-black via-blue-900 to-blue-600 text-white 
                            font-poppins p-3 rounded w-full mt-4 lg:text-[18px]'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
