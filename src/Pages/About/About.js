import React from 'react';
import Story from '../Home/Story/Story';
import './About.css'

const About = () => {
    return (
        <div className='mb-20'>
            <div className='about-banner'>
                <h1 className='text-4xl font-bold text-white'>About Us</h1>
            </div>
            <Story></Story>
        </div>
    );
};

export default About;