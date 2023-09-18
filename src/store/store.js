
import { configureStore } from '@reduxjs/toolkit';
import { pagesSlice } from './slices/pagesSlice';
import modalSlice from './slices/modalSlice';
export const store = configureStore({
    reducer: {
      pages: pagesSlice.reducer,
      modal: modalSlice,
    },
  });

