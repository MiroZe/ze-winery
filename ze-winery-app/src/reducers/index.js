import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./users";
import { companySlice } from "./company";
import { errorSlice } from "./error";



export default combineReducers({
    user:userSlice.reducer,
    company:companySlice.reducer,
    error : errorSlice.reducer
})

