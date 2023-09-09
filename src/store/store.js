
import { configureStore } from '@reduxjs/toolkit';
import { pagesSlice } from './slices/pagesSlice';
export const store = configureStore({
    reducer: {
      pages: pagesSlice.reducer,
    },
  });

