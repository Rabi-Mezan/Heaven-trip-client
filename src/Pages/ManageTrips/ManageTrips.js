import React, { useEffect } from 'react';
import { useState } from 'react';


const ManageTrips = () => {
    const [trips, setTrips] = useState([])
    const [control, setConrol] = useState(false);
    useEffect(() => {
        fetch('https://nameless-coast-33229.herokuapp.com/managetrips')
            .then(res => res.json())
            .then(data => {
                setTrips(data);
            })
    }, [control])


    const handleDelete = id => {
        const proceed = window.confirm("Are you sure want to delete this item?")
        if (proceed) {
            fetch(`https://nameless-coast-33229.herokuapp.com/trip/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" }
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        alert('deleted successfully')
                        setConrol(!control)
                    }
                    else {
                        setConrol(false)
                    }
                })
        }
    }

    return (
        <div>
            <div>
                <h1 style={{ color: "#737373" }} className='lg:text-4xl font-bold text-center my-10'>Manage All Trips
                    <br />  <small className='text-xs'>Total Trips Booked {trips.length}</small></h1>

            </div>



            {/* details tabel */}
            <div className='p-10'>
                <div class="flex flex-col text-left">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div
                                class="
          shadow
          overflow-hidden
          border-b border-gray-200
          sm:rounded-lg
        "
                            >
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                class="
                  px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
                                            >
                                                Profile
                                            </th>
                                            <th
                                                scope="col"
                                                class="
                  px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
                                            >
                                                Package
                                            </th>
                                            <th
                                                scope="col"
                                                class="
                  px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                class="
                  px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
                                            >
                                                Booking Date
                                            </th>
                                            <th scope="col" class="relative px-6 py-3">
                                                <span class="sr-only">Delete</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    {
                                        trips.map(trip =>
                                            <tbody class="bg-white divide-y divide-gray-200">
                                                <tr>
                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                        <div class="flex items-center">
                                                            <div class="flex-shrink-0 h-10 w-10">
                                                                <div
                                                                    class="h-10 w-10 rounded-full">
                                                                    <i class="fas fa-user"></i>
                                                                </div>
                                                            </div>
                                                            <div class="ml-4">
                                                                <div class="text-sm font-medium text-gray-900">
                                                                    {trip.name}
                                                                </div>
                                                                <div class="text-sm text-gray-500">
                                                                    {trip.email}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                        <div class="text-sm text-gray-900">{trip.title}</div>
                                                        <div class="text-sm text-gray-500">${trip.trip.price}</div>
                                                    </td>
                                                    <button>
                                                        <td class="px-6 py-4 whitespace-nowrap">
                                                            <span
                                                                class="
                    px-2
                    inline-flex
                    text-xs
                    leading-5
                    font-semibold
                    rounded-full
                    bg-green-100
                    text-green-800
                  "
                                                            >
                                                                {trip.status}
                                                            </span>
                                                        </td>
                                                    </button>
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {trip.date}
                                                    </td>
                                                    <td
                                                        class="
                  px-6
                  py-4
                  whitespace-nowrap
                  text-right text-sm
                  font-medium
                "
                                                    >
                                                        <button onClick={() => handleDelete(trip._id)} class="text-indigo-600 hover:text-indigo-900"
                                                        >Delete</button
                                                        >
                                                    </td>
                                                </tr>



                                            </tbody>
                                        )
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default ManageTrips;