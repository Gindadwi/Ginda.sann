import React from 'react';
import Nav from '../component/Nav';
import HeroMenu from '../component/HeroMenu';
import Skill from '../component/Skill';
import Project from '../component/Project';
import About from '../component/About';
import ContactMe from '../component/ContactMe';
import Footer from '../component/Footer';


export default function Home() {
    return (
        <div className='h-screen'>
            <nav>
                <Nav />
            </nav>
            <body>
                <HeroMenu/>
                <Skill/>
                <Project/>
                <About/>
                <ContactMe/>
            </body>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}
