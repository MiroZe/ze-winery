import { createSlice } from "@reduxjs/toolkit";

const initialState = null;


export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (state,action) => action.payload,
        clearError: () => null
    }
})