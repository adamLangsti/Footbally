import React from 'react';
import '../styles/homepage.css';
import logo from '../images/premier-league.svg';

const Homepage = () => {
    return (
        <section className='homepage'>
            <img className='hero-logo' src={logo} alt='premier league logo' />
        </section>
    );
};

export default Homepage;
