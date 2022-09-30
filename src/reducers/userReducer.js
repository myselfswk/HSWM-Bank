
//Register New User
export const registerNewUserReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_REGISTER_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'USER_REGISTER_SUCCESS':
            return {
                ...state,
                loading: false,
                success: true
            }
        case 'USER_REGISTER_FALED':
            return {
                ...state,
                loading: true,
                error: 'Email Already Registered'
            }

        default: return state;
    }
}

//Login User
export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'USER_LOGIN_SUCCESS':
            return {
                ...state,
                loading: false,
                success: true
            }
        case 'USER_LOGIN_FAILED':
            return {
                ...state,
                loading: false,
                error: 'Invalid Credentials'
            }
        case 'USER_LOGOUT':
            return {
                ...state
            }

        default: return state;
    }
}