import {createSlice} from '@reduxjs/toolkit';

const initialState = {}

export const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
        setCompany :( state, action) => action.payload
    }

});

export const {setCompany} = companySlice.actions;