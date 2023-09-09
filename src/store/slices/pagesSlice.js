import { createSlice } from "@reduxjs/toolkit";

export const pagesSlice = createSlice({
    name: 'pages',
    initialState: [],
    reducers: {
      setPages: (state, action) => {
        return action.payload;
      },
    },
  });
  
  export const { setPages } = pagesSlice.actions;
  
  