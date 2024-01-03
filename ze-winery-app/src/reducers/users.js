import {createSlice} from '@reduxjs/toolkit';


const initialState = {}

export const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {
        setUser : (state, action) => action.payload
    }
});

export const {setUser} = userSlice.actions

