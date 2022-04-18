import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import google from '../../../images/social/google.png'
import github from '../../../images/social/github.png'
import './SocialLogin.css'
import toast, { Toaster } from 'react-hot-toast';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, googleUser, googleLoading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (googleLoading || githubLoading) {
        return <Loading></Loading>
    }

    if (error || githubError) {
        toast.error('Something went wrong')
    }

    if (googleUser || githubUser) {
        navigate(from)
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='border border-2 rounded-pill w-50 mx-auto horizontal-line'></div>
                <p className='my-0 px-2'>or</p>
                <div className='border border-2 rounded-pill w-50 mx-auto horizontal-line'></div>
            </div>
            <div className='text-center my-4'>
                <button onClick={() => signInWithGoogle()} className='w-25 p-2 border mx-3'>
                    <img style={{ width: "30px" }} src={google} alt="" />
                </button>
                <button onClick={() => signInWithGithub()} className='w-25 p-2 border mx-3'>
                    <img style={{ width: "30px" }} src={github} alt="" />
                </button>
            </div>
            <Toaster />
        </div>
    );
};

export default SocialLogin;