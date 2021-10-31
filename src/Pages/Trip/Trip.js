import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Trip = (props) => {
    const { user } = useAuth();
    const [deleted, setDeleted] = useState(false)
    const { title, description, img } = props.trip.trip;


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to cancel this trip ? ')
        if (proceed) {
            fetch(`https://nameless-coast-33229.herokuapp.com/trip/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deleteCount) {
                        alert('Deleted Successfully')
                        setDeleted(!deleted)
                    }
                    else {
                        setDeleted(false)
                    }
                })
        }


    }



    return (
        <div class="bg-white rounded-lg shadow-xl lg:flex lg:max-w-lg lg:m-10 m-5">
            <img src={img}
                alt='' class="w-1/1 lg:w-1/2 rounded-l-2xl" />
            <div class="p-6">
                <h2 class="mb-2 text-2xl font-bold text-gray-900">{title}</h2>
                <small className='font-bold felx items-center mr-2'> <i class="far fa-calendar-alt  mr-2"></i>{props.trip.date}</small>
                <p class="text-gray-600 text-sm">{description}</p>
                <div className='flex justify-between mt-4'>
                    <p className='font-bold text-green-400'>{props.trip.status}</p>
                    <button onClick={() => handleDelete(props.trip._id)} className='book-btn'>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Trip;