import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    auth: localStorage.getItem('token') || null,
    regErr: '',
    logErr: "",
    loader: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        AUTH_TOKEN_ACTION(state, action) {
            state.loader = false
            state.auth = action.payload
            localStorage.setItem('token', action.payload)
        },
        REMOVE_TOKEN_ACTION(state) {
            state.auth = null
            localStorage.removeItem('token')
        },
        ERROR_MESSAGE(state, action) {
            state.regErr = action.payload
        },
        ERROR_MESSAGE_LOGIN(state, action) {
            state.logErr = action.payload
        },
        LOADER_ACTION(state,action) {
                state.loader = action.payload
        },
    },
})

export const {
    AUTH_TOKEN_ACTION,
    REMOVE_TOKEN_ACTION,
    ERROR_MESSAGE,
    ERROR_MESSAGE_LOGIN,
    LOADER_ACTION
} = authSlice.actions
export default authSlice.reducer
