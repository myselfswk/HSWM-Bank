import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { loginUser } from '../../../actions/userActions';
import './SignUpSignIn.css';

import Error from '../../Error';
import Loader from '../../Loader';

const SignInWithMongo = () => {
    const loginreducer = useSelector(state => state.loginReducer);
    const { loading, error } = loginreducer;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    function login(e) {
        e.preventDefault();
        const user = {
            email: email,
            password: password
        }
        dispatch(loginUser(user));
    }

    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
            window.location.href = '/';
        }
    }, [])

    return (
        <>
            {error && (
                <Error error="Invalid Credentials" />
            )}
            {loading && (
                <Loader />
            )}
            <Form className='formContainer' onSubmit={login}>
                <h1>Sign In</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                </Form.Group>

                <Button className='btn-reg' type="submit">
                    Sign In
                </Button>

                <Form.Group className="p-1 mb-1" controlId="formBasicPassword">
                    <Form.Label>Don't Have an Account? <Link to={'/signup-form'}>Sign Up</Link></Form.Label>
                </Form.Group>

                <Form.Group className="p-1 mb-1" controlId="formBasicPassword">
                    <Form.Label>------------OR--------------</Form.Label>
                </Form.Group>

                <Form.Group className="p-1 mb-1 social-container" controlId="formBasicPassword">
                    <Form.Label>
                        <Link to={'/signup-form'}><i className="fa fa-envelope social-container-Link"></i></Link>
                    </Form.Label>
                    <Form.Label>
                        <Link to={'/signup-form'}><i className="fa fa-google social-container-Link"></i></Link>
                    </Form.Label>
                    <Form.Label>
                        <Link to={'/signup-form'}><i className="fa fa-facebook social-container-Link"></i></Link>
                    </Form.Label>
                </Form.Group>
            </Form>
        </>
    )
}

export default SignInWithMongo