import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Trip from '../Trip/Trip';
import './Mytrips.css'

const Mytrip = () => {
    const { user } = useAuth();
    const [myTrips, setMyTrips] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/trip/${user.email}`, {
            method: "GET",
            headers: { "content-type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                setMyTrips(data);
            })
    }, [])
    return (
        <div>
            <h1 className='text-gray-400 font-bold lg:text-4xl text-3xl lg:my-12 mt-8  text-center'>My Trips</h1>
            <div className='mytrips w-full'>
                {
                    myTrips.map(trip => <Trip
                        key={trip._id}
                        trip={trip}
                    ></Trip>)
                }
            </div>
        </div>
    );
};

export default Mytrip;