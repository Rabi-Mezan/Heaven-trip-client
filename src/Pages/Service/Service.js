import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = (props) => {

    const { _id, price, title, img, description } = props.service


    return (
        <div className='flex justify-center items-center flex-col lg:mt-20 service lg:mr-10'>

            <img className='lg:w-full  ' src={img} alt="" />
            <div className='title text-left service-text'>
                <h1 className='text-2xl font-bold'> {title}</h1>
                <p className='text-xs my-3 w-40'>{description}</p>
                <p className='font-bold my-2'>${price}</p>
                <Link to={`/booktrip/${_id}`}>
                    <button className='book-btn hover:bg-green-700 hover:text-white'>Book Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;