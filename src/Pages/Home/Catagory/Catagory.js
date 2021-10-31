import React from 'react';

const Catagory = () => {
    return (
        <div style={{ backgroundColor: "#f4f4f4" }}>
            <div className='catagories p-24'>
                <div className='flex  flex-col justify-center items-center'>
                    <span className='text-4xl font-bold mb-2'> <i class="fas fa-bicycle"></i></span>
                    <h5 className='text-3xl font-bold mb-2'>Cycling</h5>
                    <p className='text-sm lg:w-2/3 text-center'>This feature helps you to find the cheapest trip for and also offers pre-planned itineraries..</p>
                </div>
                <div className='flex  flex-col justify-center items-center'>
                    <span className='text-4xl font-bold mb-2'> <i class="fas fa-hiking"></i></span>
                    <h5 className='text-3xl font-bold mb-2'>Hiking</h5>
                    <p className='text-sm lg:w-2/3 text-center'>This feature helps you to find the cheapest trip for and also offers pre-planned itineraries..</p>
                </div>
                <div className='flex  flex-col justify-center items-center'>
                    <span className='text-4xl font-bold mb-2'> <i class="fas fa-fish"></i></span>
                    <h5 className='text-3xl font-bold mb-2'>Fishing</h5>
                    <p className='text-sm lg:w-2/3 text-center'>This feature helps you to find the cheapest trip for and also offers pre-planned itineraries..</p>
                </div>
                <div className='flex  flex-col justify-center items-center'>
                    <span className='text-4xl font-bold mb-2'><i class="fab fa-free-code-camp"></i></span>
                    <h5 className='text-3xl font-bold mb-2'>Camping</h5>
                    <p className='text-sm lg:w-2/3 text-center'>This feature helps you to find the cheapest trip for and also offers pre-planned itineraries...</p>
                </div>

            </div>
        </div>

    );
};

export default Catagory;