import { configureStore } from '@reduxjs/toolkit';
import { searchSlice } from 'reducers/search.reducer';
import { headerTitleSlice } from 'reducers/title.reducer';

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    headerTitle: headerTitleSlice.reducer,
    search: searchSlice.reducer,
  },
});
