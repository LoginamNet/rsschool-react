import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: { value: { search: 'photo' } },
  reducers: {
    setSearch: (state, action) => {
      state.value.search = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;
