import { createSlice } from "@reduxjs/toolkit";


const initialState = {
itemPackages:0,
totalQuanity:0

}

export const addItemToAddSlice = createSlice({
    name: 'add',
    initialState,
    reducers: {
        setItemToAdd: (state, action) => {
            const {itemPackages,totalQuanity} = action.payload
          state.itemPackages = itemPackages;
          state.totalQuanity = totalQuanity;
          
        },
        clearItemFromAdd: (state) => {
          state.itemPackages = 0;
          state.totalQuanity = 0;
        },
      },
});


export const { setItemToAdd,clearItemFromAdd } = addItemToAddSlice.actions



