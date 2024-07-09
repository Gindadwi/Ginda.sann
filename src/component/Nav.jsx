import React, { useState } from 'react';
import ButtonNav from '../assets/Button Nav.png'
// import ButtonClose from '../assets/ButtonClose.png'


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
                        <a href='#HeroMenu' className='text-white hover:cursor-pointer hover:border-b-2 hover:transition-all hover:duration-300 hover:ease-in-out py-2 pl-2 text-lg cursor-pointer' >Home</a>
                        <a href='#Skill' className='text-white hover:cursor-pointer hover:border-b-2 hover:transition-all hover:duration-300 hover:ease-in-out py-2 pl-2 text-lg cursor-pointer'>Skill</a>
                        <a href='#Project' className='text-white hover:cursor-pointer hover:border-b-2 hover:transition-all hover:duration-300 hover:ease-in-out py-2 pl-2 text-lg cursor-pointer'>Project</a>
                        <a href='#About' className='text-white hover:cursor-pointer hover:border-b-2 hover:transition-all hover:duration-300 hover:ease-in-out py-2 pl-2 text-lg cursor-pointer'>About</a>
                        <a href='#Contact' className='text-white hover:cursor-pointer hover:border-b-2 hover:transition-all hover:duration-300 hover:ease-in-out py-2 pl-2 text-lg cursor-pointer'>Contact</a>
                    </nav>
                </div>
            </header>

            <div className={`fixed top-0 right-0 h-full w-1/2 bg-white transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50 lg:hidden`}>
                <div className='flex justify-end m-5'>

                    <button onClick={() => setOpen(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="skill-modal">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>

                </div>
                <nav className='text-left font-poppins text-base lg:flex lg:gap-7'>
                    <div className='text-black py-2 pl-2 text-lg cursor-pointer transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white'>
                        <a className='w-full'  href='#HeroMenu' >Home</a>
                    </div>

                    <div className='text-black py-2 pl-2 text-lg cursor-pointer transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white'>
                        <a className='w-full' href='#Skill' >Skill</a>
                    </div>
                    
                    <div className='text-black py-2 pl-2 text-lg cursor-pointer transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white'>
                        <a className='w-full'  href='#Project'>Project</a>
                    </div>

                    <div className='text-black py-2 pl-2 text-lg cursor-pointer transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white'>
                        <a className='w-full'  href='#About'>About</a>
                    </div>

                    <div className='text-black py-2 pl-2 text-lg cursor-pointer transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white'>
                        <a className='w-full' href='#Contact'>Contact</a>
                    </div>
                </nav>
            </div>

            {open && <div className="fixed inset-0 bg-black bg-opacity-50 transition duration-300 ease-in-out z-30" onClick={() => setOpen(false)}></div>}
        </div>
    );
}
