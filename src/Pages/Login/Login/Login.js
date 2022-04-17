import { Button } from 'react-bootstrap';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (error) {
        toast.error(error?.message)
        // errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleSubmit = e => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(email);
        if (!validEmail) {
            toast.error('Please enter a valid email', { id: "error" })
        }
        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Sent email', { id: "error" })
        }
        else {
            toast.error('Please enter your email', { id: "error" })
        }

    }

    const navigateRegister = () => {
        navigate('/signup')
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center'>Please Login here</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            <p className='mt-3'>New to Unitreat?<Link to='/signup' className='text-primary text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            <p className='mt-3'>Forget password?<button className='text-primary text-decoration-none btn btn-link' onClick={resetPassword}>Reset Password</button></p>
            {errorElement}
            <Toaster />
        </div>
    );
};

export default Login;