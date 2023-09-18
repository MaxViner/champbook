import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  type: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    setType: (state, action) =>{
        state.type = action.payload
    },
  },
});
export const getModalType = (state) => state.modal.content;
export const { openModal, closeModal, setType} = modalSlice.actions;
export default modalSlice.reducer;