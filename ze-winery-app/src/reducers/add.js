import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentProduct: {},
    itemPackages: 0,
    itemTotalQuanity: 0,
    addProducts:[]

}

export const addItemToAddSlice = createSlice({
    name: 'add',
    initialState,
    reducers: {
        setItemToAddProductList: (state, action) => {
            const { currentProduct, itemPackages, itemTotalQuanity, } = action.payload;
            const alreadyAdded = state.addProducts.some((f) => f._id === currentProduct._id);
            if (alreadyAdded) {
                state.addProducts = state.addProducts.map((f) =>
                  f.additionalCode === currentProduct.currentAdditionalCode
                    ? { ...f, packsQuantity: f.packsQuantity + +itemPackages, quantity: f.quantity + +itemTotalQuanity }
                    : f
                );
            } else {
                    state.addProducts.push({
                        ...currentProduct,
                        quantity: +itemTotalQuanity,
                        itemPackages,
                        sequenceNumber: state.addProducts.length + 1,
                      });
                }
        },
        clearItemFromAddProductList: (state) => {
            state.currentProduct = {}
            state.itemPackages = 0;
            state.itemTotalQuanity = 0;
        },
        clearAddProductList: (state) => {
            state.addProducts = []
            state.currentProduct = {}
            state.itemPackages = 0;
            state.itemTotalQuanity = 0;
        }
    },
});


export const { setItemToAddProductList, clearItemFromAddProductList,clearAddProductList } = addItemToAddSlice.actions



