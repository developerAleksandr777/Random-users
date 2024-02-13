import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {LIST_USERS_API, REGISTER_API} from "../../config";
import {GET_USER_DETAILS_ACTION, GET_USERS_ACTION} from "../slicers/usersSlicer";
import {IUser} from "../../types";
import {AUTH_TOKEN_ACTION} from "../slicers/authSlicer";


export const GET_USERS_LIST = createAsyncThunk(
    'users/GET_USERS_LIST',
    async (_, {rejectWithValue, dispatch, getState}) => {
        try {
            const response = await axios.get(LIST_USERS_API)
            dispatch(GET_USERS_ACTION(response.data.data))
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue('Неизвестная ошибка');
        }
    }
)

export const GET_USER_DETAILS = createAsyncThunk(
    'users/GET_USER_DETAILS',
    async (id: string, {rejectWithValue, dispatch, getState}) => {
        try {
            const response = await axios.get(LIST_USERS_API + id)
            const userDetails: IUser = response.data.data
            dispatch(GET_USER_DETAILS_ACTION(userDetails))
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue('Неизвестная ошибка');
        }
    }
)

interface IUserdata {
    email:string,
    password:string
}

export const REGISTER_ASYNC = createAsyncThunk(
    'auth/REGISTER_ASYNC',
    async (userData:IUserdata, { rejectWithValue,dispatch }) => {
        try {
            const response = await axios.post(REGISTER_API, userData)
            console.log(userData)
            console.log(response.data)

            if (response.data.token) {
                dispatch(AUTH_TOKEN_ACTION(response.data.token))
            }
        } catch (e) {
            if (e instanceof Error) {
                return rejectWithValue(e.message);
            }
            return rejectWithValue('Неизвестная ошибка');
        }
    },
)