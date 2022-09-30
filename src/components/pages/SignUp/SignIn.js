import React, { useState } from 'react';

import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import './SignUpSignIn.css';

const SignIn = () => {
    //Stop current user to go on Sign Up Page
    const cUser = localStorage.getItem('users');
    if (cUser) {
        window.location.href = '/'
    }

    //state for SignIn
    const [state, setState] = useState({
        email: '',
        password: '',
    });

    const onInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const signInFunc = (e) => {
        e.preventDefault();
        const auth = getAuth();

        if (state.email === "" || state.email === " " || state.email === undefined) {
            alert("Please, Enter Email..");
        }
        else if (state.password === "" || state.password === " " || state.password === undefined) {
            alert("Please, Enter Password..");
        }
        else {
            signInWithEmailAndPassword(auth, state.email.toLowerCase(), state.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    alert("User has been Sign In Successfully...!");
                    window.location.href = '/';
                    localStorage.setItem('users', JSON.stringify(user));
                })
                .catch((err) => {
                    alert(err.message);
                })
        }
    }

    return (
        <>
            <Form className='formContainer' onSubmit={signInFunc}>
                <h1>Sign In</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required value={state.email} name='email' onChange={(e) => {
                        onInputChange(e)
                    }} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required value={state.password} name='password' onChange={(e) => {
                        onInputChange(e)
                    }} />
                </Form.Group>

                <Button className='btn-reg' type="submit">
                    Sign In
                </Button>

                <Form.Group className="p-1 mb-1" controlId="formBasicPassword">
                    <Form.Label>Don't Have an Account? <Link to={'/signup-form'}>Sign Up</Link></Form.Label>
                </Form.Group>

                {/* <Form.Group className="p-1 mb-1" controlId="formBasicPassword">
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
                </Form.Group> */}
            </Form>
        </>
    )
}

export default SignIn