import React from 'react';
import './Footer.css'
import logo from '../../../images/logo icon/Group 1.png'
import img from '../../../images/Trip-bro.png'

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className='lg:flex justify-around md:p-20 items-center footer-title'>
                <h1 className='lg:text-3xl text-2xl font-bold  text-white'> Make A Trip  <span className='lg:text-4xl font-bold text-yellow-500'>To the Heaven</span></h1>
                <div className='lg:flex  justify-between items-center'>
                    <input placeholder='Enter Your Email' type="text" />
                    <button className='lg:ml-10 ml-4'>Subscribe</button>
                </div>
            </div>

            <div className='footer-info'>
                <div className='flex flex-col justify-center items-center p-5'>
                    <img className='w-1/3' src={logo} alt="" />
                    <div className='icons flex flex-col items-center justify-start mt-3'>
                        <h1 className='text-md font-bold text-start'>Find Us on</h1>

                        <div>
                            <i class="fab fa-facebook"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <div className='p-5 '>
                    <h1 className='text-md font-bold text-start mb-3'>Our Office</h1>
                    <p>1600 Amphitheatre Parkway <br />
                        Mountain View, CA 94043 <br />
                        Phone: +1 650-253-0000</p>

                </div>
                <div className='p-5 '>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Terms & conditions</li>
                        <li>Our Policy</li>
                    </ul>

                </div>
                <div>
                    <img className='w-2/3' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;