import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo icon/Group 1.png'

const Header = () => {
    const { user, logout } = useAuth();



    return (
        <div>
            <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a href class="flex title-font font-medium items-center text-gray-900 mx-0 mb-4 md:mb-0">
                        <img className='w-28' src={logo} alt="" />
                    </a>
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-sm justify-center">
                        <Link to='/home' class="mr-5 hover:text-gray-900">Home</Link>
                        {
                            user.email && <Link to='/mytrip' class="mr-5 hover:text-gray-900">My Trips</Link>

                        }
                        {
                            user.email && <Link to='/managetrips' class="mr-5 hover:text-gray-900">Manage Trips</Link>
                        }
                        {
                            user.email && <Link to='/addpackage' class="mr-5 hover:text-gray-900">Add Trips</Link>
                        }
                        <Link to='/about' class="mr-5 hover:text-gray-900">About</Link>

                    </nav>
                    {
                        user.email ? <div className='flex items-center'>
                            <h3 className=''>{user.displayName}</h3>
                            <button onClick={logout} class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base ml-2 mt-4 md:mt-0">Logout
                            </button>
                        </div> : <Link to='/login'>
                            <button class="inline-flex  items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Signup
                            </button>
                        </Link>
                    }
                </div>
            </header>

        </div >
    );
};

export default Header;