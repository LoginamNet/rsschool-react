import React from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

// As a basic setup, import your same slice reducers
import { searchSlice } from 'reducers/search.reducer';
import { headerTitleSlice } from 'reducers/title.reducer';
import { formSlice } from 'reducers/form.reducer';
import { apiSlice } from 'reducers/api.reducer';
import { modalSlice } from 'reducers/modal.reducer';

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

const rootReducer = combineReducers({
  headerTitle: headerTitleSlice.reducer,
  search: searchSlice.reducer,
  form: formSlice.reducer,
  mainModal: modalSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(apiSlice.middleware),
    preloadedState,
  });
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
