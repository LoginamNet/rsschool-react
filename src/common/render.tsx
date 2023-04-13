import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { EmptyObject, EnhancedStore, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import type { RootState } from 'store';
// As a basic setup, import your same slice reducers
import { searchSlice } from 'reducers/search.reducer';
import { headerTitleSlice } from 'reducers/title.reducer';
import { formSlice } from 'reducers/form.reducer';
import { apiSlice } from 'reducers/api.reducer';
import { modalSlice } from 'reducers/modal.reducer';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState & EmptyObject>;
  store?: EnhancedStore<RootState>;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        headerTitle: headerTitleSlice.reducer,
        search: searchSlice.reducer,
        form: formSlice.reducer,
        mainModal: modalSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
