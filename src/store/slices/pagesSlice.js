import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPages } from '../../api/pagesEndpoint';
export const fetchPages = createAsyncThunk(
  'pages/fetchPages',
  async (_, { dispatch }) => {
    try {
      const pagesData = getPages(); // Имитация обращения к API
      dispatch(setPages(pagesData));
      dispatch(setPagesCount(pagesData.length));
    } catch (error) {
      console.error("Error fetching pages data:", error);
    }
  }
);

export const pagesSlice = createSlice({
  name: 'pages',
  initialState: {
    pages: [],
    countOfPages: 0,
  },
  reducers: {
    setPages: (state, action) => {
      state.pages = action.payload;
    },
    setPagesCount: (state, action) => {
      state.countOfPages = action.payload;
    },
  },
});

export const { setPages, setPagesCount } = pagesSlice.actions;

export default pagesSlice.reducer;