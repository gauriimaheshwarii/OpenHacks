import React from 'react';
import ecoHomeImg from '../assets/ecohome.jpg';
import './home.css';
import Navbar from './Navbar';
import Vision from './Vision';
import Content from './Content';
import Contact from './Contact';
import Footer from './Footer';


const Home = () => {
    return (
        <>
            <Navbar />
            <div className='home-container'>
                <div className='home-eco-container'>
                    <h1>Protecting nature, preserving the future</h1>
                    <img src={ecoHomeImg} alt="" className='home-eco-img' />
                </div>
                <div className='home-svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,85.3C384,117,480,171,576,176C672,181,768,139,864,128C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
                <Vision />
                <Content />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default Home;