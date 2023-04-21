import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: '',
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addToSearch: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.items = [...action.payload]
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToSearch } = searchSlice.actions;


export const selectFromSearch = state => state.search.items;

export default searchSlice.reducer;