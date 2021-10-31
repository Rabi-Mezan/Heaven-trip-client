import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://nameless-coast-33229.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [services])


    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 2
    // };

    return (
        <div id='packages' className='mt-28'>
            <h1 style={{ color: "#737373" }} className='text-5xl font-bold text-center'>Our Tour Packages</h1>
            <p className='text-center mt-5 px-5 text-sm'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam noempor invidunt
                ut labore et dolore magna aliquyam erat</p>
            <div className='flex justify-center lg:ml-20 md:ml-10 services' >
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;