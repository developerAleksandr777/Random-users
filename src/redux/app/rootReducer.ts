import {combineReducers} from "@reduxjs/toolkit";
import usersSlicer from "../slicers/usersSlicer";
import authSlicer from "../slicers/authSlicer";

const rootReducer = combineReducers({
    users: usersSlicer,
    auth:authSlicer
})
export default rootReducer