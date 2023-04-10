import { configureStore, createSlice } from '@reduxjs/toolkit';

export type RootState = ReturnType<typeof store.getState>;

const headerTitleSlice = createSlice({
  name: 'headerTitle',
  initialState: { value: { headerTitle: '' } },
  reducers: {
    setHeaderTitle: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setHeaderTitle } = headerTitleSlice.actions;

export const store = configureStore({
  reducer: {
    headerTitle: headerTitleSlice.reducer,
  },
});
