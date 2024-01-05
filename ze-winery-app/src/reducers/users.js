import { createSlice } from '@reduxjs/toolkit';

const storedUser = localStorage.getItem('user');

const initialState = {
    user : storedUser ? JSON.parse(storedUser) : null
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            localStorage.setItem('user', JSON.stringify(action.payload))
            state.user = action.payload
       
        },
        clearUser(state) {
            localStorage.removeItem('user');
            state.user = null; 
        }
    }
});

export const { setUser,clearUser } = userSlice.actions

