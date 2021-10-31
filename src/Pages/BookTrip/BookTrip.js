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
            <div className='book-trip  p-12'>
                <p className='text-2xl font-bold text-center text-gray-400'>{user.displayName} </p> <br />
                <p className='text-gray-400 font-bold lg:text-4xl text-xl mb-5  text-center'> You are almost ready to book <br /> our <span className='Font-bold text-3xl text-yellow-400'> {trip.title} </span>tour package !!</p>
                <div>
                    <div className='mt-8'>
                        <form className='book lg:w-1/3 m-auto' onSubmit={handleSubmit(onSubmit)}>
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