import React, { useEffect, useState } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { HashLink } from 'react-router-hash-link';
import './Banner.css'


const Banner = () => {
    const [content, setContent] = useState([])

    useEffect(() => {
        fetch('/slider.json')
            .then(res => res.json())
            .then(data => setContent(data))
    }, [])

    return (
        <div>
            <Slider autoplay={3000}>
                {content.map((item, index) => (
                    <div
                        key={index}
                        style={{ background: `url('${item.image}') no-repeat  center`, backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "100%", height: "100%", position: "absolute" }}
                    >
                        <div className="center">
                            <p className='text-3xl font-bold text-white'>{item.title}</p>
                            <p className='lg:text-sm text-xs text-white mt-2'>{item.description}</p>
                            <HashLink smooth to='/home#packages'>
                                <button className='bg-yellow-500 border-1 rounded-lg  hover:bg-red-400 lg:my-5 mt-4 px-4 py-2 text-white'>Book Your Trip</button>
                            </HashLink >
                        </div>
                    </div>
                ))}
            </Slider>

        </div>
    );
};

export default Banner;