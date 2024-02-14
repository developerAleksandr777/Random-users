import {createSlice} from '@reduxjs/toolkit'
import {IUser} from "../../types";

interface IState {
    users: IUser[],
    userDetails: IUser | Record<string, never>,
    totalItems:number,
}

const initialState: IState = {
    users: [],
    userDetails: {} as Record<string, never>,
    totalItems:0,
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        GET_USERS_ACTION(state, action) {
            state.users = action.payload
        },
        GET_USER_DETAILS_ACTION(state, action) {
            state.userDetails = action.payload
        },
        CLEAR_DETAILS_ACTION(state) {
            state.userDetails = {} as Record<string, never>
        },
        PAGINATION_TOTAL_ITEMS(state, action) {
            state.totalItems = action.payload
        },

    },
})

export const {
    GET_USERS_ACTION,
    GET_USER_DETAILS_ACTION,
    CLEAR_DETAILS_ACTION,
    PAGINATION_TOTAL_ITEMS,

} = usersSlice.actions
export default usersSlice.reducer
