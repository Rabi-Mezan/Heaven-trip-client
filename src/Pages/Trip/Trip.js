import React from 'react';
import useAuth from '../../hooks/useAuth';

const Trip = (props) => {
    const { user } = useAuth();
    const { title, description, img } = props.trip.trip

    return (
        <div class="bg-white rounded-lg shadow-xl lg:flex lg:max-w-lg m-10">
            <img src={img}
                alt='' class="w-1/1 lg:w-1/2 rounded-l-2xl" />
            <div class="p-6">
                <h2 class="mb-2 text-2xl font-bold text-gray-900">{title}</h2>
                <small>{props.trip.date}</small>
                <p class="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default Trip;