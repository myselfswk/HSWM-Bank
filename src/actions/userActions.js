import axios from 'axios';

//Register New User
export const registerNewUser = (user) => dispatch => {
    dispatch({
        type: 'USER_REGISTER_REQUEST'
    })

    axios.post('/api/users/signup-form', user).then(res => {
        dispatch({
            type: 'USER_REGISTER_SUCCESS' + res
        })
    }).catch(err => {
        dispatch({
            type: 'USER_REGISTER_FAILED',
            payload: err
        })
    })
}

//Login User
export const loginUser = (user) => dispatch => {
    dispatch({
        type: 'USER_LOGIN_REQUEST'
    })

    axios.post('/api/users/sign-up', user).then(res => {
        dispatch({
            type: 'USER_LOGIN_SUCCESS'
        })

        localStorage.setItem('currentUser', JSON.stringify(res.data));
        window.location.href = '/';
    }).catch(err => {
        dispatch({
            type: 'USER_LOGIN_FAILED',
            payload: err
        })
    })
}

//User LogOut
export const logoutUser = () => dispatch => {
    localStorage.removeItem('currentUser');

    dispatch({
        type: 'USER_LOGOUT'
    })

    window.location.href = '/sign-up';
}