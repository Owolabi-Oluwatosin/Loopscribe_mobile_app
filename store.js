import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './features/categorySlice';
import searchReducer from './features/searchSlice';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    search: searchReducer,
  },
});