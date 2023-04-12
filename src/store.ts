import { configureStore } from '@reduxjs/toolkit';
import { searchSlice } from 'reducers/search.reducer';
import { headerTitleSlice } from 'reducers/title.reducer';
import { formSlice } from 'reducers/form.reducer';
import { apiSlice } from 'reducers/api.reducer';
import { modalSlice } from 'reducers/modal.reducer';

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    headerTitle: headerTitleSlice.reducer,
    search: searchSlice.reducer,
    form: formSlice.reducer,
    mainModal: modalSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
