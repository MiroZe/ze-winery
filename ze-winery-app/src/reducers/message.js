import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    message: { type: "", text: "" },
    isMessage: false,
  }


export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setMessage: (state, action) => {
          state.message = action.payload
          state.isMessage = true
        },
        clearMessage: (state) => {
          state.message = { type: "", text: "" }
          state.isMessage = false
        },
      },
});


export const { clearMessage, setMessage } = messageSlice.actions