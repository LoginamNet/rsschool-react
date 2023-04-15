import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'mainModal',
  initialState: { value: { id: '', isModalOpen: false } },
  reducers: {
    setID: (state, action) => {
      state.value.id = action.payload;
    },
    setModalOpen: (state) => {
      state.value.isModalOpen = true;
    },
    setModalClose: (state) => {
      state.value.isModalOpen = false;
      state.value.id = '';
    },
  },
});

export const { setID, setModalOpen, setModalClose } = modalSlice.actions;
