import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./users";
import { companySlice } from "./company";
import {messageSlice} from "./message";
import { declarationDraftSlice } from "./declarationDraft";
import { addItemToAddSlice } from "./add";



export default combineReducers({
    user:userSlice.reducer,
    company:companySlice.reducer,
    message : messageSlice.reducer,
    declarationDraft: declarationDraftSlice.reducer,
    add:addItemToAddSlice.reducer
})

