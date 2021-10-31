import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Trip from '../Trip/Trip';
import './Mytrips.css'
import img from '../../images/Oops.png'

const Mytrip = () => {
    const { user } = useAuth();
    const [control, setControl] = useState(false)
    const [myTrips, setMyTrips] = useState([])


    useEffect(() => {
        fetch(`https://nameless-coast-33229.herokuapp.com/trip/${user.email}`, {
            method: "GET",
            headers: { "content-type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                setMyTrips(data);
            })
    }, [control])
    return (
        <div>
            {
                myTrips.length > 0 ? <h1 className='text-gray-400 font-bold lg:text-4xl text-3xl lg:my-12 mt-8  text-center'>My Trips</h1> : <div>
                    <h1 className='text-gray-400 font-bold lg:text-4xl text-3xl lg:my-12 mt-8 mb-5  text-center'>You Haven't Booked Any Trips Yet !</h1>
                    <img className='lg:w-1/3 m-auto' src={img} alt="" />
                </div>
            }
            <div className='mytrips w-full'>
                {
                    myTrips.map(trip => <Trip
                        setControl={[control, setControl]}
                        key={trip._id}
                        trip={trip}
                    ></Trip>)
                }
            </div>
        </div>
    );
};

export default Mytrip;