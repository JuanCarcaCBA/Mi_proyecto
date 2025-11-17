import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/auth/authslice'
import userReducer from '../features/users/userslice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: userReducer,
    }
})