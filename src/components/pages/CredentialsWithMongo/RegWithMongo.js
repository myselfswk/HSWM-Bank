import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Error from '../../Error';
import Loader from '../../Loader';
import Success from '../../Success';

import { registerNewUser } from '../../../actions/userActions';

export const RegWithMongo = () => {
    const registerstate = useSelector(state => state.registerNewUserReducer);
    const { loading, success, error } = registerstate;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    const [dob, setdob] = useState('');

    const dispatch = useDispatch();

    function register(e) {
        e.preventDefault();
        const user = {
            name: name,
            email: email,
            password: password,
            dob: dob
        }

        if (password === cpassword) {
            dispatch(registerNewUser(user))
        } else {
            alert("Passwords not matched");
        }
    }

    return (
        <>

            <Form className='formContainer' onSubmit={register}>
                <h1>Sign Up</h1>
                {loading && (
                    <Loader />
                )}
                {error && (
                    <Error error="Email Address is Already Registered..." />
                )}
                {success && (
                    <Success success="User Register SuccessFully..." />
                )}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Your Name" required value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} />
                </Form.Group>

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

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" required value={cpassword} onChange={(e) => {
                        setCPassword(e.target.value)
                    }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="name" placeholder="Your DOB 00-00-0000" required value={dob} onChange={(e) => {
                        setdob(e.target.value)
                    }} />
                </Form.Group>

                <Button className='btn-reg' type="submit">
                    Sign Up
                </Button>

                <Form.Group className="p-1 mb-1" controlId="formBasicPassword">
                    <Form.Label>Already Have an Account? <Link to={'/sign-up'}>Sign In</Link></Form.Label>
                </Form.Group>
            </Form>
        </>
    )
}
