import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const BookTrip = () => {
    const [trip, setTrip] = useState({})
    const { tripId } = useParams();
    const { user } = useAuth();
    const { register, reset, handleSubmit } = useForm();
    const onSubmit = data => {
        data.trip = trip
        data.status = "pending"
        fetch('http://localhost:5000/booktrip', {
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
        fetch(`http://localhost:5000/packages/${tripId}`)
            .then(res => res.json())
            .then(data => {
                setTrip(data);
                reset()
            })
    }, [])

    return (
        <div className=' add-pakage-page '>
            <div className='add-pakage  p-12'>
                <p className='text-2xl font-bold text-center text-white'>{user.displayName} </p> <br />
                <p className='text-2xl font-bold text-center -mt-5 mb-5 text-white'> You are almost ready to book our <span className='Font-bold text-3xl text-yellow-400'> {trip.title} </span>tour package !!</p>
                <div>
                    <div>
                        <form className='form lg:w-1/3 m-auto' onSubmit={handleSubmit(onSubmit)}>
                            <input value={user.displayName} placeholder='name' {...register("name")} />
                            <input value={user.email} placeholder='email' {...register("email")} />
                            <input placeholder='phone' type="number" {...register("phone")} />
                            <input placeholder='date' type="date" {...register("date")} />
                            <input value={trip?.title} readOnly placeholder=' pakage name' {...register("title")} />
                            <input value='Proceed' className='hover:bg-yellow-500' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookTrip;