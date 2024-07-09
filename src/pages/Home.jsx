import React, { useRef } from 'react';
// import Nav from '../component/Nav';
import HeroMenu from '../component/HeroMenu';
import Skill from '../component/Skill';
import Project from '../component/Project';
import About from '../component/About';
import ContactMe from '../component/ContactMe';
import Footer from '../component/Footer';


export default function Home() {

    const contactRef = useRef(null);

    const scrollToContact = () => {
        if (contactRef.current) {
            console.log('Scrolling to:', contactRef.current);
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.log('Contact ref is null');
        }
    };




    return (
        <div className='h-screen'>
           
            <body>

                <section id='HeroMenu'>
                    <HeroMenu scrollToContact={scrollToContact} />
                </section>

                <sectio id='Skill'>
                    <Skill />
                </sectio>

                <section id='Project'>
                    <Project />
                </section>

                <section id='About'>
                    <About />
                </section>

                <section id='Contact' ref={contactRef}>
                    <ContactMe />
                </section>

            </body>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}
