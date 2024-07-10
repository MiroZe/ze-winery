import { createSlice } from "@reduxjs/toolkit";


const initialState = {
declarationDraft:  []
}

export const declarationDraftSlice = createSlice({
    name: 'declarationDraft',
    initialState,
    reducers: {
        setDeclarationDraft: (state, action) => {
          state.declarationDraft = action.payload
          
        },
        clearDeclarationDraft: (state) => {
          state.declarationDraft = [];
        },
      },
});


export const { clearDeclarationDraft,setDeclarationDraft } = declarationDraftSlice.actions