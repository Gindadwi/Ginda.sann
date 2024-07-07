// src/components/SocialMediaIcons.js
import React from 'react';
import { FaTiktok, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SocialMediaIcons = () => {
    return (
        <div className="flex space-x-4  ">
            <div className="bg-white p-4 rounded-full shadow-lg transform 
            transition-transform duration-300 hover:scale-125" >
                <FaTiktok className="text-blue-600" />
            </div>
            <div className="bg-white p-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-125">
                <FaInstagram className="text-pink-600" />
            </div>
            <div className="bg-white p-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-125">
                <FaLinkedinIn className="text-blue-700" />
            </div>
        </div>
    );
}

export default SocialMediaIcons;
