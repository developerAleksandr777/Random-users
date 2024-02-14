import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {LIST_USERS_API, LOGIN_API, REGISTER_API} from "../../config";
import {GET_USER_DETAILS_ACTION, GET_USERS_ACTION, PAGINATION_TOTAL_ITEMS} from "../slicers/usersSlicer";
import {IUser} from "../../types";
import {AUTH_TOKEN_ACTION, ERROR_MESSAGE, ERROR_MESSAGE_LOGIN, LOADER_ACTION} from "../slicers/authSlicer";


export const GET_USERS_LIST = createAsyncThunk(
    'users/GET_USERS_LIST',
    async (pagination:number, {rejectWithValue, dispatch}) => {
        try {
            const response = await axios.get(LIST_USERS_API + `?page=${pagination}`)
            dispatch(GET_USERS_ACTION(response.data.data))
            dispatch(PAGINATION_TOTAL_ITEMS(response.data.total))
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
    async (id: string, {rejectWithValue, dispatch}) => {
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
    email: string,
    password: string
}

export const REGISTER_ASYNC = createAsyncThunk(
    'auth/REGISTER_ASYNC',
    async (userData: IUserdata, {rejectWithValue, dispatch}) => {
        try {
            dispatch(LOADER_ACTION(true))
            const response = await axios.post(REGISTER_API, userData)

            if (response.data.token) {
                dispatch(AUTH_TOKEN_ACTION(response.data.token))
            }
            dispatch(LOADER_ACTION(false))

        } catch (e) {
            if (e instanceof Error) {
                if ((e as any).response) {
                    dispatch(LOADER_ACTION(false))
                    dispatch(ERROR_MESSAGE((e as any).response.data.error))
                }
                return rejectWithValue(e.message);
            }
            return rejectWithValue('Неизвестная ошибка');
        }
    },
)


export const LOGIN_ASYNC = createAsyncThunk(
    'auth/LOGIN_ASYNC',
    async (userData: IUserdata, {rejectWithValue, dispatch}) => {
        try {
            dispatch(LOADER_ACTION(true))

            const response = await axios.post(LOGIN_API, userData)

            if (response.data.token) {
                dispatch(AUTH_TOKEN_ACTION(response.data.token))
            }
            dispatch(LOADER_ACTION(false))

        } catch (e) {
            if (e instanceof Error) {
                if ((e as any).response) {
                    dispatch(LOADER_ACTION(false))
                    dispatch(ERROR_MESSAGE_LOGIN((e as any).response.data.error))
                }
                return rejectWithValue(e.message);
            }
            return rejectWithValue('Неизвестная ошибка');
        }
    },
)