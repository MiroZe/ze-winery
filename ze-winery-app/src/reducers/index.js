import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./users";
import { companySlice } from "./company";
import {messageSlice} from "./message";



export default combineReducers({
    user:userSlice.reducer,
    company:companySlice.reducer,
    message : messageSlice.reducer
})

