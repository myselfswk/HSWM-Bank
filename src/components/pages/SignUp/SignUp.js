import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { db } from '../../Firebase/firebase';


import './SignUpSignIn.css';

function SignUp() {
    //Stop current user to go on Sign Up Page
    const cUser = localStorage.getItem('users');
    if (cUser) {
        window.location.href = '/'
    }

    //state for signUp
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        cpassword: '',
        dob: ''
    });

    const onInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const signUpFunc = (e) => {
        e.preventDefault();
        const auth = getAuth();

        if (state.email === "" || state.email === " " || state.email === undefined) {
            alert("Please, Enter Username..");
        }
        else if (state.username === "" || state.username === " " || state.username === undefined) {
            alert("Please, Enter Email..");
        }
        else if (state.password === "" || state.password === " " || state.password === undefined) {
            alert("Please, Enter Password..");
        }
        else if (state.cpassword === "" || state.cpassword === " " || state.cpassword === undefined) {
            alert("Please, Enter Password To Confirm..");
        }
        else if (state.dob === "" || state.dob === " " || state.dob === undefined) {
            alert("Please, Enter Date of Birth..");
        }
        else {
            let flag = true;
            createUserWithEmailAndPassword(auth, state.email.toLowerCase(), state.password)
                .then((userCredential) => {
                    alert("User Has Been Created Successfully...!");
                    const user = userCredential.user;
                    const userid = user.uid;
                    set(ref(db, "users/" + userid), {
                        id: userid,
                        username: state.username,
                        email: state.email.toLowerCase(),
                        password: state.password,
                        cpassword: state.cpassword,
                        dob: state.dob
                    });

                    localStorage.setItem('users', user);
                    window.location.href = '/';
                })
                .catch((err) => {
                    alert(err.message);
                    if (err) {
                        flag = false;
                    }
                })
        }
    }

    return (
        <>
            <Form className='formContainer' onSubmit={signUpFunc}>
                <h1>Sign Up</h1>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='username' type="name" placeholder="Enter Your Name" required value={state.username} onChange={(e) => {
                        onInputChange(e)
                    }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required value={state.email} onChange={(e) => {
                        onInputChange(e)
                    }} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required value={state.password} onChange={(e) => {
                        onInputChange(e)
                    }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name='cpassword' type="password" placeholder="Confirm Password" required value={state.cpassword} onChange={(e) => {
                        onInputChange(e)
                    }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control name='dob' type="name" placeholder="Your DOB 00-00-0000" required value={state.dob} onChange={(e) => {
                        onInputChange(e)
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
    );
}

export default SignUp;