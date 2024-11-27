import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentProduct: {},
    itemPackages: 0,
    itemTotalQuanity: 0

}

export const addItemToAddSlice = createSlice({
    name: 'add',
    initialState,
    reducers: {
        setItemToAdd: (state, action) => {
            const { currentProduct, itemPackages, itemTotalQuanity, } = action.payload
            state.currentProduct = currentProduct
            state.itemPackages = itemPackages;
            state.itemTotalQuanity = itemTotalQuanity;

        },
        clearItemFromAdd: (state) => {
            state.currentProduct = {}
            state.itemPackages = 0;
            state.itemTotalQuanity = 0;
        },
    },
});


export const { setItemToAdd, clearItemFromAdd } = addItemToAddSlice.actions



