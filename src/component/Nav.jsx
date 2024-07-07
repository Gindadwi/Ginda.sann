import React, { useState } from 'react';
import ButtonNav from '../assets/Button Nav.png'
import ButtonClose from '../assets/ButtonClose.png'

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <header className='bg-gradient-to-r from-black via-blue-900 to-blue-600 w-full items-center fixed top-0 left-0 z-20'>
                <div className='p-4 flex items-center justify-between mx-auto max-w-[1080px]'>
                    <div className='font-Baloo text-white text-2xl font-semibold'>Ginda Dwi</div>
                    <img
                        src={ButtonNav}
                        className='w-10 cursor-pointer md:hidden'
                        alt="Menu Button"
                        onClick={() => setOpen(!open)}
                    />
                    <nav className='flex gap-10 hidden sm:flex'>
                        <div className='text-white hover:cursor-pointer hover:border-b-2 hover:transition-all hover:duration-300 hover:ease-in-out py-2 pl-2 text-lg cursor-pointer'>Home</div>
                        <div className='text-white hover:cursor-pointer hover:border-b-2 hover:transition-all hover:duration-300 hover:ease-in-out py-2 pl-2 text-lg cursor-pointer'>Skill</div>
                        <div className='text-white hover:cursor-pointer hover:border-b-2 hover:transition-all hover:duration-300 hover:ease-in-out py-2 pl-2 text-lg cursor-pointer'>Project</div>
                        <div className='text-white hover:cursor-pointer hover:border-b-2 hover:transition-all hover:duration-300 hover:ease-in-out py-2 pl-2 text-lg cursor-pointer'>About</div>
                        <div className='text-white hover:cursor-pointer hover:border-b-2 hover:transition-all hover:duration-300 hover:ease-in-out py-2 pl-2 text-lg cursor-pointer'>Contact</div>
                    </nav>
                </div>
            </header>

            <div className={`fixed top-0 right-0 h-full w-1/2 bg-white transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50 lg:hidden`}>
                <div className='flex justify-end m-5'>
                    <img
                        src={ButtonClose}
                        className='w-10 cursor-pointer'
                        alt="Close Button"
                        onClick={() => setOpen(false)}
                    />
                </div>
                <nav className='text-left font-poppins text-base lg:flex lg:gap-7'>
                    <div className='text-black py-2 pl-2 text-lg cursor-pointer transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white' onClick={() => setOpen(false)}>Home</div>
                    <div className='text-black py-2 pl-2 text-lg cursor-pointer transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white' onClick={() => setOpen(false)}>Skill</div>
                    <div className='text-black py-2 pl-2 text-lg cursor-pointer transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white' onClick={() => setOpen(false)}>Project</div>
                    <div className='text-black py-2 pl-2 text-lg cursor-pointer transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white' onClick={() => setOpen(false)}>About</div>
                    <div className='text-black py-2 pl-2 text-lg cursor-pointer transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white' onClick={() => setOpen(false)}>Contact</div>
                </nav>
            </div>

            {open && <div className="fixed inset-0 bg-black bg-opacity-50 transition duration-300 ease-in-out z-30" onClick={() => setOpen(false)}></div>}
        </div>
    );
}
