import { createSlice } from '@reduxjs/toolkit';

export const headerTitleSlice = createSlice({
  name: 'headerTitle',
  initialState: { value: { headerTitle: '' } },
  reducers: {
    setHeaderTitle: (state, action) => {
      state.value.headerTitle = action.payload;
    },
  },
});

export const { setHeaderTitle } = headerTitleSlice.actions;
