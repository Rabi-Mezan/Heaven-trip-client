import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './BookTrip.css'

const BookTrip = () => {
    const [trip, setTrip] = useState({})
    const { tripId } = useParams();
    const { user } = useAuth();
    const { register, reset, handleSubmit } = useForm();
    const onSubmit = data => {
        data.trip = trip
        data.status = "pending"
        fetch('https://nameless-coast-33229.herokuapp.com/booktrip', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    alert('Booking Successfull')
                    reset();
                }
            })
    }

    useEffect(() => {
        fetch(`https://nameless-coast-33229.herokuapp.com/packages/${tripId}`)
            .then(res => res.json())
            .then(data => {
                setTrip(data);
                reset()
            })
    }, [])

    return (
        <div className=' book-trip-page '>
            <div className='lg:w-2/4 trip-details flex flex-col justify-center items-center'>
                <img className='w-80 h-80 p-5 border-2 border-gray-500 rounded-full mb-5' src={trip.img} alt="" />
                <p className='flex justify-between text-xl font-bold'>{trip.title} <span className='ml-10 text-yellow-400'>${trip.price}</span></p>
                <p className='text-sm text-center w-2/3 mt-2'>{trip.description}</p>

            </div>
            <div className='book-trip lg:w-2/4 p-12'>
                <p className='text-2xl font-bold text-center text-gray-400'>{user.displayName} </p> <br />
                <p className='text-gray-400 font-bold lg:text-2xl text-xl mb-5  text-center'> You are almost ready to book <br /> our <span className='Font-bold text-3xl text-yellow-400'> {trip.title} </span>tour package !!</p>
                <div>
                    <div className='mt-8'>
                        <form className='book lg:w-2/3 m-auto' onSubmit={handleSubmit(onSubmit)}>
                            <input value={user.displayName} placeholder='name' {...register("name")} />
                            <input value={user.email} placeholder='email' {...register("email")} />
                            <input placeholder='phone' type="number" {...register("phone")} />
                            <input placeholder='date' type="date" {...register("date")} />
                            <input value={trip?.title} readOnly placeholder=' pakage name' {...register("title")} />
                            <input value='Proceed' className='proceed-btn' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookTrip;