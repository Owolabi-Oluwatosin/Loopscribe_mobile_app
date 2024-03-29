import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: '',
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addToCategory: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items = [...action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCategory } = categorySlice.actions;


export const selectFromCategoryList = state => state.category.items;

export default categorySlice.reducer