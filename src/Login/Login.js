import React from 'react';
import img from '../images/signin.png'
import logo from '../images/logo icon/Group 1.png'
import './Login.css'
import useAuth from '../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { user, googleSignIn } = useAuth();
    const history = useHistory()
    const location = useLocation();
    const redirectUrl = location.state?.from || '/home'
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                history.push(redirectUrl)
            })
    }

    return (
        <div className=' login-page'>
            <div className=' login-page signup-page'>
                <div>
                    <img id='illustration' src={img} alt="" />
                </div>
                <div className='flex justify-center items-center'>
                    <img className='w-28 ml-12' src={logo} alt="" />
                    <h3 className='mb-8 ml-3 text-black text-4xl font-bold'>Login With</h3>
                    <button className='ml-5' onClick={handleGoogleSignIn}> <span><i className="fab fa-google-plus-g"> Google sign in</i></span>  </button> <br />
                    <button className='ml-5' disabled > <span><i className="fab fa-github">Github sign in</i></span> </button>
                    <br />
                    <button className='ml-5' disabled > <span><i className="fab fa-facebook">Facebook sign in</i></span> </button>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default Login;